import { faBicycle, faBowlFood, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { service1, service2, service3, service4 } from '../../../index';

const Service = () => {
    return (
        <div className='mb-20'>
            <div className='my-5 pt-5'>
                <h1 className='text-center pt-5 mt-5 font-extrabold text-gray-500 text-2xl'>A L W A Y S <span className='mx-3 fw-bold text-warning'>O P E N</span></h1>
                <p className='font-extrabold text-gray-500 text-2xl text-center'>GET FREE ROADSIDE
                    ASSISTANCE FOR 1 YEAR</p>
                <h4 className='text-center font-extrabold text-gray-500 text-2xl'>24/7 <span className='mx-1 fw-bold text-warning'>||</span> 365 Days</h4>
            </div>
            <div className='flex justify-center flex-col md:flex-row items-center text-red-800 font-mono text-lg'>
                <div className=' flex justify-center flex-col items-center'>
                    <img src={service1} className="rounded-full md:w-16 w-10 block" alt="" />
                    <small>Towing Support</small>
                </div>
                <div className=' flex justify-center flex-col items-center'>
                    <img src={service2} className="rounded-full md:w-16 w-10 block" alt="" />
                    <small>FUEL DELIVERY</small>
                </div>
                <div className=' flex justify-center flex-col items-center'>
                    <img src={service3} className="rounded-full md:w-16 w-10 block" alt="" />
                    <small>Repair on spot</small>
                </div>
                <div className=' flex justify-center flex-col items-center'>
                    <img src={service4} className="rounded-full md:w-16 w-10 block" alt="" />
                    <small>On-call Support</small>
                </div>
            </div>
        </div>
    );
};

export default Service;