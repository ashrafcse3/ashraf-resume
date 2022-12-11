import React from 'react';
import { BsServer } from 'react-icons/bs';
import { BsLink45Deg } from 'react-icons/bs';
import { BsFillEmojiSmileFill } from 'react-icons/bs';

const TitleNLinks = ({ project: { client_repo, live_link, server_repo, title } }) => {
    return (
        <div className='mt-4'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <div className='space-y-3 mt-8'>
                <ul className='flex list-none'>
                    <li className='flex items-center border pr-6 pl-2 text-gray-500'>
                        <BsLink45Deg className='mr-2' />
                        <p>Live website:</p>
                    </li>
                    <li className='border flex-1 pl-4 border-l-0 text-blue-500'><a href="https://used-products-resale-eba66.web.app/">Auto Parts</a></li>
                </ul>
                <ul className='flex list-none'>
                    <li className='flex items-center border pr-6 pl-2 text-gray-500'>
                        <BsFillEmojiSmileFill className='mr-2' />
                        <p>Client Repo:</p>
                    </li>
                    <li className='border flex-1 pl-4 border-l-0 text-blue-500'><a href="https://used-products-resale-eba66.web.app/">GitHub client</a></li>
                </ul>
                <ul className='flex list-none'>
                    <li className='flex items-center border pr-6 pl-2 text-gray-500'>
                        <BsServer className='mr-2' />
                        <p>Server repo:</p>
                    </li>
                    <li className='border flex-1 pl-4 border-l-0 text-blue-500'><a href="https://used-products-resale-eba66.web.app/">GitHub server</a></li>
                </ul>
            </div>
        </div>
    );
};

export default TitleNLinks;