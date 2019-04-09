const student = {
	name : 'John',
	age : 23,
	isActive : true,
}

// convert object into string to store into localStorage

const studentObjToString = JSON.stringify(student)
console.log(typeof studentObjToString) // String
localStorage.setItem('studentObj',studentObjToString)

const toJSONStudent = JSON.parse(studentObjToString)
console.log(typeof toJSONStudent) // JSON

