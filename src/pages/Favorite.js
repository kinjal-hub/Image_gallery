import { useContext } from "react";
import { MainContext } from "../mainContext";
import { Typography, Container, Grid } from '@mui/material';
import GalleryCard from '../components/GalleryCard'; 

const Favorite = () => {
  const { cart } = useContext(MainContext);
  console.log(cart)
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      {cart.length === 0 ? (
        <Typography align="center" sx={{ mt: 4 }}>
          Not any favorite images added yet.
        </Typography>
      ) : (
        <Grid container spacing={4} sx={{ mt: 2 }}>
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