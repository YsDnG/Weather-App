import createElementWithText from "../component/cp-createElementWithText";
function apiFunction(city)
{
    let weather_Info;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const param = city ? city : "Clermont-ferrand"; 
    const apiBaseUrl = 'http://api.weatherstack.com/current';
    const accessKey = 'f3c0f9194f9c48c032047c6f3b0f7bd9'; 
    const url = `${proxyUrl}${apiBaseUrl}?access_key=${accessKey}&query=${param}`;
   
    return fetch( url)
    .then(response => {
        if(response.status=== 429)
        {
            document.querySelector('.Init').innerHTML ="Server request full please retry in 1hour"          
        }
        if (!response.ok) {
            throw new Error('Réponse réseau non ok');
          }
          return response.json();
    })
    .then (data =>{
        
        if(data.success !== false)
        {
        // Extract the data 
            const temperature = data.current.temperature
            const weatherDescription = data.current.weather_descriptions[0]
            const observation_time= data.current.observation_time
            const locationName = data.location.name; // Récupère le nom de la localisation
            const feelLike = data.current.feelslike
            const humidity = data.current.humidity
            const precip = data.current.precip
            const localTime = data.location.localtime;
            const windspeed = data.current.wind_speed

            return { temperature, weatherDescription, observation_time, locationName,localTime, feelLike, humidity, precip, windspeed} ;

        }
        else
        {
            return -1;
        }
            
    })
    .catch(error => {
        console.error('Erreur:',error)
        throw error;
    
    })
}

function apiFunctionWithPrevisionData(city)
{

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const param = city ? city : "Clermont-ferrand";
    const apiBaseUrl = "http://api.openweathermap.org/data/2.5/forecast?q=";
    const accessKey = '8e42f9ecec558155265d785c89d9fba0&units=metric';
    const url = `${proxyUrl}${apiBaseUrl}${param}&appid=${accessKey}`;
    

    return fetch(url)
    .then(response=>{
       
        if (!response.ok) {
            throw new Error('Réponse réseau non ok');
            return -1
          }
          return response.json();
    })
    .then(data => {
        return data;
    })
}
export {apiFunction, apiFunctionWithPrevisionData} ;


