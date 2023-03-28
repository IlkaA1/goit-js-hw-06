'use strict';

const categoriesEl = document.querySelectorAll('#categories li.item ');
console.log(`Number of categories:${categoriesEl.length}`);

categoriesEl.forEach(function (child) {
  console.log(`Category: ${child.firstElementChild.innerText}`);
  console.dir(`Elements: ${child.lastElementChild.childElementCount}`);
});
