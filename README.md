# JS_samples
About JavaScript concepts

### Callback functions
The callback function will get executed after the execution of parent function.

Declaration Syntax : 
```
  let myFun = function(data, callback){
    // do some work
    if(typeof callback === 'function') {
				callback(param);
		}
  }
```
Calling Syntax : 
```
  myFun(data, function(param){
    // your logic
  });
```
