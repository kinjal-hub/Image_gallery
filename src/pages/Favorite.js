import { useContext } from "react";
import { MainContext } from "../mainContext";
import { Typography, Container, Grid } from '@mui/material';
import GalleryCard from '../components/GalleryCard'; 

const Favorite = () => {
  const { cart } = useContext(MainContext);
  console.log(cart)
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {cart.length === 0 ? (
        <Typography variant='h6'align="center" sx={{ mt: '70px' }}>
          Not any favorite images added yet.
        </Typography>
      ) : (
        <Grid container spacing={4} gap={2} sx={{ mt: 8 }} justifyContent="center">
          {cart.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <GalleryCard
               img={item.img}
               title={item.title}
               id={item.id} 
               onClick={() => alert(`Image ID: ${item.id}`)}
              />
             
              </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Favorite;