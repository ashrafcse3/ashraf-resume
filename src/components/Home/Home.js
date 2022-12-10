import React from 'react';
import Banner from '../Home/Banner';
import ContactUs from '../Home/ContactUs';
import MyProjects from './MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
            <Banner />
            <MyProjects />
            <ContactUs />
        </div>
    );
};

export default Home;