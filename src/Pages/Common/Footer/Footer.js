import React from 'react';
import { facebook, google1, youtube } from '../../../index';

const Footer = () => {
    return (
        <div className='flex flex-col justify-center text-center w-full'>
            <div className='flex justify-center pt-8'>
                <img className='w-7 h-7 mx-1 transition ease-in-out delay-50 duration-300 hover:translate-y-2 hover:rounded-full' src={facebook} alt="" />
                <img className='bg-white p-1 w-8 mx-1 transition ease-in-out delay-50 duration-300 hover:translate-y-2 hover:rounded-full' src={google1} alt="" />
                
                <img className='bg-white p-1 w-8 mx-1 transition ease-in-out delay-50 duration-300 hover:translate-y-2 hover:rounded-full' src={youtube} alt="" />
            </div>
            <div className='text-center w-full'>
                <p className='text-xs text-slate-600 my-3'>Terms of Use | Disclaimer | Privacy Policy</p>
                <p className='text-xs text-slate-600 my-3'>copyright @ 2022 || Developed by</p>
            </div>
        </div>
    );
};

export default Footer;