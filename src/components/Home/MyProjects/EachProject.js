import React from 'react';

const EachProject = ({ project: { name, image } }) => {
    return (
        <div>
            <div className='border p-4 rounded-md shadow-xl'>
                <img src={image} alt="" />
            </div>
            <h2 className='border mt-4 py-3 text-center rounded-md shadow-xl capitalize'>{name}</h2>
        </div>
    );
};

export default EachProject;