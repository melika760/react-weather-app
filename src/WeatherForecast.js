import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props){
    const[loaded,SetLoaded] = useState(false)
    const[ForecastData,SetForecastData] = useState(null)
    useEffect(()=>{SetLoaded(false)},[props.coordinates])
    function handleResponse(response){
     SetLoaded(true)
     SetForecastData(response.data.daily)
    
    }
    
    if(loaded){ 
   return (
    <div className="WeatherForecast">
    <div className="row">
        {ForecastData.map(function(forecastdaily,index){if(index<5){return(<div className="col"key={index}>
    <ForecastDay data={forecastdaily}/></div>)}else{return null}
})}
   </div>
    </div>
     
    )}else{let apiKey="210d99196a88b9257ed8cb3535a0a0c5"
    let lat=props.coordinates.lat
    let lon =props.coordinates.lon
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse); return null}
    

}