const channelName = getChannelName(channel);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';