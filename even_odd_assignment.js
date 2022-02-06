var a =20;
if(a%2==0){
console.log("a is even");
}
else{
console.log("a is odd");
}

// Program to check if a number is a perfect square 
const num = 16;
const perfectSquare = num => {
   let a = 1;
   while(a * a <= num){
      if(a * a !== num){
         a++;
         continue;
      };
      return true;
   };
   return false;
};
console.log(perfectSquare(num));

