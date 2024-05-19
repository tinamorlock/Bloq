import React, { useContext } from 'react';
import { ProjectContext } from '../index';

const ProjectList = () => {
    const [projects] = useContext(ProjectContext);

    if (!projects.length) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {projects.map((project, index) => {
                const startDate = new Date(project.projectStartDate);
                const endDate = new Date(project.projectEndDate);
                const diffTime = Math.abs(endDate - startDate);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                const dailyWordCount = Math.floor(project.totalWords / diffDays);

                return (
                    <div key={index}>
                        <h1>{project.projectName}</h1>
                        <p>Start Date: {project.projectStartDate}</p>
                        <p>End Date: {project.projectEndDate}</p>
                        <p>Total Word Count: {isNaN(project.totalWords) ? 'Not available' : project.totalWords}</p>
                        <p>Daily Word Count: {isNaN(dailyWordCount) ? 'Not available' : dailyWordCount}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default ProjectList;