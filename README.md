# afterScrolling
## Dependency-free, simple script to handle functions to be executed after scroll has ended.

### Description
afterScrolling will wait when the user stop scrolling and then will execute your functions. You set a delay and a boolean flag that indicates whether the function should be executed after each scroll.

### Usage
Include the file afterScrolling.min.js as every js file:
```html
<script src="afterScrolling.min.js"></script>
```
Or just copy&paste its content to your project.

### Examples
```javascript
afterScrolling.set("fn1", function() {
    console.log("I only will run once");
}, 200); 
		
afterScrolling.set("fn2", function(){ 
    console.log("350ms after scroll has ended " + (new Date()).getTime());
}, 350, true); 
```
