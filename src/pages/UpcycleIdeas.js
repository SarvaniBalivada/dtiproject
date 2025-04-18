import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';

const UpcycleIdeas = () => {
  const ideas = [
    {
      title: "Glass Bottle Lamp",
      difficulty: "Easy",
      materials: ["Glass Bottle", "LED Lights", "Cork"],
      steps: [
        "Clean the bottle thoroughly",
        "Insert LED string lights",
        "Seal with cork"
      ]
    },
    {
      title: "Cardboard Organizer",
      difficulty: "Medium",
      materials: ["Cardboard Box", "Paint", "Scissors"],
      steps: [
        "Cut cardboard to size",
        "Create compartments",
        "Paint and decorate"
      ]
    },
    {
      title: "Tin Can Planters",
      difficulty: "Easy",
      materials: ["Clean Tin Cans", "Paint", "Hammer", "Nail", "Potting Soil"],
      steps: [
        "Clean and remove labels",
        "Create drainage holes",
        "Paint and decorate",
        "Add soil and plants"
      ]
    },
    {
      title: "Pallet Coffee Table",
      difficulty: "Medium",
      materials: ["Wooden Pallet", "Sandpaper", "Wood Stain", "Wheels", "Screws"],
      steps: [
        "Sand the pallet smooth",
        "Apply wood stain",
        "Attach wheels",
        "Let dry completely"
      ]
    },
    {
      title: "T-shirt Tote Bag",
      difficulty: "Easy",
      materials: ["Old T-shirt", "Scissors", "Ruler"],
      steps: [
        "Cut off shirt sleeves",
        "Cut wider neck opening",
        "Cut strips at bottom",
        "Tie strips to create bottom"
      ]
    },
    {
      title: "Wine Cork Board",
      difficulty: "Easy",
      materials: ["Wine Corks", "Picture Frame", "Hot Glue Gun", "Ribbon"],
      steps: [
        "Remove frame backing",
        "Arrange corks in pattern",
        "Glue corks together",
        "Add hanging ribbon"
      ]
    },
    {
      title: "Mason Jar Soap Dispenser",
      difficulty: "Easy",
      materials: ["Mason Jar", "Soap Pump", "Drill", "Paint (optional)"],
      steps: [
        "Drill hole in lid",
        "Insert pump mechanism",
        "Paint jar if desired",
        "Fill with soap"
      ]
    },
    {
      title: "Newspaper Plant Pots",
      difficulty: "Easy",
      materials: ["Newspaper", "Small Can", "Soil", "Seeds"],
      steps: [
        "Fold newspaper strips",
        "Form around can",
        "Remove can carefully",
        "Fill with soil"
      ]
    },
    {
      title: "CD Wall Art",
      difficulty: "Medium",
      materials: ["Old CDs", "Strong Adhesive", "Canvas", "Pattern Template"],
      steps: [
        "Design pattern layout",
        "Break CDs if needed",
        "Arrange pieces on canvas",
        "Glue securely"
      ]
    },
    {
      title: "Denim Pencil Holder",
      difficulty: "Easy",
      materials: ["Old Jeans", "Can", "Scissors", "Glue"],
      steps: [
        "Cut denim to size",
        "Wrap around can",
        "Glue edges secure",
        "Add pocket details"
      ]
    }
  ];

  return (
    <Box sx={{ 
      padding: { xs: 2, md: 3 }, 
      maxWidth: 1400, 
      margin: '1rem auto',
      backgroundColor: '#f5f5f5'
    }}>
      <Typography 
        variant="h2" 
        align="center" 
        gutterBottom 
        sx={{ 
          fontSize: { xs: '1.8rem', md: '2.2rem' },
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: '#2c3e50'
        }}
      >
        DIY Upcycling Ideas
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {ideas.map((idea, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ 
              height: '500px',
              padding: { xs: '1rem', md: '1.5rem' },
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
              }
            }}>
              <Typography variant="h4" gutterBottom sx={{ 
                fontWeight: 'bold',
                fontSize: '1.5rem',
                marginBottom: '0.5rem'
              }}>
                {idea.title}
              </Typography>
              <Typography variant="h6" sx={{ 
                color: '#666',
                marginBottom: '0.75rem',
                fontSize: '1rem'
              }}>
                Difficulty: {idea.difficulty}
              </Typography>
              <Typography variant="h5" sx={{ 
                fontWeight: 'bold', 
                marginBottom: '0.75rem',
                fontSize: '1.2rem'
              }}>
                Materials Needed:
              </Typography>
              <Box sx={{ 
                textAlign: 'center', 
                marginBottom: '1rem',
                width: '100%'
              }}>
                {idea.materials.map((material, idx) => (
                  <Typography 
                    key={idx} 
                    sx={{ 
                      fontSize: '1rem',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {material}
                  </Typography>
                ))}
              </Box>
              <Typography variant="h5" sx={{ 
                fontWeight: 'bold', 
                marginBottom: '0.75rem',
                fontSize: '1.2rem'
              }}>
                Steps:
              </Typography>
              <Box sx={{ width: '100%' }}>
                {idea.steps.map((step, idx) => (
                  <Typography 
                    key={idx} 
                    sx={{ 
                      fontSize: '1rem',
                      marginBottom: '0.25rem',
                      textAlign: 'center'
                    }}
                  >
                    {idx + 1}. {step}
                  </Typography>
                ))}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UpcycleIdeas;