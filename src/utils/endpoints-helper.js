const ROOT = 'https://hacker-news.firebaseio.com/v0';

const ENDPOINTS = {
  topStories: '/topstories.json',
  item: '/item/:id.json',
  user: '/user/:id.json',
};

export default (endpoint, { id } = {}) => {
  const mappedEndpoint = ENDPOINTS[endpoint];

  if (mappedEndpoint) {
    if (mappedEndpoint.includes(':id')) {
      if (!id) {
        throw new Error(`Must provide "id" parameter. Found: ${id}`);
      }

      return `${ROOT}${mappedEndpoint.replace(':id', id)}`;
    }
    return `${ROOT}${mappedEndpoint}`;
  }

  return `${ROOT}${endpoint}`;
};
