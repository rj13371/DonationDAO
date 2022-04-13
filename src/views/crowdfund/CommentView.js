import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import GrabComments from 'utils/Moralis/GrabComments';
import { useMoralis } from 'react-moralis';
import moment from 'moment';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginTop: 5,
  marginBottom: 5,
}));

export default function CommentView(props) {
  const { address } = props;

  const { isInitialized } = useMoralis();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (isInitialized && address) {
      GrabComments(address).then((res) => {
        setComments(res);
        console.log(res);
      });
    }
  }, [address, isInitialized]);

  return (
    <Stack alignItems="left" sx={{ minWidth: 550, marginTop: 5 }} spacing={2}>
      {isInitialized &&
        address &&
        comments.map((comment) => (
          <Item key={comment.attributes.id}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              {comment.attributes.name}{' '}
              {`(${'0x...' + comment.attributes.sender.substring(37, 43)})`}{' '}
              {'donated'} {comment.attributes.amount}{' '}
              {comment.attributes.tokenName}{' '}
              {moment(comment.attributes.createdAt).calendar()}
            </Typography>

            <Typography variant={'subtitle1'} sx={{ marginBottom: 2 }}>
              {comment.attributes.comment ? comment.attributes.comment : ''}
            </Typography>
          </Item>
        ))}
    </Stack>
  );
}
