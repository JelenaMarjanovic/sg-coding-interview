// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// #1
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}

module.exports = steps;

// #2 - Recursive solution
// function steps(n, row = 0, stair = '') {
//   // Base case
//   if (row === n) {
//     return;
//   }
// 
//   if (stair.length === n) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }
// 
//   if (stair.length <= row) {
//     stair += '#';
//   } else {
//     stair += ' ';
//   }
// 
//   steps(n, row, stair);
// }

// #3 - Recursive solution, improved
// function steps(n, row = 0, stair = '') {
//   // Base case
//   if (row === n) {
//     return;
//   }
// 
//   if (stair.length === n) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }
// 
//   const add = stair.length <= row ? '#' : ' ';
// 
//   steps(n, row, stair + add);
// }