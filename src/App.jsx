import { useState } from "react";
// import axios from axios;

function App() {
  //const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${import.meta.env.VITE_API_KEY} `;
  return (
    <>
      <div className="app">
        <div className="container">
          <div className="top">
            <div className="location">
              <p>Växjö</p>
            </div>
            <div className="temp">
              <h1 className="bold">23°C</h1>
            </div>
            <div className="description">
              <p>Clouds</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feel">
              <p>60°F</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className="bold"> 20%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">12 MPH</p>
              <p>Wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
