//declare variables

const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('#description');

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=46.833194&lon=-71.335707&appid=42d339f8e93596e7f8966a60f85cc7d7`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
})
.then(data => {
    //extract data
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    //Update html
    currentTemp.textContent = `${temperature}°C`;
    weatherDescription.textContent = `${description}`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${iconCode}.png`);
    weatherIcon.setAttribute('alt', description);
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
 
