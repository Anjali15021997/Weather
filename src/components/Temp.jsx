import React from 'react'
import{
    UilTemperature,UilTear,
    UilWind,UilSun,UilSunset
}from "@iconscout/react-unicons";

function Temp()
{
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy,Rainy</p>
    </div>
    <div className="flex flex-row items-center justify-between  text-white py-3"> 
    <img src="https://www.citypng.com/public/uploads/preview/hd-cartoon-sun-with-cloud-weather-icon-png-31631359741flwt4iw3f3.png"
    alt=""
     className="w-10"
     />
     <p className="text-5xl">32°C</p>
     <div className="flex flex-col space-y-2">
        
        <div className="flex font-light text-sm items-center justify-center">
                <UilTemperature size={18} className="mr-1"/>
                Real fell:
                <span className="font-medium ml=1">32°C</span>
        </div>

        <div className="flex font-light text-sm items-center justify-center">
                <UilTear size={18} className="mr-1"/>
                Humidity:
                <span className="font-medium ml=1">65%</span>
        </div>

        <div className="flex font-light text-sm items-center justify-center">
                <UilWind size={18} className="mr-1"/>
               Wind Speed:
                <span className="font-medium ml=1">11km/h</span>
        </div>

     </div>
    </div>

    <div className="flex items-row items-center justify-center space-x-2 text-white
    text-sm py-3">
        <UilSun  size={18} className="mr-1"/>
        <p className="font-light">Rise:
        <span className="font-medium ml-1">06:45 AM
        </span></p>
         <p className="font-light"></p>

        <UilSunset  size={18} className="mr-1"/>
        <p className="font-light">Set:
        <span className="font-medium ml-1">05:45 PM
        </span></p>
        <p className="font-light"></p>

        <UilSun  size={18} className="mr-1"/>
        <p className="font-light">High:
        <span className="font-medium ml-1">40°C
        </span></p>
        <p className="font-light"></p>

        <UilSun  size={18} className="mr-1"/>
        <p className="font-light">Low:
        <span className="font-medium ml-1">45°C
        </span></p>
        <p className="font-light"></p>
         
    </div>
    </div>
  )
}

export default Temp;
