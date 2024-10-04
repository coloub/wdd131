// Display current year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2);
    } else {
        return 'N/A';
    }
}

// Static values for temperature and wind speed
const temperature = 8; // in Celsius
const windSpeed = 10; // in km/h

// Update wind chill in the DOM
document.getElementById('wind-chill').textContent = calculateWindChill(temperature, windSpeed);
