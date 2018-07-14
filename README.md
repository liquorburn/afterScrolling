# afterScrolling
## Dependency-free, simple script to handle functions to be executed after scroll has ended.

### Description
afterScrolling will wait when the user stop scrolling and then will execute your functions. You set a delay and a boolean flag that indicates whether the function should be executed after each scroll.

### Examples
```javascript
afterScrolling.set("fn1", function() {
    console.log("I only will run once");
}, 200); 
		
afterScrolling.set("fn2", function(){ 
    console.log("350ms after scroll has ended " + (new Date()).getTime());
}, 350, true); 
```
