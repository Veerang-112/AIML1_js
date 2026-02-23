//largest of three numbers using ternary operator
let a = 10;
let b = 20;
let c = 15;
let largest = (a > b && a > c) ? a : (b > a && b > c) ? b : c;
console.log("The largest number is: " + largest);