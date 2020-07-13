export default (score) => {
  if (score < 50) {
    return '';
  }

  if (score < 75) {
    return 'mild';
  }

  if (score < 100) {
    return 'medium';
  }

  return 'hot';
};
