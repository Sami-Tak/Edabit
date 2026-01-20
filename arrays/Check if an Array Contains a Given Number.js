// Write a function to check if an array contains a particular number.

// function check(arr, el) {
//     return arr.includes(el);
// }

// console.log(check([1, 2, 3, 4, 5], 3));
// console.log(check([1, 1, 2, 1, 1], 3));
// console.log(check([5, 5, 5, 6], 5));
// console.log(check([], 5));

// function check(arr, el) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === el) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(check([1, 2, 3, 4, 5], 3));
// console.log(check([1, 1, 2, 1, 1], 3));
// console.log(check([5, 5, 5, 6], 5));
// console.log(check([], 5));

// function check(arr, el) {
//     for (let value of arr) {
//         if (value === el) return true;
//     }
//     return false;
// }

// console.log(check([1, 2, 3, 4, 5], 3));
// console.log(check([1, 1, 2, 1, 1], 3));
// console.log(check([5, 5, 5, 6], 5));
// console.log(check([], 5));

// function check(arr, el) {
    // return arr.indexOf(el) !== -1;
// }

// console.log(check([1, 2, 3, 4, 5], 3));
// console.log(check([1, 1, 2, 1, 1], 3));
// console.log(check([5, 5, 5, 6], 5));
// console.log(check([], 5));

function check(arr, el) {
    return arr.some(value => value === el); 
}

console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 1, 2, 1, 1], 3));
console.log(check([5, 5, 5, 6], 5));
console.log(check([], 5, 7, 8));