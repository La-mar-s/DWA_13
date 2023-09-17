const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

//Used forEach to console log each name to the console.
names.forEach((name) => {
  console.log(name);
});

//Used forEach to console log each name with a matching province.
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//Using map, loop over all province names and turn them to uppercase.
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

//Create a new array with map that has the amount of characters in each name.
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

//Using sort, sort all provinces alphabetically.
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

//Used filter to remove all provinces that have the word "Cape" in them.
const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(filteredProvinces.length); // Output: 3

//Create a boolean array using map and some to determine whether a name contains an "S" character.
const hasSCharacter = names.map((name) =>
  name.split("").some((char) => char === "S")
);
console.log(hasSCharacter);

//Using reduce, turn the above into an object that indicates the province of an individual.
const nameToProvince = names.reduce((result, name, index) => {
  result[name] = provinces[index];
  return result;
}, {});
console.log(nameToProvince);

const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Used forEach to console log each product name to the console.
console.log(products.map((product) => product.product));

// Used filter to filter out products that have a name longer than 5 characters.
console.log(products.filter((product) => product.product.length <= 5));

// Using both filter and map, convert all prices that are strings to numbers, and remove products without prices.
const validProducts = products
  .filter((product) => !isNaN(product.price))
  .map((product) => ({
    ...product,
    price: parseFloat(product.price),
  }));
console.log(validProducts);

// Used reduce to calculate the combined price of all remaining products.
const totalPrice = validProducts.reduce(
  (total, product) => total + product.price,
  0
);
console.log(totalPrice);

// Used reduce to concatenate all product names to create a string.
const productNames = products.reduce((concatenated, product, index) => {
  if (index === 0) {
    return product.product;
  }
  return `${concatenated}, ${product.product}`;
}, "");
console.log(productNames);

// Used reduce to calculate both the highest and lowest-priced items.
const priceArray = validProducts.map((product) => product.price);
const highestPrice = Math.max(...priceArray);
const lowestPrice = Math.min(...priceArray);
console.log(
  `Highest: ${
    validProducts.find((product) => product.price === highestPrice).product
  }. Lowest: ${
    validProducts.find((product) => product.price === lowestPrice).product
  }`
);

// Using Object.entries and reduce, recreate the object with modified keys.
const modifiedProducts = products.reduce((result, product) => {
  const { product: name, price: cost } = product;
  result.push({ name, cost });
  return result;
}, []);
console.log(modifiedProducts);
