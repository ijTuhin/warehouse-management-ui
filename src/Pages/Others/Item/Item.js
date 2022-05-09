import React from 'react';
import { useNavigate } from 'react-router-dom';
import './item.css'; 

const Item = ({ item }) => {
    const {
        _id,
        price,
        img,
        name,
        supplier,
        quantity,
        sold,
        services } = item;
    const navigate = useNavigate();
    const updateItem = _id => {
        navigate(`/inventory/${_id}`);
    }

    return (
        <div className="flex justify-center cards">
            <div className="block rounded-lg shadow-lg bg-white text-center m-2 relative">
                <div className='p-2 w-80 h-80 relative card-head'>
                    <img className="rounded-t-lg" src={img} alt="" />
                    <div className="p-2 absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                        <p className="text-gray-700 text-base mb-4">Service: {services}</p>
                        <p className="text-gray-700 text-base mb-4">Price: {price} </p>
                        <p className="text-gray-700 text-base mb-4">Quantity: {quantity}</p>
                        <p className="text-gray-700 text-base mb-4">Supplier: {supplier}</p>
                        <p className="text-gray-700 text-base mb-4">Sold: {sold}</p>
                    </div>
                </div>
                <div className='w-full absolute bottom-0 z-20'>
                    <button type="submit" onClick={() => updateItem(_id)} className="w-full py-3 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded rounded-t-none shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Update Item</button>
                </div>
            </div>
        </div>
    );
};

export default Item;