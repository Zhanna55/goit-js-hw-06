const numberOfCategories = document.querySelectorAll('.item').length;
console.log(`Number of categories:${numberOfCategories}`);

const categories = document.querySelectorAll('.item');
categories.forEach((category) => {
  console.log(`Category:`, category.querySelector('h2').textContent);
  console.log(`Elements:`, category.querySelectorAll('li').length);
});
