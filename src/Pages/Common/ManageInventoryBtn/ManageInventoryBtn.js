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
                <button type='submit' className='border border-gray-600 rounded px-2.5 py-0.5' onClick={() => {
                    setIsLoading(true);
                    navigate('/manage-inventories');
                }}>Manage Inventories</button>
            </div>
        </div>
    );
};

export default ManageInventoryBtn;