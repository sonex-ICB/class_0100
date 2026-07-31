
// PART 1: ARRAY METHODS (with examples)

const numbers = [5, 10, 15, 20, 25];

// .map() — creates a NEW array by transforming every item
const doubled = numbers.map(num => num * 2);
console.log("map():", doubled); // [10, 20, 30, 40, 50]

// .filter() — creates a NEW array with only items that pass a test
const above10 = numbers.filter(num => num > 10);
console.log("filter():", above10); // [15, 20, 25]

// .reduce() — combines all items into a single value
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log("reduce():", total); // 75

// .forEach() — runs a function on each item, returns nothing
numbers.forEach(num => console.log("forEach item:", num));

// .find() — returns the FIRST item that matches a condition
const firstAbove15 = numbers.find(num => num > 15);
console.log("find():", firstAbove15); // 20

// .includes() — checks if an array contains a value (true/false)
console.log("includes():", numbers.includes(25)); // true



// PART 2: LOOPS

// FOR loop — used when you know how many times to repeat
console.log("--- for loop ---");
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// WHILE loop — used when you repeat UNTIL a condition becomes false
console.log("--- while loop ---");
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}



// PART 3: PASSWORD GENERATOR


function generatePassword(length = 12) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&";
  let password = 0;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

console.log("Generated password:", generatePassword());
console.log("Generated password (16 chars):", generatePassword(16));
a = 0
while( a<3){
console.log(a)
a++
}

array  = ['Apple','Red','Brown']
for(x = 0; x < array.length; x++){
  console.log(array[x])
} 

person = {
  name:"Solomon",
  course: "Front end",
  duration:"4 weeks"
}
for( x in person){
  console.log(`${x[0].toUpperCase()}${x.slice(1)} : ${person[x]}`)
}


products = [
  {id:1,amt:300, name:'Laptop', qty:12},
  {id:2,amt:120, name:'Table', qty:2},
  {id:3,amt:30, name:'AC', qty:0},
  {id:4,amt:200, name:'TV', qty:22},
  {id:5,amt:500, name:'Car', qty:10},
]
analytics = {
  total_qty : 0,
  total_products: products.length,
  total_product_amt: 0,
}
products.forEach( i=> {
  analytics.total_qty +=i.qty;
  analytics.total_product_amt +=i.amt;
  console.log(`==================================`)
  console.log(`Name:${i.name}`)
  console.log(`Qty:${i.qty}`)
  console.log(`Unit Amt:${i.amt}`)
  console.log(`Payment Total :${i.amt * i.qty}`)
  console.log(`==================================`)
})
console.log(analytics)