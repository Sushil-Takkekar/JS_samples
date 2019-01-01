// custom timer
/*
let curr_time = Date.now();
let add_ms = 6000;
let new_time = curr_time+add_ms;

console.log('Start time -> '+ new Date(curr_time));
while(Date.now() < new_time) {
}
console.log('End time -> '+new Date(new_time));
*/

//custom timeout
let myTimeout = function(callback, add_ms){
  let curr_time = Date.now();
  let new_time = curr_time + add_ms;
  while(Date.now() < new_time) {
  }
  callback();
};

// it will not execute asynchronously
myTimeout(function(){
  console.log('executed after 7000 ms..');
}, 7000);
