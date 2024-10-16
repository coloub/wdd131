// Array de productos
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Función para poblar el select de productos
function populateProductSelect() {
  const productSelect = document.getElementById('product-name');
  
  // Poblar el select con las opciones de los productos
  products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = `${product.name} (Rating: ${product.averagerating})`;
      productSelect.appendChild(option);
  });
}

// Actualizar la fecha de modificación del footer
function updateFooterDate() {
  const lastModified = document.lastModified;
  document.getElementById('last-modified').textContent = lastModified;
}

// Ejecutar al cargar la página
window.onload = function() {
  populateProductSelect();
  updateFooterDate();
};
