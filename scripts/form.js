// Array of products
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Function to populate the product select
function populateProductSelect() {
  const productSelect = document.getElementById('product-name');
  
  // Populate the select with product options
  products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = `${product.name} (Rating: ${product.averagerating})`;
      productSelect.appendChild(option);
  });
}

// Update the last modified date in the footer
function updateFooterDate() {
  const yearElement = document.getElementById('currentyear');
  yearElement.textContent = new Date().getFullYear();
  const lastModifiedElement = document.getElementById('lastModified');
  lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}

// Execute when the page loads
window.onload = function() {
  populateProductSelect();
  updateFooterDate();
};

