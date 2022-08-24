import React from "react";
import FormattedDate from "./FormattedDate";
export default function Content(props){
    return(    <div className=" container">
        <div className="degree">
          <h5 className="degreeunit">
            <span>19</span>
            <span className="units">
              <a href="/" id="celisus-link" class="active">
                °C |
              </a>
              <a href="/" id="Farenheit-link">
                °F
              </a>
            </span>
          </h5>
          <img
            className="icon"
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=""
          />
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