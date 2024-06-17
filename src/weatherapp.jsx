import Searchbox from './search';
import Infobox from './infobox';
import { useState } from 'react';
export default function Weatherapp(){
    const [weatherinfo , setweatherinfo]=useState({
        city: "New York",
        temp: 25.3,
        tempMin: 22.1,
        tempMax: 28.4,
        humidity: 65,
        feels_like: 26.5,
        weather: "clear sky"
    }
    )
    let updateinfo=(newinfo)=>{
        setweatherinfo(newinfo)
    }
    return(
        <>
        <Searchbox updateinfo={updateinfo}/>
        <Infobox info={weatherinfo}/>
        </>
    )
}