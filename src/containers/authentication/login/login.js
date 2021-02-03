import React from 'react'
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
} from '@material-ui/core'
import { AccountCircle, Lock } from '@material-ui/icons'
import { loginStyle } from './loginStyle'

const Login = () => {
  const classess = loginStyle()
  return (
    <Box className={classess.root}>
      <Box className={classess.leftPanel}>
        <Typography className={classess.title} variant="h5" gutterBottom>
          Login to your account.
        </Typography>
        <form className={classess.form} noValidate autoComplete="off">
          <TextField
            className={classess.input}
            id="filled-outlined"
            label="Username"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classess.input}
            id="filled-outlined"
            type="password"
            label="Password"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />
          <Button
            className={classess.button}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
        <Typography className={classess.title} variant="subtitle1" gutterBottom>
          Forgot password?
        </Typography>
      </Box>
      <Box className={classess.rightPanel} />
    </Box>
  )
}

export default Login
