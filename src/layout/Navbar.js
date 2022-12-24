import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "40" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "rgb(30 41 59)" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "20px", fontWeight: 500 }}
          >
            Task Manager
          </Typography>
          <NavLink to="/">
            <Button
              sx={{
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "13px",
                mr:2
              }}
            >
              <LoginIcon
                sx={{ fontSize: "17px", mr: 1, marginBottom: "2px" }}
              />
              Sign in
            </Button>
          </NavLink>
          <NavLink to="/register">
            <Button
              sx={{
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "13px",
              }}
            >
              <PersonIcon
                sx={{ fontSize: "17px", mr: 1, marginBottom: "2px" }}
              />
              Sign Up
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
