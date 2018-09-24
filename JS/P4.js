/* 


A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

function largPalindrome(){
	var larg = 0;
	for(var i=99; i<=999; i++){
		for(var j=99; j<=999; j++){
			var n = i * j;
			if(n == n.toString().split('').reverse().join('') && n > larg ){
				larg = n;
				
			}
		//	console.log(larg.toString().split('').reverse().toString());


		}
	}
	console.log(larg);
}


largPalindrome();