//write a function that counts the sum of the digits 
//of the number and return the sum

var value = 25,
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}
console.log(sum);


//Create a program to print all prime palindromes under 50.
function primeNumber(num){
    let check=1;
    for (k=2 ;k<num; k++){
      if (num%k==0){
        check=0
      }
    }
    return check;
  }
  
  function palindrome(num){
    let number=num;
    let reverse=0;
    
    while (num>0){
      reverse= (reverse*10) + num%10;
      num= Math.floor(num/10);
    }
    if (reverse==number){
      return 1
    } else {
      return 0
    }
  }
  
  for (i=1; i<=50 ; i++){
    if (primeNumber(i)==1 && palindrome(i)==1){
      console.log(i);
    }
  }
      