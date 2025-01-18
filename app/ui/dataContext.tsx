"use client"
import { createContext, useContext, useState, ReactNode } from "react";
import { weatherContextType, weatherForecast } from "./interfaces";
import { Weather } from "./interfaces";


const weatherDataContext = createContext<weatherContextType | null>(null)


// The WeatherDataProvider wraps children with the provider.
export default function WeatherDataProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<Weather | null>(null);
    const [forecastData, setForecastData] = useState<weatherForecast | null>(null)

    return (
        <weatherDataContext.Provider value={{ data, setData, forecastData, setForecastData }}>
            {children}
        </weatherDataContext.Provider>
    );
}

// Custom hook to consume the context.
export const useWeatherData = (): weatherContextType => {
    const context = useContext(weatherDataContext);
    if (!context) {
        throw new Error('useData must be used within a WeatherDataProvider');
    }
    return context;
};









// export default function WeatherDataProvider({ children }: { children: ReactNode }) {
//     const [data, setData] = useState<weather | null>(null)
//     return <weatherDataContext.Provider value={{ data, setData }}>
//         {children}
//     </weatherDataContext.Provider>
// }

// export const useData = (): weatherContextType => {
//     const context = useContext(weatherDataContext);
//     if (!context) {
//         throw new Error("useData must be used within a WeatherDataProvider");
//     }
//     return context;
// };