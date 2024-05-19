import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import WordCal from './components/WordCal';
import Navigation from './components/Navigation';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
import './index.css';

export const ProjectContext = React.createContext();

const App = () => {
    const [projects, setProjects] = useState([]);

    // Load the project data from local storage when the component mounts
    useEffect(() => {
        const data = localStorage.getItem('projectData');
        if (data) {
            setProjects(JSON.parse(data));
        }
    }, []);

    return (
        <ProjectContext.Provider value={[projects, setProjects]}>
            <Navigation />
            <WordCal />
        </ProjectContext.Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();