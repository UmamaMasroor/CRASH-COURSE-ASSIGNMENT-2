//  question 2
 
//  2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

let arr=[3,5,7,9,4,32,77,102,99,20];
let search= 5;
let i = 0;

function recursion(array){
    if (search === array[i]){
        console.log ("true");
    }
    else if (i< arr.length){
        i = i+1;
        recursion(array);
    }
    else {
        return
    }

}
recursion(arr);
