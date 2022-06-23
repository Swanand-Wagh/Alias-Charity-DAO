import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MoralisProvider } from 'react-moralis';
import { BrowserRouter } from 'react-router-dom';
import { CharityDAOProvider } from './components/Context/CharityContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoralisProvider
    appId={process.env.REACT_APP_MORALIS_APPLICATION_ID}
    serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
  >
    <CharityDAOProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CharityDAOProvider>
  </MoralisProvider>,
  document.getElementById('root'),
);
