import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
// import {IconButton, MenuIcon} from "@mui/icons-material";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#222328",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Toolbar style={{ minHeight: "90px", margin: "0px 50px" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer", fontFamily: "Poppins" }}
          >
            Permi
            <span style={{ color: "#f75757" }}>Touch</span>
          </Typography>
          <Toolbar>
            <Typography
              variant="subtitle1"
              component="span"
              sx={{
                flexGrow: 1,
                marginRight: "40px",
                cursor: "pointer",
                fontFamily: "Poppins",
              }}
            >
              Home
            </Typography>
            <Typography
              variant="subtitle1"
              component="span"
              sx={{
                flexGrow: 1,
                marginRight: "40px",
                cursor: "pointer",
                fontFamily: "Poppins",
              }}
            >
              About
            </Typography>
            <Typography
              variant="subtitle1"
              component="span"
              sx={{
                flexGrow: 1,
                marginRight: "15px",
                cursor: "pointer",
                fontFamily: "Poppins",
              }}
            >
              Contact
            </Typography>
          </Toolbar>
          <Button
            color="inherit"
            variant="outlined"
            style={{ border: "3px solid #f75757" }}
            sx={{ borderRadius: 28, fontFamily: "Poppins" }}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            disableRipple
          >
            Sign In
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link
              to="/sign_in"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem onClick={handleClose}>As Administrator</MenuItem>
            </Link>
            <Link
              to="/sign_in"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem onClick={handleClose}>As Student</MenuItem>
            </Link>
            <Link
              to="/sign_in"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem onClick={handleClose}>As Society</MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
