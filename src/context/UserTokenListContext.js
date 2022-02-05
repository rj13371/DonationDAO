import React, { createContext, useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import Moralis from 'moralis';

export const UserTokenListContext = createContext();

export function UserTokenListProvider(props) {
  const [userTokens, setUserTokens] = useState([]);
  const { isInitialized } = useMoralis();

  useEffect(async () => {
    if (isInitialized) {
      const options = { chain: 'rinkeby' };
      const balances = await Moralis.Web3API.account.getTokenBalances(options);
      console.log(balances);
      setUserTokens(balances);
    }
  }, [isInitialized]);

  return (
    <UserTokenListContext.Provider value={{ userTokens }}>
      {props.children}
    </UserTokenListContext.Provider>
  );
}
