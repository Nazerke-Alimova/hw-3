import React from "react";
import Temp from "../Temp/Temp";
import Weather from "../Weather/Weather";
import "../WeatherBox/WeatherBox.css"

export default function WeatherBox({weather}) {
    return (
        <div className="weather-box">
            <Temp temp={weather.main.temp} />
            <Weather description={weather.weather[0].main} />
        </div>
    )
}
