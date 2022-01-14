// Решение 1
const allCategoriesItemSetEl = document.querySelector('#categories')
console.log('Number of categories :>> ', allCategoriesItemSetEl.children.length);
const allEl = allCategoriesItemSetEl.querySelectorAll('.item');
    for (let i = 0; i < allEl.length; i += 1) {
        console.log('Category :>> ', allCategoriesItemSetEl.children[i].firstElementChild.textContent);
        console.log('Element :>> ', allCategoriesItemSetEl.children[i].children[1].children.length);
    };


// Решение 2
// const allCategoriesItemSetEl = document.querySelector('#categories')
// console.log('Number of categories :>> ', allCategoriesItemSetEl.children.length);
// console.log('Category :>> ', allCategoriesItemSetEl.children[0].firstElementChild.textContent);
// console.log('Element :>> ', allCategoriesItemSetEl.children[0].children[1].children.length);
// console.log('Category :>> ', allCategoriesItemSetEl.children[1].firstElementChild.textContent);
// console.log('Element :>> ', allCategoriesItemSetEl.children[1].children[1].children.length);
// console.log('Category :>> ', allCategoriesItemSetEl.children[2].firstElementChild.textContent);
// console.log('Element :>> ', allCategoriesItemSetEl.children[2].children[1].children.length)