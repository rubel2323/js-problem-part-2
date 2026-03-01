const phonesModel = [
  {
    name: "samsung",
    price: 90000,
    color: "blue",
    camera: "12mp",
  },
  { name: "iPhone", price: 100000, color: "black", camera: "50mp" },

  { name: "samsung", price: 30000, color: "blue", camera: "12mp" },

  { name: "nokia", price: 10000, color: "black", camera: "50mp" },

  { name: "samsung", price: 40000, color: "blue", camera: "12mp" },

  { name: "nokia", price: 20000, color: "black", camera: "50mp" },
];

function phonesMin(phonesModel) {
  let item = phonesModel[0];
  for (const phone of phonesModel) {
    if (phone.price > item.price) {
      item = phone;
    }
  }
  return item;
}

const phonesName = phonesMin(phonesModel);
console.log(phonesName);
