//declare variables

const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('#description');
const forecastList = document.querySelector('#forecast-list');


const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=46.833194&lon=-71.335707&appid=42d339f8e93596e7f8966a60f85cc7d7&units=metric`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
})
.then(data => {
    //extract data
    const temperature = data.list[0].main.temp;
    const description = data.list[0].weather[0].description;
    const iconCode = data.list[0].weather[0].icon;

    //Update html
    currentTemp.textContent = `${temperature}°C`;
    weatherDescription.textContent = `${description}`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${iconCode}.png`);
    weatherIcon.setAttribute('alt', description);

    //for three day forecast
    for (let i = 1; i < 24; i += 8) {
        const forecastTime = data.list[i].dt_txt;
        const forecastTemp = data.list[i].main.temp;
        const forecastDescription = data.list[i].weather[0].description;
        
        // Create list item for forecast
        const listItem = document.createElement('li');
        listItem.textContent = `${forecastTime} \n - ${forecastTemp} \n °C - ${forecastDescription}`;
        forecastList.appendChild(listItem);
    }
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
 
