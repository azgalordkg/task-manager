export const getToday = () => {
  return new Date();
};

export const getDayAfterToday = (count: number) => {
  return new Date(getToday().getTime() + count * 24 * 60 * 60 * 1000);
};
