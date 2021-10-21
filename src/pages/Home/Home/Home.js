import React from 'react';
import Banner from '../Banner/Banner';
import Client from '../Client/Client';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <Services></Services>
            <Client></Client>
        </div>
    );
};

export default Home;