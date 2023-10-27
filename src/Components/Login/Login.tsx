import {
  Alert,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
  Box
} from "@mui/material";
import { useLocation } from "react-router-dom";
import {
  useHandleSubmit,
  useState,
  useHandleChange,
  useHandleSignIn,
} from "./Login.hooks";
import './Login.css';

const Login = () => {
  const [state, setState] = useState();
  const handleChange = useHandleChange(setState);
  const handleSignIn = useHandleSignIn(setState);
  const [handleSubmit, submitInFlight] = useHandleSubmit(state);
  const { pathname, search } = useLocation();
  const isSignUp = pathname === "/register";

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1rem",
        flexGrow: 0.8,
      }}
      className="login-container"
    >
      <Typography
        sx={{ mb: 2, fontWeight: 800, order: -3 }}
        variant="h1"
        align="center"
      >
        {isSignUp ? "Register" : "Login"}
      </Typography>

      {state.error && (
        <Alert
          sx={{ mb: 2, order: -2 }}
          severity="error"
        >
          {state.error}
        </Alert>
      )}

      {state.otpSent && (
        <Alert sx={{ mb: 2 }} severity="success">
          Please enter the One Time Password (OTP) that has been sent to your
          email address.
        </Alert>
      )}

<form id="login-form" onSubmit={handleSubmit}>
  {state.otpSent ? (
    <TextField
      key="code"
      name="code"
      variant="outlined"
      label="OTP code"
      placeholder="Enter OTP code..."
      InputLabelProps={{ shrink: true }}
      InputProps={{ sx: { fontWeight: 700 } }}
      onChange={handleChange}
      disabled={submitInFlight}
      autoComplete="off"
      autoFocus
      fullWidth
      required
    />
  ) : (
    <>
      {isSignUp && (
        <Box
          sx={{display: "flex", justifyContent: "space-between", mb: 2}}>
          <TextField
            key="fname"
            name="fname"
            type="text"
            variant="outlined"
            label="First Name"
            placeholder="Enter your first name..."
            onChange={handleChange}
            disabled={submitInFlight}
            sx={{flexGrow: 0.5, mr: 1}}
            required
          />
          <TextField
            key="lname"
            name="lname"
            type="text"
            variant="outlined"
            label="Last Name"
            placeholder="Enter your last name..."
            onChange={handleChange}
            disabled={submitInFlight}
            sx={{flexGrow: 0.5, ml: 1}}
            required
          />
        </Box>
      )}
      <TextField
        key="email"
        name="email"
        type="email"
        variant="outlined"
        label="Email"
        placeholder="Enter your email address."
        InputLabelProps={{ shrink: true }}
        onChange={handleChange}
        disabled={submitInFlight}
        fullWidth
        required
        sx={{mb: 2}}
      />
    </>
  )}
  {isSignUp && !state.otpSent && (
    <TextField
      key="password"
      name="password"
      type="password"
      variant="outlined"
      label="Password"
      placeholder="Create a secure password."
      InputLabelProps={{ shrink: true }}
      onChange={handleChange}
      disabled={submitInFlight}
      fullWidth
      required
    >
    </TextField>
  )}
</form>
      <Button
        color="inherit"
        form="login-form"
        type="submit"
        variant="outlined"
        size="large"
        disabled={submitInFlight}
        fullWidth
      >
        {
          state.otpSent
            ? "Sign In"
            : `Continue with Email`
        }
      </Button>

      <Divider
        sx={{ color: "divider", order: isSignUp ? undefined : -1 }}
      >
        OR
      </Divider>

      <Button
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "white" : undefined,
          order: isSignUp ? undefined : -2,
        }}
        color="inherit"
        type="submit"
        variant="outlined"
        size="large"
        onClick={handleSignIn}
        data-method="google.com"
        fullWidth
      >
        Continue with Google
      </Button>

    </Container>
  );
}

export default Login;

Login.displayName = "Login";