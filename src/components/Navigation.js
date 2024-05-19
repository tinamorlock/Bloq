import React, { useState } from 'react';
import Modal from 'react-modal';
import ProjectData from './ProjectData';
import ProjectList from './ProjectList';
import './Navigation.css';

const Navigation = () => {
    const [modalIsOpen, setModalIsOpen] = useState({projectData: false, projectList: false});

    const openModal = (modalType) => {
        setModalIsOpen({...modalIsOpen, [modalType]: true});
    };

    const closeModal = (modalType) => {
        setModalIsOpen({...modalIsOpen, [modalType]: false});
    };

    return (
        <div>
            <a className='nav-links' onClick={() => openModal('projectData')}>Add a Project</a>
            <Modal
                isOpen={modalIsOpen.projectData}
                onRequestClose={() => closeModal('projectData')}
                contentLabel="Add a Project"
            >
                <ProjectData />
                <button onClick={() => closeModal('projectData')}>Close</button>
            </Modal>
            <a className='nav-links' onClick={() => openModal('projectList')}>List Projects</a>
            <Modal
                isOpen={modalIsOpen.projectList}
                onRequestClose={() => closeModal('projectList')}
                contentLabel="List Projects"
            >
                <ProjectList />
                <button onClick={() => closeModal('projectList')}>Close</button>
            </Modal>
        </div>
    );
}

export default Navigation;