import { useState, useEffect } from 'react';
import { Container, Typography, Card, CardMedia, Button, Box } from '@mui/material'; // Import Box for layout

const ImageDetail = ({ imageId, onBackClick }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const fetchImageDetail = async () => {
    if (!imageId) return;
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`http://localhost:8000/api/images/${imageId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setImage(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  


const handleDeleteImage = async () => {
    
    if (!window.confirm('Are you sure you want to delete this image?')) {
        return;
    }
    setLoading(true); 

    try {
        const response = await fetch(`http://localhost:8000/api/images/${imageId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        
        setLoading(false); 
        onBackClick();

    } catch (error) {
        
        setError(error);
        alert(`Failed to delete image: ${error.message}`);
        setLoading(false); // Stop loading on error
    }
};


  useEffect(() => {
    fetchImageDetail();
  }, [imageId]);

  if (loading) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" align="center" color="error">Error: {error.message}</Typography>;
  }

  if (!image) {
    return null;
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {image.title}
      </Typography>
      <Card>
        <CardMedia
          component="img"
          image={image.img}
          alt={image.title}
          style={{ maxHeight: 600, objectFit: 'contain' }}
        />
      </Card>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="contained" onClick={onBackClick}>
          Back to Gallery
        </Button>
        <Button variant="contained" color="error" onClick={handleDeleteImage}>
          Delete Image
        </Button>
      </Box>
    </Container>
  );
};

export default ImageDetail;
