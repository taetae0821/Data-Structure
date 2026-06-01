import { Stack } from "./stack.mjs";

// let stack = [];
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// console.log(stack);
// stack.pop();
// console.log(stack);


let stack = new Stack();
// console.log("--- 첫번째 출력 ---");
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);

// console.log(stack.pop().data);
// console.log(stack.pop().data);
// console.log(stack.pop().data);
// console.log(stack.pop().data);

stack.push("일");
stack.push("이");
stack.push("삼");
stack.push("사");

console.log(stack.Peek().data);
console.log(stack.Peek().data);
console.log(stack.Peek().data);
console.log(`isEmpty : ${stack.isEmpty()}`);

stack.pop();
stack.pop();
console.log(stack.Peek().data);

stack.pop();
stack.pop();
console.log(`isEmpty : ${stack.isEmpty()}`);
