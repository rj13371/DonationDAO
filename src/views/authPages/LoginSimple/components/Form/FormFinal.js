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
  console.log(initialValues);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ setFieldValue }) => (
        <Form autoComplete="off">
          <Stack direction="row" spacing={2}>
            <Item>
              <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
                Upload a image to IPFS. <br /> This picture will be publicly
                shown.
              </Typography>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(event) => {
                  setFieldValue('image', event.currentTarget.files[0]);
                }}
              />

              <Typography variant={'subtitle2'} sx={{ margin: 2 }}>
                Set a youtube link <br /> This video will be publicly shown.
              </Typography>

              <TextField
                label="Youtube Link"
                variant="outlined"
                name={'youtube'}
                onChange={(event) => {
                  setFieldValue('youtube', event.currentTarget.value);
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
