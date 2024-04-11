//declare variables

const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('#description');
const forecastList = document.querySelector('#forecast-list');


const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=46.833194&lon=-86.925752&appid=42d339f8e93596e7f8966a60f85cc7d7&units=metric`;

/*https://api.openweathermap.org/data/3.0/onecall?lat=20.413744&lon=-86.925752&exclude={part}&appid={API key}*/

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
})
.then(data => {
    for (let i = 0; i < 32; i += 8) { // 8 timestamps per day
        const forecastTime = new Date(data.list[i].dt_txt);
        const forecastDate = forecastTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
        const forecastTemp = data.list[i].main.temp;
        const forecastDescription = data.list[i].weather[0].description;
        const iconCode = data.list[i].weather[0].icon;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${forecastDate}</strong>
            <br>${forecastTemp} °C
            <br>${forecastDescription}
            <img src="https://openweathermap.org/img/w/${iconCode}.png" alt="Weather Icon">
            `;
        forecastList.appendChild(listItem);
    }
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
 
