"use client"
import { useWeatherData } from "../dataContext"
import { BsFillSunsetFill, BsFillSunriseFill } from "react-icons/bs";
import Time from "../UnixToStdTime";

export default function SunriseSunset() {

    const { data } = useWeatherData()
    const sunrise = data?.sys.sunrise as number
    const sunset = data?.sys.sunset as number

    return <div className="mt-5">
        <div className="flex justify-center mt-10">
            <p className="border-t pt-1 border-slate-700 px-10">Sunrise and Sunset</p>
        </div>
        <div className="flex flex-row gap-10 text-2xl justify-center mt-2 pb-8 font-bold">
            <div className="flex ">
                <BsFillSunriseFill className="size-10 size-10 text-orange-400" />
                <p className="border-r-2 ml-5 pr-10 ">{Time(sunrise)}</p>
            </div>
            <div className="flex ">
                <BsFillSunsetFill className="size-10 text-orange-400 " />
                <p className="ml-5 ">{Time(sunset)}</p>
            </div>
        </div>
    </div>
}