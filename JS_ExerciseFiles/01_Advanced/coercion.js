console.log('5' - 5) // JS precditing as number
console.log('5' + 5) // JS precditing as string

console.log(true + 5 ) // 6
console.log(false + 5 ) // 5

const loginDetails = []

//logic for getting details from DB

const loginID = loginDetails[0]

if(loginID != undefined){   // if(loginID) will be same
	console.log('Allow user to login')
}else{
	console.log('Auth Failed')
}