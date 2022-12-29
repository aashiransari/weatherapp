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
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=${apiKEY}&q=${cityName}`;
    axios.get(apiURL).then(res => {
      console.log("response", res.data)
      setData(res.data)
    }).catch(err => {
      console.log("err", err)
    });
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }
  const handleSearch = (e) => {
    e.preventDefault();
    getWeatherDetails(searchInput)
  }
  useEffect(() => {
    getWeatherDetails("Delhi");
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-12 d-flex flex-column justify-content-around">
          <div>
            <h3 className='title'>Weather App</h3>
          </div>
          <div className='my-5'>
            <h1 className='celciusData disp'>{data?.current?.temp_c}°C</h1>
            <h2 className='cityName disp'>{data?.location?.name}</h2>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
          <div className="bgGlass">
            <div className="container d-flex flex-column">
              <div className="weatherData">
                <div className='d-flex justify-content-center align-items-center'>
                  <input type="text" onChange={handleChange} />
                  <button type='button' className='btn btn-light px-4 py-2 text-center' onClick={handleSearch}>Search</button>
                </div>
                <div className="d-flex justify-content-between">
                  <p className='text-white'>Cloud</p>
                  <p className='text-white'>{data?.current?.cloud}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className='text-white'>Humidity</p>
                  <p className='text-white'>{data?.current?.humidity}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className='text-white'>Wind Degree</p>
                  <p className='text-white'>{data?.current?.wind_degree}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className='text-white'>Wind Direction</p>
                  <p className='text-white'>{data?.current?.wind_dir}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className='text-white'>Wind Speed</p>
                  <p className='text-white'>{data?.current?.wind_kph}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className='text-white'>Gust KPH</p>
                  <p className='text-white'>{data?.current?.gust_kph}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className='text-white'>Pressure</p>
                  <p className='text-white'>{data?.current?.pressure_in}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className='text-white'>Pressure</p>
                  <p className='text-white'>{data?.current?.pressure_in}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className='text-white'>Region</p>
                  <p className='text-white'>{data?.location?.region}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
