

function iconApiResponseWeather(weather_descriptions)
{
    const weatherIcon ={
        "Sunny": "sunny",
        "Partly cloudy": "partly_cloudy_day",
        "Cloudy" :"cloud",
        "Misty" :"foggy",
        "Mist":"foggy",
        "Fopggy":"foggy",
        "Overcast":"foggy",
        "Light rain":"rainy",
        "Moderate rain":"rainy",
        "Heavy rain":"rainy",
        "Shower" : "rainy_light",
        "Thunderstorm":"thunderstorm",
        "Light snow": "weather_snow",
        "Moderate snow":"weather_snow",
        "Heavy snow":"weather_snow",
        "Hail": "wheater_hail",
        "Windy": "wind_power",
        "Clear SKy":"sunny",
        "Light Drizzle And Rain" : "foggy "
    }

    return weatherIcon[weather_descriptions]
}

function iconApiResponseOpen(weather_descriptions){


    const weatherIcon={
        "clear sky": "sunny",
        "partly cloudy": "partly_cloudy_day",
        "broken clouds": "partly_cloudy_day",
        "cloudy" :"cloud",
        "overcast" :"cloud",
        "overcast clouds" :"cloud",
        "misty" :"foggy",
        "mist":"foggy",
        "fopggy":"foggy",
        "scattered clouds":"partly_cloudy_day",
        "overcast":"foggy",
        "light rain":"rainy",
        "moderate rain":"rainy",
        "heavy rain":"rainy",
        "shower" : "rainy_light",
        "thunderstorm":"thunderstorm",
        "light snow": "weather_snowy",
        "moderate snow":"weather_snowy",
        "heavy snow":"weather_snowy",
        "hail": "wheater_hail",
        "windy": "wind_power",
        "clear SKy":"sunny",
    }
    return weatherIcon[weather_descriptions]
}

export {iconApiResponseWeather,iconApiResponseOpen} ;