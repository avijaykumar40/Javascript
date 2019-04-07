var john = {
	name : 'I am John',
	age : 24,
	isActive : true,
}

var marry = {
	name : 'I am Marry',
	age : 23,
	isActive : true,
}

var sam = {
	name : 'I am Sam',
	age : 29,
	isActive : false,
}

let users = new Map()

console.log(typeof users)

users.set('john',john)
users.set('marry',marry)
users.set('sam',sam)

console.log(users)
console.log(users.size)
console.log(users.get('sam'))
console.log(users.keys())
console.log(users.values())

for(const key of users.keys()){
	console.log(key)
}

for(const value of users.values()){
	console.log(value.name)
}


for(const [key,value] of users.entries()){
	//console.log(key + ':' + value.name)
	console.log(`${key} : ${value.name}`)
}

console.log('Using ForEach : ')
users.forEach((value,key) => console.log(`${key} : ${value.name}`))


var arrOfArr = [[1,'one'],[2,'two'],[3,'three']]

let newMap = new Map(arrOfArr)

console.log(newMap)
