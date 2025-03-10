import { useWeatherData } from "../dataContext"
import dataApi from "@/app/api"
import Image from "next/image"
import { useEffect, useState, useRef, useCallback } from "react"
import { Weather } from "../interfaces"
import MoreCardDetail from "../moreCardDetail"
import SunriseSunset from "./sunRiseSunset"

export default function ThreeHourFocust() {
    const weatherData = useWeatherData()
    const forecastList = weatherData.forecastData?.list
    const datelist = Array.from(new Set(forecastList?.map(dates => dates['dt_txt'].split(' ')[0])));
    const inputDate = datelist[0]

    const cardInit = useCallback(() => { if (forecastList) return forecastList[0] }, [forecastList])


    const [selectedDate, setSelectedDate] = useState<string | undefined>()

    const [cardInfo, setCardInfo] = useState<Weather | undefined>()

    const scrollRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        // console.log('select date use effect ran')
        setSelectedDate(inputDate)
    }, [inputDate])

    useEffect(() => {
        setCardInfo(cardInit())
    }, [forecastList, cardInit])


    // console.log(selectedDate)

    const resetScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ left: 0 });
        }
    };

    const imgUrl = (icon: string | number) => {
        return `${dataApi().baseUrl}img/w/${icon}.png`

    }

    const handleCardDisplay = (date: string) => {
        setSelectedDate(date)
        resetScroll()
    }

    const formatDateString = (dateString: string | undefined) => {
        if (dateString != undefined) {
            const date = new Date(dateString)
            return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
        }
    }

    return <div className="font-manrope">

        <div className="m-2 font-semibold text-center">
            <p className="text-lg text-emerald-950">Three Hour Five Day Forecast</p>
        </div>

        <div className="bg-slate-100 rounded">
            <ul className="bg-slate-200 border rounded flex h-16 md:justify-evenly overflow-x-scroll no-scrollbar">
                {datelist.map((date, index) => (
                    <li key={index} className="text-sm text-nowrap ml-5 md:text-lg mt-4">
                        {formatDateString(date) == formatDateString(selectedDate) ?
                            <a onClick={() => handleCardDisplay(date)}
                                className="border-teal-300 border-b-2 font-bold pb-1">{formatDateString(date)}</a> :
                            <a onClick={() => handleCardDisplay(date)} className="border-b-2 border-slate-300 pb-1">{formatDateString(date)}</a>
                        }
                    </li>
                ))}
            </ul>

            <ul ref={scrollRef} className="flex justify-evenly mt-4 overflow-x-scroll no-scrollbar ml-2">
                {forecastList?.map((forecastData, index) => (

                    <li key={index}>


                        {selectedDate != undefined ? forecastData.dt_txt.split(' ')[0] >= selectedDate ?


                            <div onClick={() => setCardInfo(forecastData)} className="flex flex-col items-center bg-slate-300 text-black w-52 p-2 rounded mx-2">
                                <p className="my-2 font-bold">{formatDateString(forecastData.dt_txt.split(' ')[0])}</p>

                                <p>{forecastData.dt_txt.split(' ')[1].slice(0, -3)}</p>

                                {imgUrl ? <>
                                    <Image
                                        src={imgUrl(forecastData.weather[0].icon)}
                                        alt="new"
                                        width={250}
                                        height={250}
                                        className="self-center size-20" />
                                    <p className="self-center">
                                        {forecastData?.weather[0].description}
                                    </p>
                                </> : null}

                                <p className="font-bold mt-5 text-lg">{Math.round(forecastData.main.temp)}°C</p>
                                <div className="mt-5 text-center">
                                    <p>feels like</p>
                                    <p>{Math.round(forecastData.main.feels_like)}°C</p>
                                </div>
                            </div> : null : null}
                    </li>
                ))

                }
            </ul>
            {cardInfo ? <MoreCardDetail {...cardInfo} /> : null}
            <SunriseSunset />
        </div>



    </div>
}