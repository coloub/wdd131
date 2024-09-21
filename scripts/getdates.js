// Obtiene el año actual y lo coloca en el footer
const yearElement = document.getElementById('currentyear');
yearElement.textContent = new Date().getFullYear();

// Obtiene la fecha de última modificación y la coloca en el footer
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
