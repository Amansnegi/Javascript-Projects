const products = [
  { name: 'T-Shirt', category: 'clothing' },
  { name: 'Jeans', category: 'clothing' },
  { name: 'Headphones', category: 'electronics' },
  { name: 'Smartphone', category: 'electronics' },
  { name: 'Novel', category: 'books' },
  { name: 'Cookbook', category: 'books' }
];

const filterDropdown = document.getElementById('category-filter');
const productListContainer = document.getElementById('product-list');

function renderProducts(filteredProducts) {

  productListContainer.innerHTML = '';
  
  filteredProducts.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.textContent = product.name;
    productListContainer.appendChild(productItem);
  });
}

filterDropdown.addEventListener('change', (event) => {
  const selectedCategory = event.target.value;
  

  const filtered = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);
  renderProducts(filtered);
});
renderProducts(products);