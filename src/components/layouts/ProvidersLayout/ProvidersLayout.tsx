import React, { FC, PropsWithChildren } from 'react';
import { EventProvider } from 'react-native-outside-press';

import {
  LanguageProvider,
  TagManageProvider,
  TaskListProvider,
  ThemeProvider,
} from '@/context/providers';

export const ProvidersLayout: FC<PropsWithChildren> = ({ children }) => {
  const eventProviderStyles = { flex: 1 };
  return (
    <EventProvider style={eventProviderStyles}>
      <LanguageProvider>
        <TaskListProvider>
          <TagManageProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </TagManageProvider>
        </TaskListProvider>
      </LanguageProvider>
    </EventProvider>
  );
};
