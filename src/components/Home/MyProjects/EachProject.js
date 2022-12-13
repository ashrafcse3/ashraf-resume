import React from 'react';
import { Link } from 'react-router-dom';

const EachProject = ({ project: { title, images, _id } }) => {
    return (
        <div>
            <Link className='relative' to={`/project/${_id}`}>
                <div className='border p-4 rounded-md shadow-xl'>
                    <img src={images[0]} alt="" />
                </div>
                <h2 className='border mt-4 py-3 text-center rounded-md shadow-xl capitalize'>{title}</h2>
                <div className="opacity-0 hover:opacity-100 duration-75 absolute inset-0 z-10 text-4xl text-blue-600 font-semibold flex items-end bottom-9 link justify-center">Click for details</div>
            </Link>
        </div>
    );
};

export default EachProject;