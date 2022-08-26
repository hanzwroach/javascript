# JavaScript

## Duplicate

### flatMap solution

```js
const duplicate = xs => xs.flatMap(x => [x, x]);
duplicate([1, 2]);
// => [1, 1, 2, 2]
```

## Chunk

### for loop solution

```js
function chunk(arr, chunkSize) {
    if (chunkSize <= 0) throw "Invalid chunk size"
    let R = [];
    for (let i=0, len=arr.length; i<len; i+=chunkSize)
       R.push(arr.slice(i, i+chunkSize)
    return R;
}
```

### One-liner in ECMA 6 solution (mutates the array)

```js
const [list,chunkSize] = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 6]
[...Array(Math.ceil(list.length / chunkSize))].map(_ => list.splice(0,chunkSize))
```

### reduce solution

```js
const chunk = (array, size) =>
  array.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size))
    return acc
  }, [])

// Usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const chunked = chunk(numbers, 3)
console.log(chunked)
```

## Unique

### Set solution

```js
[...new Set(duplicate)]
```

### filter solution

```js
const unique = (d) =>
    d.filter((x, i) => d.indexOf(x) === i); 
```

## Count Digits in Number

### solution for integers

```js
const countDigits_I = (num) => Math.log(num) * Math.LOG10E + 1 | 0;
```

### solution for floats

```js
const countDigits_F = (num) => (num + '').replace('.', '').length;
```

### while loops

```js
var i = 1;
while( ( n /= 10 ) >= 1 ){ i++ }

23432          i = 1
 2343.2        i = 2
  234.32       i = 3
   23.432      i = 4
    2.3432     i = 5
    0.23432
```

## Range

### recursive solution

```js
const range = (a, b) => a > b ? [] : [a, ...range(a +1, b)]
```

### Generator solution

```js
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (i of range(1, 5)) {
    console.log(i);
}
/* Output
 * 1 2 3 4 5 */

[...range(1, 5)] // [1, 2, 3, 4, 5]
```

### Generator recursive solution

```js
function* range(start, end) {
    yield start;
    if (start === end) return;
    yield* range(start + 1, end);
}
```

## Sliding Window

### Array.from solution

```js
function toWindows(inputArray, size) {
  return Array.from(
    {length: inputArray.length - (size - 1)}, //get the appropriate length
    (_, index) => inputArray.slice(index, index+size) //create the windows
  )
}
```

### Generator

```js
function* windowGenerator(inputArray, size) { 
  for(let index = 0; index+size <= inputArray.length; index += 1) {
    yield inputArray.slice(index, index+size);
  }
}

function toWindows(inputArray, size) {
  //compute the entire sequence of windows into an array
  return Array.from(windowGenerator(inputArray, size))
}
```

### Window recursive solution

```js
const windows = (l, xs, i = 0, out = []) =>
  i > xs.length - l
    ? out
    : windows(l, xs, i + 1, [...out, xs.slice(i, i + l)]);
```

### non-recursive solution

```js
const windows = (l, xs) =>
    xs.flatMap((_, i) =>
      i <= xs.length - 1
        ? [xs.slice(i, i + l)]
        : []); 
```

## Map Object with multiple keys to one value

### map reduce solution

```js
 const mapReducer = (arr, [keys, val]) => [
  ...arr,
  ...(Array.isArray(keys) ? [...keys.map((key) => [key, val])] : [[keys, val]]),
];

const mp = new Map(
  [
    [[2, 4], "even"],
    [[1, 3], "odd"],
    [0, "meh..."],
  ].reduce(mapReducer, [])
);

console.log([...mp.entries()]);
```

## Generate random numbers

```js
// n = 10 generates numbers up to 10 but not 10
const getRandomNumber = (n) => Math.floor(Math.random() * n);
```

## Create Matrix

```js
const m = Array(3)
  .fill()
  .map(() =>
    Array(3)
      .fill()
      .map(() => getRandomNumber(10))
  );
```

## TRANSPOSE MATRIX ROWS TO COLUMNS

```js
const transpose = (matrix) => {
  let [row] = matrix
  return row.map((_, column) => matrix.map(row => row[column]))
}
```
