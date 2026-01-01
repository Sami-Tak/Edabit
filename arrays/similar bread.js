// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// function hasSameBread(arr1, arr2) {
//     return arr1[0] === arr2[0] && arr1[arr1.length -1] === arr2[arr2.length-1]
// }

// console.log(hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// ));

// console.log(hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
// ));

// console.log(hasSameBread(
//     ["toast" ,"cheese" ,"toast"],
//     ["brown bread", "cheese" ,"toast"]
// ));

// function hasSameBread(arr1, arr2) {
//     const [top1, ,bottom1] = arr1;
//     const [top2, ,bottom2] = arr2;

//     return top1 === top2 && bottom1 === bottom2;
// }

// console.log(hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// ));

// console.log(hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
// ));

// console.log(hasSameBread(
//     ["toast" ,"cheese" ,"toast"],
//     ["brown bread", "cheese" ,"toast"]
// ));

// function hasSameBread(a, b) {
//     return a.at(0) === b.at(0) && a.at(-1) === b.at(-1);
// }  

// console.log(hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// ));

// console.log(hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
// ));

// console.log(hasSameBread(
//     ["toast" ,"cheese" ,"toast"],
//     ["brown bread", "cheese" ,"toast"]
// ));

// function hasSameBread(a, b) {
//     return a.slice(0, 1)[0] === b.slice(0, 1)[0] &&
//            a.slice(-1)[0] === b.slice(-1)[0];
// }

// console.log(hasSameBread(
//     ["white bread", "lettuce", "white bread"],
//     ["white bread", "tomato", "white bread"]
// ));

// console.log(hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
// ));

// console.log(hasSameBread(
//     ["toast" ,"cheese" ,"toast"],
//     ["brown bread", "cheese" ,"toast"]
// ));

// function hasSameBread(arr1, arr2) {
//     if (arr1.length < 2 || arr2.length < 2) return false;
//     return arr1[0] === arr2[0] && arr1[arr1.length -1] === arr2[arr2.length - 1];
// }

// console.log(hasSameBread(
//     ["white bread", "lettuce", "white bread"],
//     ["white bread", "tomato", "white bread"]
// ));

// console.log(hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
// ));

// console.log(hasSameBread(
//     ["toast" ,"cheese" ,"toast"],
//     ["brown bread", "cheese" ,"toast"]
// ));  