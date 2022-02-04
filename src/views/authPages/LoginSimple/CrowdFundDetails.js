import React from 'react';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import Form from './components/Form/Form';

const CrowdFundDetails = () => {
  return (
    <Box
      position={'relative'}
      minHeight={'calc(100vh - 247px)'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100%'}
    >
      <Container maxWidth={1000}>
        <Form />
      </Container>
    </Box>
  );
};

export default CrowdFundDetails;
