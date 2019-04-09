localStorage.setItem('hero','Thor')
localStorage.setItem('todo','Go to Gym')

console.log(localStorage.getItem('hero'))

console.log(localStorage.getItem('todo'))

localStorage.setItem('todo','Buy Bread')

console.log(localStorage.getItem('todo'))

localStorage.removeItem('hero')
console.log(localStorage.getItem('hero'))

localStorage.clear()