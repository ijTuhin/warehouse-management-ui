import React, { useEffect, useState } from 'react';
import { img2, img3 } from '../../../index';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import './MyItems.css';
import PerUserItem from './PerUserItem';
import auth from '../../../firebase.init';
const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const [userItems, setUserItems] = useState([]);
    useEffect(() => {
        fetch('https://quiet-hamlet-97708.herokuapp.com/item')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                const myItems = items.filter(item => item.email === user.email);
                setItems(myItems);
            });
    }, [])

    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-3 my-10 gap-y-5 mx-auto md:mx-56'>
                {
                    items.map(item => <PerUserItem
                        key={item._id}
                        item={item}
                    >
                    </PerUserItem>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyItems;