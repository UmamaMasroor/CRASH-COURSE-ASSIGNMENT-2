// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

// question 1

let number_1 = +prompt("Enter number 1");
let number_2 = +prompt("Enter number 2");

function digit_1(value_1){
return function  digit_2 (value_2){
    console.log(value_1 + value_2);
}
}
let function_1 = digit_1(number_1);
let function_2 = function_1(number_2);
