import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Roadmap = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  const timeline = [
    {
      date: 'Mar 2022',
      title: 'Alpha Launch',
    },
    {
      date: 'April 2022',
      title: 'Release Tokenomics for Governance Token',
    },
    {
      date: 'May 2022',
      title: 'Launch Donation DAO Governance Token',
    },
    {
      date: 'July 2022',
      title: 'Release Beta with NFT integration',
    },
    {
      date: 'August 2022',
      title: '1.0 Release',
    },
  ];

  const TimeLineMobileView = ({ timeline = [] }) => (
    <Grid container spacing={2}>
      {timeline.map((item, i) => (
        <Grid item xs={12} key={i}>
          <Box display={'flex'} alignItems={'center'} data-aos={'fade-up'}>
            <Box
              width={10}
              height={10}
              borderRadius={'100%'}
              bgcolor={theme.palette.primary.main}
              marginRight={2}
            />
            <Box>
              <Typography
                variant={'subtitle1'}
                color={'textSecondary'}
                gutterBottom
              >
                {item.date}
              </Typography>
              <Typography variant={'h6'}>{item.title}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  TimeLineMobileView.propTypes = {
    timeline: PropTypes.array.isRequired,
  };

  const TimeLineDesktopView = ({ timeline = [] }) => (
    <Grid container spacing={2}>
      {timeline.map((item, i) => (
        <Grid item xs={12} key={i}>
          <Box
            paddingBottom={4}
            display={'flex'}
            alignItems={'center'}
            flexDirection={i % 2 === 1 ? 'row-reverse' : 'row'}
            marginRight={i % 2 === 1 ? 'calc(50% - 5px)' : 0}
            marginLeft={i % 2 !== 1 ? 'calc(50% - 5px)' : 0}
            data-aos={i % 2 === 1 ? 'fade-right' : 'fade-left'}
          >
            <Box
              width={10}
              height={10}
              borderRadius={'100%'}
              bgcolor={theme.palette.primary.main}
              marginRight={i % 2 !== 1 ? 5 : 0}
              marginLeft={i % 2 === 1 ? 5 : 0}
            />
            <Box>
              <Typography
                variant={'subtitle1'}
                color={'textSecondary'}
                gutterBottom
              >
                {item.date}
              </Typography>
              <Typography variant={'h6'}>{item.title}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  TimeLineDesktopView.propTypes = {
    timeline: PropTypes.array.isRequired,
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={isSm ? 'center' : 'left'}
        >
          Roadmap
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={isSm ? 'center' : 'left'}
          gutterBottom
        >
          Our future going forward
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={isSm ? 'center' : 'left'}
        >
          Fundraising for charities, startups, yourself or friends/family has
          never been easier.
        </Typography>
      </Box>
      {isSm ? (
        <TimeLineDesktopView timeline={timeline} />
      ) : (
        <TimeLineMobileView timeline={timeline} />
      )}
    </Box>
  );
};

export default Roadmap;
