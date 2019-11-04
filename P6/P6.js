/* 
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

var SumSquareDifference = function(){

let sumSquare = 0;
let squareSum = 0;

for(var counter=1; counter <= 100; counter++)
{
    sumSquare+= counter*counter;
    squareSum+= counter;
}
return squareSum*squareSum - sumSquare;
}

console.log(SumSquareDifference());