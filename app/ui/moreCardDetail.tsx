"use client"
import { Weather } from "./interfaces"
import { WiHumidity, WiUmbrella, WiThermometer, WiStrongWind, WiSnowflakeCold } from "react-icons/wi";

export default function MoreCardDetail({ main, wind, rain, snow }: Weather) {

    return <div className="flex flex-row justify-evenly border-t border-slate-700 pt-4 font-manrope text-black text-center mt-5 text-sm md:text-base
">

        <div className="border-r border-slate-700 pr-2">
            <p className="font-bold text-3xl text-slate-400"><WiHumidity /></p>
            <p className="mt-2">{main.humidity} %</p>
        </div>
        <div className="border-r border-slate-700 pr-2">
            <p className="font-bold text-3xl text-slate-400"><WiThermometer /></p>
            <p className="mt-2">{main.pressure} hPa</p>
        </div>
        <div className="border-r border-slate-700 pr-2">
            <p className="font-bold text-3xl text-slate-400"><WiStrongWind /></p>
            <p className="mt-2">{wind.speed} Mps</p>
        </div>

        {rain ?
            <div className="border-r border-slate-700 pr-2">
                <p className="font-bold text-3xl text-slate-400"><WiUmbrella /></p>
                <p className="mt-2">{rain['3h']} mm</p>
            </div>
            : <div className="border-r border-slate-700 pr-2">
                <p className="font-bold text-3xl text-slate-400"><WiUmbrella /></p>
                <p className="mt-2">0.00 mm</p>
            </div>}

        {snow ?
            <div className="border-r border-slate-700 pr-2">
                <p className="font-bold text-3xl text-slate-400"><WiSnowflakeCold /></p>
                <p className="mt-2">{snow['3h']} mm</p>
            </div>
            : <div className="border-r border-slate-700 pr-2">
                <p className="font-bold text-3xl text-slate-400"><WiSnowflakeCold /></p>
                <p className="mt-2">0.00 mm</p>
            </div>}
    </div>
}