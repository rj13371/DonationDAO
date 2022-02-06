/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Typed from 'react-typed';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import logo from 'svg/logos/logo.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h1"
              color="textPrimary"
              sx={{
                fontWeight: 700,
              }}
            >
              Donation
              <br />
              DAO
            </Typography>

            <Typography
              variant="h3"
              color="textPrimary"
              sx={{
                fontWeight: 700,
              }}
            >
              Making Crowdfunding
              <br />
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
              >
                <Typed
                  strings={[
                    'censorship-free.',
                    'decentralized.',
                    'transparent.',
                  ]}
                  typeSpeed={60}
                  loop={true}
                />
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h6"
              component="p"
              color="textSecondary"
              sx={{ fontWeight: 400 }}
            >
              We are a non-biased, decentralized platform for crowdfunding
              efforts.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Link to="/create-crowdfund">
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
              >
                Start a crowdfund
              </Button>
            </Link>
            <Box
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              width={{ xs: '100%', md: 'auto' }}
            >
              <Button
                component={'a'}
                href={'/#/page-faq'}
                variant="outlined"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
              >
                How it works
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={'100%'}
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box
            data-aos={isMd ? 'fade-right' : 'fade-up'}
            height={'100%'}
            width={'100%'}
            maxHeight={600}
          >
            <img src={logo} height={500} width={500} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
