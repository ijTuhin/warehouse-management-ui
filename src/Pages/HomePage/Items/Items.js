import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Authentication/Loading/Loading';

const Items = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>
            {
                isLoading ?
                    <><Loading></Loading></>
                    :
                    <></>
            }
            <div className='grid grid-cols-1 md:grid-cols-3 my-10 gap-y-5 mx-auto md:mx-56'>
                <div className="flex justify-center">
                    <div className="rounded-lg shadow-lg bg-white w-80">
                        <a href="#!">
                            <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                        </a>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                            <p className="text-gray-700 text-base mb-4">Name: </p>
                            <p className="text-gray-700 text-base mb-4">Description: </p>
                            <p className="text-gray-700 text-base mb-4">Price: </p>
                            <p className="text-gray-700 text-base mb-4">Quantity: </p>
                            <p className="text-gray-700 text-base mb-4">Supplier: </p>
                            <button type="submit" onClick={() => {
                                setIsLoading(true);
                                navigate('/inventory');
                            }} className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="rounded-lg shadow-lg bg-white w-80">
                        <a href="#!">
                            <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                        </a>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                            <p className="text-gray-700 text-base mb-4">Name: </p>
                            <p className="text-gray-700 text-base mb-4">Description: </p>
                            <p className="text-gray-700 text-base mb-4">Price: </p>
                            <p className="text-gray-700 text-base mb-4">Quantity: </p>
                            <p className="text-gray-700 text-base mb-4">Supplier: </p>
                            <button type="submit" onClick={() => {
                                setIsLoading(true);
                                navigate('/inventory');
                            }} className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="rounded-lg shadow-lg bg-white w-80">
                        <a href="#!">
                            <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                        </a>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                            <p className="text-gray-700 text-base mb-4">Name: </p>
                            <p className="text-gray-700 text-base mb-4">Description: </p>
                            <p className="text-gray-700 text-base mb-4">Price: </p>
                            <p className="text-gray-700 text-base mb-4">Quantity: </p>
                            <p className="text-gray-700 text-base mb-4">Supplier: </p>
                            <button type="submit" onClick={() => {
                                setIsLoading(true);
                                navigate('/inventory');
                            }} className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;