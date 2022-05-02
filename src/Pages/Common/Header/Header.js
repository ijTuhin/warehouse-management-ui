import React from 'react';
import './Header.css';
import { header, blank } from '../../../index';
const Header = () => {
    return (
        <div className='sticky z-50 top-0 bg-white flex justify-between items-center shadow-md px-5'>
            <div className='my-2.5 font-mono'>
                <img className='w-16' src={header} alt="" />
                <p>Warehouse</p>
            </div>
            <nav className='text-center text-gray-500 font-semibold'>
                <a className='px-3 bar hover:text-black' href="/#">Home</a>
                <a className='px-3 bar hover:text-black' href="/#">Products</a>
                <a className='px-3 bar hover:text-black' href="/#">Blog</a>
                <a className='px-3 bar hover:text-black' href="/#">About</a>
            </nav>
            <img className='w-10 m-3' src={blank} alt="" />
        </div>
    );
};

export default Header;