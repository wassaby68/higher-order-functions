const resultingPromises = urls.map((url) => makHttpRequest(url));
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const isEven = (num) => num % 2 === 0;