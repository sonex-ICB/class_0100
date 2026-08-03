// 1. create 4 for each data type
//2.'create an array of 5 product each product name, amt, quantity, store_name, id
//3.return can vot if age is above 18 else cannot vote

// assignment

// number 1
// strings
n = ""
Name = "Emmanuel"
subject = `maths 202`
age = '24'

// number
n = 23
n = 23.4
n = 3
n = 456

// array
names = ["john", "mark"]
food = ["apple", "banana", "beans"]
score = [2,3,4,5,7]
places = ["abuja", "jos"]

// object
names = {
     name: "Leon",
      age: 18
}
car = {
     name: "toyota",
      model: "samuel"
}
names = {
     name: "Leon",
      age: 18
}
names = {
     name: "Leon",
      age: 18
}

// number 2  
product = {
    product_name : "toothpaste",
    amount : "$500",
    quantity : 3,
    store_name : "colgate",
    id : 2415662
}

// number 3 

function vote_age(n){
    let vote = n >= 18 ? "can vote" : "not eligible to vote"
    return vote;
}
let op = vote_age(18)
console.log(op)
