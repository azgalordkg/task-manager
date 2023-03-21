import moment from 'moment';

export const getToday = () => {
  return new Date();
};

export const getDateFromToday = (count: number) => {
  return new Date(getToday().getTime() + count * 24 * 60 * 60 * 1000);
};

export const dateFormat = (date: Date | number, format: string) => {
  return moment(date).format(format);
};
