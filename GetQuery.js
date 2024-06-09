const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const apmRootPath = path.join(repositoryRootPath, 'apm');
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;