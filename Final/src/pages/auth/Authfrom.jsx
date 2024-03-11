import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import img1 from "../../assets/images/login.jpg";
import { login } from "../../services/auth";
import { jwtDecode } from "jwt-decode";
import { selectUserRole, setAuthentication, setRole, setToken } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const theme = createTheme();

export default function AuthForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const userRole = useSelector(selectUserRole);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
  
    try {
      const res = await login(formData);
      console.log(res?.data?.accessToken);
      const decodeToken = jwtDecode(res?.data?.accessToken);
      console.log(decodeToken);
      console.log(decodeToken.role);

      console.log(userRole);


      dispatch(setAuthentication(true));
      dispatch(setToken(res?.data?.accessToken));
      dispatch(setRole(jwtDecode(res?.data?.accessToken)));
  
      // Get the role from the decoded token
      const role = jwtDecode(res?.data?.accessToken).role;
  
      // Use useNavigate hook to get the navigate function
  
      // Navigate to different routes based on the role
      if (role === "ADMIN") {
        navigate("/admin/dashboard");
      } else if (role === "USER") {
        navigate("/user/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh", width: "100%" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            backgroundImage: `url(${img1})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Grid
          item
          xs={12}
          sm={6}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 80,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              ml: 30
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3, ml: 0, width: "100%" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    sx={{ width: "500px" }}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Remember me."
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
