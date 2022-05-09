import React, { useEffect, useState } from 'react';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import ManageInventoryBtn from '../../Common/ManageInventoryBtn/ManageInventoryBtn';
import { useParams } from 'react-router-dom';
const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    /*
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `http://localhost:5000/item/${id}`;
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
     */
    
    const handleDeliveredItem = event => {
        const sold = parseInt(item.sold) + 1;
        const quantity = parseInt(item.quantity) - 1;

        const updatedItem = {quantity, sold};

        // send data to the server
        const url = `http://localhost:5000/item/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('users added successfully!!!');
            event.target.reset();
        })
    }

    return (
        <div>
            <Header></Header>
            <div className='my-16'>
                <div className='mx-16 md:flex md:justify-center md:items-center grid grid-cols-1 gap-y-5'>
                    <img className='w-72' src={item.img} alt="" />
                    <div className='text-start md:mx-5'>
                        <p className="text-gray-700 text-base mb-4"><span className='font-semibold text-lg uppercase'>{item.name} </span></p>
                        <p className="text-gray-700 text-base mb-4"><span className='font-semibold'>Description: </span><span className='break-all'>{item.services}</span></p>
                        <p className="text-gray-700 text-base mb-4"><span className='font-semibold'>Price: </span>${item.price}</p>
                        <p className="text-gray-700 text-base mb-4"><span className='font-semibold'>Sold Item: </span>{item.sold}</p>
                        <p className="text-gray-700 text-base mb-4"><span className='font-semibold'>Supplier: </span>{item.supplier}</p>
                    </div>
                </div>
                <br />
                <hr className='md:block hidden' style={{ width: '50rem', margin: 'auto' }} />
                <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center my-2'>
                    <p className="text-gray-700 text-base mb-1 md:mb-0">Total Quantity: {item.quantity}</p>
                    <div>
                        <button onClick={handleDeliveredItem} className='border border-slate-500 rounded-sm py-1 px-1.5 mr-0.5'>Item Delivered</button>
                        <button className='border border-slate-500 rounded-sm py-1 px-1.5 ml-0.5' data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Restock Items</button>

                        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                            <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-gray-700 bg-clip-padding rounded-md outline-none text-current">
                                    <div className="modal-header flex flex-shrink-0 items-center justify-end p-4 rounded-t-md">
                                        <button type="button"
                                            className="w-4 h-4 text-gray-50 text-lg text-end border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                            data-bs-dismiss="modal">x</button>
                                    </div>
                                    <div className="modal-body relative p-4">
                                        <div className="mx-5 mb-10">
                                            <h5 className="text-lg font-medium leading-normal text-gray-50 my-2" id="exampleModalScrollableLabel">
                                                Restock {item.name}
                                            </h5>
                                            <input
                                                type="text"
                                                className="form-control w-80 px-2.5 md:px-4 py-1 text-sm md:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                <br />
                <ManageInventoryBtn></ManageInventoryBtn>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Inventory;