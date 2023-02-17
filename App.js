import "bootstrap/dist/css/bootstrap.min.css";
import{UilSearch,UilLocationPoint} from "@iconscout/react-unicons";
// import Buttons from"./components/Buttons";
import React,{useEffect, useState} from "react";

 import './App.css';
     const App=()=>
   {

     const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Mumbai");
    const appid="58d40efc099cdf804da58b48f8d02de7";

    useEffect( () => {
      const fetchApi=async()=>{
const url="https://api.openweathermap.org/data/2.5/weather?q={search}&appid={API key}"

const response=await fetch(url); 
const resJson=await response.json();
setCity(resJson);
      };
      fetchApi();
    },[search])
    
    return(
    <>
     
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br">
      <div className="box">
       <h1 className="heading">Weather App</h1>
       <div>
       <img className="icon" src="https://www.citypng.com/public/uploads/preview/hd-cartoon-sun-with-cloud-weather-icon-png-31631359741flwt4iw3f3.png"/>
       </div>
       
      <div className="col-md-12" text-center mt-5>
      {/* <div className="d-grig gap-3 col-4 md-4"> */}
      {/* <button className="btn btn-primary" type="button">Search</button> */}
      {/* </div> */}
      
      <div className="inputData">
        <input
         type="search"
         placeholder="Search for city..."
        value={search}
         className="inputField" 
         onChange={(event)=>{
           setSearch(event.target.value)

         }}/>
          
         <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"
         />
         <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"
         />
         </div>
         <button className="btn btn-primary" type="button">Search</button>
       </div>
       {!city?( 
           <p className="errorMsg">No Data Found</p>
        ):(
 <div>  
     
<div className="info">
      <h2 className="location">
        <i className="fa fa-street-view"></i>{search}
      </h2>
      <h1 className="temp">
     {city.temp}
      </h1>
      <h3 className="min_max"> Min:24.9°C | Max:34.4°C </h3>
    </div>

     <div className="wave-one"></div>
    <div className="wave-two"></div>
    <div className="wave-three"></div>
   </div>
            )
      }
</div>
</div>
      </>
   )
}
 

   export default App; 
   