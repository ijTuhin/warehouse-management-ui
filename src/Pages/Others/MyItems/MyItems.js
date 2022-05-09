import React, { useEffect, useState } from 'react';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import { deleteBtn } from '../../../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import './MyItems.css';
import auth from '../../../firebase.init';
import Loading from '../../Authentication/Loading/Loading';
const MyItems = () => {
    const [user, loading] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://quiet-hamlet-97708.herokuapp.com/item')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                const myItems = items.filter(item => item.email === user.email);
                setItems(myItems);
            });
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `https://quiet-hamlet-97708.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                    }
                })
        }
    }
    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className='relative'>
            <Header></Header>
            <div class="flex flex-col">
                <div class="overflow-x-auto md:mx-20">
                    <div class="py-2 md:inline-block hidden min-w-full sm:px-6 lg:px-8">
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
                                        items.map(item => <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                            key={item._id}
                                            item={item}
                                        >
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                <img className='w-32 border p-1 mr-5' src={item.img} alt="" />
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div className=' font-semibold uppercase'>
                                                    <span>{item.name}</span><span></span>
                                                </div>
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                                <div className='break-all'>
                                                    <span>{item.services}</span>
                                                </div>
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div className='py-0.5 font-normal'>
                                                    <p>${item.price}</p>
                                                </div>
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div className='py-0.5'>
                                                    <p>{item.quantity}</p>
                                                </div>
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div className='py-0.5'>
                                                    <p>{item.sold}</p>
                                                </div>
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div className=''>
                                                    <span>{item.supplier}</span>
                                                </div>
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <button type='submit' onClick={() => handleDelete(item._id)} className='flex justify-end'>
                                                    <img className='w-8 rounded-full mx-8' src={deleteBtn} alt="" />
                                                </button>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="py-2 inline-block md:hidden min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-slate-400/80 border-b">
                                    <tr>
                                        <th scope="col" class="text-base font-medium text-gray-900 px-6 py-4 text-left">
                                            Product
                                        </th>
                                        <th scope="col" class="text-base font-medium text-gray-900 py-4 text-left">
                                            Product Details
                                        </th>
                                        <th scope="col" class="text-base font-medium text-gray-900 py-4 text-left">

                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='table-parent'>
                                    {
                                        items.map(item => <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                            key={item._id}
                                            item={item}
                                        >
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                <img className='w-32 border p-1 mr-5' src={item.img} alt="" />
                                            </td>
                                            <td class="text-sm text-gray-900 font-light py-4 whitespace-nowrap">
                                                <div className=' font-semibold uppercase'>
                                                    <p>Name: {item.name}</p>
                                                    <p>{item.supplier}</p>
                                                    <p>${item.price}</p>
                                                    <p>{item.quantity}</p>
                                                    <p>{item.sold}</p>
                                                </div>
                                            </td>
                                            <td class="text-sm text-gray-900 font-light py-4 whitespace-nowrap">
                                                <button type='submit' onClick={() => handleDelete(item._id)} className='flex justify-end'>
                                                    <img className='w-8 rounded-full mx-8' src={deleteBtn} alt="" />
                                                </button>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed right-0 left-0 bottom-0'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MyItems;