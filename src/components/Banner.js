import React from 'react';
import profilePic from '../assets/profileRBG.png'

const Banner = () => {
    return (
        // <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-[url("https://i.ibb.co/vqTzywv/bg.jpg")] bg-no-repeat bg-cover bg-center`}>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-[url("https://st2.depositphotos.com/2088859/7500/v/950/depositphotos_75005079-stock-illustration-seamless-grey-small-square-boxes.jpg")] bg-no-repeat bg-cover bg-center`}>
            <div>
                <img src={profilePic} alt="profilePic" />
            </div>
            <div className='flex justify-center items-center flex-col'>
                <h4 className='font-bold'>Hello, I am</h4>
                <h1 className='font-bold text-9xl lg:my-5'>Ashraf</h1>
                <div>
                    <span className='mr-2 text-indigo-700 font-medium'>React developer</span><span className='mr-2'>|</span>
                    <span className='mr-2 text-indigo-700 font-medium'>Front end developer</span><span className='mr-2'>|</span>
                    <span className='mr-2 text-indigo-700 font-medium'>Junior full stack developer</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;