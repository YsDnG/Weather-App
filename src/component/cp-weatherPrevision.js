import Container from './cp-container'
import createElementWithText from './cp-createElementWithText'


function createWeatherPrevision(data)
{

    console.log(data)
    const dayafter = 8
    const weatherPrevision = Container("weather-prevision")
    const day1 = Container('prevision-day',weatherPrevision)
    const day2 = Container('prevision-day',weatherPrevision)
    const day3 = Container('prevision-day',weatherPrevision)
    const day4 = Container('prevision-day',weatherPrevision)

/*prevision day 1*/
    //date
    formatedDate(data,dayafter,day1)
    //temp
    tempForDay(data,dayafter,day1)
    //description
    descriptionForDay(data,dayafter,day1)
/*prevision day 2*/
    //date
    formatedDate(data,dayafter*2,day2)
    //temp
    tempForDay(data,dayafter*2,day2)
    //description
    descriptionForDay(data,dayafter*2,day2)

/*prevision day 3*/
    //date
    formatedDate(data,dayafter*3,day3)
    //temp
    tempForDay(data,dayafter*3,day3)
    //description
    descriptionForDay(data,dayafter*3,day3)

/*prevision day 4*/
    //date
    formatedDate(data,dayafter*4,day4)
    //temp
    tempForDay(data,dayafter*4,day4)
    //description
    descriptionForDay(data,dayafter*4,day4)  

}

function formatedDate(data,day,element)
{
    const date = data.list[day].dt_txt
    const dateFormated = date.split("-")
    const dateDay = dateFormated[2].split(' ')
    createElementWithText("h1",`${dateDay[0]}/${dateFormated[1]}`,element)
}

function tempForDay(data,day,element)
{
    
    const temperature = Math.round(data.list[day].main.temp)
    createElementWithText("h3",temperature+"°C",element)
}

function descriptionForDay(data,day,element)
{
    let description = data.list[day].weather[0].description
    createElementWithText("h3",description,element)

}

export default createWeatherPrevision;