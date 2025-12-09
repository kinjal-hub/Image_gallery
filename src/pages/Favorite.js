import { useContext } from "react";
import { MainContext } from "../mainContext";
import { Typography, Container, Grid, Button, Box } from '@mui/material';
import GalleryCard from '../components/GalleryCard'; 

const Favorite = () => {
  
  const { 
    favoriteCards, 
    incrementQuantity, 
    decrementQuantity 
  } = useContext(MainContext);

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      {favoriteCards.length === 0 ? (
        <Typography align="center" sx={{ mt: 4 }}>
          Not any favorite images added yet.
        </Typography>
      ) : (
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {favoriteCards.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              
              <GalleryCard 
                img={item.img} 
                title={item.title} 
                id={item.id} 
                onClick={() => alert(`Image ID: ${item.id}`)}
                
              />
              
             
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }}>
                <Button 
                  variant="contained" 
                  onClick={() => decrementQuantity(item.id)}
                  size="small"
                >
                  -
                </Button>
                <Typography variant="body1" sx={{ mx: 2 }}>
                  Quantity: {item.quantity}
                </Typography>
                <Button 
                  variant="contained" 
                  onClick={() => incrementQuantity(item.id)}
                  size="small"
                >
                  +
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Favorite;
