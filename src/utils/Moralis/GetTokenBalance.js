import React, { useState, useEffect } from 'react';
import { useMoralis } from 'react-moralis';
import Moralis from 'moralis';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function GetTokenBalance({ address }) {
  const { isInitialized } = useMoralis();
  const [balances, setBalances] = useState([]);

  useEffect(async () => {
    if (isInitialized) {
      const options = { chain: 'rinkeby', address: address };
      const balances = await Moralis.Web3API.account.getTokenBalances(options);
      console.log(balances);
      setBalances(balances);
    }
  }, [isInitialized]);

  return (
    <TableContainer
      data-aos={'fade-down'}
      sx={{ maxWidth: 350 }}
      component={Paper}
    >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {balances.length > 0 &&
            balances.map((token) => (
              <TableRow
                key={token.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {token.name}
                </TableCell>
                <TableCell align="right">{token.symbol}</TableCell>
                <TableCell align="right">
                  {Moralis.Units.FromWei(token.balance, '18')}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
