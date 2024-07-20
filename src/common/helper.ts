export const createOptions = (arr: string[]) => {
  return arr.map((item) => ({ label: item, value: item }));
};
