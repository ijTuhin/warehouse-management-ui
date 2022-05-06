import React from 'react';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';

const AddItems = () => {
    return (
        <div>
            <Header></Header>
            <div className="w-96 my-10 py-6 px-10 rounded-lg shadow-xl bg-white mx-auto">
                <h1 className='text-center text-xl mb-4'>Add New Items</h1>
                <form>
                    <div className="form-group mb-3.5">
                        <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                            placeholder="Inventory Item Name" />
                    </div>
                    <div className="form-group mb-3.5">
                        <input type="number" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                            placeholder="Price" />
                    </div>
                    <div className="form-group mb-3.5">
                        <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                            placeholder="Supplier's Name" />
                    </div>
                    <div className="form-group mb-3.5">
                        <input type="url" name="image" id="image" placeholder='Item Image' className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                    </div>
                    <div className="form-group mb-3.5">
                        <textarea
                            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                            id="exampleFormControlTextarea13"
                            rows="3"
                            placeholder="Description"
                        ></textarea>
                    </div>

                    <button type='submit' className='border border-slate-300 bg-slate-200 text-slate-700 rounded w-full px-2.5 py-0.5 my-1 hover:bg-slate-300 hover:border-slate-300 hover:text-slate-800'>Add Items</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddItems;