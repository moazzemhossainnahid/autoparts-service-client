import React from 'react';
import HomeBanner from '../../Components/Pages/Home/HomeBanner';
import Newsletter from '../../Components/Pages/Home/Newsletter';
import AboutUs from '../../Components/Pages/Home/AboutUs';
import PartsThress from '../../Components/Pages/Home/PartsThress';
import ServiceThree from '../../Components/Pages/Home/ServiceThree';

const Home = () => {
    return (
        <div className='w-full'>
            <HomeBanner/>
            <PartsThress/>
            <ServiceThree/>
            <AboutUs/>
            <Newsletter/>
        </div>
    );
};

export default Home;