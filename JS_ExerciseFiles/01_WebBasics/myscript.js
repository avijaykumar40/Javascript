//alert('File is attached')

//console.log(document.title)

//console.log(document.getElementById('idone'))
//console.log(document.getElementsByClassName('classone'))

//const myElement = document.querySelector('p')
//const myElements = document.querySelectorAll('p')
//console.log(myElement)
//console.log(myElements)

//const myPElements = document.querySelector('p')
//console.log(myPElements)
//myPElements.textContent = 'I am being changed using JS'


//const myPElements = document.querySelectorAll('p')
//myPElements.forEach((p) => p.textContent = 'I am being changed by Loop in JS, Arrow Function')


//const myNewElement = document.createElement('p')
//myNewElement.textContent = 'I am added using JS create new element'
//
//document.querySelector('body').appendChild(myNewElement)


document.querySelector('button').addEventListener('click',(event) => {
	event.target.textContent = 'I was Clicked'
})

