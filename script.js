// Create a function that will return an integer number 
// corresponding to the amount of digits in the given integer num
const num_of_digits = (num) => {
   return [num].split('').length;
}

console.log(num_of_digits(1000))// ➞ 4
console.log(num_of_digits(1000))// ➞ 4
console.log(num_of_digits(12)) //➞ 2
console.log(num_of_digits(1305981031)) //➞ 10
console.log(num_of_digits(0)) //➞ 1