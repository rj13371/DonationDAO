import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Formik, Form } from 'formik';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import charity from '../../../../../assets/charity.jpg';
import family from '../../../../../assets/family.jpg';
import myself from '../../../../../assets/myself.jpg';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FormStart({ onSubmit, initialValues }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ setFieldValue }) => (
        <Form autoComplete="off" noValidate>
          <Stack direction="row" spacing={2}>
            <Item>
              {' '}
              <Card sx={{ minWidth: 300 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={myself}
                  alt="myself"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Myself
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Want to kickstart an idea or need help?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    color="primary"
                    variant="contained"
                    sx={{ marginLeft: '40%' }}
                    onClick={() => {
                      setFieldValue('type', 'individual');
                    }}
                    type={'submit'}
                    size="small"
                  >
                    Select
                  </Button>
                </CardActions>
              </Card>
            </Item>
            <Item>
              {' '}
              <Card sx={{ minWidth: 300 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={family}
                  alt="family"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Friends or Family
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Raise funds for your loved ones
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    color="primary"
                    variant="contained"
                    sx={{ marginLeft: '40%' }}
                    onClick={() => {
                      setFieldValue('type', 'family');
                    }}
                    type={'submit'}
                    size="small"
                  >
                    Select
                  </Button>
                </CardActions>
              </Card>
            </Item>
            <Item>
              {' '}
              <Card sx={{ minWidth: 300 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={charity}
                  alt="charity"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Charity
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Raise funds for a grassroots cause
                  </Typography>
                </CardContent>
                <CardActions sx={{ alignItems: 'center' }}>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      setFieldValue('type', 'charity');
                    }}
                    sx={{ marginLeft: '40%' }}
                    type={'submit'}
                    size="small"
                  >
                    Select
                  </Button>
                </CardActions>
              </Card>
            </Item>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
