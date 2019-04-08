var ul = document.getElementById('list')
var li
var checkBox
var pTag

var addButton = document.getElementById('add')
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

var clearButton = document.getElementById('clear')
clearButton.addEventListener('click',clearAll)

function addItem(){
	var input = document.getElementById('input')
	var item = input.value
	var textNode = document.createTextNode(item)
	if(item === ''){
		pTag = document.createElement('p')
		pTag.textContent = 'Enter your todo'
		pTag.style.background = "rgb(255,0,0)";
		document.querySelector('p').appendChild(pTag)
		setTimeout(() => {
			pTag.remove()
		},1500)
		return false
	}else{
		// Create li
		li = document.createElement('li')
		// Create input of checkbox
		checkBox = document.createElement('input')
		checkBox.type = 'checkbox'
		checkBox.setAttribute('id','check')
		// Create label
		var label = document.createElement('lable')
		
		//Add elements to web
		
		ul.appendChild(label)
		li.appendChild(checkBox)
		label.appendChild(textNode)
		li.appendChild(label)
		
		ul.insertBefore(li, ul.childNodes[0])
				
		
		setTimeout(() => {
			li.className = 'visual'
		},2)
		
	}
	input.value = ''
	
}

function removeItem(){
	li = ul.children
	for(index = 0; index < li.length; index++){
		while(li[index] && li[index].children[0].checked){
			ul.removeChild(li[index])
		}
	}
}

function clearAll(){
	ul.remove()
}