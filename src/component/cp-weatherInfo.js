/****** IMPORT ******/
import { VisitorOption } from 'estraverse';
import Container from './cp-container'
import createElementWithText from './cp-createElementWithText.js';
import {iconApiResponseWeather} from '../api-function/icon-api-response';
import createForm from './cp.form';
import { string } from 'postcss-selector-parser';

/************/

function createWeatherInfo(weather_Info)
{
    const weatherInfo = Container('Weather-info');
    createElementWithText("h1","Weather Application",weatherInfo,"title")
   
    if(weather_Info === -1)
    {
        document.querySelector(".title").innerText= 'Error with API DATA'
        document.querySelector(".title").classList.add("Error")
    }
    else
    {
        const weatherInfoLeft = Container('Weather-info-left', weatherInfo)
        
      
        /*variable declaration */
            const descriptionText = document.createElement('h2');
            const location = document.createElement('h3')
            const date = document.createElement('h3')
            const temperature = document.createElement('h1')
            
        /**/

        /*Weather-info-left */
            descriptionText.innerText=weather_Info.weatherDescription
            /*Formate date to get the hour of the days */
                let dateParts = weather_Info.localTime.split("-");
                let hoursDay = dateParts[2].split(" ")
                date.innerText = `${hoursDay[1]}`
            /**/
            temperature.innerHTML= weather_Info.temperature +"°C"
            location.innerText=weather_Info.locationName

        /*Append child to the left info weather part */
            weatherInfoLeft.appendChild(descriptionText)
            weatherInfoLeft.appendChild(location)
            weatherInfoLeft.appendChild(date)
            weatherInfoLeft.appendChild(temperature)
        /**/
            if(iconApiResponseWeather(weather_Info.weatherDescription))
            {
                const inconDescription = createElementWithText('span',iconApiResponseWeather(weather_Info.weatherDescription),weatherInfoLeft,"material-symbols-outlined")
                inconDescription.classList.add("Icon-description-weather")
            }

            const form = createForm(weatherInfoLeft)
            
        /**/

        /*Weather-info-right*/
        const weatherInfoRight = Container('Weather-info-right', weatherInfo)
            // data for the right info weather
                const feelLike = weather_Info.feelLike
                const humidity = weather_Info.humidity
                const precip = weather_Info.precip
                const windspeed= weather_Info.windspeed
        
        /**/
    //Feel like info
        const feelLikeWeatherinfo = Container('weather-detail-right',weatherInfoRight)
        createElementWithText('span',"thermostat",feelLikeWeatherinfo,"material-symbols-outlined")
        createElementWithText("h3","Feel Like: "+feelLike+"°C ",feelLikeWeatherinfo)
        
    //Humidity info
        const humidityWeatherInfo = Container('weather-detail-right',weatherInfoRight)
        createElementWithText('span',"humidity_percentage",humidityWeatherInfo,"material-symbols-outlined")
        createElementWithText("h3","Humidity: "+humidity,humidityWeatherInfo)
    
        const chanceOfRainInfo = Container('weather-detail-right',weatherInfoRight)
        createElementWithText('span',"rainy_light",chanceOfRainInfo,"material-symbols-outlined")
        createElementWithText("h3","Raining: "+precip + "%",chanceOfRainInfo)
    //Wind Power info
        const windSpeedInfo = Container('weather-detail-right',weatherInfoRight)
        createElementWithText('span',"wind_power",windSpeedInfo,"material-symbols-outlined")
        createElementWithText("h3","Wind: "+windspeed+" km/h",windSpeedInfo)


        /**/

    }
    
}

export default createWeatherInfo;