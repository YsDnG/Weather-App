

function iconApiResponse(weather_descriptions)
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
    }

    return weatherIcon[weather_descriptions]
}

export default iconApiResponse;