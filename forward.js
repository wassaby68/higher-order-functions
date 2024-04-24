const repositoryRootPath = path.resolve(__dirname, '..');
const isWeekday = (date) => date.getDay() % 6 !== 0;
var arr1 = "john".split('');
var regexp  = new RegExp('{{([^}]+)}}', 'g');