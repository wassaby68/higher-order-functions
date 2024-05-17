const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
var pattern = {};
const copyToClipboard = (text) => navigator.clipboard.writeText(text);