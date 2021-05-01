import React from 'react';
import { useEffect, useState } from 'react';
import projectInfo from '../../projects_Fake.json';
import Sample from './Sample';

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        setProjects(projectInfo)
    }, [])
    // console.log(project);
    return (
        <div className='container'>
            <h2>Projects</h2>
            <div className="row">
            {
                projects.map(project => <Sample key={project.id} project={project}></Sample>)
            }
            </div>
            
        </div>
    );
};

export default Projects;