import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({});
  const [searchInput, setSearchInput] = useState('')

  const apiKEY = "6ca7c1c8c5b94f72975111744222812";
  const getWeatherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = ` http://api.weatherapi.com/v1/current.json?key=${apiKEY}&q=${cityName}`;
    axios.get(apiURL).then(res => {
      console.log("response", res.data)
      setData(res.data)
    }).catch(err => {
      console.log("err", err)
    });
  }

  useEffect(() => {
    getWeatherDetails("Delhi");
  }, [])

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }
  const handleSearch = (e) => {
    e.preventDefault();
    getWeatherDetails(searchInput)
  }

  return (
    <div className="col-md-12">
      <div className="weather-bg">
        <h1 className='heading'>Weather App</h1>
        <div className='d-grid col-4 mt-3 gap-3'>
          <input type="text" className='form-control' onChange={handleChange} />
          <button className='btn btn-primary' type='button' onClick={handleSearch}>Search CIty</button>
        </div>
      </div>
      <div className="col-md-12 mt-5 text-center">
        <div className="weatherResultBox shadow rounded">
          <img
            className='weatherIcon'
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="cloud" />
          <h5 className='weatherCity'>{data?.location?.name}</h5>
          <h6 className='weatherTemp'>{data?.current?.temp_c}°C</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
