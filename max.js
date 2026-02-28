mithu = 23;
jitu = 34;

if (mithu > jitu) {
  console.log("Mithu is the greatest");
} else {
  console.log("jitu is the greatest");
}
// ---------------------
function max(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

const getMax = max(56, 890);
console.log(getMax);
