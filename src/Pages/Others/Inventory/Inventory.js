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
                <hr className='md:block hidden' style={{width:'50rem', margin:'auto'}} />
                <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center my-2'>
                    <p className="text-gray-700 text-base mb-1 md:mb-0">Total Quantity: 129821</p>
                    <div>
                        <button className='border border-slate-500 rounded-sm py-1 px-1.5 mr-0.5'>Item Delivered</button>
                        <button className='border border-slate-500 rounded-sm py-1 px-1.5 ml-0.5'>Restock Items</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Inventory;