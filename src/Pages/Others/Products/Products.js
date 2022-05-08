import React, { useEffect, useState } from 'react';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';
import Item from '../Item/Item';

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-3 my-10 gap-y-5 mx-auto md:mx-56'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    >
                    </Item>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;