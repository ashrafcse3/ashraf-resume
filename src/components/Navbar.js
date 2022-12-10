import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allproject'>All Projects</Link></li>
        <li><Link to='/aboutme'>About me</Link></li>
    </>;
    return (
        <div className="navbar bg-base-100 shadow-lg h-20">
            <div className="navbar-start">
                <span className="btn btn-ghost normal-case text-xl">Ashraful Alam</span>
            </div>
            <div className="navbar-end">
                <div className='hidden lg:flex'>
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="dropdown dropdown-left">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;