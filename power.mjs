
function power(number,n){

       if(n === 0) return 1;
       else return number * power(number,n-1);  
         
}

console.log(power(2,5))