import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyles';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

