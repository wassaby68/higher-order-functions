var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const results = await Promise.all(resultingPromises);