let myTodos = {
	day : 'Monday',
	meetings : 0,
	meetDone : 0,
	
	addMetting: function(num){
		this.meetings = this.meetings + num
	},	
	
	addMeetDone: function(num){
		this.meetDone = this.meetDone + num
		this.meetings = this.meetings - this.meetDone
	},
	
	resetDay : function(){
		this.meetings = 0,
		this.meetDone = 0
	},
	
	summary : function(){
		return `You are done with ${this.meetDone} and ${this.meetings} meetings are pending today`
	}
}

myTodos.addMetting(4)
console.log(myTodos.summary())

myTodos.addMeetDone(1)
console.log(myTodos.summary())

myTodos.resetDay()
console.log(myTodos.summary())

