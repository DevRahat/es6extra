const numbers=(23,45,67);
const max=Math.max(numbers);
console.log(max);

const number=[12,23,45,56,67,78];
const bigest=Math.max(number);
console.log(bigest); //OutPut will be NaN because Math() does not work with array

const list=[10,20,30,40,50];
const maxList=Math.max(...list);
console.log(maxList);