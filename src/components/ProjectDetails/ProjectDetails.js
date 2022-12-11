import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Slider from './Slider';
import TitleNLinks from './TitleNLinks';

const ProjectDetails = () => {
    const project = useLoaderData();
    console.log(project);

    return (
        <div className='mt-2'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='border rounded-2xl'>
                    <div className="carousel m-3 rounded-2xl">
                        {
                            project && project.images.map((image, index) => <Slider
                                key={index}
                                image={image}
                                index={index}
                                length={project.images.length}
                            />)
                        }
                    </div>
                </div>
                <div>
                    <TitleNLinks />
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;