import React from 'react';
import { useMoralis } from 'react-moralis';
import Button from '@mui/material/Button';

export default function Login() {
  const {
    authenticate,
    isAuthenticated,
    logout,
    isAuthenticating,
  } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => authenticate()}
          size="large"
        >
          Authenticate
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Button
        variant="contained"
        color="error"
        onClick={() => logout()}
        size="large"
        disabled={isAuthenticating}
      >
        Logout
      </Button>
    </div>
  );
}
