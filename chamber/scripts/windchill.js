function calculateWindChill() {
    // Get input values
    var temperature = parseFloat(document.getElementById('temperature').value);
    var windSpeed = parseFloat(document.getElementById('windspeed').value);

    // Validate input values
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill
        var windChill = calculateWindChillValue(temperature, windSpeed);
        // Display the result
        document.getElementById('windchill-result').textContent = "Wind Chill: " + windChill.toFixed(2) + " °F";
    } else {
        // Display "N/A" if input values do not meet the requirements
        document.getElementById('windchill-result').textContent = "N/A";
    }
}

function calculateWindChillValue(temperature, windSpeed) {
    // Calculate wind chill using the provided formula
    var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    return windChill;
}
