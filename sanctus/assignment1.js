// 1
// String
name: "Jake"
school: "UNN"
course: "Medicine"
state: "Abia"

// Number
age = 17
score = 70
year = 2026
cost = 25000

//Boolean
a = 10 > 5
b = 22 < 9
c = 10 == 10
d = 9 <= 10

//2
electronics = [
    {
        name : "Laptop",
        amt : 200000,
        qty : 1
    },
    {
        name : "Monitor",
        amt : 95000,
        qty : 2
    },
    {
        name : "Keyboard",
        amt : 25000,
        qty : 3
    },
    {
        name : "Mouse",
        amt : 20000,
        qty : 3
    }
]
console.log(electronics)

// 3
function vote( age = 0){
    return age >= 18 ? "Can vote":
    "Cannot vote"
}
console.log(vote(18)) // Can vote
console.log(vote(17)) // Cannot vote
console.log(vote(23)) // Can vote
console.log(vote(15)) // Cannot vote
console.log(vote(13)) // Cannot vote
console.log(vote(25)) // Can vote