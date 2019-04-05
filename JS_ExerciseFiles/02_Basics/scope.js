//let iAmglobal = 'someValue'
//
//if(true){
//	let iAmLocal = 'someMoreValue'
//
//	console.log('Print iAmglobal :' ,iAmglobal)
//	console.log('Print iAmLocal :' ,iAmLocal)
//} 

// Kings territory probelm
let king = 'John'

if(true){
	let king ='Sam'
	
	if(true){
		let king = 'Ram'
		console.log('Who is the king : ',king)
	}
		
}

if(true){
	console.log('I am the second part : ' + king)
}
