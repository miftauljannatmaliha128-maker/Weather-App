const apiKey = "e10ce1aba8d64921b7f20553263107";

async function getWeather() {

    const city = document.getElementById("cityInput").value.trim();

    if(city===""){

        alert("Please enter a city name.");

        return;

    }

    const url=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try{

        const response=await fetch(url);

        const data=await response.json();

        if(data.error){

            alert("City not found!");

            return;

        }

        document.getElementById("city").textContent=data.location.name;

        document.getElementById("temperature").textContent=data.current.temp_c+" °C";

        document.getElementById("humidity").textContent=data.current.humidity+" %";

        document.getElementById("uv").textContent=data.current.uv;

        document.getElementById("wind").textContent=data.current.wind_kph+" km/h";

        document.getElementById("weatherCard").style.display="block";

    }

    catch(error){

        alert("Something went wrong!");

        console.log(error);

    }

}

function resetApp(){

    document.getElementById("cityInput").value="";

    document.getElementById("city").textContent="--";

    document.getElementById("temperature").textContent="--";

    document.getElementById("humidity").textContent="--";

    document.getElementById("uv").textContent="--";

    document.getElementById("wind").textContent="--";

    document.getElementById("weatherCard").style.display="none";

}