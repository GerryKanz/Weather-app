'use client'

// import Image from "next/image";
// import Logo from '@/app/ui/logo';
// import Search from '@/app/ui/search'
import Today from '@/app/ui/today';
import ThreeHourFocust from './ui/threeHourForecust/threeHourForecast';
// import MoreWeatherDetail from './ui/moreWeatherDetail';
// import data from './api';
// import { useEffect } from 'react';
// import WeatherDataProvider from './ui/dataContext';

// require('./src/assets/pexels-skitterphoto-3768.jpg')

export default function Home(): JSX.Element {

    return (
        <div className={`text-black md:flex flex-row`} >

            <div className='md:w-1/4 gap-x-4 ml-5'>
                <Today />
            </div>
            <div className='md:w-3/4 rounded-md ml-5 overflow-hidden'>
                <ThreeHourFocust />
            </div>

        </div >

    );
}
