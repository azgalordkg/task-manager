import '@/i18n.config';

import React, { FC } from 'react';

import { ProvidersLayout } from '@/components/layouts';
import { MainNavigation } from '@/components/navigation';

const App: FC = () => {
  return (
    <ProvidersLayout>
      <MainNavigation />
    </ProvidersLayout>
  );
};

export default App;
