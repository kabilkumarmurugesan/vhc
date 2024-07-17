// pages/Layout.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  CssBaseline,
} from "@mui/material";

const Layout = ({ children }) => {
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
        </Toolbar>
      </AppBar>
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default Layout;
