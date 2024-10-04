
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2);
    } else {
        return 'N/A';
    }
}

const temperature = 8; 
const windSpeed = 10; 

document.getElementById('wind-chill').textContent = calculateWindChill(temperature, windSpeed);

const yearElement = document.getElementById('currentyear');
yearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;