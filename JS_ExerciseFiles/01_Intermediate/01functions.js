let sayHello = function(){
	console.log('Welcome to my function')
}

sayHello()

let sayHello1 = function(name){
	console.log(`Welcome to my function ${name}`)
}

sayHello1('John') 


let myAddress = function(num1, num2){
	let added = num1 + num2
	return added
}

console.log(myAddress(3,5))
let result = myAddress(3,9)
console.log(result)
