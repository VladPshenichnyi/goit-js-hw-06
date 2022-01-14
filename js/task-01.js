const allCategoriesItemSetEl = document.querySelector('#categories')

console.log('Number of categories :>> ', allCategoriesItemSetEl.children.length);
console.log('Category :>> ', allCategoriesItemSetEl.children[0].firstElementChild.textContent);
console.log('Element :>> ', allCategoriesItemSetEl.children[0].children[1].children.length);
console.log('Category :>> ', allCategoriesItemSetEl.children[1].firstElementChild.textContent);
console.log('Element :>> ', allCategoriesItemSetEl.children[1].children[1].children.length);
console.log('Category :>> ', allCategoriesItemSetEl.children[2].firstElementChild.textContent);
console.log('Element :>> ', allCategoriesItemSetEl.children[2].children[1].children.length)