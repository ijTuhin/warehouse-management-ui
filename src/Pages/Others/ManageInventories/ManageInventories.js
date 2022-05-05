import React from 'react';
import { Link } from 'react-router-dom';
import { logo, deleteBtn } from '../../../index';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';

const ManageInventories = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex flex-col mx-10'>
                <div className='flex items-center border my-1'>
                    <img className='w-24 h-24 border p-1 mr-5' src={logo} alt="" />
                    <div className='py-3'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id enim corporis dolor fugit eos tempore eaque quidem eius. Iste, illum ea cum laudantium dolores cumque autem dolorum sit neque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id enim corporis dolor fugit eos tempore eaque quidem eius. Iste, illum ea cum laudantium dolores cumque autem dolorum sit neque.</p>
                    </div>
                    <button type='submit'>
                        <img className='w-8 rounded-full mx-8' src={deleteBtn} alt="" />
                    </button>
                </div>
                <div className='flex items-center border my-1'>
                    <img className='w-24 h-24 border p-1 mr-5' src={logo} alt="" />
                    <div className='py-3'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id enim corporis dolor fugit eos tempore eaque quidem eius. Iste, illum ea cum laudantium dolores cumque autem dolorum sit neque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id enim corporis dolor fugit eos tempore eaque quidem eius. Iste, illum ea cum laudantium dolores cumque autem dolorum sit neque.</p>
                    </div>
                    <button type='submit'>
                        <img className='w-8 rounded-full mx-8' src={deleteBtn} alt="" />
                    </button>
                </div>
                <div className='flex items-center border my-1'>
                    <img className='w-24 h-24 border p-1 mr-5' src={logo} alt="" />
                    <div className='py-3'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id enim corporis dolor fugit eos tempore eaque quidem eius. Iste, illum ea cum laudantium dolores cumque autem dolorum sit neque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id enim corporis dolor fugit eos tempore eaque quidem eius. Iste, illum ea cum laudantium dolores cumque autem dolorum sit neque.</p>
                    </div>
                    <button type='submit'>
                        <img className='w-8 rounded-full mx-8' src={deleteBtn} alt="" />
                    </button>
                </div>
            </div>
            <div className='flex justify-end mx-10'>
                <Link to='/add-items' className='border border-gray-600 rounded px-2.5 py-0.5'>Add Items</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageInventories;