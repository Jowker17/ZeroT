export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
};
