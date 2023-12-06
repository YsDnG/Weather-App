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
    
    // setTimeout(()=>{
    //     document.querySelector('.form-city').addEventListener('submit',(e)=>{
    //         e.preventDefault();
    //         document.getElementById('app').innerHTML=''
    //         let formData= new FormData(e.target)
            
    //         apiFunction("http://api.weatherstack.com/current?access_key=40982dd51b2225157ed02cbde6036642&query="+formData.get('city'))
    //         .then(data => {
    //             console.log(data)
    //             if(data === -1)
    //             {
    //                 apiFunction()
    //                 .then(weather_Info=>{
    //                      createWeatherInfo(weather_Info);
    //                      createElementWithText('h3',"Error with the city name",document.querySelector(".Weather-info-left"),"Error")
    //                 })
    //                 apiFunctionWithPrevisionData()
    //                 .then(data =>{
    //                     createWeatherPrevision(data)
    //                 })

    //             }

    //             else
    //                 createWeatherInfo(data)
    //         })
    //         .catch(error => {
    //             console.error('Erreur:',error)
    //             throw error;
    //         })
    //         apiFunctionWithPrevisionData("http://api.openweathermap.org/data/2.5/forecast?q="+formData.get('city')+"&appid=8e42f9ecec558155265d785c89d9fba0&units=metric")
    //         .then(data=>{
    
    //             createWeatherPrevision(data)
    //         })

    //     })
    // },0)

})




apiFunctionWithPrevisionData()
.then(data=>{
    
    createWeatherPrevision(data)
})










