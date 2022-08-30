import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecast(){
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="ForecastDay">THU</div>
                    <div className="ForecastIcon">
                        <WeatherIcon code="01d"size={48}/>
                    </div>
                    <div className="ForecastTemp">
                        <span className="ForecastTemp-max">19°</span>
                        <span className="ForecastTemp-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}