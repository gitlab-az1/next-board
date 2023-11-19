import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@context/theme';
import type { AppProps } from 'next/app';

import store from '@redux/store';
import React from 'react';

import '@styles/boxicons/boxicons.min.css';
import '@styles/App.scss';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ReduxProvider>
  );
}