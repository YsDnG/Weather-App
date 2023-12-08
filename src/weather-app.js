/****** IMPORT ******/

import createWeatherInfo from './component/cp-weatherInfo'
import {apiFunction , apiFunctionWithPrevisionData} from './api-function/api-function';
import Container from "./component/cp-container";
import createWeatherPrevision from './component/cp-weatherPrevision';
import createElementWithText from './component/cp-createElementWithText';


/************/





fetch('https://cors-anywhere.herokuapp.com/')
  .then(response => {
    if (!response.ok) 
      throw new Error('Cors-anywhere is not reachable at the moment');
    
    /*WeatherStack api information for the day  */
        apiFunction()
            .then(weather_Info=>{

                createWeatherInfo(weather_Info);
                document.querySelector('.Init').style.display = "none";

                
        })
        .catch(error => {
            console.error('WeatherStack API:', error);
              document.querySelector('.Init').innerHTML = "WeatherStack API:"+error;
        })
     /*OpenWeather api information for the previson for the next 4 days  */    
        apiFunctionWithPrevisionData()
            .then(data=>{
                  createWeatherPrevision(data)
              })
            .catch(error => {
                console.error('OpenWeather API:', error);
                  document.querySelector('.Init').innerHTML = "OpenWeather API:"+error;
            
            })
    })
    .catch(error => {
    console.error('Error:', error);
    if (error.message === 'Cors-anywhere is not reachable at the moment') {
      document.querySelector('.Init').innerHTML = error.message;
    }
  });












