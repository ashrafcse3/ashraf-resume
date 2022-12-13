import React from 'react';

const ComingSoon = ({ text }) => {
    return (
        <div className='flex justify-center items-center text-8xl h-[calc(100vh-80px)] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'>
            {text} coming soon....
        </div>
    );
};

export default ComingSoon;