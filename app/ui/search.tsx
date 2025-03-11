'use client';

import { useState, createContext, useEffect, useRef } from "react";
import data from "../api";
import { Weather } from "./interfaces";
import { useWeatherData } from "./dataContext";

export const WeatherContext = createContext<Weather | null>(null)

export default function Searchbar(): JSX.Element {
    const [search, setSearch] = useState<string>('');
    const { setData, setForecastData } = useWeatherData()
    const [searchRes, setSearchRes] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

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
        fetch(`${data().baseUrl}forecast?q=osaka&units=metric&APPID=${data().key}`, {
            cache: 'no-store'
        })
            .then((res) => res.json())
            .then((result) => {
                setForecastData(result)
            })
    }, [setForecastData])

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();

            if (search.trim() === "") return;

            const timestamp = new Date().getTime();

            fetch(`${data().baseUrl}weather?q=${search}&units=metric&APPID=${data().key}&ts=${timestamp}`, {
                cache: 'no-store',
            })
                .then((res) => {
                    if (!res.ok) {
                        setSearchRes(`${search} not found.`);
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((result) => {
                    setSearchRes("");
                    setData(result);
                })
                .catch((error) => console.error("Error fetching weather data:", error));

            fetch(`${data().baseUrl}forecast?q=${search}&units=metric&APPID=${data().key}&ts=${timestamp}`, {
                cache: 'no-store',
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! Status: ${res.status}`);
                    }
                    return res.json();
                })
                .then((result) => {
                    setForecastData(result);
                })
                .catch((error) => console.error("Error fetching forecast data:", error));

            setSearch("");
            inputRef.current?.blur()
        }

    };

    return (
        <>
            <div className="w-80 ml-10 md:ml-32 relative min-h-10 mt-5 text-base ">

                <input
                    ref={inputRef}
                    onKeyDown={handleSearch}
                    onChange={handleOnChange}
                    value={search}
                    name="searchbar"
                    placeholder="Enter City / Town"
                    className="placeholder:text-center w-48 h-10  border-2 border-black/60 rounded-full" />

                {searchRes != '' ? <p className="absolute mt-1 md:mt-2 w-48 text-center  bg-slate-300 text-sm rounded-full text-red-600">City/Town not found.</p> : null}
            </div >
        </>
    )

}