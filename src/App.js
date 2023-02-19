import "./App.css";
import { UilCloudSunRainAlt } from '@iconscout/react-unicons';
import Buttons from "./components/Buttons";
import Inputs from "./components/Inputs";
// import Time from "./components/Time";
 import Temp from "./components/Temp";
import Forecast from "./components/Forecast";
function App()
 {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br
    bg-blue-600 h-fit">   
         <UilCloudSunRainAlt  size={50} /> 
         <div>Weather App</div>
         <Buttons/>
       <Inputs/>
        {/* <Time/> */}
          <Temp/>  
          <Forecast title="Hourly Forecast"/>
        <Forecast title="Daily Forecast"/> 
         </div>
  );
    
}

export default App;
