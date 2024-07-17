// pages/Patients.tsx
import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
// interface Patient {
//   id: number;
//   name: string;
//   age: number;
//   condition: string;
// }

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/Patients.json") // Update this path as needed
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the patients!", error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        List of Patients
      </Typography>
      <List>
        {patients.map((patient) => (
          <Card key={patient.id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={patient.name}
                  secondary={`Age: ${patient.age} | Condition: ${patient.condition}`}
                />
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </Container>
  );
};

export default Patients;
