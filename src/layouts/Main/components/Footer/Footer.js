import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import logo from 'svg/logos/logo.png';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { colors } from '@mui/material';
import discordLogo from '../../../../svg/logos/discordLogo.svg';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box
          display={'flex'}
          component="a"
          underline="none"
          href="/"
          title="webbee"
          height={24}
          width={35}
        >
          <img src={logo} height={40} width={40} />
        </Box>
        <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
          <Box marginTop={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href="/"
              color="textPrimary"
              variant={'subtitle2'}
            >
              Home
            </Link>
          </Box>
          <Box marginTop={1} marginRight={2}>
            <Link
              underline="none"
              component="a"
              href="/#/page-faq"
              color="textPrimary"
              variant={'subtitle2'}
            >
              FAQ
            </Link>
          </Box>

          <Box marginTop={1} marginRight={2}>
            <Link
              underline={'hover'}
              href={'https://github.com/rj13371/DonationDAO'}
              target={'_blank'}
            >
              <IconButton
                size={'small'}
                sx={{
                  marginRight: 1,
                  color: colors.blueGrey[200],
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Link>
            <Link
              underline={'hover'}
              href={'https://twitter.com/DonationDAO'}
              target={'_blank'}
            >
              <IconButton
                size={'small'}
                sx={{
                  color: colors.blueGrey[200],
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Link>
            <Link
              underline={'hover'}
              href={'https://discord.gg/4H5dE7XmDQ'}
              target={'_blank'}
            >
              <IconButton
                size={'small'}
                sx={{
                  color: colors.blueGrey[200],
                  marginTop: 0.5,
                }}
              >
                <img
                  height={25}
                  width={26}
                  color={'#B0BEC5'}
                  src={discordLogo}
                />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color="textSecondary"
        gutterBottom
      >
        &copy; Donation-Dao. 2021, Donation-Dao. All rights reserved
      </Typography>
      <Typography
        align={'center'}
        variant={'caption'}
        color="textSecondary"
        component={'p'}
      >
        Powered by Moralis and Polygon. Made for ETHGlobal Road to Web3
        Hackathon.
      </Typography>
    </Grid>
  </Grid>
);

export default Footer;
