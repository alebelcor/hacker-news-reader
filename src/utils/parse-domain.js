export default (urlString) => {
  let url;

  try {
    url = new URL(urlString);
  } catch {
    return null;
  }

  const domain = url.host;

  if (domain.match(/\./g).length > 1) {
    const domainParts = domain.split('.');
    return `${domainParts[domainParts.length - 2]}.${domainParts[domainParts.length - 1]}`;
  }

  return domain;
};
