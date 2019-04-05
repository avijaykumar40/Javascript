let myTodos = {
	day : 'Monday',
	mettings : 0,
	meetDone : 0		
}

let addMeeting = function(todo, meet = 0){
	todo.mettings = todo.mettings + meet
}

let meetDone = function(todo, meet = 0){
	todo.meetDone = todo.meetDone + meet
}

let resetDay = function(todo){
	todo.meetings = 0,
	todo.meetDone = 0
}

let getSumaryofDay = function(todo){
	let meetLeft = todo.meetings - todo.meetDone
	return `You have ${meetLeft} of meetings today !`
}

addMeeting(myTodos, 4)
addMeeting(myTodos, 2)
meetDone(myTodos, 5)
console.log(getSumaryofDay(myTodos))
