// There is an easy way to assign to array values to the nth index by using rest parameter syntax.

// function headAndTail(arr) {
//     var [head, ...tail] = arr;
//     return [head, tail];
// }

// const result = headAndTail([1, 2, 3, 4]);

// console.log(headAndTail([5,6]));
// console.log(headAndTail([5,6,7]));

function headAndTail(arr) {
    var [head, ...tail] = arr;
    console.log(head);
    console.log(tail);
    return [head, tail];
}

console.log(headAndTail([0]));
console.log(headAndTail([1]));