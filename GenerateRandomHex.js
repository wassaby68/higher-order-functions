const isArray = (arr) => Array.isArray(arr);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);