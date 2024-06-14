const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const uniqueArray = arr => [...new Set(arr)];