// Arrays
let fruits = ["Pineapple", "guava", "grape"];

// Common array methods
console.log(fruits.length); // 3 - get length
fruits.push("grape"); // add to end
fruits.pop(); // remove last
fruits.unshift(banana); // add to start
fruits.shift(); // remove first
console.log(fruits.slice(1,3)); // get part of array
console.log(fruits.indexOf(pineapple));  // find index
fruits.forEach(fruit => console.log(fruit)); // loop through


// Object
let student = {
    name:"Zulkif",
    age: 25,
    class:"Acct class year4",
    greet:function() {
        console.log("Hello, my name is" + this.name);
    }
};

console.log(student.name); // access property
student.age = 21; // update property
student.greet(); // call method