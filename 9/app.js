let A = +prompt("Enter A number");
let B = +prompt("Enter B number");

if (A > B) {
    let box = B;
    B = A;
    A = box;
    alert("B = " + B + " A = " + A);
} else {
    alert("B = " + B + " A = " + A);
}
