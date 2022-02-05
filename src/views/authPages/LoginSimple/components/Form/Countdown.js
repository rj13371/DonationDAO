import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Progressbar from './Progressbar';

const Countdown = ({ initialValues }) => {
  const GridItemFormBlock = () => {
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(60);
    useEffect(() => {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    });

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
              13
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
              09
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
            <Typography variant="body2" color="text.secondary">{`${0} of ${initialValues.goal
              } met`}</Typography>
          </Box>

          <Progressbar value={500} goal={1000} />
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <Grid container>
        <Box width="100%" height="100%" display="flex" alignItems="center">
          <GridItemFormBlock />
        </Box>
      </Grid>
    </Box>
  );
};

export default Countdown;
