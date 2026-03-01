function shoppingDress(shirtsNum, pantsNum, shoesNum) {
  const shirtsPrice = 1200;
  const pantsPrice = 2100;
  const shoesPrice = 1700;

  const shirtsPriceTotal = shirtsPrice * shirtsNum;
  const pantsPriceTotal = pantsPrice * pantsNum;
  const shoesPriceTotal = shoesPrice * shoesNum;

  const totalCost = shirtsPriceTotal + pantsPriceTotal + shoesPriceTotal;
  return {
    breakdown: { shirtsPriceTotal, pantsPriceTotal, shoesPriceTotal },
    totalCost,
  };
}

const shoppingAmount = shoppingDress(2, 2, 1);
console.log(shoppingAmount);
