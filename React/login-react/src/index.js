import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './Pages/Styles/Global';
import Routering from './Routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Routering />
  </React.StrictMode>
);
