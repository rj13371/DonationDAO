import React from 'react';
import { LinearProgress } from '@mui/material';

const Progress = (props) => {
  const normalise = (value) => ((value - 0) * 100) / (props.goal - 0);

  return (
    <LinearProgress
      sx={{ borderRadius: 5, height: 10 }}
      variant="determinate"
      value={normalise(props.value)}
    />
  );
};

export default Progress;
