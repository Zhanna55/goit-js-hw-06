const numberOfCategories = document.querySelectorAll('.item').length;

console.log(`Number of categories:${numberOfCategories}`);

const categoriesArr = document.querySelectorAll('.item > h2');
categoriesArr.forEach((category) => {
  const elementsArr = category.nextElementSibling.children.length;

  console.log(`Category: ${category.textContent} \nElements: ${elementsArr}`);
});
