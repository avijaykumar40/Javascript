let userEmail = 'lco12'
let userPassword = '1234'

console.log(userPassword.length)

let userCheck = function (myString){
	if((myString.includes(123)) && (myString.length > 6)){
		return true
	}
	return false
}

let passwordCheck = function (passwordString){
	if((passwordString.includes(1234)) && (myString.length > 8)){
		return true
	}
	return false
}

console.log(userCheck(userEmail))
console.log(passwordCheck(userPassword))
