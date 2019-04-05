let getMyGrade = function(currentMark, totalMarks){
	let myPercent = (currentMark/totalMarks) * 100
	
	let myGrade = ''
	
	if(myPercent >= 90){
		myGrade = 'A'
	}else if(myPercent >= 80){
		myGrade = 'B'
	}else if(myPercent >= 70){
		myGrade = 'C'
	}else if(myPercent >= 60){
		myGrade = 'D'
	}else{
		myGrade = 'F'
	}
	
	return `Your Grade is ${myGrade} and your percentage is ${myPercent}`
	
}

console.log(getMyGrade(500,700))


