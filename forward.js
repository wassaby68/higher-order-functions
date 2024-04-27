const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';