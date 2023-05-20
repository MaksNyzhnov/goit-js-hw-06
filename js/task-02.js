const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListEl = document.querySelector('#ingredients')

function createListItems(array) {
  return array.map(el => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = el;
    ingredientEl.classList.add('item')
  return ingredientEl
  })
}
const ingredientsItems = createListItems(ingredients)

ingredientsListEl.append(...ingredientsItems)