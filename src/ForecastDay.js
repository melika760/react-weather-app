import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function ForecastDay(props){
    function maxtemp(){
    let temp = Math.round(props.data.temp.max)
    return temp
    }
    function mintemp(){
        let temp = Math.round(props.data.temp.min)
        return temp
        }
    function Updateday(){
        let date = new Date(props.data.dt*1000)
        let day = date.getDay()
        let days =["SUN","MON","TUE","WED","THU","FRI","SAT"]
        return (days[day])
    }
return(<div>
    
            <div className="ForecastDay">{Updateday()}</div>
            <div className="ForecastIcon">
                <WeatherIcon code={props.data.weather[0].icon}size={48}/>
            </div>
            <div className="ForecastTemp">
                <span className="ForecastTemp-max">{maxtemp()}</span><span>°</span>
                <span className="ForecastTemp-min">{mintemp()}</span><span>°</span>
         
</div></div>
)
}