// Create a function that searches for the index of a given item in an array. if the item is present, it should return the index, otherwise, it should return -1.

function search(arr, item) {
    return arr.indexOf(item)
}

console.log(search([1, 2, 3, 4], 3));
console.log(search([2, 4, 6, 8, 10], 8));
console.log(search([1, 3, 5, 7, 9], 11));