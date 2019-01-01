console.log('Started with Callback tutorial...');

// simple Timeout function
let v1 = function(){
	console.log('executed after 5000 ms..');
};
setTimeout(v1,5000);


// this Timeout will run first as the time is lower than previous
setTimeout(function(){
	console.log('executed after 2000 ms..');
},2000);


//custom timeout
let myTimeout = function(callback, add_ms){
  let curr_time = Date.now();
  let new_time = curr_time+add_ms;
  while(Date.now() < new_time) {
  }
  callback();
};
// it will not execute asynchronously
myTimeout(function(){
  console.log('executed after 7000 ms..');
}, 7000);


// Event listener (callback fun will execute after the on-click event)
let btn = document.getElementById('clickBtn');
btn.addEventListener("click", function(){
	console.log('btn clicked !');
});


// custom callback function
let students = [
	{name:"Name_1", age:20, dept:"it"},
	{name:"Name_2", age:16, dept:"extc"},
	{name:"Name_3", age:17, dept:"comp"},
	{name:"Name_4", age:23, dept:"it"},
	{name:"Name_5", age:21, dept:"comp"},
];

let eighteen_plus = function(data, callback){
	for(let i=0;i<students.length;i++) {
		if(data[i].age > 18) {
			// add custom delay
			myTimeout(function(){
			  console.log(data[i].name+'-> 18+');
			}, 3000);
			// invoke callback function at the end
			if(typeof callback === 'function') {
				callback(data[i]);
			}
		}
	}
};

// without callback
//let get_dept_18_plus = eighteen_plus(students);

// with callback
let get_dept_18_plus = eighteen_plus(students, function(user){
	if(user.dept === 'it') {
		console.log(user.name+'-> 18+ -> '+user.dept);
	}
});
 console.log('End of script !!');
