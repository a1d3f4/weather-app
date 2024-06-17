import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './infobox.css'
export default function Infobox({info}){
    return (<div className='infobox'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
        {/* temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feels_like:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description */}
          <p>Humidity : {info.humidity}</p>
          <p>Temp : {info.temp}</p>
          <p>TempMin : {info.tempMin}</p>
          <p>TempMax : {info.tempMax}</p>
          <p> The weather can be describes as {info.weather} feels like {info.feels_like} </p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>)
} 