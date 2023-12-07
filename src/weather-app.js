/****** IMPORT ******/

import createWeatherInfo from './component/cp-weatherInfo'
import {apiFunction , apiFunctionWithPrevisionData} from './api-function/api-function';
import Container from "./component/cp-container";
import createWeatherPrevision from './component/cp-weatherPrevision';
import createElementWithText from './component/cp-createElementWithText';


/************/



apiFunction()
.then(weather_Info=>{
    createWeatherInfo(weather_Info);
})


apiFunctionWithPrevisionData()
.then(data=>{
    createWeatherPrevision(data)
})










