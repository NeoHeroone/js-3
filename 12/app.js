let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
let c = +prompt("Enter third number");

if(a < b && a < c){
    alert("Siz kiritgan sonlarning eng kichigi " + a + "ga teng");
}
else if(b < a && b < c){
    alert("Siz kiritgan sonlarning eng kichigi " + b + "ga teng");
}
else{
    alert("Siz kiritgan sonlarning eng kichigi " + c + "ga teng");
}