import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function Content(props){
    return(    <div>
        <div className="degree">
          <h5 className="degreeunit">
            <span> <WeatherTemperature celsius={props.data.temperature} /></span>
         
          </h5>
          <WeatherIcon code={props.data.icon} size={100} />
        </div>
        <div className="row">
          <div className="col-8">
            <ul>
              <li>  <h1 id="cityname">{props.data.city}</h1></li>
              <li>
                Last updated:<span id="date"> <FormattedDate date={props.data.date} /></span>
              </li>
              <li id="description">{props.data.description}</li>
            </ul>
          </div>
          <div className="col-4">
            <br />
            <br />
            <ul>
              <li>
                Humadity:<span id="humadity">{props.data.humidity}</span>%
              </li>
              <li>
                wind:<span id="wind">{props.data.wind}</span>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>)
}