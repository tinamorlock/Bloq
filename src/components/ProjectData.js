import React, { useState, useContext } from 'react';
import { ProjectContext } from '../index';

const ProjectData = () => {
    const [projectData, setProjectData] = useState({
        projectName: '',
        projectStartDate: '',
        projectEndDate: '',
        totalWords: ''
    });

    const [, setProjects] = useContext(ProjectContext);

    const handleChange = (e) => {
        setProjectData({
            ...projectData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingProjects = JSON.parse(localStorage.getItem('projectData')) || [];
        existingProjects.push(projectData);
        localStorage.setItem('projectData', JSON.stringify(existingProjects));
        setProjectData({
            projectName: '',
            projectStartDate: '',
            projectEndDate: '',
            totalWords: ''
        });
        setProjects(existingProjects); // update the projects data in the context
    }

    return (
        <div>
            <h1>Add a New Project</h1>
            <form onSubmit={handleSubmit}>
                <p><label>Project Name:</label>
                    <input type="text" id="projectName" name="projectName" required onChange={handleChange}
                           value={projectData.projectName}></input></p>
                <p><label>Project Start Date:</label>
                    <input type="date" id="projectStartDate" name="projectStartDate" required
                           onChange={handleChange} value={projectData.projectStartDate}></input></p>
                <p><label>Project End Date:</label>
                    <input type="date" id="projectEndDate" name="projectEndDate" required onChange={handleChange}
                           value={projectData.projectEndDate}></input></p>
                <label>Total Word Count:</label>
                <input type="number" id="totalWords" name="totalWords" required onChange={handleChange}
                       value={projectData.totalWords}></input>
                <p>
                    <button type="submit">Submit</button>
                </p>
            </form>
        </div>
    );
}

export default ProjectData;