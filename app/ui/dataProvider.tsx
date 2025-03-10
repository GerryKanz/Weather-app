'use client'
import React from "react"
import Logo from "./logo"
import Search from "./search"
import { useWeatherData } from "./dataContext"

export default function DataProvider() {

    const cond = useWeatherData().data?.weather[0].main



    return <div className={`font-manrope text-lg antialiased fixed top-0 w-full
    ${cond == 'Clear' ? `bg-[url('./src/assets/pexels-skitterphoto-3768.jpg')]` :
            cond == 'Clouds' ? `bg-[url('./src/assets/pexels-shadylurker-631342.jpg')]` :
                cond == 'Rain' ? `bg-[url('./src/assets/pexels-lum3n-44775-1028600.jpg')]` : null}  bg-cover pb-6`}>

        <div className='flex flex-row justify-between'>
            <Logo />
            <Search />
        </div>
        <div className="flex flex-row justify-center">
            <p className="font-bold text-6xl">{useWeatherData().data?.name}</p>
        </div>
    </div>
}