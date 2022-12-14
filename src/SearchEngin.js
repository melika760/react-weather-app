import React,{useState}  from "react";
import axios from "axios";
import Content from "./Content";
import "./Weather.css"
import WeatherForecast from "./WeatherForecast";
export default function SearchEngin(props){
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "1e9fb88fe728a434cb6268bdccba077b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready){return(  
     <div className=" weather-app">
    <form onSubmit={handleSubmit}>
     <div className="row">
       <div className="col-9">
         <input
           type="search"
           placeholder="Enter a city.."
           className="form-control"
           autoFocus="on"
           onChange={handleCityChange}
         />
       </div>
       <div className="col-3">
         <input
           type="submit"
           value="Search"
           className="btn btn-warning w-100"
         />
       </div>
     </div>
   </form>
<Content data={weatherData}/>
<WeatherForecast coordinates={weatherData.coordinates}/>
<br/>
<br/>
 </div>)
}else {
  search();
  return "Loading...";
}}