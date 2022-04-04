import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CharityDAOProvider } from './components/Context/CharityContext';

ReactDOM.render(
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
