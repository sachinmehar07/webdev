const price = 250;

console.log(price.toString());
console.log(typeof price.toString());
console.log(typeof price);


const value= 10;

console.log(value.toString(2));
console.log(value.toString(8));
console.log(value.toString(16));


const amount = 1234567.89;

console.log(amount.toLocaleString("en-US"));
console.log(amount.toLocaleString("de-DE"));
console.log(amount.toLocaleString("en-IN"));


const amount1 = 1234.5;

console.log(
  amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  })
);


const price1 = 125.6789;

console.log(price1.toFixed(0));
console.log(price1.toFixed(2));
console.log(price1.toFixed(3));

const price2 = 25;

console.log(price2.toFixed(2));
console.log(typeof price2.toFixed(2));

const value1 = 123.456;

console.log(value1 .toPrecision(3));
console.log(value1.toPrecision(5));
console.log(value1.toPrecision(7));



const value2 = 12500;

console.log(value2.toExponential());
console.log(value2.toExponential(2));
console.log(value2.toExponential(4));