function strlength(str){
   if(str.length === 0) return 0;
   return strlength(str.slice(0,-1)) + 1;

}

let str = "abcd";
console.log(strlength(str));