function layeredDiscount(quantity) {
  const first150Price = 100;
  const second150Price = 80;
  const above300price = 75;

  if (quantity < 150) {
    const first150Total = quantity * first150Price;
    return first150Total;
  } else if (quantity <= 300) {
    const first150Total = 150 * first150Price;
    const remainingQuantity = quantity - 150;
    const remainingTotal = remainingQuantity * second150Price;
    const total = first150Total + remainingTotal;
    return total;
  } else {
    const first150Total = 150 * first150Price;
    const second150Total = 150 * second150Price;
    const remainingQuantity = quantity - 300;
    const remainingTotal = remainingQuantity * above300price;
    const total = first150Total + second150Total + remainingTotal;
    return total;
  }
}

console.log(layeredDiscount(100));
console.log(layeredDiscount(200));
console.log(layeredDiscount(350));
