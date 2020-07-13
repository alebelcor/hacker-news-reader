const ROOT = process.env.PUBLIC_URL;

const routes = {
  index: '/',
  topStories: '/news',
};

export default (route) => {
  const mappedRoute = routes[route];

  if (mappedRoute) {
    return `${ROOT}${mappedRoute}`;
  }

  return `${ROOT}${route}`;
};
