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
import moment from 'moment';

export default function GetTokenTransfers({ address }) {
  const { isInitialized } = useMoralis();
  const [transfers, settransfers] = useState([]);

  useEffect(async () => {
    if (isInitialized) {
      const options = {
        chain: 'rinkeby',
        address: address,
        from_block: '0',
        limit: '10',
      };
      const transfers = await Moralis.Web3API.account.getTokenTransfers(
        options,
      );
      console.log(transfers);
      settransfers(transfers.result);
    }
  }, [isInitialized]);

  return (
    <TableContainer
      data-aos={'fade-down'}
      sx={{ minWidth: 700 }}
      component={Paper}
    >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Token Address</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">To</TableCell>
            <TableCell align="center">From</TableCell>
            <TableCell align="center">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transfers.length > 0 &&
            transfers.map((token) => (
              <TableRow
                key={token.address}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://rinkeby.etherscan.io/tx/${token.transaction_hash}`}
                  >
                    {'0x...' + token.address.substring(37, 43)}
                  </a>
                </TableCell>
                <TableCell align="center">
                  {moment(token.block_timestamp).calendar()}
                </TableCell>
                <TableCell align="center">
                  {'0x...' + token.to_address.substring(37, 43)}
                </TableCell>
                <TableCell align="center">
                  {'0x...' + token.from_address.substring(37, 43)}
                </TableCell>
                <TableCell align="center">
                  {Moralis.Units.FromWei(token.value, '18')}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
