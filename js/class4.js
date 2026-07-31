//  Metods 

car = {
    color:'red',
    brand:"BMW",
    model:"BMW12",
    qty:12,
    is_available:function(){
        status =this.qty>0;
        return status;
    }
}
car2 = {...car}
car2.model = "BMW14"
car2.qty = 0

car2.brand = 'Fiat'
console.log(car)
t = car.is_available() ? "can buy": "Cannot buy"
x = car.is_available() ? "Order now":"Come back next week"
console.log(t)
console.log(car.is_available())
console.log(car2.is_available())
// strin,number,array, Object

// strin
str = "yellow World "
console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str[0]) // first letter 
console.log(str[str.length-1]) // last letter
console.log(str.indexOf('low')) // a number : index 
console.log(str.indexOf('x')) // not found : -1
console.log(str.includes('x')) // bool
console.log(str.lastIndexOf('o')) // last occurence : index
console.log(str.charAt(7)) // return a strin
console.log((10).toString()) // convert to strin "10"
console.log((10).toString(16)) // convert to base 16
console.log(str.concat(' Am new to script')) // concat
console.log(str.concat(' Am new to script').toUpperCase()) // concat and convert to upper case


//  Number and Mat
console.log((10.5).toFixed()) 
console.log((10.1239908765435678).toFixed())  // rounds to nearest int or dp
console.log((10.1239908765435678).toFixed(3))  // rounds to nearest int or dp
console.log(Number("10")) // converts to number 
console.log(Math.PI) //  3.14
console.log(Math.floor(12.9)) // 12  rounds down a number
console.log(Math.ceil(12.2)) // 13 rounds up a number
console.log(Math.round(12.2)) // 12 rounds to de nearest int
console.log(Math.random()) // returns a random number btw 0-1
n1 = (Math.random()* 99999999).toFixed()
console.log(n1) // returns a random number btw 0-1

//  array metods, Object
// loops : for, while
// create a random password generator 





