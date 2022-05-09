import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Authentication/Loading/Loading';

const ManageInventoryBtn = () => {
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
            <div className='flex justify-center my-10'>
                <button type='submit' className='border bg-cyan-600 hover:bg-cyan-700 text-gray-100 rounded px-2.5 py-1.5' onClick={() => {
                    setIsLoading(true);
                    navigate('/manage-inventories');
                }}>Manage Inventories</button>
            </div>
        </div>
    );
};

export default ManageInventoryBtn;