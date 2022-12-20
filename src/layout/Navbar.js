import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
          <NavLink to="/register">
          <Button sx={{color: "#fff"}}>Sign up</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
