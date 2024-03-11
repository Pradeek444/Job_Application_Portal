
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import img1 from "../../assets/images/signup.jpg";
import { register } from '../../services/auth';
import { useState } from 'react';

const theme = createTheme();

export default function SignInSide() {
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    mobile: "",
    password: "",
    role: "",
    confirmPassword: "",
    allowExtraEmails: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (isFormValid) {
      console.log("Form submitted with data:", formData);
    } else {
      console.log("Form is invalid. Please check for errors.");
    }
    console.log(formData);
    const res = await register(formData);
    console.log(res);
    if (res.data.message === "User registered successfully") {
      alert(res.data.message);
      window.location.href = "/login";
  }

  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: fieldValue,
    });
    validateField(name, fieldValue);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "firstname":
      case "lastname":
        error = value.trim() === "" ? "This field is required" : "";
        break;
      case "email":
        // Basic email validation
        error = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Please enter a valid email address";
        break;
      case "password":
        error = value.length < 8 ? "Password must be at least 8 characters" : "";
        break;
      case "confirmPassword":
        error =
          value !== formData.password ? "Passwords do not match" : "";
        break;
      case "role":
        error = value === "" ? "Please select a role" : "";
        break;
      case "mobile":
        // Add your mobile number validation logic here
        break;
      default:
        break;
    }
    setFormErrors({ ...formErrors, [name]: error });
  };

  const validateForm = () => {
    const errors = {};
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        validateField(key, formData[key]);
        if (formErrors[key]) {
          errors[key] = formErrors[key];
        }
      }
    }
    setFormErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${img1})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstname"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    autoFocus
                    value={formData.firstname}
                    onChange={handleInputChange}
                    error={!!formErrors.firstname}
                    helperText={formErrors.firstname}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    autoComplete="family-name"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    error={!!formErrors.lastname}
                    helperText={formErrors.lastname}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!formErrors.email}
                    helperText={formErrors.email}
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
                    onChange={handleInputChange}
                    error={!!formErrors.password}
                    helperText={formErrors.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    error={!!formErrors.confirmPassword}
                    helperText={formErrors.confirmPassword}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    required
                    fullWidth
                    id="role"
                    label="Role"
                    name="role"
                    SelectProps={{
                      native: true,
                    }}
                    value={formData.role}
                    onChange={handleInputChange}
                    error={!!formErrors.role}
                    helperText={formErrors.role}
                  >
                    <option value="ADMIN">Admin</option>
                    <option value="USER">User</option>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile Number"
                    name="mobile"
                    autoComplete="tel"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    error={!!formErrors.mobile}
                    helperText={formErrors.mobile}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={validateForm}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
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
