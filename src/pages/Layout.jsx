// pages/Layout.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  CssBaseline,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axiosInstance from "../utils/axiosInstance";

const Layout = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    axiosInstance
      .get("/user/profile")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the user profile!", error);
      });
  }, []);

  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" component={Link} to="/dashboard/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/dashboard/patients">
            Patients
          </Button>
          <Button color="inherit" component={Link} to="/dashboard/appointments">
            Appointments
          </Button>
          <Button color="inherit" component={Link} to="/dashboard/records">
            Medical Records
          </Button>
          <IconButton color="inherit" onClick={handleMenu}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>
              {user ? user.name[0] : <AccountCircleIcon />}
            </Avatar>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              component={Link}
              to="/dashboard/userprofile"
              onClick={handleClose}
            >
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default Layout;
