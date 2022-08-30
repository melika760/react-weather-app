import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
export default function WeatherForecast(props){
    function handleResponse(response){
     console.log(response.data);
    }
    let apiKey="1e9fb88fe728a434cb6268bdccba077b"
    let lat=props.coordinates.lat
    let lon =props.coordinates.lon
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
    axios.get(apiUrl).then(handleResponse)
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