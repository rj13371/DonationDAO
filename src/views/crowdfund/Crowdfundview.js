import React, { useEffect, useState, useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { MenuItem } from '@mui/material';
//import Countdown from './Countdown';
import RetrieveCrowdfund from 'utils/Moralis/RetrieveCrowdfund';
import { useParams } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import Container from 'common/Container';
import Moralis from 'moralis';
import { Formik, Form, Field } from 'formik';
import { UserTokenListContext } from 'context/UserTokenListContext';
import { Button, TextField, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';
import GetTokenBalance from 'utils/Moralis/GetTokenBalance';
import GetTokenTransfers from 'utils/Moralis/GetTokenTransfers';
import CountdownTimer from '../authPages/LoginSimple/components/Form/Countdown';
import { Switch } from '@mui/material';
import SubmitComment from 'utils/Moralis/SubmitComment';
import CommentView from './CommentView';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Crowdfundview = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { isInitialized } = useMoralis();

  const { userTokens } = useContext(UserTokenListContext);

  const [crowdfund, setCrowdfund] = useState();
  const [currentUserAddress, setCurrentUserAddress] = useState();

  const { id } = useParams();

  const donateERC20 = async (values) => {
    const { amount, contractAddress } = values;
    console.log(values);
    const receiver = crowdfund.attributes.address;

    const options = {
      type: 'erc20',
      amount: Moralis.Units.Token(amount, '18'),
      receiver: receiver,
      contractAddress: contractAddress,
    };
    let result = await Moralis.transfer(options);

    if (values.submitComment && result.hash) {
      SubmitComment(values);
    }
    console.log(result);
  };

  useEffect(() => {
    if (isInitialized) {
      RetrieveCrowdfund(id).then((res) => {
        console.log(res);
        const currentUser = Moralis.User.current();
        if (currentUser) {
          setCurrentUserAddress(currentUser.attributes.ethAddress);
        }

        setCrowdfund(res);
      });
    }
  }, [isInitialized]);

  const VidPreview = () => (
    <Box>
      <iframe
        width="300"
        height="300"
        src={
          'https://www.youtube.com/embed/' +
          crowdfund.attributes.youtube.substring(
            crowdfund.attributes.youtube.length - 11,
            crowdfund.attributes.youtube.length,
          )
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  );

  const GridItemHeadlineBlock = () => (
    <Box sx={{ maxWidth: 600 }}>
      <Box
        component={Typography}
        fontWeight={700}
        variant={'h3'}
        gutterBottom
        data-aos={isMd ? 'fade-right' : 'fade-up'}
      >
        {crowdfund.attributes.title ? crowdfund.attributes.title : ''}
      </Box>

      <Typography
        variant={'h5'}
        component={'p'}
        color={'textSecondary'}
        data-aos={isMd ? 'fade-right' : 'fade-up'}
      >
        {crowdfund.attributes.type
          ? `${crowdfund.attributes.type} crowdfund`
          : ''}
      </Typography>

      <Typography
        variant={'subtitle2'}
        component={'p'}
        color={'textSecondary'}
        data-aos={isMd ? 'fade-right' : 'fade-up'}
      >
        {crowdfund.attributes.address ? crowdfund.attributes.address : ''}
      </Typography>

      <Typography
        variant={'subtitle2'}
        component={'p'}
        color={'textSecondary'}
        data-aos={isMd ? 'fade-right' : 'fade-up'}
      >
        {crowdfund.attributes.name
          ? 'By ' + crowdfund.attributes.name
          : 'By anonymous'}
      </Typography>

      <Typography
        variant={'subtitle2'}
        component={'p'}
        color={'textSecondary'}
        data-aos={isMd ? 'fade-right' : 'fade-up'}
      >
        {crowdfund.attributes.city ? crowdfund.attributes.city : ''}
      </Typography>

      <Typography
        variant={'subtitle2'}
        component={'p'}
        color={'textSecondary'}
        data-aos={isMd ? 'fade-right' : 'fade-up'}
      >
        {crowdfund.attributes.country ? crowdfund.attributes.country : ''}
      </Typography>

      <Typography
        variant={'h6'}
        component={'p'}
        color={'textSecondary'}
        data-aos={isMd ? 'fade-right' : 'fade-up'}
        minHeight={290}
      >
        {crowdfund.attributes.description
          ? crowdfund.attributes.description
          : ''}
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {' '}
          <Box marginLeft={10} minWidth={isMd ? '400px' : '200px'}>
            <CountdownTimer initialValues={crowdfund.attributes} />
          </Box>
          <Box margin={5}>
            <Formik
              initialValues={{
                amount: '0',
                receiver: crowdfund.attributes.address,
                contractAddress: '',
                comment: '',
                sender: currentUserAddress ? currentUserAddress : '',
                name: 'anonymous',
                submitComment: false,
              }}
              onSubmit={donateERC20}
              validateOnBlur={false}
              validateOnChange={false}
              enableReinitialize
            >
              {({ setFieldValue }) => (
                <Form autoComplete="off" noValidate>
                  <Stack direction="row" spacing={2}>
                    <Item>
                      <Typography
                        variant={'subtitle2'}
                        sx={{ marginBottom: 2 }}
                      >
                        Amount
                      </Typography>
                      <TextField
                        sx={{ minWidth: 200 }}
                        label="amount"
                        variant="outlined"
                        name={'amount'}
                        fullWidth
                        onChange={(event) => {
                          setFieldValue('amount', event.currentTarget.value);
                        }}
                      />
                    </Item>

                    <Item>
                      <Typography
                        variant={'subtitle2'}
                        sx={{ marginBottom: 2 }}
                      >
                        Token
                      </Typography>
                      <Field
                        sx={{ minWidth: 200 }}
                        label="contractAddress"
                        name={'contractAddress'}
                        as={Select}
                        type="select"
                      >
                        {userTokens.map((token, i) => (
                          <MenuItem
                            key={token.token_address + i}
                            value={token.token_address}
                          >
                            {token.name}
                          </MenuItem>
                        ))}
                      </Field>
                    </Item>
                    <Box sx={{ backgroundColor: 'transparent' }}>
                      <Button
                        size={'large'}
                        sx={{ marginTop: 4 }}
                        variant={'contained'}
                        type={'submit'}
                      >
                        Donate
                      </Button>
                    </Box>
                  </Stack>

                  <Stack
                    alignItems="left"
                    sx={{ minWidth: 550, marginTop: 5 }}
                    spacing={2}
                  >
                    <Item>
                      <Typography
                        variant={'subtitle2'}
                        sx={{ marginBottom: 2 }}
                      >
                        Include Comment?
                        <Field
                          label="Remember Me"
                          name="rememberMe"
                          type="checkbox"
                          component={Switch}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setFieldValue('submitComment', true);
                            } else {
                              setFieldValue('submitComment', false);
                            }
                          }}
                        />
                      </Typography>

                      <TextField
                        sx={{ minWidth: 500 }}
                        label="comment"
                        variant="outlined"
                        name={'comment'}
                        multiline
                        rows={3}
                        onChange={(event) => {
                          setFieldValue('comment', event.currentTarget.value);
                        }}
                      />
                      <Typography
                        variant={'subtitle2'}
                        sx={{ marginBottom: 2 }}
                      >
                        Include Name?
                      </Typography>
                      <TextField
                        sx={{ width: 200 }}
                        label="name"
                        variant="outlined"
                        defaultValue={'anonymous'}
                        name={'name'}
                        fullWidth
                        onChange={(event) => {
                          setFieldValue('name', event.currentTarget.value);
                        }}
                      />
                    </Item>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  const GridItemReviewBlock = () => {
    return (
      <Box maxWidth={'100%'} data-aos={isMd ? 'fade-left' : 'fade-up'}>
        <Box padding={{ xs: 1, sm: 2 }}>
          <Box
            component={Card}
            boxShadow={{ xs: 1, sm: 3 }}
            borderRadius={5}
            padding={{ xs: 1, sm: 2, md: 3 }}
          >
            <Box
              component={CardContent}
              display={'flex'}
              flexDirection={'column'}
            >
              <Box
                component={Avatar}
                variant="rounded"
                width={300}
                height={300}
                marginBottom={2}
                borderRadius={5}
                src={
                  crowdfund.attributes.image._ipfs
                    ? crowdfund.attributes.image._ipfs
                    : ''
                }
              ></Box>
              {crowdfund.attributes.youtube ? <VidPreview /> : ''}

              <Typography
                textAlign={'center'}
                variant={'subtitle2'}
                sx={{ marginBottom: 2 }}
              >
                Donatation Wallet Balance
              </Typography>

              {crowdfund.attributes && (
                <GetTokenBalance address={crowdfund.attributes.address} />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <React.Fragment>
      {crowdfund && (
        <Container>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box width={1} height="100%" display="flex" alignItems="center">
                  <GridItemHeadlineBlock />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box width={1} height="50%" display="flex" alignItems="center">
                  <GridItemReviewBlock />
                </Box>
              </Grid>
            </Grid>

            <Stack spacing={100} direction="row">
              <Box>
                <Typography textAlign={'left'} variant={'h6'}>
                  Latest Comments
                </Typography>
              </Box>
              <Box>
                {' '}
                <Typography textAlign={'right'} variant={'h6'}>
                  Latest Updates
                </Typography>
              </Box>
            </Stack>

            <Stack spacing={2} marginTop={20} direction="row">
              <Item>
                <Box height="50%" display="flex" alignItems="center">
                  {crowdfund.attributes && (
                    <CommentView address={crowdfund.attributes.address} />
                  )}
                </Box>
              </Item>
              <Item>
                <Box height="50%" display="flex" alignItems="center">
                  {crowdfund.attributes && (
                    <CommentView address={crowdfund.attributes.address} />
                  )}
                </Box>
              </Item>
            </Stack>

            <Typography textAlign={'center'} variant={'h6'} sx={{ margin: 2 }}>
              Latest Donations
            </Typography>

            {crowdfund.attributes && (
              <GetTokenTransfers address={crowdfund.attributes.address} />
            )}
          </Box>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Crowdfundview;
