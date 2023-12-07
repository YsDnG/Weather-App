
function apiFunction(param)
{
    let weather_Info;
   
    const url = param ? `http://localhost:3000/weather?api=weatherstack&query=${param}`:`http://localhost:3000/weather?api=weatherstack `
    return fetch( url)
    .then(response => {
        
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

function apiFunctionWithPrevisionData(param)
{
    const url = param ? `http://localhost:3000/weather?api=openweather&query=${param}`:"http://localhost:3000/weather?api=openweather" 
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


