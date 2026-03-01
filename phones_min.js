const phones = [
  {
    name: "samsung",
    price: 90000,
    color: "blue",
    camera: "12mp",
  },
  { name: "nokia", price: 100000, color: "black", camera: "50mp" },

  { name: "samsung", price: 30000, color: "blue", camera: "12mp" },

  { name: "nokia", price: 10000, color: "black", camera: "50mp" },

  { name: "samsung", price: 40000, color: "blue", camera: "12mp" },

  { name: "nokia", price: 20000, color: "black", camera: "50mp" },
];

function getCheapestPhone(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min; // ✅ returns the full object
}

const cheapest = getCheapestPhone(phones);

// ✅ Display details cleanly
console.log(cheapest);
