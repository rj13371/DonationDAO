import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Countdown from './Countdown';
import { Button } from '@mui/material';
import CreateCrowdfund from 'utils/Moralis/CreateCrowdfund';

const FormPreview = ({ initialValues, goBack }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  console.log(initialValues);

  const preview = initialValues.image
    ? URL.createObjectURL(initialValues.image)
    : '';

  const VidPreview = () => (
    <Box>
      <iframe
        width="300"
        height="300"
        src={
          'https://www.youtube.com/embed/' +
          initialValues.youtube.substring(
            initialValues.youtube.length - 11,
            initialValues.youtube.length,
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
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'secondary'}
      >
        Your crowdfunding page preview
      </Typography>
      <Box
        component={Typography}
        fontWeight={700}
        variant={'h3'}
        gutterBottom
        data-aos={isMd ? 'fade-right' : 'fade-up'}
      >
        {initialValues.title ? initialValues.title : ''}
      </Box>

      <Typography
        variant={'h5'}
        component={'p'}
        color={'textSecondary'}
        data-aos={isMd ? 'fade-right' : 'fade-up'}
      >
        {initialValues.type ? `${initialValues.type} crowdfund` : ''}
      </Typography>

      <Typography
        variant={'subtitle2'}
        component={'p'}
        color={'textSecondary'}
        data-aos={isMd ? 'fade-right' : 'fade-up'}
      >
        {initialValues.address ? initialValues.address : ''}
      </Typography>

      <Typography
        variant={'h6'}
        component={'p'}
        color={'textSecondary'}
        data-aos={isMd ? 'fade-right' : 'fade-up'}
      >
        {initialValues.description ? initialValues.description : ''}
      </Typography>
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
                src={initialValues.image ? preview : ''}
              ></Box>
              {initialValues.youtube ? <VidPreview /> : ''}

              <Countdown initialValues={initialValues} />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box width={1} height="75%" display="flex" alignItems="center">
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemReviewBlock />
          </Box>
        </Grid>
      </Grid>

      <Button
        sx={{ margin: 5 }}
        onClick={goBack}
        size={'large'}
        variant={'contained'}
        type="button"
      >
        Back
      </Button>

      <CreateCrowdfund />
    </Box>
  );
};

export default FormPreview;
