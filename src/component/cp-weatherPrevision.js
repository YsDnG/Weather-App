import Container from './cp-container'
import createElementWithText from './cp-createElementWithText'
import { iconApiResponseOpen } from '../api-function/icon-api-response'


function createWeatherPrevision(data)
{

    
    
    const weatherPrevision = Container("weather-prevision")

    const prevision1 = Container('prevision-day',weatherPrevision)
    const prevision2 = Container('prevision-day',weatherPrevision)
    const prevision3 = Container('prevision-day',weatherPrevision)
    const prevision4 = Container('prevision-day',weatherPrevision)

    const days ={
        "days1" :prevision1,
        "day2": prevision2,
        "day3":prevision3,
        "days4":prevision4,
    }

    createWeatherPrevisionInfo(weatherPrevision,data,days)
   
    /*Add the day as class for the element */
        let i = 1;
        document.querySelectorAll('.prevision-day').forEach(d=> {
            d.classList.add("day-"+i);
            i++;
        })
    /**/

    descriptionByDay(data,days)


}



function descriptionByDay(data,days)
{
    const entrees = Object.entries(days);
    let dayAfter = 8 ;
    let i = 2

    entrees.forEach(([, value])=>{
        
        formatedDateByDay(data,dayAfter,value)
        //temp
        tempValue(data,dayAfter,value)
        //description
        descriptionValue(data,dayAfter,value)
        dayAfter = 8*i;
        i++
    })
}
function formatedDateByDay(data,day,element)
{
    const date = data.list[day].dt_txt
    
    const dateFormated = date.split("-")
    const dateDay = dateFormated[2].split(' ')
    
    // Create date with date of the data)
    const dateTest = new Date(date.split(" ")[0]); // Vous pouvez spécifier votre propre date ici

    const weekDay = dateTest.getDay();
    
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const dayName = days[weekDay];

    const dateForPrevision = createElementWithText("h3",`${dayName} \n ${dateDay[0]}/${dateFormated[1]}`,element)
    dateForPrevision.style.textAlign = "center"
    
}

function descriptionByHour(data,days)
{
    const entrees = Object.entries(days);
    let dayAfter = 0;
    let i = 1

    entrees.forEach(([, value])=>{
        
        formatedDateByHour(data,dayAfter,value)
        //temp
         tempValue(data,dayAfter,value)
        // //description
         descriptionValue(data,dayAfter,value)
        dayAfter = i++;
        
    })
}
function formatedDateByHour(data,day,element)
{
     const date = data.list[day].dt_txt
    const dateSplit = date.split(' ');
    const dateHour = dateSplit[1];
    const dateHourSplit = dateHour.split(':')
    const dateDisply = dateHourSplit[0]+"h"
    const dateForPrevision = createElementWithText("h3",dateDisply,element)
    
}


function createWeatherPrevisionInfo(element,data,days)
{
    const previsionType = Container('Prevision-type',element);
    const btnDaily = createElementWithText('button',"Daily",previsionType,"btn-prevision-type");
    const btnHourly =createElementWithText('button',"Hourly",previsionType,"btn-prevision-type");

    btnDaily.classList.add("focus")
    btnDaily.addEventListener('click',(e)=>{
        e.preventDefault(); 
        btnHourly.classList.remove("focus")
        btnDaily.classList.add("focus")
        clearWeatherPrevision(days)
        descriptionByDay(data,days)
    })
    
    btnHourly.addEventListener('click',(e)=>{
        e.preventDefault(); 
        btnDaily.classList.remove("focus")
        btnHourly.classList.add("focus")
        clearWeatherPrevision(days)
        descriptionByHour(data,days)

    })


}

/*Clear elements to display weatherPrevisions new values */
function clearWeatherPrevision(days)
{
 
     const entrees = Object.entries(days);
     entrees.forEach(([, value])=>{
         value.innerHTML= " "
         })
}



function tempValue(data,day,element)
{
    
    const temperature = Math.round(data.list[day].main.temp)
    createElementWithText("h3",temperature+"°C",element)
}
/*Make description for the Day */
function descriptionValue(data,day,element)
{
    
    let description = data.list[day].weather[0].description
    const previsionDescription = createElementWithText("h3",description,element,"prevision-description")
    
    if(iconApiResponseOpen(description))
            {
                
                const inconDescription = createElementWithText('span',iconApiResponseOpen(description),previsionDescription,"material-symbols-outlined")
                inconDescription.classList.add("Icon-description-weather")
            }
}




export default createWeatherPrevision;