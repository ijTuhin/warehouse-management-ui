import React from 'react';
import { img2, img3 } from '../../../index';
import './MyItems.css';
const MyItems = () => {
    return (
        <div>
            <ul className='grid grid-cols-4 m-20'>
                <li>
                    <div class="mx-4 my-6 relative">
                        <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300" href='?#'>
                            <p class="tracking-wider" >Title</p>
                            <p class="mx-auto">Description</p>
                        </a>
                        <a href="/#" class="relative">
                            <div class="h-48 flex flex-wrap content-center">
                                <img src={img2} class="mx-auto w-96" alt="" />
                            </div>
                        </a>
                    </div>
                </li>
                <li><div class="mx-4 my-6 relative">
                    <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300" href='?#'>
                        <p class="tracking-wider" >Title</p>
                        <p class="mx-auto">Description</p>
                    </a>
                    <a href="/#" class="relative">
                        <div class="h-48 flex flex-wrap content-center">
                            <img src={img3} class="mx-auto w-96" alt="" />
                        </div>
                    </a>
                </div>
                </li>
                <li>
                    <div class="mx-4 my-6 relative">
                        <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300" href='?#'>
                            <p class="tracking-wider" >Title</p>
                            <p class="mx-auto">Description</p>
                        </a>
                        <a href="/#" class="relative">
                            <div class="h-48 flex flex-wrap content-center">
                                <img src={img2} class="mx-auto w-96" alt="" />
                            </div>
                        </a>
                    </div>
                </li>
                <li><div class="mx-4 my-6 relative">
                    <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300" href='?#'>
                        <p class="tracking-wider" >Title</p>
                        <p class="mx-auto">Description</p>
                    </a>
                    <a href="/#" class="relative">
                        <div class="h-48 flex flex-wrap content-center">
                            <img src={img3} class="mx-auto w-96" alt="" />
                        </div>
                    </a>
                </div>
                </li>
                <li><div class="mx-4 my-6 relative">
                    <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300" href='?#'>
                        <p class="tracking-wider" >Title</p>
                        <p class="mx-auto">Description</p>
                    </a>
                    <a href="/#" class="relative">
                        <div class="h-48 flex flex-wrap content-center">
                            <img src={img3} class="mx-auto w-96" alt="" />
                        </div>
                    </a>
                </div>
                </li>
                <li>
                    <div class="mx-4 my-6 relative">
                        <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300" href='?#'>
                            <p class="tracking-wider" >Title</p>
                            <p class="mx-auto">Description</p>
                        </a>
                        <a href="/#" class="relative">
                            <div class="h-48 flex flex-wrap content-center">
                                <img src={img2} class="mx-auto w-96" alt="" />
                            </div>
                        </a>
                    </div>
                </li>
                <li><div class="mx-4 my-6 relative">
                    <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300" href='?#'>
                        <p class="tracking-wider" >Title</p>
                        <p class="mx-auto">Description</p>
                    </a>
                    <a href="/#" class="relative">
                        <div class="h-48 flex flex-wrap content-center">
                            <img src={img3} class="mx-auto w-96" alt="" />
                        </div>
                    </a>
                </div>
                </li>
                <li>
                    <div class="mx-4 my-6 relative">
                        <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300" href='?#'>
                            <p class="tracking-wider" >Title</p>
                            <p class="mx-auto">Description</p>
                        </a>
                        <a href="/#" class="relative">
                            <div class="h-48 flex flex-wrap content-center">
                                <img src={img2} class="mx-auto w-96" alt="" />
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default MyItems;