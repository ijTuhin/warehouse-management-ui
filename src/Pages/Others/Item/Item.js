import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({item}) => {
    const {
        _id,
        price,
        img,
        name,
        supplier,
        quantity,
        sold,
        services} = item;
    const navigate = useNavigate();
    const updateItem = _id => {
        navigate(`/inventory/${_id}`);
    }

    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white w-80">
                <a href="#!">
                    <img className="rounded-t-lg" src={img} alt="" />
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                    <p className="text-gray-700 text-base mb-4">Name: {name}</p>
                    <p className="text-gray-700 text-base mb-4">Service: {services}</p>
                    <p className="text-gray-700 text-base mb-4">Price: {price} </p>
                    <p className="text-gray-700 text-base mb-4">Quantity: {quantity}</p>
                    <p className="text-gray-700 text-base mb-4">Supplier: {supplier}</p>
                    <p className="text-gray-700 text-base mb-4">Sold: {sold}</p>
                    <button type="submit" onClick={() => updateItem(_id)} className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Item;