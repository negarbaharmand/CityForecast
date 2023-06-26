import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
    import.meta.env.VITE_API_KEY
  }&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };
  return (
    <>
      <div className="app">
        <div className="search">
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Location"
            onKeyPress={searchLocation}
            type="text"
          />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp}°C</h1> : null}
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
