import React, { useEffect, useState } from 'react';
import Item from '../../Others/Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://quiet-hamlet-97708.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-3 my-10 gap-y-5 mx-auto md:mx-56'>
                {
                    items.slice(0,6).map(item => <Item
                        key={item._id}
                        item={item}
                    >
                    </Item>)
                }
            </div>
        </div>
    );
};

export default Items;