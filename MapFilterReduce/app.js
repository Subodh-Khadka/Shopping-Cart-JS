//map function
const arr1 = [1, 2, 3, 4];
const doubled = arr1.map((number) => number * 2);
console.log(doubled);

//filter function
const arr2 = arr1;
const result = arr2.filter((number) => number < 4);
console.log(result);

//reduce function
const arr3 = arr2;
const result3 = arr3.reduce((total, current) => total + current);
console.log(result3);
