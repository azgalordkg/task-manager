import { TFunction } from 'i18next';
import moment, { Moment } from 'moment';

export const getToday = () => {
  return new Date();
};

export const getDateFromToday = (count: number) => {
  return new Date(getToday().getTime() + count * 24 * 60 * 60 * 1000);
};

export const formatDate = (date: Date | number, format: string) => {
  return moment(date).format(format);
};

export const roundAndExtendTimeRange = (
  defaultStartDate?: moment.Moment,
  defaultEndDate?: moment.Moment,
) => {
  const startDate = defaultStartDate || moment();
  const endDate = defaultEndDate || moment();

  const minuteRemainder = 15 - (startDate.minute() % 15);

  startDate.add(minuteRemainder, 'minutes');
  endDate.add(minuteRemainder, 'minutes').add(1, 'hours');

  return {
    startDate: startDate.toDate(),
    endDate: endDate.toDate(),
  };
};

export const isDateToday = (date: Moment) => {
  return date.isSame(getToday(), 'day');
};

export const getValueForDateInput = (
  date: Date,
  t: TFunction,
  dateFormat: string,
  isTime?: boolean,
) => {
  if (!isTime) {
    if (isDateToday(moment(date))) {
      return t('TODAY');
    }
    if (moment(date).isSame(getDateFromToday(1), 'day')) {
      return t('TOMORROW');
    }
  }

  return formatDate(date, dateFormat);
};
