let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter third number");

let res = 0;

if (a > 0) {
    res++;
}
if (b > 0) {
    res++;
}
if (c > 0) {
    res++;
}

alert(`Siz kiritgan sonlardan ${res} tasi musbat`);