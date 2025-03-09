"use client"
import { useWeatherData } from "./dataContext"
import dataApi from "../api"
import Image from "next/image"
import Time from "./UnixToStdTime"

export default function Today() {
    const { data } = useWeatherData()

    const time = () => {
        return Time(data?.dt as number)
    }


    const roundUp = (temp: number | undefined) => {
        if (temp != undefined) {
            return (Math.round(temp))
        } else return null
    }

    return <div className="font-manrope">

        <div className="bg-slate-100 mt-11 pb-7 rounded-md flex flex-col text-black">

            <div className="self-center">
                <p className="text-center text-4xl mt-5">Today </p>
            </div>
            <>
                {
                    data?.weather[0] ? <div className="flex flex-col mt-10 w-3/4 h-1/2 rounded-xl text-white self-center bg-slate-400">
                        <p className="text-xl text-center font-bold p-2 mt-1">{time()}</p>
                        <Image
                            src={`${dataApi().baseUrl}img/w/${data?.weather[0].icon}.png`}
                            alt="new"
                            width={120}
                            height={120}
                            className="rounded-lg mt-5 self-center" />

                        <p className="self-center">
                            {data?.weather[0].description}
                        </p>

                        <p className=" mt-5 text-center text-5xl font-bold">{roundUp(data?.main?.temp)}°C</p>

                        <div className="flex justify-center mb-10">
                            <p className="self-center font-bold m-2">
                                Lo {roundUp(data?.main?.temp_min)}°C
                            </p>
                            <p className="self-center font-bold m-2">
                                Hi {roundUp(data?.main?.temp_max)}°C
                            </p>
                        </div>

                    </div> : null

                }
            </>
            <div className="my-10 text-sm text-slate-800 text-center font-thin">
                <div className="flex justify-evenly">

                    <div>
                        <p className="font-bold mb-5">Real Feel</p>
                        <p className="">{roundUp(data?.main?.feels_like)}°</p>
                    </div>

                    <div>
                        <p className="font-bold mb-5">Humidity</p>
                        <p className="">{roundUp(data?.main?.humidity)}°</p>
                    </div>
                    <div>
                        <p className="font-bold mb-5">Pressure</p>
                        <p className="">{roundUp(data?.main?.pressure)}hPa</p>
                    </div>
                    <div>
                        <p className="font-bold mb-5">Wind</p>
                        <p className="">{roundUp(data?.wind?.speed)}Mpa</p>
                    </div>
                    <div>
                        {data?.rain ?
                            <div>
                                <p className="font-bold mb-5">Rain</p>
                                <p className="">{data?.rain['1h']}mph</p>
                            </div>
                            : null}
                    </div>

                </div>
            </div>

        </div>
    </div>
}