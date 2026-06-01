// function myFuncion(number){
//     console.log(number);
// }

// myFuncion(1);


function myFuncion(number){
    if(number>10) return;
    console.log(number);
    myFuncion(number+1);
}

myFuncion(1);


for(let i=1; i<11; i++){
    console.log(i);
}