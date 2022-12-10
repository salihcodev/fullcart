export const unDashed = (str: string): string => {
  return str.replaceAll('&', 'and').split('-').join(' ');
};

export const dashed = (str: string): string => {
  return str.replaceAll('&', 'and').split(' ').join('-');
};
