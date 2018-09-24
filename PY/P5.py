"""
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 ;
without any remainder.;
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?;

"""

def smallestNum():
    startingValue = 2520
    i = 1
    while i<=20:
        if(startingValue%i==0):
            startingValue+=1
        else:
            i+=1
            continue
    print (startingValue)

smallestNum()