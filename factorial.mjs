// function factorial(number){
//     let fact = 1;
//     for(let i=1; i<=number; i++){
//         fact *= i;
//     }
//     return fact;


// }

function factorial(number){
    if(number === 1) return 1;
    else return number * factorial(number-1);
}


console.log(factorial(5));