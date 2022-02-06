import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';
import App from './App';
import { CreateCrowdfundProvider } from './context/CreateCrowdfundContext';
import { UserTokenListProvider } from './context/UserTokenListContext';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

ReactDOM.render(
  <MoralisProvider
    appId="wsGVEzKZ1GNwjpZ6wBHgyTUKSaV1OsuolKBwElFB"
    serverUrl="https://hqfkmm7evmhi.usemoralis.com:2053/server"
  >
    <LocalizationProvider dateAdapter={DateAdapter}>
      <UserTokenListProvider>
        <CreateCrowdfundProvider>
          <App />
        </CreateCrowdfundProvider>
      </UserTokenListProvider>
    </LocalizationProvider>
  </MoralisProvider>,
  document.getElementById('root'),
);
