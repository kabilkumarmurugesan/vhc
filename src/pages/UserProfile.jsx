// pages/UserProfile.tsx
import React from "react";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const user = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  phone: "+1234567890",
  address: "123 Main St, Springfield, IL",
  medicalHistory: [
    "Flu - Jan 2022",
    "Sprained Ankle - Mar 2021",
    "Diabetes - Diagnosed in 2019",
  ],
};

const UserProfile = () => {
  return (
    <Container>
      <CssBaseline />
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: deepOrange[500], width: 56, height: 56 }}>
              {user.name[0]}
            </Avatar>
          }
          title={<Typography variant="h5">{user.name}</Typography>}
          subheader={<Typography variant="body1">Age: {user.age}</Typography>}
        />
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary={user.email} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary={user.phone} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={user.address} />
            </ListItem>
          </List>
          <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
            Medical History
          </Typography>
          <List>
            {user.medicalHistory.map((history, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <MedicalServicesIcon />
                </ListItemIcon>
                <ListItemText primary={history} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UserProfile;
