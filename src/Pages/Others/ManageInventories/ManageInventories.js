import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import ManageEachInventories from './ManageEachInventories';

const ManageInventories = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div>
            <Header></Header>
            <div class="flex flex-col">
                <div class="overflow-x-auto md:mx-20 m-10">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-slate-400/80 border-b">
                                    <tr>
                                        <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                                            Product
                                        </th>
                                        <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                                            Model Name
                                        </th>
                                        <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                                            Features
                                        </th>
                                        <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                                            Price
                                        </th>
                                        <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                                            Quantity
                                        </th>
                                        <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                                            Sold
                                        </th>
                                        <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                                            Supplier
                                        </th>
                                        <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">

                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='table-parent'>
                                    {
                                        items.map(item => <ManageEachInventories
                                            key={item._id}
                                            item={item}
                                        >
                                        </ManageEachInventories>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='flex justify-end mx-10 mb-16'>
                        <Link to='/add-items' className='border border-gray-600 bg-slate-400 rounded px-2.5 py-1'>Add New Items</Link>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ManageInventories;