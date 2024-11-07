console.log('anonymous functions.js');
console.log('----------------------');
console.log('');

// function definition
function foo() {
	console.log('foo');
}

// function expression
var f = function express() {
	console.log('exp');
};

// anonymous function
var g = function () {
	console.log('anonymous');
};

foo();
f();
// express();  // doesn't work, says express is not defined
g();


