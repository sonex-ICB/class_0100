// Metods

str = "Solomon Mary"
console.log(str.length)// num of xters 
console.log(str.indexOf('o'))//   - a number
console.log(str.lastIndexOf('o'))//   - a number
console.log(str.lastIndexOf('t'))//   - a number -1
console.log(str.includes('x'))//   - boolean
console.log(str[0])// first letter
console.log(str[str.length-1])// last letter   
console.log(str.toLowerCase())// converts to lowercase
console.log(str.toUpperCase())// converts to uppercase 
console.log(str.slice(3))// all xters from index   
console.log(str.slice(0,3))// xters btw 0 and 3

text = 'yellow world'
console.log(`some text ${text[0].toUpperCase()}${text.slice(1)}`)// last letter 
console.log(text.concat(str)) 
console.log(text + str)

// number and Math 
console.log(Math.floor(12.9)) // round down to int 12
console.log(Math.ceil(12.1)) // round up to int 13
console.log(Math.round(12.1)) // round  to int 12
console.log(Math.round(12.9)) // round  to int 13
console.log((12.455).toFixed()) // round  to int 12
console.log((12.455436323).toFixed(4)) // round  to float in 4 dp 12.4554
console.log(Math.PI) //3.14 
console.log(Math.random()) // a random numb 0 - 1 
console.log(Number('12')) // type cast to int 12 
console.log(isNaN("12")) // 


// array
array = [] // empty
array = ['red','blue']
array[0] = 'Yellow'

console.log(array)
array.push('Pink','Purple')
array.unshift('Tomato','predator')
console.log(array)
array.pop()
console.log(array)
array.shift()
console.log(array)

