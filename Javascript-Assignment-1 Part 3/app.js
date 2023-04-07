let num1 = prompt("Enter your first number here: ")
let num2 = prompt("Enter your second number here: ")
let num3 = prompt("Enter your third number here: ")
let num4 = prompt("Enter your fourth number here: ")
let num5 = prompt("Enter your fifth number here: ")

let largestNum = num1

if (num2 > largestNum) {
  largestNum = num2;
}
if (num3 > largestNum) {
  largestNum = num3;
}
if (num4 > largestNum) {
  largestNum = num4;
}
if (num5 > largestNum) {
  largestNum = num5;
}

console.log("The largest number is: " + largestNum);