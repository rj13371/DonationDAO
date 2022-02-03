import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';
import App from './App';

ReactDOM.render(
  <MoralisProvider
    appId="wsGVEzKZ1GNwjpZ6wBHgyTUKSaV1OsuolKBwElFB"
    serverUrl="https://hqfkmm7evmhi.usemoralis.com:2053/server"
  >
    <App />
  </MoralisProvider>,
  document.getElementById('root'),
);
