import { TFunction } from 'i18next';

export const getRepeatList = (
  t: TFunction<'translation', undefined, 'translation'>,
  color: string,
) => {
  return [
    { label: t('DAILY'), value: 'Daily', color },
    { label: t('WEEKLY'), value: 'Weekly', color },
    { label: t('MONTHLY'), value: 'Monthly', color },
    { label: t('YEARLY'), value: 'Yearly', color },
  ];
};
