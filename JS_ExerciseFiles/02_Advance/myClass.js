class User{
	constructor(firstname, lastname, credit){
		this.firstname = firstname
		this.lastname = lastname
		this.credit = credit
	}
	
	getFullName(){
		return `${this.firstname} ${this.lastname}`
	}
	
	editName(name){
		let userName = name.split(' ')
		this.firstname = userName[0]
		this.lastname = userName[1]
	}
}

class Teacher extends User{
	constructor(firstname, lastname, credit, subject){
		super(firstname, lastname, credit) // Always should be the first line 
		this.suject = subject
	}
	getFullName(){
		return `${this.firstname} ${this.lastname} is my full and I teach ${this.subject}`
		
	}
}
const john = new Teacher('John','Andreson',34, 'python')
console.log(john)
john.editName('Johnney Anderson')
console.log(john.getFullName())
console.log(john)


