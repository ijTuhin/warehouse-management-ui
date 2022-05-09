import React from 'react';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import Banner from './Banner/Banner';
import Items from './Items/Items';
import { faArrowRight, faBicycle, faBowlFood, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ManageInventoryBtn from '../Common/ManageInventoryBtn/ManageInventoryBtn';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className='text-center md:m-28 m-16 '>
                <h1 className='font-mono text-2xl'>Heroku Motor Specs</h1>
                <h2 className='text-sm'>Here is a modern Stylish Performance Sportster tuned for city streets. The accelerator that has power just like how you want it. Unlike most of its bikes, <br /> Hero MotoCorp designed this bike with a mono-shock suspension and three bright shades that will make every head turn as you ride this bike on the street. In addition, the console comes with Bluetooth Connectivity, enabling you to get Call Notifications and seamless Navigation Alerts. Want to know more about Hero Xtreme 200s variants or want to find out about its price & specification or maybe you want to locate Hero MotoCorp Showrooms for a riding experience? Just scroll up and discover more about Hero Xtreme 200s now.</h2>
                <button className='hover:text-red-700 text-red-500 text-lg font-mono' data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> Take Test drive <FontAwesomeIcon icon={faBicycle}></FontAwesomeIcon></button>

                <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                    <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-slate-300/60 bg-clip-padding rounded-md outline-none text-current">
                            <div className="modal-header flex flex-shrink-0 items-center justify-end p-4 rounded-t-md">
                                <button type="button"
                                    className="w-4 h-4 text-gray-50 text-lg text-end border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal">x</button>
                            </div>
                            <div className="modal-body relative p-4">
                                <div className="mx-5 mb-10">
                                    <input
                                        type="text"
                                        className="my-0.5 form-control w-80 px-2.5 md:px-4 py-1 text-sm md:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='quantity'
                                        placeholder="Name"
                                    />
                                    <input
                                        type="email"
                                        className="my-0.5 form-control w-80 px-2.5 md:px-4 py-1 text-sm md:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='quantity'
                                        placeholder="Email"
                                    />
                                    <input
                                        type="number"
                                        className="my-0.5 form-control w-80 px-2.5 md:px-4 py-1 text-sm md:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='quantity'
                                        placeholder="Phone number"
                                    /><br></br>
                                    <button className='w-80 mt-2 border-0 bg-slate-500 text-gray-100 hover:bg-slate-600 rounded py-2 px-1.5' data-bs-dismiss="modal">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Items></Items>
            <ManageInventoryBtn></ManageInventoryBtn>
            <div className='my-20'></div>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;