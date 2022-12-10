import React from 'react';
import image from '../../assets/projects/12.png'

const EachProject = () => {
    return (
        <div>
            <div className='border p-4 rounded-md shadow-xl'>
                <img src={image} alt="" />
            </div>
            <h2 className='border mt-4 py-3 text-center rounded-md shadow-xl'>Auto parts</h2>
        </div>
    );
};

export default EachProject;