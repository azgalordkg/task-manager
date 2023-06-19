import React, { FC, PropsWithChildren } from 'react';
import { EventProvider } from 'react-native-outside-press';
import { Provider } from 'react-redux';

import {
  LanguageProvider,
  TaskListProvider,
  ThemeProvider,
} from '@/context/providers';
import { store } from '@/store';

export const ProvidersLayout: FC<PropsWithChildren> = ({ children }) => {
  const eventProviderStyles = { flex: 1 };
  return (
    <Provider store={store}>
      <EventProvider style={eventProviderStyles}>
        <LanguageProvider>
          <TaskListProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </TaskListProvider>
        </LanguageProvider>
      </EventProvider>
    </Provider>
  );
};
