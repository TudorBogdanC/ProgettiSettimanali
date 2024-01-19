
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  
const [weather, setWeather] = useState([])
const [location, setLocation] = useState("")

  
function handleSearch() {
  if (location.length > 3) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ location + ",it&units=metric&APPID=409afc7f87e8fd813a8c6af03a8da3a8")
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((response) => {
        setWeather(response)
        console.log(response)
      })
  }
}

  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={(e)=> {setLocation(e.target.value)}}
        placeholder='Enter location'
        type="text"
        />
        <button className="btn btn-lg bg-transparent text-white" onClick={()=> handleSearch()}>🔎</button>
      </div>
       <div className="container"> 
         <div className="top">
           <div className="location">
             <p>{weather?.name}</p>
           </div>
           <div className="temp">
              <h1>{weather?.main.temp.toFixed()}°C</h1>
           </div>
           <div className="description">
              <p>{weather?.weather[0].description}</p>
           </div>
         </div>
         <div className="bottom">
           <div className="feel">
             <p className="bold">{weather?.main.feels_like.toFixed()}° C</p>
             <small>Feels like</small>
           </div>
           <div className="humidity">
             <p className="bold">{weather?.main.humidity}</p>
             <small>Humidity</small>
           </div>
           <div className="wind">
             <p className="bold">{weather?.wind.speed} km/h</p>
             <small>Wind Speed</small>
           </div>
         </div>
       </div>
    </div>
  )
}

export default App
