const apiKey = "d1c08bf64b4327a9ecbb68654b557783";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=";
const searchbox=document.querySelector('.searchbar')
const click = document.querySelector(".btn-conteiner");


  async function checkweather(city) {
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + 'c';
    document.querySelector(".wind").textContent = data.wind.speed + "m/s" ;
    document.querySelector(".deg").textContent = data.wind.deg;
    document.querySelector(".weather").textContent = data.weather[0].main;
    document.querySelector(".humidity").textContent =data.main.humidity+"%";
    document.querySelector(".pressure").textContent = data.main.pressure+"hPa";
    Math.trunc(data.main.temp) + "c";
    console.log(data);
    if (data.weather[0].main === "Clear") {
      document.querySelector(".midl").style.background = "url('weather\ icons/clearn.png')";
    }
    else if (data.weather[0].main === "Clouds") {
       document.querySelector(".midl").style.background = "url('weather\ icons/cloudn.png')";
    }
 else if (data.weather[0].main === "Snow") {
       document.querySelector(".midl").style.background = "url('weather\ icons/snowyy.png')";
    }

}





click.addEventListener("click", function () {
      
    
    checkweather(searchbox.value);
    



    
});
 