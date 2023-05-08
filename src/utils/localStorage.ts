export const addToLocalStorage = (key: string, value: unknown) => {
  const stringifyValue = JSON.stringify(value);
  localStorage.setItem(key, stringifyValue);
};

export const getFromLocalStorage = (key: string): unknown => {
  const stringifyValue = localStorage.getItem(key);
  const value = JSON.parse(stringifyValue);
  return value;
};
