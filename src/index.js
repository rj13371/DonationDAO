import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';
import App from './App';
import { CreateCrowdfundProvider } from './context/CreateCrowdfundContext';
import { UserTokenListProvider } from './context/UserTokenListContext';

ReactDOM.render(
  <MoralisProvider
    appId="wsGVEzKZ1GNwjpZ6wBHgyTUKSaV1OsuolKBwElFB"
    serverUrl="https://hqfkmm7evmhi.usemoralis.com:2053/server"
  >
    <UserTokenListProvider>
      <CreateCrowdfundProvider>
        <App />
      </CreateCrowdfundProvider>
    </UserTokenListProvider>
  </MoralisProvider>,
  document.getElementById('root'),
);
