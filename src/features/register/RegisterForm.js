import {
  Divider,
  Button,
  TextField,
  Box,
  Typography,
  Tooltip,
} from "@mui/material";

const RegisterForm = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "100px auto 0 auto",
        width: "50%",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        textAlign="center"
        sx={{ fontWeight: 700, fontSize: "20px", mb: 4 }}
      >
        Sign up
      </Typography>

      <TextField
        required
        id="outlined-required"
        label="Organization name"
        sx={{ mb: 3 }}
      />

      <TextField
        sx={{ mb: 3 }}
        id="outlined-password-input"
        label="Phone Number *"
        type="number"
        autoComplete="current-password"
      />

      <TextField
        required
        id="outlined-required"
        label="Address"
        sx={{ mb: 3 }}
      />

      <TextField
        required
        id="outlined-required"
        label="Username"
        sx={{ mb: 3 }}
      />

      <TextField
        required
        id="outlined-required"
        label="Email"
        type="email"
        sx={{ mb: 3 }}
      />

      <TextField
        sx={{ mb: 3 }}
        id="outlined-password-input"
        label="Password*"
        type="number"
        autoComplete="current-password"
      />

      <Button variant="contained" sx={{ mt: 4 }}>
        Sign up
      </Button>

      <Divider sx={{ mt: 4 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          mt: 2,
          mb: 5,
        }}
      >
        <Typography sx={{ color: "rgb(51 65 85)" }}>
          Have an account?
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
            Sign In
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default RegisterForm;
