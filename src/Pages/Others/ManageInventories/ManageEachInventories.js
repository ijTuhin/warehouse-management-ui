import React, { useEffect, useState } from 'react';
import { deleteBtn } from '../../../index';
const ManageEachInventories = ({ item }) => {
    const {
        _id,
        price,
        img,
        name,
        supplier,
        quantity,
        sold,
        services } = item;


    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }
                })
        }
    }

    return (
        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <img className='w-32 border p-1 mr-5' src={img} alt="" />
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div className=' font-semibold uppercase'>
                    <span>{name}</span><span></span>
                </div>
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                <div className='break-all'>
                    <span>{services}</span>
                </div>
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div className='py-0.5 font-normal'>
                    <p>${price}</p>
                </div>
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div className='py-0.5'>
                    <p>{quantity}</p>
                </div>
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div className='py-0.5'>
                    <p>{sold}</p>
                </div>
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div className=''>
                    <span>{supplier}</span>
                </div>
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {/* {
                    users.map(user => <div key={user._id}>
                        
                    </div>)
                } */}
                <button type='submit' onClick={() => handleDelete} className='flex justify-end'>
                    <img className='w-8 rounded-full mx-8' src={deleteBtn} alt="" />
                </button>
            </td>
        </tr>
    );
};

export default ManageEachInventories;