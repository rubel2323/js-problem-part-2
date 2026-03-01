function add(n1, n2) {
  const sum = n1 + n2;
  return sum;
}
function subtract(n1, n2) {
  const sum = n1 - n2;
  return sum;
}
function multiply(n1, n2) {
  const sum = n1 * n2;
  return sum;
}
function divide(n1, n2) {
  const sum = n1 / n2;
  return sum;
}

function calculator(a, b, operation) {
  if (operation === "add") {
    const sum = add(a, b);
    return sum;
  } else if (operation === "subtract") {
    const sum = subtract(a, b);
    return sum;
  } else if (operation === "multiply") {
    const sum = multiply(a, b);
    return sum;
  } else if (operation === "divide") {
    const sum = divide(a, b);
    return sum;
  } else {
    return "not allowed operation ";
  }
}
const result = calculator(7, 6, "multiply");
console.log(result);
