"use client"
import { Weather } from "./interfaces"
import { WiHumidity, WiUmbrella, WiThermometer, WiStrongWind, WiSnowflakeCold } from "react-icons/wi";

export default function MoreCardDetail({ weather, main, wind, rain, snow }: Weather) {
    console.log(weather)
    // const tempMin = props.main?.temp_min;
    console.log(rain)
    console.log()

    return <div className="flex flex-row justify-evenly border-t font-manrope
    border-slate-700 pt-4 text-black mt-5">

        <div className="border-r-2 border-slate-700 pr-5">
            <p className="font-bold text-3xl text-slate-400"><WiHumidity /></p>
            <p className="mt-2">{main.humidity} %</p>
        </div>
        <div className="border-r-2 border-slate-700 pr-5">
            <p className="font-bold text-3xl text-slate-400"><WiThermometer /></p>
            <p className="mt-2">{main.pressure} hPa</p>
        </div>
        <div className="border-r-2 border-slate-700 pr-5">
            <p className="font-bold text-3xl text-slate-400"><WiStrongWind /></p>
            <p className="mt-2">{wind.speed} Mps</p>
        </div>

        {rain ?
            <div className="border-r-2 border-slate-700 pr-5">
                <p className="font-bold text-3xl text-slate-400"><WiUmbrella /></p>
                <p className="mt-2">{rain['3h']} mm</p>
            </div>
            : <div className="border-r-2 border-slate-700 pr-5">
                <p className="font-bold text-3xl text-slate-400"><WiUmbrella /></p>
                <p className="mt-2">0.00 mm</p>
            </div>}

        {snow ?
            <div className="border-r-2 border-slate-700 pr-5">
                <p className="font-bold text-3xl text-slate-400"><WiSnowflakeCold /></p>
                <p className="mt-2">{snow['3h']} mm</p>
            </div>
            : <div className="border-r-2 border-slate-700 pr-5">
                <p className="font-bold text-3xl text-slate-400"><WiSnowflakeCold /></p>
                <p className="mt-2">0.00 mm</p>
            </div>}
    </div>
}