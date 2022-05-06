import React from 'react';
import { img2, img3 } from '../../../index';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import './MyItems.css';
const MyItems = () => {
    return (
        <div>
            <Header></Header>
            <ul className='grid md:grid-cols-4 grid-cols-1 md:m-20 m-5'>
                <li>
                    <div class="md:mx-4 md:my-6 relative">
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
                <li><div class="md:mx-4 md:my-6 relative">
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
                    <div class="md:mx-4 md:my-6 relative">
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
                <li><div class="md:mx-4 md:my-6 relative">
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
                <li><div class="md:mx-4 md:my-6 relative">
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
                    <div class="md:mx-4 md:my-6 relative">
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
                <li><div class="md:mx-4 md:my-6 relative">
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
                    <div class="md:mx-4 md:my-6 relative">
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
            <Footer></Footer>
        </div>
    );
};

export default MyItems;