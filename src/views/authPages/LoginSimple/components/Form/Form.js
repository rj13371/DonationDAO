/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CreateCrowdfundContext } from 'context/CreateCrowdfundContext';
import FormDetails from './FormDetails';
import FormStart from './FormStart';
import FormFinal from './FormFinal';
import FormPreview from './FormPreview';
import { Link } from 'react-router-dom';

const validationSchema = yup.object({
  address: yup
    .string('Enter a wallet address')
    .trim()
    .min(42, 'That is an invalid wallet address')
    .max(42, 'That is an invalid wallet address')
    .required('a wallet address is required.'),
  title: yup
    .string()
    .required('Please specify your crowdfunding title')
    .min(5, 'The title should have at minimum length of 5'),
  goal: yup.number().required('Please specify your donation goal'),
});

const Form = () => {
  const history = useHistory();
  const { crowdfundForm, updateForm } = useContext(CreateCrowdfundContext);
  const [formStep, setFormStep] = useState(1);

  const initialValues = { ...crowdfundForm };

  const onSubmit = (values) => {
    console.log(values);
    updateForm(values);
    setFormStep((prev) => prev + 1);
    if (formStep === 5) {
      return history.push('/dashboard');
    }
  };

  const goBack = () => {
    setFormStep((prev) => prev - 1);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box data-aos={'fade-down'}>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
        >
          Getting Started
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Create a Crowdfund
        </Typography>
        <Typography color="text.secondary">
          First we need some details
        </Typography>
        <Box marginBottom={{ xs: 1, sm: 0 }}>
          <Typography variant={'subtitle2'}>
            Already have a crowdfunding page?{' '}
            <Link
              component={'a'}
              color={'primary'}
              href={'/dashboard'}
              underline={'none'}
            >
              Go to your dashboard
            </Link>
          </Typography>
        </Box>
      </Box>
      {formStep === 1 && (
        <FormStart initialValues={initialValues} onSubmit={onSubmit} />
      )}

      {formStep === 2 && <FormDetails formik={formik} goBack={goBack} />}

      {formStep === 3 && (
        <FormFinal
          initialValues={initialValues}
          goBack={goBack}
          onSubmit={onSubmit}
        />
      )}

      {formStep === 4 && (
        <FormPreview initialValues={initialValues} goBack={goBack} />
      )}
    </Box>
  );
};

export default Form;
