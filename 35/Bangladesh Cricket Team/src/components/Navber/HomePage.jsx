import React from 'react';
import harderimg from '../../assets/banner-main.png'

const HomePage = () => {
    return (
        <div className='container mx-auto'>
             <div className='min-h-75 bg-linear-to-r from-purple-900 to-pink-600 '>
            <img className='mx-auto' src={harderimg} alt="" />
            <h2 className='text-4xl font-medium text-white text-center'>Select your favorite player.</h2>
        </div>
        </div>
    );
};

export default HomePage;