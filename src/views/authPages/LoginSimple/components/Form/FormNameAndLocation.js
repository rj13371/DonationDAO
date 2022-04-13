import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FormDetails(props) {
  const { formik, goBack } = props;

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Enter your name{' '}
            {'(optional, leave blank if you wish to be anonymous)'}
          </Typography>
          <TextField
            label="Your name *"
            variant="outlined"
            name={'name'}
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Which city does the crowdfund take place? {'(optional)'}
          </Typography>
          <TextField
            label="city *"
            variant="outlined"
            name={'city'}
            fullWidth
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Which country does the crowdfund take place? {'(optional)'}
          </Typography>
          <TextField
            label="country *"
            variant="outlined"
            name={'country'}
            fullWidth
            value={formik.values.country}
            onChange={formik.handleChange}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          />
        </Grid>
        <Grid item container xs={12}>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'center' }}
            justifyContent={'space-between'}
            width={'100%'}
            maxWidth={600}
            margin={'0 auto'}
          >
            <Button
              onClick={goBack}
              size={'large'}
              variant={'contained'}
              type="button"
            >
              Back
            </Button>
            <Button size={'large'} variant={'contained'} type={'submit'}>
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
