import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { BsDropletHalf } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { IconContext } from "react-icons";
import { WiThermometer } from "react-icons/wi";
import { HiLocationMarker } from "react-icons/hi";



let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export default function Current(props) {
    return (
        <div className="weather-now container mt-1 border-bottom border-danger-subtle ">
                <div className="row">
                    <div className="col-lg-4 col-sm-12  pt-3  align-middle text-center">
                        <p className='fs-1 text-capitalize fw-bold'>
                            <IconContext.Provider value={{ color: "white" , className: "global-class-name" }}>
                            <span>
                            <HiLocationMarker/>
                            </span>
                        </IconContext.Provider><span>{props.input.city}</span></p>
                        <p className="text-white-50 ps-1">
                        <span>{days[new Date().getDay()]}</span>, 
                        <span className="day">{new Date().toLocaleString('en-GB', {day: 'numeric',
                        month: 'short',}) + ""}</span>
                        < br/>
                        <span className="time fs-5">
                        {new Date().toLocaleString('en-US', {hour: 'numeric',minute: 'numeric',hour12: true,})}</span>
                        </p>
                    </div>
                    <div className="col-lg-4 col-sm-12  pt-3 align-middle fs-4">
                    
                        <span>
                        <IconContext.Provider value={{ color: "white", size: "3em" , className: "global-class-name" }}>
                            <div>
                            <WiThermometer />{props.input.currentTemp}°C<img src={props.input.imgSrc} alt="weather icon"/>
                            </div>
                        </IconContext.Provider></span>
                        <p> {props.input.weatherDesc}</p>
                        
                    </div>

                    <div className="col-lg-4 col-sm-12 align-middle pt-5 text-center">  
                                     
                        <p><BsWind /> {props.input.windSpeed}km/h</p>
                        <p><BsDropletHalf /> {props.input.humidity}%</p>
                        {/* <p> {props.input.weatherDesc}</p> */}
                    </div>
                </div>
                
            
        </div>
        
      );
}