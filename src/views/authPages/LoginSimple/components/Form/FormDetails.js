import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DateTimePicker from '@mui/lab/DateTimePicker';

export default function FormDetails(props) {
  const { formik, goBack } = props;

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Enter a wallet address
          </Typography>
          <TextField
            label="wallet address *"
            variant="outlined"
            name={'address'}
            fullWidth
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Enter a crowdfunding title
          </Typography>
          <TextField
            label="title *"
            variant="outlined"
            name={'title'}
            fullWidth
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Enter your crowdfunding goal in USD
          </Typography>
          <TextField
            label="goal *"
            variant="outlined"
            name={'goal'}
            fullWidth
            value={formik.values.goal}
            onChange={formik.handleChange}
            error={formik.touched.goal && Boolean(formik.errors.goal)}
            helperText={formik.touched.goal && formik.errors.goal}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Enter your Crowdfunding End Date and Time
          </Typography>
          <DateTimePicker
            label="Date and Time *"
            inputVariant="outlined"
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
            renderInput={(params) => <TextField {...params} />}
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
