'use client'
import React from "react"
import Logo from "./logo"
import Search from "./search"
import { useWeatherData } from "./dataContext"

export default function DataProvider() {

    const cond = useWeatherData().data?.weather[0].main
    // const condition = cond?.main as string


    return <div className={`font-manrope text-lg antialiased relative
    ${cond == 'Clear' ? `bg-[url('./src/assets/pexels-skitterphoto-3768.jpg')]` :
            cond == 'Clouds' ? `bg-[url('./src/assets/pexels-shadylurker-631342.jpg')]` : null}  bg-cover pb-6`}>

        <div className='flex flex-row justify-between'>
            <Logo />
            <Search />
        </div>
        <div className="flex flex-row justify-center">
            <p className="font-bold text-6xl">{useWeatherData().data?.name}</p>
        </div>
    </div>
}