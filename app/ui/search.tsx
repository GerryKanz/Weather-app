'use client';

import { useState, createContext, useEffect } from "react";
import data from "../api";
import { Weather } from "./interfaces";
import { useWeatherData } from "./dataContext";

export const WeatherContext = createContext<Weather | null>(null)

export default function Searchbar(): JSX.Element {
    const [search, setSearch] = useState<string>('');
    const { setData, setForecastData } = useWeatherData()

    useEffect(() => {
        fetch(`${data().baseUrl}weather?q=osaka&units=metric&APPID=${data().key}`, {
            cache: 'no-store'
        })
            .then((res) => res.json())
            .then((result) => {
                console.log('useEffect running')
                setData(result)
            })

    }, [setData])

    useEffect(() => {
        // const city = localStorage.getItem('myState')
        fetch(`${data().baseUrl}forecast?q=osaka&units=metric&APPID=${data().key}`, {
            cache: 'no-store'
        })
            .then((res) => res.json())
            .then((result) => {
                setForecastData(result)
            })
    }, [setForecastData])

    const handleSearch = (event: React.KeyboardEvent) => {

        if (event.key == 'Enter') {
            const timestamp = new Date().getTime()
            fetch(`${data().baseUrl}weather?q=${search}&units=metric&APPID=${data().key}&ts=${timestamp}`, {
                cache: 'no-store'
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result)
                    // localStorage.setItem('myState', `${search}`)
                    console.log(typeof (result))
                    setData(result)
                })

            fetch(`${data().baseUrl}forecast?q=${search}&units=metric&APPID=${data().key}&ts=${timestamp}`, {
                cache: 'no-store'
            })
                .then((res) => res.json())
                .then((result) => {
                    setForecastData(result)
                })
        }

    }

    return (
        <>
            <div className="flex md:w-1/4 h-12 mt-5 mx-5 ">
                <input onKeyDown={handleSearch} onChange={(e) => setSearch(e.target.value)} className="placeholder:text-center p-2 md:flex-1 border-2 rounded-full" name="searchbar" placeholder="Enter City / Town" />
            </div >
        </>
    )

}