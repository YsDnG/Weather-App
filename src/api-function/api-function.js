
function apiFunction(url)
{
    let weather_Info;
    const defaultUrl = "http://api.weatherstack.com/current?access_key=40982dd51b2225157ed02cbde6036642&query=Clermont-Ferrand";
    return fetch(url || defaultUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Réponse réseau non ok');
          }
          return response.json();
    })
    .then (data =>{
        console.log(data)
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

function apiFunctionWithPrevisionData(url)
{
    const defaultUrl = "http://api.openweathermap.org/data/2.5/forecast?q=Clermont-Ferrand&appid=8e42f9ecec558155265d785c89d9fba0&units=metric"
    return fetch(url || defaultUrl)
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


