import React from 'react';
import './Header.css';
import { header, blank } from '../../../index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='sticky z-50 top-0 bg-white flex justify-between items-center shadow-md px-5'>
            <div className='my-2.5 font-mono'>
                <img className='md:w-16 w-12' src={header} alt="" />
                <p>Warehouse</p>
            </div>
            <nav className='text-center text-gray-500 font-semibold hidden md:block'>
                <a className='px-3 bar hover:text-black' href="/#">Home</a>
                <a className='px-3 bar hover:text-black' href="/#">Products</a>
                <a className='px-3 bar hover:text-black' href="/#">Blog</a>
                <a className='px-3 bar hover:text-black' href="/#">About</a>
            </nav>
            <img className='w-10 m-3 hidden md:block' src={blank} alt="" />
            <div className="flex justify-center md:hidden">
                <div>
                    <div className="dropdown relative">
                        <a className=" dropdown-toggle py-2.5 text-black text-xl leading-tight"
                            href="/#"
                            type="button"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </a>
                        <ul className=" dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                            aria-labelledby="dropdownMenuButton2">
                            <li>
                                <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
                                    href="/#">Action</a>
                            </li>
                            <li>
                                <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
                                    href="/#">Action</a>
                            </li>
                            <li>
                                <a className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
                                    href="/#">Action</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;