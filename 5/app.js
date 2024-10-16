let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter third number");

let res1 = 0;
let res2 = 0;

if (a > 0) {
    res1++;
} else {
    res2++;
}
if (b > 0) {
    res1++;
} else {
    res2++;
}
if (c > 0) {
    res1++;
} else {
    res2++;
}

alert(`Siz kiritgan sonlardan ${res2} tasi manfiy, ${res1} tasi musbat`);