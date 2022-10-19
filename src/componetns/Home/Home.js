import React from 'react';
import Lottie from 'lottie-react'
import animastion from '../../Animastion/animastion'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
            <div className='flex flex-col items-center justify-between lg:flex-row'>

            <div>
                <h1 className='text-5xl font-bold text-orange-500'>New Collection For Fall</h1>
                <p><small className='text-gray-500'>Discover all the new arrivals of ready-to-wear collection.</small> </p>
                <Link to='/shop'>
                    <button className='py-2 px-3 bg-orange-600 rounded-md  text-white font-medium mt-3'>Shop Now</button>
                </Link>
            </div>
            <div className='relative lg:w-1/2 '>
                <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>

                      <Lottie animationData={animastion}></Lottie>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Home;