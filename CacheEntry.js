const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const channelName = getChannelName(channel);
const isArray = (arr) => Array.isArray(arr);