import React from 'react';
import {Google} from '../../../index';
const Login = () => {
    return (
        <div class="container h-screen flex flex-col justify-start items-center px-6 py-12">
            <form className='w-96'>
            <h2 className='text-3xl w-full mb-5'>Please Login to Continue</h2>
                <div class="mb-3">
                    <input
                        type="text"
                        class="form-control block w-full px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Email address"
                    />
                </div>
                <div class="mb-3">
                    <input
                        type="password"
                        class="form-control block w-full px-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Password"
                    />
                </div>

                <div class="flex justify-between items-center mb-2.5">
                    <a
                        href="#!"
                        class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                    >Forgot password?</a
                    >
                </div>
                <button
                    type="submit"
                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                >
                    Login
                </button>

                <div
                    class="flex items-center my-2.5 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                    <p class="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <button type='submit'
                    class="px-7 py-2 text-slate-600 bg-white font-medium text-sm rounded border border-slate-500 hover:shadow-lg focus:shadow-lg w-full uppercase flex justify-center items-center mb-3"><img className='w-7 mx-3' src={Google} alt="" /> Sign in with Google
                </button>
            </form>
            <div class="">

            </div>
        </div>
    );
};

export default Login;