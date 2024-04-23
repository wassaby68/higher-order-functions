const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const merge = (a, b) => [...a, ...b];
const removeDuplicates = (arr) => [...new Set(arr)];
const randomString = () => Math.random().toString(36).slice(2);