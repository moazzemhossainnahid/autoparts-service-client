import React from 'react';
import HomeBanner from '../../Components/Pages/Home/HomeBanner';
import Newsletter from '../../Components/Pages/Home/Newsletter';
import AboutUs from '../../Components/Pages/Home/AboutUs';

const Home = () => {
    return (
        <div className='w-full'>
            <HomeBanner/>
            <AboutUs/>
            <Newsletter/>
        </div>
    );
};

export default Home;