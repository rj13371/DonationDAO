import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import moment from 'moment';
import Progressbar from './Progressbar';
import Countdown from 'react-countdown';

const CountdownTimer = ({ initialValues }) => {
  const then = moment(initialValues.date).format('x');
  const now = Date.now();
  const diff = then - now;

  console.log(then, now, diff);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <p>{'hello'}</p>;
    } else {
      return (
        <Box
          padding={{ xs: 3, sm: 6 }}
          width={'100%'}
          component={Card}
          borderRadius={2}
          boxShadow={4}
        >
          <Box
            display="flex"
            flexDirection={'row'}
            justifyContent={'space-around'}
          >
            <Box display="flex" flexDirection={'column'} alignItems={'center'}>
              <Typography
                variant={'h6'}
                sx={{
                  fontWeight: 900,
                }}
              >
                {days}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                }}
              >
                Days
              </Typography>
            </Box>
            <Box display="flex" flexDirection={'column'} alignItems={'center'}>
              <Typography
                variant={'h6'}
                sx={{
                  fontWeight: 900,
                }}
              >
                {hours}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 900,
                }}
              >
                Hours
              </Typography>
            </Box>
            <Box display="flex" flexDirection={'column'} alignItems={'center'}>
              <Typography
                variant={'h6'}
                sx={{
                  fontWeight: 900,
                }}
              >
                {minutes}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 900,
                }}
              >
                Minutes
              </Typography>
            </Box>
            <Box display="flex" flexDirection={'column'} alignItems={'center'}>
              <Typography
                variant={'h6'}
                sx={{
                  fontWeight: 900,
                }}
              >
                {seconds}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 900,
                }}
              >
                Seconds
              </Typography>
            </Box>
          </Box>
          <Box marginTop={4}>
            <Typography
              sx={{
                fontWeight: 900,
              }}
            >
              Goal Progress
            </Typography>

            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">{`${0} of ${
                initialValues.goal
              } met`}</Typography>
            </Box>

            <Progressbar value={500} goal={1000} />
          </Box>
        </Box>
      );
    }
  };

  return (
    <Box>
      <Grid container>
        <Box width="100%" height="100%" display="flex" alignItems="center">
          <Countdown date={Date.now() + diff} renderer={renderer} />
        </Box>
      </Grid>
    </Box>
  );
};

export default CountdownTimer;
