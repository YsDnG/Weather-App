import createWeatherPrevision from "./cp-weatherPrevision";
import createWeatherInfo from "./cp-weatherInfo";
import { apiFunction, apiFunctionWithPrevisionData} from "../api-function/api-function";
function createForm(element)
{
    const form = document.createElement('form');
    form.classList.add("form-city")
    form.setAttribute('method',"post");
    const inputCity =document.createElement('input');
    inputCity.setAttribute('type','text');
    inputCity.setAttribute('name','city');
    inputCity.setAttribute('placeholder',"Search City");

    const btnSubmit = document.createElement('button')
    btnSubmit.setAttribute('type',"submit")
    btnSubmit.innerHTML = '<span class="material-symbols-outlined">search</span>'

       
     form.addEventListener('submit',(e)=>{
        e.preventDefault();
        document.getElementById('app').innerHTML=''
        let formData= new FormData(e.target)
                
        apiFunction("http://api.weatherstack.com/current?access_key=40982dd51b2225157ed02cbde6036642&query="+formData.get('city'))
            .then(data => {
                console.log(data)
                if(data === -1)
                {
                     apiFunction()
                    .then(weather_Info=>{
                             createWeatherInfo(weather_Info);
                             createElementWithText('h3',"Error with the city name",document.querySelector(".Weather-info-left"),"Error")
                    })
                    apiFunctionWithPrevisionData()
                    .then(data =>{
                            createWeatherPrevision(data)
                        })   
                    }
                    else
                    createWeatherInfo(data)
            })
            .catch(error => {
                console.error('Erreur:',error)
                throw error;
            })
        apiFunctionWithPrevisionData("http://api.openweathermap.org/data/2.5/forecast?q="+formData.get('city')+"&appid=8e42f9ecec558155265d785c89d9fba0&units=metric")
            .then(data=>{
    
                createWeatherPrevision(data)
            })
    
        })
        
    


    form.appendChild(inputCity)
    form.appendChild(btnSubmit)
    element.appendChild(form)

     return form

    }

    export default createForm;