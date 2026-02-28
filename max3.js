function max3(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else {
    return n3;
  }
}

const get3Max = max3(45, 67, 1);
console.log(get3Max);

console.log(Math.max(4, 5, 76, 3, 1));
