import React, { FC } from 'react';

import { DayBlock } from '@/components/ui';

import { Props } from './AccordionHeader.types';
export const AccordionHeader: FC<Props> = ({ activeSection, id, title }) => {
  const status = (activeSection.includes(id) && 'Hide') || 'Show';

  return <DayBlock accordionStatus={status} key={title} date={title} />;
};
