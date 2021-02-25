// e.g. cons(collection, value) -> cons([1], 2) -> [1, 2]
// cons([1], [2]) -> [1, 2]
// cons([1], [2, 3] -> [1, 2 ,3]
const cons = (xs, x) => xs.concat(x);


///////////////////////////////////////////////////////////////////
// last(collection) -> last([1, 2, 3, 4]) -> 4
const last = xs => xs[xs.length - 1];


///////////////////////////////////////////////////////////////////
// first(collection) -> first([1, 2, 3, 4]) -> 1
const first = xs => xs[0];


///////////////////////////////////////////////////////////////////
// rest(collection) -> rest([1, 2, 3, 4]) -> [2, 3, 4]
const rest = xs => xs.slice(1);


///////////////////////////////////////////////////////////////////
// take(collection, value) -> take([1, 2, 3, 4, 5], 2) -> [1, 2]
const take = (xs, x) => xs.slice(0, x);


///////////////////////////////////////////////////////////////////
// drop(collection, value) -> drop([1, 2, 3, 4, 5], 2) -> [3, 4, 5]
const drop = (xs, x) => xs.slice(x, xs.length);


///////////////////////////////////////////////////////////////////
// range(start, end, optional step)
const range = (start, end, step = 1) => {

  // e.g. range(5, 1) -> [5, 4, 3, 2]
  if (start > end){
    const rangeIter = (start, end, acc) => {
      // base case acc = []
      return start > end ? rangeIter(start - step, end, cons(acc, start)) : acc;
  }
    return rangeIter(start, end, []);
  }

  // e.g. range(1, 5) -> [1, 2, 3, 4]
  const rangeIter = (start, end, acc) => {
    // base case acc = []
    return start < end ? rangeIter(start + step, end, cons(acc, start)) : acc;
  }
  return rangeIter(start, end, []);
};


///////////////////////////////////////////////////////////////////
// sliding(collection, value) -> sliding([1, 2, 3, 4, 5], 2)
// -> [[1, 2], [3, 4], [5]]

const sliding = (xs, x) => {
    if (xs.length === 0) { return [] }

    return cons([take(xs, x)], sliding(drop(xs, x), x));
};


///////////////////////////////////////////////////////////////////
// zip(collection, collection) -> zip(['a', 'b', 'c'], [1, 2, 3])
// -> [['a', 1], ['b', 2], ['c', 3]]

const zip = (a, b) => a.map((k, i) => [k, b[i]]);


///////////////////////////////////////////////////////////////////
// frequencies(collection) -> ['a', 'b', 'a', 'c', 'b'] -> Map { 'a' => 2, 'b' => 2, 'c' => 1 }
// -> "abacb" -> Map { 'a' => 2, 'b' => 2, 'c' => 1 }

const frequencies = xs => {
  const new_xs = typeof(xs) === 'string' ? Array.from(xs) : xs

  return new_xs.reduce((acc, e) => acc.set(e, 1 + (acc.get(e) || 0)), new Map()); 
}
