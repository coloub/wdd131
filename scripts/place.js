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

// Obtiene el año actual y lo coloca en el footer
const yearElement = document.getElementById('currentyear');
yearElement.textContent = new Date().getFullYear();

// Obtiene la fecha de última modificación y la coloca en el footer
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;