import {
  Divider,
  Button,
  TextField,
  Box,
  Typography,
  Tooltip,
} from "@mui/material";

const LoginForm = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "150px auto 0 auto",
        width: "40%",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        textAlign="center"
        sx={{ fontWeight: 700, fontSize: "20px", mb: 4 }}
      >
        Sign in
      </Typography>

      <TextField
        required
        id="outlined-required"
        label="Username"
        sx={{ mb: 5 }}
      />

      <TextField
        sx={{ mb: 5 }}
        id="outlined-password-input"
        label="Password *"
        type="password"
        autoComplete="current-password"
      />

      <Button variant="contained" sx={{ mb: 2 }}>
        Sign in
      </Button>

      <Typography
        sx={{ color: "rgb(148 163 184)", fontSize: "14px", cursor: "pointer" }}
        textAlign="end"
      >
        Forgot Password?
      </Typography>
      <Divider sx={{ mt: 4 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          mt: 2,
        }}
      >
        <Typography sx={{ color: "rgb(51 65 85)" }}>
          Need an account?
        </Typography>
        <Tooltip>
          <Button
            sx={{
              color: "rgb(55 48 163)",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            Sign Up
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default LoginForm;
