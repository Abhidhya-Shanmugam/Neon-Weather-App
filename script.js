async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "c232704a7292cd6cfb36583f017b0371";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        if (data.cod == "404") {
            alert("City not found");
            return;
        }

        document.getElementById("cityName").innerText =
            data.name;

        document.getElementById("temp").innerText =
            Math.round(data.main.temp) + "°C";

        document.getElementById("desc").innerText =
            data.weather[0].description;

        document.getElementById("humidity").innerText =
            data.main.humidity;

        document.getElementById("wind").innerText =
            data.wind.speed;

    }

    catch (error) {

        alert("Something went wrong");

        console.log(error);

    }

}