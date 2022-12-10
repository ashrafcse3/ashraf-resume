import React from 'react';
import EachProject from './EachProject';

const MyProjects = () => {
    return (
        <div className='mt-20 mb-5'>
            <h1 className='text-center text-3xl font-bold'>My projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3'>
                <EachProject />
            </div>
        </div>
    );
};

export default MyProjects;