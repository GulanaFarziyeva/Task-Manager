import { useState, useEffect, React } from "react";
import {
  Divider,
  Button,
  TextField,
  Box,
  Typography,
  Tooltip,
  FormControl,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchUser } from "../authSlice";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();
  const users = useSelector((state) => state.auth.data);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = false;
    users.forEach((user) => {
      if (user.username === username && user.password === +password) {
        isValid = true;
      }
    });

    navigate("/tasklist");

    return isValid;
  };

  return (
    <div>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "100px auto 0 auto",
          width: "40%",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          textAlign="center"
          sx={{ fontWeight: 700, fontSize: "24px", mb: 4 }}
        >
          Sign in
        </Typography>

        <TextField
          required
          id="outlined-required"
          label="Username"
          sx={{ mb: 5 }}
          name="username"
          value={username}
          onChange={onInputChange}
        />

        <FormControl sx={{ mb: 5 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button variant="contained" sx={{ mb: 2 }}>
          Sign in
        </Button>

        <Typography
          sx={{
            color: "rgb(148 163 184)",
            fontSize: "14px",
            cursor: "pointer",
          }}
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
              type="submit"
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
        <Typography sx={{ mt: 5 }}>
          Username: johndoe; password: 12345678 <br />
          Username: walterwhite; password: 4567890
        </Typography>
      </Box>
    </div>
  );
};

export default LoginForm;
