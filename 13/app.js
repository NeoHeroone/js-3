let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
let c = +prompt("Enter third number");

if (a > b && a < c || a < b && a > c) {
    alert("Kiritlgan sonlardan o'rtachasi " + a + "ga teng");
} else if (b > a && b < c || b < a && b > c) {
    alert("Kiritlgan sonlardan o'rtachasi " + b + "ga teng");
} else {
    alert("Kiritlgan sonlardan o'rtachasi " + c + "ga teng");
}