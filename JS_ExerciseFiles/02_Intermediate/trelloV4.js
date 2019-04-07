const myTodos = ['Buy Bread' ,'Go to Gym', 'Record youtube videos']

//console.log(myTodos.indexOf('Buy Bread'))

const newTodos = [{
	title : 'Buy Bread',
	isDone : false,
},{
	title : 'Go to Gym',
	isDone : false,
},{
	title : 'Record youtube video',
	isDone : true,
}]

const index = newTodos.findIndex(function(todo,index){
	//console.log(todo)
	return todo.title === 'Record youtube video'
	
})

//console.log(index)


const findTodo = function(myTodos, title){
	const titleReturned = myTodos.find(function(todo,index){
		return todo.title.toLowerCase() === title.toLowerCase()
	})
	return titleReturned
}


console.log(findTodo(newTodos,'Go To gym'))