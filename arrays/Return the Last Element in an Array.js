// Create a function that accepts an array and returns the last item in the array.

// function getLastItem(arr) {
    // return arr[arr.length - 1];
// }
// 
// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));
// 
// function getLastItem(arr) {
    // return arr.pop();
// }
// 
// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));

// function getLastItem(arr) {
//   return arr.slice(-1)[0];
// // }

// console.log(getLastItem([1, 2, 3]));
// // console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));

// function getLastItem(arr) {
    // return arr.at(-1);
// }  

// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));

// function getLastItem(arr) {
    // const [ ...rest ] = arr;
    // return rest[rest.length - 1];
// }  

// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));

// function getLastItem(arr) {
    // return arr.reverse()[0];
// }  

// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));

/* # JavaScript Functions & Methods – Full Reference Sheet

This file contains **all important JavaScript functions, array methods, string methods, object methods, math methods, ES6 features, loops, and more**.

---

## ✅ 1. Basic Function Syntax

```js
function myFunction() {
  // code
}
```

### Function with parameters

```js
function add(a, b) {
  return a + b;
}
```

### Arrow function

```js
const add = (a, b) => a + b;
```

---

## ✅ 2. Array Methods

### 🔹 **Adding & Removing Elements**

```js
arr.push(item);       // Add end
arr.pop();            // Remove end
arr.unshift(item);    // Add start
arr.shift();          // Remove start
```

### 🔹 **Extract / Copy / Join**

```js
arr.slice(start, end);
arr.concat(arr2);
arr.join(',');
```

### 🔹 **Modify**

```js
arr.splice(start, deleteCount, newItem);
arr.reverse();
arr.sort();
```

### 🔹 **Searching**

```js
arr.indexOf(value);
arr.includes(value);
```

### 🔹 **Higher Order Methods**

```js
arr.map(x => x * 2);
arr.filter(x => x > 10);
arr.reduce((a, b) => a + b, 0);
arr.find(x => x === 5);
arr.findIndex(x => x === 5);
arr.every(x => x > 0);
arr.some(x => x < 0);
```

---

## ✅ 3. String Methods

```js
str.length;
str.toUpperCase();
str.toLowerCase();
str.trim();
str.includes();
str.indexOf();
str.slice();
str.substring();
str.replace();
str.split();
```

---

## ✅ 4. Object Methods

```js
Object.keys(obj);
Object.values(obj);
Object.entries(obj);
Object.assign({}, obj);
```

### Loop objects:

```js
for (let key in obj) {
  console.log(key, obj[key]);
}
```

---

## ✅ 5. Math Methods

```js
Math.round();
Math.floor();
Math.ceil();
Math.random(); // 0 to 1
Math.max();
Math.min();
Math.pow();
Math.sqrt();
```

---

## ✅ 6. Loops

```js
for (let i = 0; i < 5; i++) {}

while (condition) {}

do {} while(condition);
```

### For-of (arrays)

```js
for (let item of arr) {}
```

### For-in (objects)

```js
for (let key in obj) {}
```

---

## ✅ 7. ES6 Features

### Destructuring

```js
const [a, b] = arr;
const {name, age} = obj;
```

### Spread operator

```js
let newArr = [...arr1, ...arr2];
let newObj = {...obj1, ...obj2};
```

### Template literals

```js
`Hello ${name}`;
```

---

## ✅ 8. Dates

```js
let now = new Date();
now.getFullYear();
now.getMonth();
now.getDate();
```

---

## ✅ 9. JSON

```js
JSON.stringify(obj);
JSON.parse(jsonString);
```

---

## ✅ 10. DOM Methods (Basic)

```js
document.getElementById('id');
document.querySelector('.class');
document.createElement('div');
```

---

## Want more?

I can add:

* **Full DOM methods**
* **Event methods**
* **Async/Await & Promises**
* **Classes**
* **Modules**
* **LocalStorage / SessionStorage**
* **Interview-Level Functions**

Just say: **"Aur add karo"**  */