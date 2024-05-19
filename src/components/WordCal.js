import React, { useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './WordCal.css';
import { ProjectContext } from '../index';

const WordCal = () => {
    const [projects] = useContext(ProjectContext);
    console.log(projects);

    // Function to render each calendar tile
    const tileContent = ({ date, view }) => {
        // Check if the date is in the datesArray for each project
        const dateString = date.toISOString().split('T')[0];
        const tileContents = projects.map((project, index) => {
            const startDate = new Date(project.projectStartDate);
            const endDate = new Date(project.projectEndDate);
            const diffTime = Math.abs(endDate - startDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // Calculate the daily word count
            const dailyWordCount = Math.floor(project.totalWords / diffDays);

            // Generate an array of dates between the start and end dates
            const datesArray = [];
            for (let i = 0; i < diffDays; i++) {
                const date = new Date(startDate);
                date.setDate(date.getDate() + i);
                datesArray.push(date);
            }

            const isInDatesArray = datesArray.some((date) => date.toISOString().split('T')[0] === dateString);

            // If the date is in the datesArray, return the project name and daily word count
            if (view === 'month' && isInDatesArray) {
                return (
                    <div key={index}>
                        <p>{project.projectName}</p>
                        <p>{dailyWordCount} words</p>
                    </div>
                );
            }
            return null;
        });

        // Filter out any undefined values (dates that are not in any project's date range)
        const validTileContents = tileContents.filter(content => content !== undefined);

        // Return a div containing all valid tile contents
        return <div>{validTileContents}</div>;
    };

    return (
        <div>
            <Calendar tileContent={tileContent} />
        </div>
    );
}

export default WordCal;