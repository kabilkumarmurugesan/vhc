// pages/Patients.tsx
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Container,
  CssBaseline,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const patients = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    condition: "Flu",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    condition: "Broken Arm",
  },
  {
    id: 3,
    name: "Mike Johnson",
    age: 45,
    condition: "Diabetes",
  },
];

const Patients = () => {
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h4" gutterBottom>
        List of Patients
      </Typography>
      <Grid container spacing={3}>
        {patients.map((patient) => (
          <Grid item xs={12} sm={6} md={4} key={patient.id}>
            <Card>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>
                      {patient.name[0]}
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6">{patient.name}</Typography>
                    <Typography color="textSecondary">
                      Age: {patient.age}
                    </Typography>
                    <Typography color="textSecondary">
                      Condition: {patient.condition}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Patients;
