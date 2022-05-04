import React from 'react';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import Banner from './Banner/Banner';
import Items from './Items/Items';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Items></Items>
            <Footer></Footer>
        </div>
    );
};

export default Home;