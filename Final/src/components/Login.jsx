import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);
const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <div>
        <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ display: 'flex',flexDirection:'column',m:1,width:'25ch' }}
    >
        <div>Welcome to Materio!👋🏻</div>
<div>Please sign-in to your account and start the adventure</div>
      <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width:'35ch',m:1}} />
       <TextField
  label='Password'
  variant="outlined"
  type={showPassword ? "text" : "password"} // <-- This is where the magic happens
//   onChange={someChangeHandler}
sx={{width:'35ch',m:1}}
  InputProps={{ // <-- This is where the toggle button is added.
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    )
  }}
/>
<FormControlLabel control={<Checkbox/>} label="Remember me" />
<div>Forgot Password?</div>
<Button variant="contained">Log in</Button>
<div>New on our platform ?</div>
<div>Create new Account</div>
    </Box>
    </div>
  )
}
export default Login;
