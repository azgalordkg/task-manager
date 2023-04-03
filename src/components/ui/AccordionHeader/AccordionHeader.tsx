import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DayBlock } from '@/components/ui';

import { Props } from './AccordionHeader.types';
export const AccordionHeader: FC<Props> = ({ activeSection, id, title }) => {
  const { t } = useTranslation();

  const status =
    (activeSection.includes(id) && `${t('HIDE_DAY')}`) || `${t('SHOW_DAY')}`;

  return <DayBlock accordionStatus={status} key={title} date={title} />;
};
