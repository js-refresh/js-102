// function printNumbers(num1, num2) {
//     var numbers = "";
//         for (var i = num1; i <= num2; i++)
//             console.log(i)
//         return numbers.slice(0,-1);
// }
// console.log(printNumbers(1,10))



function printNumbers(num1, num2) {
    for (var i = num1; i <= num2; i++) {
        console.log(i)
    }
}
printNumbers(1,10)


function printNumbers() {
    let number = 0; 
    while (number <= 10) { 
        console.log(number);
        number = number +1; 
    }
}
printNumbers(1,10)

