import React from "react"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import Current from "./Current"
import parse from 'html-react-parser';
import { MagnifyingGlass } from "react-loader-spinner";

let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];

export default function Weather(){
    let [city,setCity] = useState("oslo")
    let [info, setInfo] = useState({ready:false});
    let [forecastElment, setforecastElment] = useState(null)

    function handleResponse(response){
        setInfo({
            ready: true,
            city : response.data.city ,
            currentTemp : Math.round(response.data.temperature.current),
            windSpeed : response.data.wind.speed ,
            humidity : response.data.temperature.humidity,
            weatherDesc : response.data.condition.description,
            imgSrc :`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`

        })
    }

    function handleForecastResponse(response){
        forecastElment = `<div className="row gap-1  ">`
        let i=1
        while (i<7) {
            let forcasteDate = new Date(response.data.daily[i].time*1000)
            forecastElment = forecastElment + `<div className="col shadow p-3 ">
            <div className="card-header">${days[forcasteDate.getDay()]}</div>
            <div className="card-body"><img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[i].condition.icon}.png" alt=""></div>
            <div className="card-footer">${Math.round(response.data.daily[i].temperature.minimum)}°C \xa0 <strong>${Math.round(response.data.daily[i].temperature.maximum)}°C</strong>  </div>
            </div>`
            i++}
        forecastElment = forecastElment + `</div>`;
        setforecastElment(parse(forecastElment))
    return parse(forecastElment)
    }
    
    function callApi(){
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=7386080a2f6318d17ebb9t1f5453o70f`;
        let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=7386080a2f6318d17ebb9t1f5453o70f`
        axios.get(apiUrl).then(handleResponse);
        axios.get(forecastApiUrl).then(handleForecastResponse);
    }
    function handleCityInput(event){
        setCity(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault()
        callApi()
    }
    if (info.ready){
        return (
            <div className="container">
            <div className="search-box">
                <form className="d-flex" role="search" onSubmit={handleSubmit}>
                  <input
                    className="form-control me-2 city-input"
                    type="search"
                    placeholder="Search for a city"
                    aria-label="Search"
                    onChange={handleCityInput}
                  />
                  <button
                    className="btn btn-outline-danger btn-light search-button"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
            </div>
            <div className="weather-now mt-1">
                <Current input={info} />
                 <div className="mt-3 text-center" > 
                 {forecastElment}
                 </div>    
            </div>
            </div>
          );

    } else {
        callApi()
        return (
            <div>
                <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor="#c0efff"
                color="#e15b64"/>
            </div>
            
        )
    }
}