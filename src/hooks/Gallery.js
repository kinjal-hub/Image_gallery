import { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import GalleryCard from './GalleryCard';
import ImageDetail from './ImageDetail';

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  // State to hold the ID of the selected image
  const [selectedImageId, setSelectedImageId] = useState(null);

  // Fetch images for the gallery
  useEffect(() => {
    fetch('http://localhost:8000/api/images')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  // If an image is selected, show the detail view
  if (selectedImageId) {
    return (
      <ImageDetail 
        imageId={selectedImageId} 
        onBackClick={() => setSelectedImageId(null)} // Clear ID to go back
      />
    );
  }

  // Otherwise, show the grid
  return (
    <Container>
      <Grid container spacing={2}>
        {images.map(img => (
          <Grid item xs={12} sm={6} md={4} key={img.id}>
            <GalleryCard 
              {...img} 
              onClick={setSelectedImageId} // Pass state setter
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GalleryPage;
