// print
console.log("Hello World")

// declare variables
const favoriteColor = "Blue"; //declaration is the const favoriteColor part
//favoriteColor = "Blue"; //assignment
var age = 30; // declaration and assignment
// and let

//Functions
function userGreeting () {
    return "Hello user";
} 
userGreeting() //calls the function

//Parameters
function greetUserByName(name) {
    return 'Hello ${name}';
}
greetUserByName("Johnny Boy"); //returns "Hello Johnny Boy"

//Return value
function sum(x,y) {
    return x + y; 
    //code after thr return will not run
}
var sumOfNumbers = sum(5, 7);
console.log(sumOfNumbers);

//Conditionals
  //If Statement
if (age<18) {
    console.log("sorry, no access");
} else if (age<21) {
    console.log("limited access");
} else {
    console.log("You have full access");
}

//Switch Case
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        console.log("Can't figure out day")
}

console.log('Today is ${day}')

// LOOPS
    // for loop
var x; 
for (x=0; x<10; x++) { //sets variable value, expression, iteration
    console.log(x);
}

    // while loop
var x=0;
while (x<10) {
    console.log(x);
    x++;
}






