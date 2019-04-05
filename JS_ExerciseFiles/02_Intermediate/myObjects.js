let myYoutubeVideoOne = {
	title : 'Loops in JavaScript',
	videoLenght : 15,
	videoCreator: 'Vijay',
	videoDecription : 'This is video description and a long one'
}

let myYoutubeVideoTwo = {
	title : 'Functions in JavaScript',
	videoLenght : 10,
	videoCreator: 'Vijay',
	videoDecription : 'This is video description and a long one'
}

//console.log(myYoutubeVideo)
//console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)	

//myYoutubeVideo.title = 'ForEach loop in JS'

//console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)	
//console.log(myYoutubeVideo)

let changeVideoLength = function(myObject){
	return{
		formatOne : `Length of video is ${myObject.videoLenght + 2}`,
		formatTwo : `Length of video is ${myObject.videoLenght + 1}`
	}
}

let addOne = changeVideoLength(myYoutubeVideoTwo)
console.log(addOne.formatOne)
console.log(addOne)

