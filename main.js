// callback function
// with a parameter of call_two
function one(call_two) {
   console.log(`I am one.`);

   call_two();
}

function two() {
   console.log(`I am two`);
}
one(two);
