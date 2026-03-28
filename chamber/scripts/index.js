const apiKey = "a3f1a7378f00b000a32fe2e11c881301"; // coloque sua chave aqui
const city = "Joinville,BR";

// CURRENT WEATHER
const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

// FORECAST (3 dias)
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

// Fetch current weather
fetch(currentUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById("temp").textContent = data.main.temp.toFixed(1);
        document.getElementById("desc").textContent = data.weather[0].description;
    });

// Fetch forecast
fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        const forecastList = document.getElementById("forecast");

        // pega 1 previsão por dia (a cada 8 itens ≈ 24h)
        for (let i = 0; i < 24; i += 8) {
            const item = data.list[i];

            const date = new Date(item.dt_txt);
            const temp = item.main.temp.toFixed(1);

            const li = document.createElement("li");
            li.textContent = `${date.toDateString()}: ${temp}°C`;

            forecastList.appendChild(li);
        }
    });