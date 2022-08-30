import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
export default function Content(props){
    return(    <div>
        <div className="degree container">
          <h5 className="degreeunit">
            <span> <WeatherTemperature celsius={props.data.temperature} /></span>
          </h5>
          <WeatherIcon code={props.data.icon} size={100} />
        </div>
        <div className="row">
          <div className="col-7">
            <ul className="itemlists">
              <li>  <h1>{props.data.city}</h1></li>
              <li>
                Last updated: <span> <FormattedDate date={props.data.date} /></span>
              </li>
              <li>{props.data.description}</li>
            </ul>
          </div>
          <div className="col-5">
            <br />
            <br />
            <ul className="itemlists">
              <li>
                Humadity:<span>{props.data.humidity}</span>%
              </li>
              <li>
                wind:<span>{props.data.wind}</span>km/h
              </li>
            </ul>
          </div>
        </div>
        <WeatherForecast/>
      </div>)
}