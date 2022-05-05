import React from 'react';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import Banner from './Banner/Banner';
import Items from './Items/Items';
import ManageInventoryBtn from '../Common/ManageInventoryBtn/ManageInventoryBtn';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Items></Items>
            <ManageInventoryBtn></ManageInventoryBtn>
            <Footer></Footer>
        </div>
    );
};

export default Home;