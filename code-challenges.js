// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected outcome: "85 is below boiling point" "350 is above boiling point" "212 is at boiling point"

//setting uyp fonction that takes temp var as argument 
//returns string of "${temp var} is below boiling point"
//or returns string of "${temp var} is above boiling point"
//or returns string of "${temp var} is at boiling point"




var temp1 = 85
var temp2 = 350
var temp3 = 212


const tempChecker = (temp) =>{
    if (temp <= 211)
    return `${temp} is below boiling point`
    else if (temp >= 213)
    return `${temp} is above boiling point`
    else if (temp === 212)
    return `${temp} is at boiling point`
    else 
    return "try again"

}

console.log(tempChecker(temp1))
console.log(tempChecker(temp2))
console.log(tempChecker(temp3))




// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45] [10, 25, -40, 100, 160]


//setup function that takes an array as the argument 
//using a for loop multiply each number by 5


var myForNumbers1 = [3, 7, 0, 6, -9]
var myForNumbers2 = [2, 5, -8, 20, 32]

const multiplyByFive = (array) => {
let multiplied = [];
for (let i =0  ; i < array.length ; i++){
    multiplied.push (array[i] * 5);
}
return multiplied;
}

console.log(multiplyByFive(myForNumbers1))
console.log(multiplyByFive(myForNumbers2))



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [435, 30, 140, 80, 10] [40, -35, 0, 30, 60]


//set up function that takes an array as the argument 
//returns new a array with values mulitplied by 5
//using .map()


var myMapNumbers1 = [87, 6, 28, 16, 2]
var myMapNumbers2 = [8, -7, 0, 6, 12]

const mulitpiedArrayBy5 = (array) => {
    return array.map (value =>{
        return value * 5
    })
}
console.log(mulitpiedArrayBy5(myMapNumbers1))
console.log(mulitpiedArrayBy5(myMapNumbers2))

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

//set up function that takes a string as the argument
//has to use filter to create new subset array
// use the .split to split up the string into array
//use join to set up new array without vowela

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"


const vowelEssString = (array) =>{
    let splitString = array.split("")
    return splitString.filter (value =>{
    return value !== "a" && value !=="e" && value !== "i" && value !== "o" && value !== "u" && value !== "I"
    }).join('')
}

console.log(vowelEssString(stringWithVowels1))

console.log(vowelEssString(stringWithVowels2))



// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"

//setup function that will take a var 
//retrun if it is a string 
//if it is a string remove the vowels


//????? I tried everything I could think of but I could not get the same affect i got in my last exercise. 
//????? It will inout the string but it does not remove the vowels. 


var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"

const vowelRemover = (i) =>{
    //let newVar = [i]
    let splitString = []
    if (typeof i  !== "string")
    return `${i} is not a string`
    else if(typeof i  === "string")
    splitString.push(i)
    return splitString.filter (value =>{
        
    return value !== "a" && value !=="e" && value !== "i" && value !== "o" && value !== "u" && value !== "I"
    // })
     }).join()
}


console.log(vowelRemover(refactorTester1))
console.log(vowelRemover(refactorTester2))
console.log(vowelRemover(refactorTester3))




// --------------------6) Create a function that takes in an array of strings and returns the string with the most characters.
// Expected output: "chopsticks" "stemware"


// setup finction that takes an array counts the number of index spaces
//retruns the highest number

//set up function that takes in array of strings as argument
//function must log the index 
//function must compair index values
//retruns string with largest index


var utensils = ["fork", "knife", "tongs", "chopsticks", "skewer"]
var vessels = ["cup", "mug", "stemware", "glass", "tumbler", "tea cup"]

// let largestIdex = 

// for (let i =0 ; i < array.length ; i++){

// }

// console.log(largestIdex(utensils))


// // const largestIdex = (array) => {
// //     return 
    
    
// //     array.filter( value, index => {
// //     })
// // }

 const largestIndex = (array) => {
    //  array.forEach(element){  
    //      if (typeof element !== "string"
    //      retrun `${newCont.push()}`
     //}
 
     let highestIndex = 9;
     let lastIndex = array[i];
     let newCont = []
    for ( var i= 1 ; i < array.length ; i++){
    

    if  (array [i] > highestIndex) {
        highestIndex = array[i];
         lastIndex = i;

        }
        return newCont.push()
//    finalIndex.push(array.indexOf(3)) ; 
// }return finalIndex

    } return lastIndex 

}
console.log(largestIndex(utensils));
console.log(largestIndex(vessels));






// console.log(largestIdex(utensils))

// --------------------7) Create a function that takes in an array of strings and returns an array with the last letter removed from each string.
// Expected output: ["Luig", "Peac", "Toa", "Yosh"] ["Ink", "Blink", "Pink", "Clyd"]

var mario = ["Luigi", "Peach", "Toad", "Yoshi"]
var pacman = ["Inky", "Blinky", "Pinky", "Clyde"]


//setup a finction that takes in a array as an argument 
//retruns a new array with the last letter removed from each element 
//using the .pop()
//using the .map() to create the new array retruning the items minus the last item
//creating a container for each item and then joining them at the end

//??? i left this one commented out becuase i could not get it to work and I no matter what I tried or looked on line I could not get make it do what i wanted. 
//??? I must have missed how to break up the elements of the array to make its now new array and then put them back together with the .join() i also kept getting errors with the .split() 


// const latLetter = (array) =>{
//     for ( let i = 0 ; i < array.length ; i++ ){
//         let array1 = [i] + i++ ;
//         let array2 = [i]
//     }

    
    
// }

// const lastLetter = (array) => {
// //     let array1 = []
// //     for (array.filter(value => {
// //     //     retrun (let i = 0 ; i < array.length ; i++); array.push(array1)
// //     // }
// // return array1
// // }

 
// console.log(lastLetter(mario))


