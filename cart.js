function cartProducts(productDetails) {
  let itemPrice = 0;
  for (let product of productDetails) {
    let quantityTotal = product.price * product.quantity;

    itemPrice += quantityTotal;
  }
  return itemPrice;
}

const products = cartProducts([
  { name: "shampoo", price: 500, quantity: 2 },
  { name: "saree", price: 3000, quantity: 2 },
  { name: "cream", price: 100, quantity: 1 },
]);
console.log(products);
