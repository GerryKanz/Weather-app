export default function data() {
    const api = {
        key: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
        baseUrl: 'https://api.openweathermap.org/data/2.5/',
        weatherMapsUrl: 'https://tile.openweathermap.org/map/'
    }
    return api
}

