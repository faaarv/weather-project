import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { BsDropletHalf } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { IconContext } from "react-icons";
import { WiThermometer } from "react-icons/wi";



let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export default function Current(props) {
    return (
        <div className="weather-now mt-1">
                <div className="row">
                    <div className="col-4 pt-3 ps-sm-3 align-middle text-start">
                        <p className='fs-1 text-capitalize '>{props.input.city}</p>
                        <p className="text-muted ps-1">
                        <span>{days[new Date().getDay()]}</span>, 
                        <span className="day">{new Date().toLocaleString('en-GB', {day: 'numeric',
                        month: 'short',}) + ""}</span>
                        < br/>
                        <span className="time ">
                        {new Date().toLocaleString('en-US', {hour: 'numeric',minute: 'numeric',hour12: true,})}</span>
                        </p>
                    </div>
                    <div className="col-4 pt-3 align-middle">
                    
                        <span>
                        <IconContext.Provider value={{ color: " black", size: "3em" , className: "global-class-name" }}>
                            <div>
                            <WiThermometer />{props.input.currentTemp}°C<img src={props.input.imgSrc} alt="weather icon"/>
                            </div>
                        </IconContext.Provider></span>
                        
                    </div>

                    <div className="col-4 align-middle pt-3 text-center">                   
                        <p><BsWind /> {props.input.windSpeed}km/h</p>
                        <p><BsDropletHalf /> {props.input.humidity}%</p>
                        <p> {props.input.weatherDesc}</p>
                    </div>
                </div>
                
            
        </div>
        
      );
}