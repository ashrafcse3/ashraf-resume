import React from 'react';
import { Link } from 'react-router-dom';

const EachProject = ({ project: { name, image, id } }) => {
    return (
        <div>
            <Link to='/projectdescription/2'>
                <div className='border p-4 rounded-md shadow-xl'>
                    <img src={image} alt="" />
                </div>
                <h2 className='border mt-4 py-3 text-center rounded-md shadow-xl capitalize'>{name}</h2>
            </Link>
        </div>
    );
};

export default EachProject;