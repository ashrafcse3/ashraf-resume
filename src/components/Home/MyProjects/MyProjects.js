import React from 'react';
import EachProject from './EachProject';
import image12 from '../../../assets/projects/12.png';
import image12Dashboard from '../../../assets/projects/12_dashboard.png';
import image11 from '../../../assets/projects/11.png';
import image10 from '../../../assets/projects/10.png';

const MyProjects = () => {
    const projects = [
        {
            name: 'auto parts',
            image: image12
        },
        {
            name: 'auto parts dashboard',
            image: image12Dashboard
        },
        {
            name: 'Eye specialist',
            image: image11
        },
        {
            name: 'English Gugu',
            image: image10
        },
    ];

    return (
        <div className='mt-20 mb-5'>
            <h1 className='text-center text-3xl font-bold'>My projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3'>
                {
                    projects && projects.map((project, i) => <EachProject
                        key={i}
                        project={project}
                    />)
                }
            </div>
        </div>
    );
};

export default MyProjects;