import React from 'react';
import './Header.css';
import { header, blank } from '../../../index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    
    return (
        <div className='sticky z-50 top-0 bg-white flex justify-between items-center shadow-md px-5'>
            <div className='my-2.5 font-mono'>
                <img className='md:w-16 w-12' src={header} alt="" />
                <p>Warehouse</p>
            </div>
            <nav className='text-center text-gray-500 font-semibold hidden md:block'>
                <Link className='p-3 bar hover:text-black' to="/">Home</Link>
                <Link className='p-3 bar hover:text-black' to="/products">Products</Link>
                <Link className='p-3 bar hover:text-black' to="/blogs">Blog</Link>
                <Link className='p-3 bar hover:text-black' to="/about">About</Link>
                {
                    !user ?
                    <></>
                    :
                    <>
                    <Link className='p-3 bar hover:text-black' to="/manage-inventories">Manage Item</Link>
                    <Link className='p-3 bar hover:text-black' to="/add-items">Add Item</Link>
                    <Link className='p-3 bar hover:text-black' to="/my-items">My Items</Link>
                    </>
                }
            </nav>
            {
                !user ?
                    <><img className='w-10 m-3 hidden md:block' src={blank} alt="" /></>
                    :
                    <><button className='p-3 hover:text-black' onClick={() => {
                        signOut(auth);
                        navigate('/');
                    }}>LogOut</button></>
            }
            <div className="flex justify-center md:hidden">
                <div>
                    <div className="dropdown relative">
                        <Link className=" dropdown-toggle py-2.5 text-black text-xl leading-tight"
                            to="/#"
                            type="button"
                            id="dropdownMenuButton2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </Link>
                        <ul className=" dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                            aria-labelledby="dropdownMenuButton2">
                            <li>
                                <Link className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
                                    to="/">Home</Link>
                            </li>
                            <li>
                                <Link className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
                                    to="/products">Products</Link>
                            </li>
                            <li>
                                <Link className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
                                    to="/blogs">Blog</Link>
                            </li>
                            <li>
                                <Link className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
                                    to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;