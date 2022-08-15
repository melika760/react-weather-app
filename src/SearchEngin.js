import React,{useState}  from "react";
import axios from "axios";
import Content from "./Content";
export default function SearchEngin(){
const[city,SetCity]= useState("")
const[Weather,SetWeather]= useState({ready:false})
function handleresponse(response){
    console.log(response.data)
    SetWeather({
    temp : response.data.main.temp,
    humidity : response.data.main.humidity,
    description: response.data.weather[0].description,
    wind : response.data.wind.speed,
    icon: response.data.weather[0].icon,
    city: response.data.name,
    })
}
function handleCityChange(event){
SetCity(event.target.value)
}
function handleSubmit(event){
    event.preventDefault();
    search()

}
function search()
{
let ApiKey = "1e9fb88fe728a434cb6268bdccba077b";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
axios.get(apiUrl).then(handleresponse);}
    return(  
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
<Content data={Weather}/>
 </div>)
}