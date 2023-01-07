import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import { NavLink } from "react-router-dom";

import theme from "../theme/theme";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, height: "40" }}>
      <AppBar position="fixed" sx={{ backgroundColor: theme.palette.main }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: theme.typography.textMd,
              fontWeight: 500,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
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
                fontSize: theme.typography.textXs,
                mr: 2,
              }}
            >
              <LoginIcon
                sx={{
                  fontSize: theme.typography.textMd,
                  mr: 1,
                  marginBottom: "2px",
                }}
              />
              Sign in
            </Button>
          </NavLink>
          <NavLink to="/register">
            <Button
              sx={{
                color: theme.palette.white,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: theme.typography.textXs,
                backgroundColor: theme.palette.main,
              }}
            >
              <PersonIcon
                sx={{
                  fontSize: theme.typography.textMd,
                  mr: 1,
                  marginBottom: "2px",
                }}
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
