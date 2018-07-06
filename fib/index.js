// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Memoizer generic function
function memoize(fn) {
  // Record of all the previous calls to this function
  // and their respective results.
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);

    cache[args] = result;

    return result;
  };
}

const fib = memoize(slowFib);

// #3 - Improved recursive solution       O(n)
function slowFib(n) {
  if (n < 2) {
    return n;
  }

  // Calling the memoized version of function
  return fib(n - 2) + fib(n - 1);
}

module.exports = fib;

// #1 - Iterative solution       O(n)
// function fib(n) {
//   const result = [0, 1];
// 
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 2];
//     const b = result[i - 1];
// 
//     result.push(a + b);
//   }
// 
//   // return result.pop();
//   return result[n];
// }

// #2 - Recursive solution       O(2^n)
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
// 
//   return fib(n - 2) + fib(n - 1);
// }