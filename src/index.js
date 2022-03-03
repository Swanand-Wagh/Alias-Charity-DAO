import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import App from "./App";
import { APP_ID, SERVER_URL } from "./moralis_config";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MoralisProvider>,
  document.getElementById("root")
);
