import "./Search.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Searchbox({updateinfo}) {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "ddb89c97cdf59f958d28f061103192b3";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result={
            city:jsonResponse.name,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feels_like:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description

        }
        console.log(result)
        return result
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        let newinfo=await getWeatherInfo();
        updateinfo(newinfo)
        
    }

    return (
        <div className="Searchbox">
            <h3>Search for the city</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* <TextField id="city" label="City Name" variant="outlined" value={city} required onChange={handleChange} /> */}
                    <TextField id="filled-basic" label="City Name" variant="filled" value={city} required onChange={handleChange} />
                </div>
                <br />
                <br />
                <div>
                    <Button type="submit" variant="contained">Submit</Button>
                </div>
            </form>
        </div>
    );
}
