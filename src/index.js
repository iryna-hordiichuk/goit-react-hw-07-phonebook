import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { App } from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import {theme} from 'constants/theme';
import { GlobalStyle } from 'components/GlobalStyle/';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <App />
    </ThemeProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
