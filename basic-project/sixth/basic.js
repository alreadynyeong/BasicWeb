localStorage.setItem('name', 'LeeMinhyeong');
localStorage.setItem('age', '24');

const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(name, age)

const travel = {
  destinations : ['paris', 'sydney', 'taipei'],
  days : 100,
  mate : undefined,
  isAvailable : true
}
localStorage.setItem('travel', JSON.stringify(travel));   

const data = JSON.parse(localStorage.getItem('travel'));
console.log(data.destinations);

localStorage.removeItem('name');
localStorage.clear();