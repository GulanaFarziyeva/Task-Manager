import { useState } from "react";
import {
  Divider,
  Button,
  TextField,
  Box,
  Typography,
  Tooltip,
} from "@mui/material";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
    username: "",
    email: "",
    password: "",
  });

  const { name, number, address, username, email, password } = formData;

  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(name, password);
  };

  return (
    <Box
      component="form"
      onSubmit={submitHandle}
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
        sx={{ fontWeight: 700, fontSize: "24px", mb: 4 }}
      >
        Register
      </Typography>

      <TextField
        required
        id="outlined-required"
        label="Organization name"
        sx={{ mb: 3 }}
        name="name"
        value={name}
        onChange={onInputChange}
      />

      <TextField
        sx={{ mb: 3 }}
        id="outlined-password-input"
        label="Phone Number *"
        type="number"
        name="number"
        value={number}
        onChange={onInputChange}
      />

      <TextField
        required
        id="outlined-required"
        label="Address"
        sx={{ mb: 3 }}
        name="address"
        value={address}
        onChange={onInputChange}
      />

      <TextField
        required
        id="outlined-required"
        label="Username"
        sx={{ mb: 3 }}
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <TextField
        required
        id="outlined-required"
        label="Email"
        type="email"
        sx={{ mb: 3 }}
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <TextField
        sx={{ mb: 3 }}
        id="outlined-password-input"
        label="Password*"
        type="number"
        autoComplete="current-password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <Button variant="contained" sx={{ mt: 4 }} type="submit">
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
