
export interface Weather {
    sys: { [key: string]: number },
    rain: { [key: string]: number },
    snow: { [key: string]: number },
    wind: { [key: string]: number },
    main: { [key: string]: number },
    weather: Array<{ [key: string]: number | string }>
    name: string
    timezone: number
    dt_txt: string
    dt: number

}

export interface ChildProps {
    sendCondition: (data: string) => void;
}


export interface weatherForecast {
    list: Weather[]
}

export interface weatherContextType {
    data: Weather | null;
    forecastData: weatherForecast | null;
    setForecastData: React.Dispatch<React.SetStateAction<weatherForecast | null>>;
    setData: React.Dispatch<React.SetStateAction<Weather | null>>;
}