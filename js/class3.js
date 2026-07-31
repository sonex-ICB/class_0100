// comments 
//  Output -  print text
console.log("Solomon")
console.log('Nelson')
console.log(`Sactus`)

// variables - data container 
x = 40
total = 200
x = 0
x = 30


let balance = 300
balance = 0
balance = 1000
// let balance = 40 // error - alerady declared 

const amount = 500
// amount = 200
// const amount = 100
var y = 0
y = 10
var y = 30

// Data types  - Number : Numeric text wit'out quotes 
a = 10
a = 10.34
a = -10
a = 0

// strin : plain text wit quotes
b = "Solomon"
b = 'Mark'
b = 'Tedi'
b = '-10'
b = '3455'

// Boolean  : value only true or false

c = true
c = false
c = 'false'
c = false

// undefined  : no value or undefined 
let d // undefined
d = undefined

// array : List of items 
fruits = ['Apple', 'Water Melon', 'Tomato']
score = [10, 60, 21]
mix = ['str', true, 56, undefined, []]

console.log(fruits)
console.log(fruits[1])
console.log(score)
console.log(score[2])
console.log(mix)

// Object 

laptop = {
    "brand": "Dell",
    model: "Dell 11",
    'mft year': 2025,
    ram: 4,
    ssd: 256,
    color: "red, Black"
}


console.log(laptop)
console.log(laptop.ssd)
console.log(laptop.color)
console.log(laptop.brand)

person = {
    name: {
        title: "Mr",
        firstname: "Solomon"
    },
    mobile_number: '09056535',
    course: ['CSS', "Script"]
}
console.log(person)
console.log(person.name.first_name)
console.log(person.course[1])

// 
courses = [
    ["CSS", "B5", 'Script'],
    ['PY', 'CPP'],
    "Tailwind"
]

// 

console.log(courses[0][2])  // Nelson - script
console.log(courses[1])  // Emmanuel - Py
console.log(courses[1][1])  // Mu - CPP
console.log(courses[2])  // Simon - Tailwind
console.log(courses[0][0])  // Vic -  CSS

courses = {
    frontend: [
        {
            name: "CSS",
            amt: 400,
            duration: '4 weeks',
            outline: ['selectors', 'colors', '']
        },
        {
            name: "B5",
            amt: 200,
            duration: '3 weeks',
            outline: []
        }
    ],
}
console.log(courses.frontend[0].name)
console.log(courses.frontend[0].outline[0])

for(x in courses){
        console.log(x + " : "+ courses[x] )
        for( y in courses[x]){
            console.log(courses[x][y])
        }
}

//  operators : Aritmetic Operator +, -, /, *, %, **
console.log(10 + 3) // 13
console.log(10 / 3) // 3.333
console.log(10 % 3) // 1
console.log(10 % 2) // 0
console.log(10 % 7) // 3
console.log(10 ** 3) // 1000 // 10 * 10 * 10

// comparison operators : ==, ===, >, <, >=,<=
console.log(10>1) //true
console.log(10>10) // false 
console.log(10>=10) // true 
console.log(10 == 11) // equality - false 
console.log(10 == 10) // equality - false 
console.log(10 === 10) // equality - true : value and data type  
console.log(10 === "10") // equality - true : value and data type  
qpass = '0000'
tpass = '0000'
console.log(qpass == tpass)  
bal = 300; w = 100
console.log(bal>w)

// Logical Operators : && AND, || OR, ! NOT

console.log( 10 > 5 && 0<4 ) // true 
console.log( 10 > 5 || 0>4 ) //
console.log( 10 > 5 && (0>4 && 8<4) ) //
console.log( 10 > 5 ) //
console.log( "Bool : " + Boolean() ) //
 
// tenary Operator ? 
bal = 100
w = 30
test = bal > w ? "Can wiitdraw" : "Insufficient"

color_mode = 'dark'
link = color_mode =='dark' ? "dark.css":'lite.css'
console.log(test)
color_mode = 'lite'

// typeof Operator 
console.log(typeof [])
console.log(typeof {})
console.log(typeof "")


// 
console.log(10 + "10") // 1010 solomon + Mark solomonmark
console.log(10 / "10") // 1
console.log(10 / "10we") // NaN

user = {
    name:'Solomon ',
    dob:1960,
}
console.log("My name is " + user.name +" Am " + (2026 - user.dob) + " years old" )
console.log(`My name is   ${user.name}  Am   ${(2026 - user.dob) } years old`)

// functions block of code dat performs an action wen called
// function declaration, definition - create
// function call, execute  - Use

function my_function(){
    // block of code 
    console.log('Welcome') 
}
my_function()

// params
function sum(a=0,b=0){

    console.log(a+b)
}

sum(2,7)
sum(5,8)
sum()

// return function 
function solve(a=0, op = '+', b = 0 ){
    r = `${a}${op}${b}` 
    return eval(r)
}
 x = solve(4,'-',45)
console.log(x)



// 1. Create 4 for  forEach data type 
// 2. create an array of 5 products Each product name, amt, qty, store_name, id
// 3.  return can Vote if age is above 18 else cannot vote
// text = "text"
// text > 90

