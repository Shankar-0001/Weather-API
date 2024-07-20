import { useEffect, useState } from "react"
import axios from "axios";

export function PracticExample() {


    const [location, setLocation] = useState();

    function LoadWeather() {
        axios.get("http://api.weatherapi.com/v1/current.json?key=b13cdcc55b41458699491715242007&q=India&aqi=no").then((response) => {
            console.log()
            setLocation(response.data);
        }).catch((e) => {
            console.log(e);
        })
    }

    useEffect(() => {
        LoadWeather();
    }, [])

    if (!location) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <div className="container-fluid ">
                <div className="mt-4 p-2 text-center">
                    <h2>Weather in {location.location.name}, {location.location.country}</h2>
                    <div class="card">
                        <div className='container'>
                            <img src={location.current.condition.icon} height='300' class="card-img-top" alt="location.current.condition.text" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Last Update {location.current.last_updated} </h5>
                            <p class="card-text">Tempracture in {location.current.temp_c}°C & {location.current.temp_f}°F</p>
                            <p className="card-text">Wind {location.current.wind_kph}kph({location.current.wind_mph}mph) {location.current.wind_dir}</p>
                            <p className="card-text">Pressure {location.current.pressure_mb}MB </p> 
                            <p className="card-text">Visibility {location.current.vis_km}KM</p>
                            <p className='card-text'>Humidity {location.current.humidity} %</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}















