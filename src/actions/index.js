import axios from 'axios';

var API_KEY = '975271270084a05b44b81ee7886a2b55';
//var API_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
var API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${API_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}