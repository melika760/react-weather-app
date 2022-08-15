import React from "react";
export default function Content(){
    return(    <div>
        <div class="degree">
          <h5>
            <span id="current-degree">19</span>
            <span class="units">
              <a href="/" id="celisus-link" class="active">
                °C |
              </a>
              <a href="/" id="Farenheit-link">
                °F
              </a>
            </span>
          </h5>
          <img
            id="icon"
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=""
          />
        </div>
        <div class="row">
          <div class="col-8">
            <h1 id="cityname">London</h1>
            <br />
            <ul>
              <li>
                Last updated:<span id="date">Friday 06:46</span>
              </li>
              <li id="description">Clear</li>
            </ul>
          </div>
          <div class="col-4">
            <br />
            <ul>
              <br />
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