
class Cart {
    constructor() {
      this.products = []; 
    }
  
  
    addProduct(name, price, quantity) {
      const existingProductIndex = this.products.findIndex(
        (product) => product.name === name
      );
  
      if (existingProductIndex !== -1) {
        this.products[existingProductIndex] = {
          ...this.products[existingProductIndex],
          quantity: this.products[existingProductIndex].quantity + quantity,
        };
      } else {
        this.products = [
          ...this.products,
          { name, price, quantity },
        ];
      }
  
      console.log(`Dodano ${quantity} x ${name} do koszyka.`);
    }
  
    removeProduct(name) {
      const productExists = this.products.some((product) => product.name === name);
  
      if (productExists) {
        this.products = this.products.filter((product) => product.name !== name);
        console.log(`Usunięto produkt: ${name}`);
      } else {
        console.log(`Produkt ${name} nie znajduje się w koszyku`);
      }
    }
  
    showCart() {
      if (this.products.length === 0) {
        console.log("Koszyk jest pusty.");
      } else {
        console.log("Zawartość koszyka:");
        this.products.forEach((product, index) => {
          console.log(
            `${index + 1}. ${product.name} - Cena: ${product.price} PLN, Ilość: ${product.quantity}`
          );
        });

      }
    }
  }
  
  const myCart = new Cart();
  
  myCart.addProduct("cytryna", 2.5, 2);
  myCart.addProduct("chleb", 5, 1);    
  myCart.addProduct("jajka", 1.5, 10); 
  myCart.addProduct("cytryna", 2.5, 1);
  
  myCart.showCart();                   
  
  myCart.removeProduct("cytryna");      
  myCart.showCart();                   
  myCart.removeProduct("Chipsy");   
  