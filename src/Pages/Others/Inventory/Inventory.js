import React from 'react';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import { logo } from '../../../index';
const Inventory = () => {
    return (
        <div>
            <Header></Header>
            <div className='my-16'>
                <div className='mx-16 md:flex md:justify-center md:items-center grid grid-cols-1 gap-y-5'>
                    <img className='h-96' src={logo} alt="" />
                    <div className='text-start md:mx-5'>
                        <p className="text-gray-700 text-base mb-4">Name: lyhser;awiufjasnc;AOWirpajsfc;Jn.zsjdf </p>
                        <p className="text-gray-700 text-base mb-4">Description: lyhser;awiufjasnc;AOWirpajsfc;Jn.zsjdf</p>
                        <p className="text-gray-700 text-base mb-4">Price: lyhser;awiufjasnc;AOWirpajsfc;Jn.zsjdf</p>
                        <p className="text-gray-700 text-base mb-4">Sold Item: lyhser;awiufjasnc;AOWirpajsfc;Jn.zsjdf</p>
                        <p className="text-gray-700 text-base mb-4">Supplier: lyhser;awiufjasnc;AOWirpajsfc;Jn.zsjdf</p>
                    </div>
                </div>
                <br />
                <hr className='md:block hidden' style={{ width: '50rem', margin: 'auto' }} />
                <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center my-2'>
                    <p className="text-gray-700 text-base mb-1 md:mb-0">Total Quantity: 129821</p>
                    <div>
                        <button className='border border-slate-500 rounded-sm py-1 px-1.5 mr-0.5'>Item Delivered</button>
                        <button className='border border-slate-500 rounded-sm py-1 px-1.5 ml-0.5' data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Restock Items</button>

                        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                            <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                                <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-gray-700 bg-clip-padding rounded-md outline-none text-current">
                                    <div class="modal-header flex flex-shrink-0 items-center justify-end p-4 rounded-t-md">
                                        <button type="button"
                                            class="w-4 h-4 text-gray-50 text-lg text-end border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                            data-bs-dismiss="modal">x</button>
                                    </div>
                                    <div class="modal-body relative p-4">
                                        <div class="mx-5 mb-10">
                                            <h5 class="text-lg font-medium leading-normal text-gray-50 my-2" id="exampleModalScrollableLabel">
                                               #--Item Name--#
                                            </h5>
                                            <input
                                                type="text"
                                                class="form-control w-80 px-2.5 md:px-4 py-1 text-sm md:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                placeholder="0 items"
                                            />
                                            <button className='border-0 bg-slate-100 hover:bg-slate-200 rounded py-1 px-1.5 ml-1'>Restock</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Inventory;