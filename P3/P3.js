/**

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?


**/

//2018/09/04 - new test pushed at time 10:38 AM 
// author - maverick

function primeFactor(num) {
	var count = 2; 
	while(count<=num){
		if(num%count==0){
			num/=count;
		console.log(count);	
		}else {
			count++;
		}	
	}
}

primeFactor(600851475143);