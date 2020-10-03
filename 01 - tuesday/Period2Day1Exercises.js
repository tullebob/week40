let nameArray = ["Hassan", "Jan", "Peter", "Boline", "Frederik"]
const a = "a";


//Exercise 1a
let filteredArray = nameArray.filter(name=>name.includes(a))
console.log("Exercise 1a - filter: ")
console.log(filteredArray)


//Exercise 1b
console.log("Exercise 1b - map: ")
let mappedArray = nameArray.map(name=>name.split("").reverse().join(""))
console.log(mappedArray)


// Line 18 - 34 is functions for exercise 2a and 2b
function includesString(myString){
   return myString.includes(a) 
}

function stringReverse(myString2){
    return myString2.split("").reverse().join("")
}

function myFilter(array, callback){
    let arrayCopy = []
    array.forEach(element => { const newItem = callback(element)
        if(newItem){
            arrayCopy.push(element)
        }      
    });
    return arrayCopy
  }

function myMap(array, callback){
    let arrayCopy = []
    array.forEach(element=> arrayCopy.push(callback(element)))
    return arrayCopy
}

//Exercise 2a
console.log("Exercise 2a - myFilter: ")
  let arrayFiltered2 = myFilter(nameArray, includesString)
  console.log(arrayFiltered2)


//Exercise 2b
console.log("Exercise 2b - myMap: ")
   let mappedArray2 = myMap(nameArray, stringReverse)
   console.log(mappedArray2)

//Exercise 3a
var numbers = [1, 3, 5, 10, 11];
 
var result = numbers.map(function(num, index) {
    if(index == numbers.length-1) {
        return num;
    } else {
        num += numbers[index+1];
        return num;
    }
});

console.log("Exercise 3a: ")
console.log(result)


//Exercise 3b
var names = ["Hassan", "Peter", "Jan", "Boline"]

var nameHtml = names.map(name=> `<a href="">` + name + `</a>`)

console.log("Exercise 3b: ")
console.log(nameHtml.join(""))


//Exercise 3c
var persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];

const makeRows = persons.map(person => `
<tr>
<td>${person.name}</td>
<td>${person.phone}</td>
</tr>`
).join("\n")
console.log("Exercise 3c: ")
console.log("<table>" + makeRows + "</table>")


//Exercise 4a
var all =["Hassan", "Peter", "Carla", "Boline"]
console.log("Exercise 4a: ")
console.log(all.join("#"))

//Exercise 4b
var numbers2 = [2, 3, 67 ,33]
var sum = numbers2.reduce((total, amount) => total + amount)
console.log("Exercise 4b: ")
console.log(sum)