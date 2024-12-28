import React from "react";
import { Box, Grid, Typography, Avatar, Card, CardContent, Button } from "@mui/material";
import Elijah from "../../assets/images/elijah.jpg";
import Kufre from "../../assets/images/kufre.jpg";
import Michelle from "../../assets/images/michelle.jpg";
import { Link } from "react-router-dom";

const team = [
  { name: "Elijah Ejake", role: "Coordinator", image: Elijah },
  { name: "Kefre Asuquo", role: "Secretary", image: Kufre },
  { name: "Michelle Michael", role: "Treasurer", image: Michelle },
];

function OurTeam() {
  return (
    <Box sx={{ my: 5, px: 2, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom color="primary">
        Meet Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {team.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: "center" }}>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 100, height: 100, margin: "0 auto 10px" }}
                />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button 
      variant="contained" 
      color="primary" 
      component={Link} 
      to="/our-team"
      sx={{mt: "1rem"}}
      >
        See More
      </Button>
    </Box>
  );
}

export default OurTeam;
