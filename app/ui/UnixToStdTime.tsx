import { useWeatherData } from "./dataContext"

export default function Time(unixTime: number) {
    const { data } = useWeatherData()

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