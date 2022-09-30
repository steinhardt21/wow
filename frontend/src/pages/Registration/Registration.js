import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Registration = () => {
  return (
    <>
      <Box sx={{ width: '100%'}}>
        <Typography variant="h2" gutterBottom>
          {'Create your WOW account'}
        </Typography>
        <TextField id="outlined-basic" label="username" variant="outlined" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-repeat-password-input"
          label="Repeat Password"
          type="password"
          autoComplete="repeat-current-password"
        />
        <Button variant="contained">{'Create account'}</Button>
        <Button variant="outlined">{'Sign in'}</Button>
      </Box>
    </>
  )
}

export default Registration