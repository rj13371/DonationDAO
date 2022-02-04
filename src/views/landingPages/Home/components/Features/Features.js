/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import RetrieveTopCrowdfunds from 'utils/Moralis/RetrieveTopCrowdfunds';
import { useMoralis } from 'react-moralis';
import { useHistory } from 'react-router-dom';

const Features = () => {
  const theme = useTheme();
  const { isInitialized } = useMoralis();
  const [crowdfunds, setCrowdfunds] = useState([]);
  const history = useHistory();

  console.log(crowdfunds);

  useEffect(() => {
    if (isInitialized) {
      RetrieveTopCrowdfunds().then((res) => {
        setCrowdfunds(res);
      });
    }
  }, [isInitialized]);

  const handleClick = (values) => {
    console.log(values);
    return history.push(`/crowdfund/${values}`);
  };

  return (
    <Box>
      {crowdfunds.length > 0 && (
        <React.Fragment>
          <Box marginBottom={4}>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'textSecondary'}
              align={'center'}
            >
              Donations
            </Typography>
            <Box
              component={Typography}
              fontWeight={700}
              variant={'h3'}
              gutterBottom
              align={'center'}
            >
              Top Fundraisers
            </Box>
          </Box>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            marginBottom={4}
          ></Box>
          <Box>
            <Grid container spacing={4}>
              {crowdfunds.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Box
                    onClick={() => handleClick(`${item.id}`)}
                    component={Card}
                    padding={4}
                    borderRadius={4}
                    width={'100%'}
                    height={'100%'}
                    data-aos={'fade-up'}
                    align={'center'}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Box>
                      <Box
                        component={Avatar}
                        width={150}
                        height={150}
                        marginBottom={2}
                        bgcolor={theme.palette.primary.main}
                        color={theme.palette.background.paper}
                        src={item.attributes.image._ipfs}
                      >
                        {item.attributes.image._ipfs}
                      </Box>
                      <Box
                        component={Typography}
                        variant={'h6'}
                        gutterBottom
                        sx={{ fontWeight: 500 }}
                      >
                        {item.attributes.title}
                      </Box>
                      <Typography color="text.secondary">
                        {item.attributes.description.substring(0, 100)}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default Features;
