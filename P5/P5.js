/* 

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

var smallestMultiple = function() {
  let n = 1; // starting value

  for (var counter = 1; counter <= 20; counter++) {
    while (n % counter != 0) {
      ++n;
      counter = 1;
    }
  }
  return n;
};


console.log(smallestMultiple());
