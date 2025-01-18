"use client"
import { useWeatherData } from "../dataContext"
import dataApi from '@/app/api'
import { BsFillSunsetFill, BsFillSunriseFill } from "react-icons/bs";
import Time from "../UnixToStdTime";

export default function SunriseSunset() {

    const { data } = useWeatherData()
    // const imgUrl = `${dataApi().baseUrl}img/w/${data?.weather[0].icon}.png`
    const sunrise = data?.sys.sunrise as number
    const sunset = data?.sys.sunset as number
    const img_Url = `${dataApi().weatherMapsUrl}precipitation_new/1/1/1.png?appid=${dataApi().key}`

    const time = (unixTime: number) => {
        if (unixTime && data?.timezone != undefined) {
            const dateObject = new Date(unixTime * 1000)
            const rawHours = (dateObject.getUTCHours() + data?.timezone / 3600)
            const min = String(dateObject.getUTCMinutes()).padStart(2, '0')

            if (rawHours >= 24) {
                const hours = rawHours - 24
                return String(hours).padStart(2, '0') + ':' + min
            } else {
                return String(rawHours).padStart(2, '0') + ':' + min
            }
        }
    }

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