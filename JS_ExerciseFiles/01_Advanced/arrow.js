//const sayHello = function(name){
//	return 'Hello ' + name
//}
//console.log(sayHello('Vijay'))


//const sayHello = (name) => {
//	return 'Hello ' + name
//}
//console.log(sayHello('Vijay'))


// Arrow function 2

const sayHello = (name) => `Hello ${name}`

//console.log(sayHello('Vijay'))


const todos = [{
		title : 'Buy Bread',
		isDone : true,
	},{
		title : 'Go to Gym',
		isDone : true,
	},{
		title : 'Record youtube video',
		isDone : false,
	}]

//const thingsDone = todos.filter((todo) => {
//	return todo.isDone === true
//})

const thingsDone = todos.filter((todo) => todo.isDone === true)

//console.log(thingsDone)

//===========================================================================================
// Issue with using arrow function using in some places
const cameras = {
	price : 600,
	weight : 2000,
	//myDes : function (){
	//	return `This Canon camera is of ${this.price}`
	//}
	myDes(){
		return `This Canon camera is of ${this.price}`
	}
}

console.log(cameras.myDes())


// This is only for REDUX
//const fun = () => ({ key : 'value'})




















