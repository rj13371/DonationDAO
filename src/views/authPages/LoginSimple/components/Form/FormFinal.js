import React from 'react';
import { Formik, Form } from 'formik';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button, TextField, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FormFinal({ onSubmit, initialValues, goBack }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
      enableReinitialize
    >
      {({ setFieldValue }) => (
        <Form autoComplete="off" noValidate>
          <Stack direction="row" spacing={2}>
            <Item>
              <input
                type="file"
                name="image"
                onChange={(event) => {
                  setFieldValue('image', event.currentTarget.files[0]);
                }}
              />
            </Item>
            <Item>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Enter a description
              </Typography>
              <TextField
                sx={{ minWidth: 500 }}
                multiline
                rows={10}
                label="description"
                variant="outlined"
                name={'description'}
                fullWidth
                onChange={(event) => {
                  setFieldValue('description', event.currentTarget.value);
                }}
              />
            </Item>
          </Stack>

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
        </Form>
      )}
    </Formik>
  );
}
