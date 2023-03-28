const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const liEl = document.createElement('li');
liEl.textContent = 'Potatoes';
liEl.className = 'item';
console.log(liEl);

const liEl1 = document.createElement('li');
liEl1.textContent = 'Mushrooms';
liEl1.className = 'item';
console.log(liEl1);

const liEl2 = document.createElement('li');
liEl2.textContent = 'Garlic';
liEl2.className = 'item';
console.log(liEl2);

const liEl3 = document.createElement('li');
liEl3.textContent = 'Tomatos';
liEl3.className = 'item';
console.log(liEl3);

const liEl4 = document.createElement('li');
liEl4.textContent = 'Herbs';
liEl4.className = 'item';
console.log(liEl4);

const liEl5 = document.createElement('li');
liEl5.textContent = 'Condiments';
liEl5.className = 'item';
console.log(liEl5);

const ingredientsEl = document.querySelector('ul#ingredients');
ingredientsEl.append(liEl, liEl1, liEl2, liEl3, liEl4, liEl5);
console.log(ingredientsEl);
