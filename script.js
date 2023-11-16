// Create a function that will return an integer number 
// corresponding to the amount of digits in the given integer num
const num_of_digits = (num) => {
   return Math.abs(num).toString().length;
};

console.log(num_of_digits(1000))// ➞ 4
console.log(num_of_digits(12)) //➞ 2
console.log(num_of_digits(1305981031)) //➞ 10
console.log(num_of_digits(0)) //➞ 1

// A fulcrum of an array is an integer such that all elements to the
//  left of it and all elements to the
//  right of it sum to the same value.
//   Write a function that finds the fulcrum of an array.

// This sounds super fun 
const findFulcrum = arr => {
    let count1 = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let count2 = 0;
        let start = i + 1;
        while(start < arr.length) {
            count2 + arr[start];
            start++;
        }
        if(count1 == count2) {
            return arr[i];
        }
    }
    return -1;
}

console.log(findFulcrum([3, 1, 5, 2, 4, 6, -1]))// ➞ 2
// Since [3, 1, 5] and [4, 6, -1] both sum to 9
console.log(findFulcrum([1, 2, 4, 9, 10, -10, -9, 3]))// ➞ 4
console.log(findFulcrum([9, 1, 9])) //➞ 1
console.log(findFulcrum([7, -1, 0, -1, 1, 1, 2, 3]))// ➞ 0
console.log(findFulcrum([8, 8, 8, 8])) //➞ -1

const firstTuesdayOfTheMonth = (year, month) => {
    
}

console.log(firstTuesdayOfTheMonth(1997, 1)) //➞ "1997-01-07"
console.log(firstTuesdayOfTheMonth(2021, 2)) //➞ "2021-02-02"
console.log(firstTuesdayOfTheMonth(2020, 3)) //➞ "2020-03-03"

jQuery(document).ready(function($) {
    $('#move-button').on('click', function() {
        $('#move-me').css('transform', 'translateX(100px)'); // Move the field 100px to the right
    });
});