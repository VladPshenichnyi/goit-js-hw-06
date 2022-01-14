const setEl = document.querySelector('#ingredients');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
for (let i = 0; i < ingredients.length; i += 1) {
  const setItemEl = document.createElement("li");
  setItemEl.textContent = ingredients[i]
  setItemEl.className = 'item'
  setEl.append(setItemEl)
};
