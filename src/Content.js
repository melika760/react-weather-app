import React from "react";
export default function Content(){
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
              <li>  <h1 id="cityname">London</h1></li>
              <li>
                Last updated:<span id="date">Friday 06:46</span>
              </li>
              <li id="description">Clear</li>
            </ul>
          </div>
          <div className="col-4">
            <br />
            <br />
            <ul>
              <li>
                Humadity:<span id="humadity">80</span>%
              </li>
              <li>
                wind:<span id="wind">3</span>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>)
}