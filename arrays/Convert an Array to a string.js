// Create a function that takes an array of numbers or letters and returns a string.

// function arrayToString(arr) {
    // return arr.join("");
// }

// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// function arrayToString(arr) {
//     return arr.toString("");
// }

// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// function arrayToString(arr) {
//     return String(arr);
// }

// function arrayToString(arr) {
//     return JSON.stringify(arr);
// }

// function arrayToString(arr) {
//     return `${arr}`;
// }

function arrayToString(arr) {
    return arr.join("");
}

console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));