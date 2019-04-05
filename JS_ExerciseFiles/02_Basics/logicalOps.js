let isVerfied = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if(isVerfied && isLoggedIn && hasPaymentToken){
	console.log('Greeting Message to user')
	console.log('Grant access to paid course')	
} else if (isVerfied || isGuest){
	console.log('Allow free previews')
}else{
	console.log('Please contact admin')
}


