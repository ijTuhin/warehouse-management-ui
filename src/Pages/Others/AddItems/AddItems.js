import React from 'react';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';

const AddItems = () => {
    return (
        <div>
            <Header></Header>
            <div class="w-96 my-10 p-6 rounded-lg shadow-lg bg-white mx-auto">
                <h1 className='text-center text-xl'>Add New Items</h1>
                <form>
                    <div class="form-group mb-6">
                        <input type="text" class="form-control block
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
                            placeholder="Name" />
                    </div>
                    <div class="form-group mb-6">
                        <input type="email" class="form-control block
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
                            placeholder="Email address" />
                    </div>
                    <div class="form-group mb-6">
                        <textarea
                            class="
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
                            placeholder="Message"
                        ></textarea>
                    </div>
                    <div class="form-group form-check text-center mb-6">
                        <input type="checkbox"
                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                            id="exampleCheck87" checked />
                        <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this message</label>
                    </div>
                    <button type='submit' className='border border-gray-600 rounded w-full px-2.5 py-0.5'>Add Items</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddItems;