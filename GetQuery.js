const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const added = [0, 1, 2, 3, 4].map((item) => item + 1);