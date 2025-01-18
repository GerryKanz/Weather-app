import { useWeatherData } from "../dataContext"
import dataApi from "@/app/api"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { Weather, weatherContextType, weatherForecast } from "../interfaces"
import MoreCardDetail from "../moreCardDetail"
import SunriseSunset from "./sunRiseSunset"

export default function ThreeHourFocust() {
    const weatherData = useWeatherData()
    const forecastList = weatherData.forecastData?.list
    const datelist = Array.from(new Set(forecastList?.map(dates => dates['dt_txt'].split(' ')[0])));

    const cardInit = () => { if (forecastList) return forecastList[0] }
    console.log(cardInit())


    const [selectedDate, setSelectedDate] = useState<string | undefined>()

    const [cardInfo, setCardInfo] = useState<Weather | undefined>()
    // const [dateIndex, setDateIndex] = useState<string>()

    const scrollRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        console.log('select date use effect ran')
        setSelectedDate(datelist[0])
    }, [datelist[0]])

    useEffect(() => {
        setCardInfo(cardInit())
    }, [forecastList])


    console.log(selectedDate)

    const resetScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ left: 0 });
        }
    };

    const imgUrl = (icon: string | number) => {
        return `${dataApi().baseUrl}img/w/${icon}.png`

    }



    // const time = (time: string) => {
    //     return time.split(' ')[1]
    // }

    console.log(selectedDate)



    const handleCardDisplay = (date: string) => {
        setSelectedDate(date)
        resetScroll()
    }

    // const handleDisplayMoreCardInfo = (cardInformation: Weather) => {
    //     setCardInfo(cardInformation)
    //     console.log('card info logging')
    // }

    // useEffect(() => {
    //     console.log(cardInfo)
    //     setCard(cardInfo)
    // }, [cardInfo])

    // )


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
            <ul className="flex h-12 md:justify-evenly overflow-x-scroll no-scrollbar">
                {datelist.map((date, index) => (
                    <li key={index} className="text-sm text-nowrap ml-5 md:text-lg mt-4">
                        {formatDateString(date) == formatDateString(selectedDate) ?
                            <a onClick={() => handleCardDisplay(date)}
                                className="border-teal-300 border-b-2 font-bold pb-1">{formatDateString(date)}</a> :
                            <a href="#" onClick={() => handleCardDisplay(date)} className="border-b-2 border-slate-300 pb-1">{formatDateString(date)}</a>
                        }

                    </li>
                ))}
            </ul>

            <ul ref={scrollRef} className="flex justify-evenly mt-8 overflow-x-scroll no-scrollbar ml-2">
                {forecastList?.map((forecastData, index) => (

                    <li key={index}>


                        {selectedDate != undefined ? forecastData.dt_txt.split(' ')[0] >= selectedDate ?


                            <a href="#" onClick={() => setCardInfo(forecastData)} className="flex flex-col items-center bg-slate-300 text-black w-52 p-2 rounded mx-2">
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
                            </a> : null : null}
                    </li>
                ))

                }
            </ul>
            {cardInfo ? <MoreCardDetail {...cardInfo} /> : null}
            <SunriseSunset />
        </div>



    </div>
}