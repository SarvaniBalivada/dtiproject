import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

const UpcyclingIdeas = () => {
  const ideas = [
    {
      title: "Glass Bottle Lamp",
      difficulty: "Easy",
      materials: ["Glass Bottle", "LED Lights", "Cork"],
      steps: [
        "Clean the bottle thoroughly",
        "Insert LED string lights",
        "Seal with cork"
      ],
      image: "/images/bottle-lamp.jpg"
    },
    {
      title: "Cardboard Organizer",
      difficulty: "Medium",
      materials: ["Cardboard Box", "Paint", "Scissors"],
      steps: [
        "Cut cardboard to size",
        "Create compartments",
        "Paint and decorate"
      ],
      image: "/images/cardboard-organizer.jpg"
    }
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Upcycling Ideas
      </Typography>
      <Grid container spacing={4}>
        {ideas.map((idea, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={idea.image}
                alt={idea.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {idea.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Difficulty: {idea.difficulty}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Materials Needed:
                </Typography>
                <ul>
                  {idea.materials.map((material, idx) => (
                    <li key={idx}>{material}</li>
                  ))}
                </ul>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Steps:
                </Typography>
                <ol>
                  {idea.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UpcyclingIdeas;