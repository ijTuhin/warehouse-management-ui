import React, { useState } from 'react';
import { Google } from '../../../index';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
    ] = useSignInWithEmailAndPassword(auth);

    const handleFormSubmit = event => {
        event.preventDefault();
        setEmail(event.target.email.value);
        setPassword(event.target.password.value);
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div class="container h-screen flex flex-col justify-start items-center px-6 py-12">
            <form className='w-72 md:w-96' onSubmit={handleFormSubmit}>
                <h2 className='md:text-3xl text-2xl w-full mb-5'>Please Login to Continue</h2>
                <div class="mb-3">
                    <input
                        type="text"
                        class="form-control block w-full px-2.5 md:px-4 py-1.5 text-sm md:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='email'
                        placeholder="Email address"
                    />
                </div>
                <div class="mb-3">
                    <input
                        type="password"
                        class="form-control block w-full px-2.5 md:px-4 py-1.5 text-sm md:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='password'
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
                    class="px-7 py-2 md:py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg w-full"
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