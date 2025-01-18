'use client';

import { useState, createContext, useEffect } from "react";
import data from "../api";
import { Weather, weatherForecast, ChildProps } from "./interfaces";
import { useWeatherData } from "./dataContext";
import { useRef } from "react";

export const WeatherContext = createContext<Weather | null>(null)

export default function Searchbar(): JSX.Element {
    const [search, setSearch] = useState<string>('');
    const { setData, setForecastData } = useWeatherData()
    const savedState = localStorage.getItem('myState')
    console.log(savedState)
    const city = savedState ? savedState : 'osaka'
    console.log(city)
    // const hasRun = useRef(false);



    //Runs on every refresh
    useEffect(() => {
        fetch(`${data().baseUrl}weather?q=${city}&units=metric&APPID=${data().key}`, {
            cache: 'no-store'
        })
            .then((res) => res.json())
            .then((result) => {
                console.log('useEffect running')
                setData(result)
            })

    }, [])

    useEffect(() => {
        fetch(`${data().baseUrl}forecast?q=${city}&units=metric&APPID=${data().key}`)
            .then((res) => res.json())
            .then((result) => {
                setForecastData(result)
            })
    }, [])

    const handleSearch = (event: React.KeyboardEvent) => {

        if (event.key == 'Enter') {
            const timestamp = new Date().getTime()
            fetch(`${data().baseUrl}weather?q=${search}&units=metric&APPID=${data().key}&ts=${timestamp}`)
                .then((res) => res.json())
                .then((result) => {
                    console.log(result)
                    // setLastState(result)
                    localStorage.setItem('myState', `${search}`)
                    console.log(typeof (result))
                    setData(result)
                    // setResults(result)
                })

            fetch(`${data().baseUrl}forecast?q=${search}&units=metric&APPID=${data().key}&ts=${timestamp}`)
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
                {/* <button className=" flex-2 p-3 bg-blue-200 rounded-full" onClick={handleSearch}>search</button> */}
            </div >
        </>
    )

}