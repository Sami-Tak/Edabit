// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// function sumArray(arr) {
//     let sum = 0;	
//   for (let i = 0; i < arr.length; i++) {
// 	  sum +=arr [i];
// 	}
//   return sum;
// }

// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray([-1, 0, 1]));
// console.log(sumArray([0, 4, 8, 12]));

// function sumArray(arr) {
//     let sum = 0;
//     let i = 0;

//     while (i < arr.length) {
//         sum += arr[i];
//         i++;
//     }

//     return sum
// }

// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray([-1, 0, 1]));
// console.log(sumArray([0, 4, 8, 12]));

// function sumArray(arr) {
//     let sum = 0;
//     arr.forEach(num => sum += num);
//     return sum;
// }

// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray([-1, 0, 1]));
// console.log(sumArray([0, 4, 8, 12]));

// function sumArray(arr) {
//     return arr.reduce((sum, num) => sum + num, 0);
// }

// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray([-1, 0, 1]));
// console.log(sumArray([0, 4, 8, 12]));

// function sumArray(arr) {
//     if (arr.length === 0) return 0;
//     return arr[0] + sumArray(arr.slice(1));
// }

// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray([-1, 0, 1]));
// console.log(sumArray([0, 4, 8, 12]));

function sumArray(arr) {
    return arr.map(x => x).reduce((a, b) => a + b, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, 0, 1]));
console.log(sumArray([0, 4, 8, 12]));
console.log(sumArray([0, 4, 8,]));