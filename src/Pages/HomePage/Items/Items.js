import React from 'react';

const Items = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 my-5 gap-y-5 mx-auto md:mx-56'>
            {/* <div className='bg-[url("https://cdn.pixabay.com/photo/2018/12/06/16/12/bird-3860034__340.jpg")] object-cover h-screen w-full bg-cover bg-center text-center'>
                <h2 className="text-3xl text-white">This is Overlay Image</h2>
            </div> */}
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
                        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
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
                        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
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
                        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;