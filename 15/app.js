let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
let c = +prompt("Enter third number");

// Finding max and median numbers

let median = (a + b + c) / 3;
let sum = parseInt(median);

let max = Math.max(a, b, c);
let min = Math.min(a, b, c);
alert("Max number is " + max + " and median number is " + sum + " if we add these numbers we get the largest number");