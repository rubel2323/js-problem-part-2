function getValidation(name, mobile_number) {
  if (typeof name !== "string" || typeof mobile_number !== "number") {
    console.log(
      `Sorry,you typed "${typeof name}" and "${typeof mobile_number}" `,
    );
  } else {
    return `Your name is ${name} and mobile number is ${mobile_number}`;
  }
}

const address = getValidation("bel", "ui");
console.log(address);
