import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarImport from '../src/navbar/Navbar';
import CardClime from './card/Card';

import { useState } from 'react';

import axios from "axios"

import './App.css'

function App() {
  const [data,setData] = useState({})
  const [lat,setLat] = useState('')
  const [lon, setLon] = useState('') 

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=030d8e48ecc9d84622d872a156cc1e7d&units=metric`

  const urlCity = `http://api.openweathermap.org/geo/1.0/direct?q=Merida,Ve&limit=5&appid=030d8e48ecc9d84622d872a156cc1e7d`

  const searchLocation = (event) => {
    event.preventDefault();
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })

  }

  

  return (
    <div className='app'>
      <NavbarImport/>
      <div className="search">
        <form onSubmit={searchLocation}>
        <input 
          value={lon}
          type="text" 
          onChange={event => setLon(event.target.value)}
          placeholder="Ingresa Longitud"

        />
        <input 
          value={lat}
          type="text" 
          onChange={event => setLat(event.target.value)}
          placeholder="Ingresa Latitud"
        />
        <input type="submit" value="Buscar" />
        </form>
      </div>
      <div className='contain'>
        <div  className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp} C</h1>: null}
            
          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].description}</p>: null }
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
          {data.main ? <p className='bold'>{data.main.feels_like} C</p>: null}
            <p>Se siente</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p>: null }
           <p>Humedad</p>
          </div>
          <div className="wind">
          {data.wind ? <p className='bold'>{data.wind.speed}</p>: null }
            <p>Viento</p>
          </div>
          <div className="wind">
          {data.sys ? <p className='bold'>{data.sys.country}</p>: null }
            <p>Country</p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App
