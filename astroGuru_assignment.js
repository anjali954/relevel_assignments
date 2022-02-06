//Write a function named astroGuru that: takes 4 arguments: number of children, spouse’s name, location, job. outputs a string to
// the console that is of the form: "You will be a `job` in `location`, and married to `spouse` with `no of children` kids.

function astroGuru(job,location,spouseName,childrenNum){
    var future = 'You will be a ' + job + ' in '  + location + ' and married to ' + spouseName + ' with ' + childrenNum + 'kids';
    console.log(future);
}
    
    astroGuru('Software Developer','Chandigarh','xyz',2);


    //Write a function that compares two numbers and returns the larger of the two. 
    //Bonus: output appropriate messages if the numbers are equal or if they cannot be compared.


function numGreater(num1, num2) {
        if (num1 === num2) {
          console.log('Numbers are equal');
        } else if (num1 > num2) {
          return num1;
        } else if (num2 > num1) {
          return num2;
        } else {
          console.log('not defined');
        }
}
      
    console.log(numGreater(3, 3));
      


