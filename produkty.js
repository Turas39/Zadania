const products = [
    { name: 'myszka', price: 350, category: 'elektronika' },
    { name: 'klawiatura', price: 540, category: 'elektronika' },
    { name: 'bluza', price: 170, category: 'ubrania' },
    { name: 'spodnie', price: 150, category: 'ubrania' },
    { name: 'kaktus', price: 20, category: 'rośliny' },
    { name: 'laptop', price: 4000, category: 'elektronika' }
  ];
  

  function filterProducts(products, selectedCategory, minPrice, maxPrice) {
    return products
      .filter(product => {
        const { category, price } = product;
        return (!selectedCategory || category === selectedCategory) &&
          (!minPrice || price >= minPrice) &&
          (!maxPrice || price <= maxPrice);
      });
  }
  

  function displayProducts(filteredProducts) {
    if (filteredProducts.length === 0) {
      console.log('Brak produktów które spełniają te kryteria');
      return;
    }
  
    console.log('Produkty spełniające kryteria:');
    filteredProducts.forEach(({ name, price, category }) => {
      console.log(`- ${name} (Kategoria: ${category}, Cena: ${price} PLN)`);
    });
  }
  

  const selectedCategory = 'elektronika';
  const minPrice = 500;
  const maxPrice = 4000;
  
  const filteredProducts = filterProducts(products, selectedCategory, minPrice, maxPrice);
  displayProducts(filteredProducts);