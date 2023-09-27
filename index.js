
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1fd74ab7ffmshe97903de5aac760p120e83jsnc2c7c3423026',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
const getweather = (city)=>{
  // let user = document.getElementById('mysearch');
  // user.addEventListener('click',(event)=>{
    
  //   // e.preventDefault();
  //   getweather(city.value)
  // })
  // console.log(user.value + "hiii");
  cityName.innerHTML = city


//  document.write(user)
  // user.textContent = user.city
  // console.log(user.value = user.city);
// let userserachedcity = user;
// let cityheading = document.querySelectorAll("h1").value = userserachedcity
// cityheading.innerHTML;
  // node.innerHTML= city
fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
  .then(response => response.json())
  .then(response => {
     console.log(response);
     if (response.temp == undefined) {
      // alert("Enter the valid city");
      // console.log("Enter a valid city");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter a valid city!',
      })
      
    }
    // console.log(response.cloud_pct);
    // 2  aprocache  of doing this
    //  let cp = document.querySelectorAll("#cloud_pct").value = cloud_pct
    // cp.innerHTML = response.cloud_pct
    // let cp = document.getElementById("cloud_pct").value = cloud_pct
    // cp.innerHTML = response.cloud_pct
   
    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML= response.temp
    feels_like.innerHTML  = response.feels_like
    humidity.innerHTML= response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
   sunrise.innerHTML = response.sunrise
   sunset.innerHTML = response.sunset

  })
  .catch(error => {
   console.error(error)
    
  });
}
// let user = document.getElementById("mysearch");
submit.addEventListener("click",(e)=>{
   
   e.preventDefault();
   getweather(city.value)
 })
//  console.log(user.value + "hiii");
// getweather()

// submit.addEventListener("click",(e)=>{
//   e.preventDefault();
//   getweather(city.value)
// })

getweather("Mumbai")



function BostWeather()
{

  let url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston"
  fetch(url,options)
  .then(response => response.json())
  .then(response=>{
    // console.log("Boston")
    // console.log( response);
    BostCloud_pct.innerHTML = response.cloud_pct
    BostTemp.innerHTML= response.temp
    BostFeels_like.innerHTML  = response.feels_like
    BostHumidity.innerHTML= response.humidity
    BostMin_Temp.innerHTML = response.min_temp
    BostMax_Temp.innerHTML = response.max_temp
    BostWind_Speed.innerHTML = response.wind_speed
    BostWind_Degrees.innerHTML = response.wind_degrees
    BostSunrise.innerHTML = response.sunrise
    BostSunset.innerHTML = response.sunset
  })
}
BostWeather()

function DelhiWeather()
{

  let url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi"
  fetch(url,options)
  .then(response => response.json())
  .then(response=>{
    // console.log("Delhi")
    // console.log( response);
    DelhiCloud_pct.innerHTML = response.cloud_pct
    DelhiTemp.innerHTML= response.temp
    DelhiFeels_like.innerHTML  = response.feels_like
    DelhiHumidity.innerHTML= response.humidity
    DelhiMin_Temp.innerHTML = response.min_temp
    DelhiMax_Temp.innerHTML = response.max_temp
    DelhiWind_Speed.innerHTML = response.wind_speed
    DelhiWind_Degrees.innerHTML = response.wind_degrees
    DelhiSunrise.innerHTML = response.sunrise
    DelhiSunset.innerHTML = response.sunset
  })
}
DelhiWeather()

function JaipurWeather()
{

  let url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur"
  fetch(url,options)
  .then(response => response.json())
  .then(response=>{
    // console.log("Jaipur")
    // console.log( response);
    JaipurCloud_pct.innerHTML = response.cloud_pct
    JaipurTemp.innerHTML= response.temp
    JaipurFeels_like.innerHTML  = response.feels_like
    JaipurHumidity.innerHTML= response.humidity
    JaipurMin_Temp.innerHTML = response.min_temp
    JaipurMax_Temp.innerHTML = response.max_temp
    JaipurWind_Speed.innerHTML = response.wind_speed
    JaipurWind_Degrees.innerHTML = response.wind_degrees
    JaipurSunrise.innerHTML = response.sunrise
    JaipurSunset.innerHTML = response.sunset
  })
}
JaipurWeather()
function GoaWeather()
{

  let url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Goa"
  fetch(url,options)
  .then(response => response.json())
  .then(response=>{
    // console.log("Goa")
    // console.log( response);
    GoaCloud_pct.innerHTML = response.cloud_pct
    GoaTemp.innerHTML= response.temp
    GoaFeels_like.innerHTML  = response.feels_like
    GoaHumidity.innerHTML= response.humidity
    GoaMin_Temp.innerHTML = response.min_temp
    GoaMax_Temp.innerHTML = response.max_temp
    GoaWind_Speed.innerHTML = response.wind_speed
    GoaWind_Degrees.innerHTML = response.wind_degrees
    GoaSunrise.innerHTML = response.sunrise
    GoaSunset.innerHTML = response.sunset
  })
}
GoaWeather()
function parisWeather()
{

  let url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris"
  fetch(url,options)
  .then(response => response.json())
  .then(response=>{
    // console.log("Goa")
    // console.log( response);
    parisCloud_pct.innerHTML = response.cloud_pct
    parisTemp.innerHTML= response.temp
    parisFeels_like.innerHTML  = response.feels_like
    parisHumidity.innerHTML= response.humidity
    parisMin_Temp.innerHTML = response.min_temp
    parisMax_Temp.innerHTML = response.max_temp
    parisWind_Speed.innerHTML = response.wind_speed
    parisWind_Degrees.innerHTML = response.wind_degrees
    parisSunrise.innerHTML = response.sunrise
    parisSunset.innerHTML = response.sunset
  })
}
parisWeather()

function LondonWeather()
{

  let url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London"
  fetch(url,options)
  .then(response => response.json())
  .then(response=>{
    // console.log("Goa")
    // console.log( response);
    LondonCloud_pct.innerHTML = response.cloud_pct
    LondonTemp.innerHTML= response.temp
    LondonFeels_like.innerHTML  = response.feels_like
    LondonHumidity.innerHTML= response.humidity
    LondonMin_Temp.innerHTML = response.min_temp
    LondonMax_Temp.innerHTML = response.max_temp
    LondonWind_Speed.innerHTML = response.wind_speed
    LondonWind_Degrees.innerHTML = response.wind_degrees
    LondonSunrise.innerHTML = response.sunrise
    LondonSunset.innerHTML = response.sunset
  })
}
LondonWeather()