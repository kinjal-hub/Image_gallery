import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, Button, Box, CircularProgress } from '@mui/material';


const ImageDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchImageDetail = async () => {
    if (!id) return;
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`http://localhost:8000/api/images/${id}`);
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
      const response = await fetch(`http://localhost:8000/api/images/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setLoading(false);
      navigate('/'); // Redirect home after delete
    } catch (error) {
      setError(error);
      alert(`Failed to delete image: ${error.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImageDetail();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography variant="h6" align="center" color="error">Error: {error.message}</Typography>;
  }

  if (!image) {
    return <Typography variant="h6" align="center">Image not found.</Typography>;
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
          style={{ maxHeight: 400, objectFit: 'contain' }}
        />
        <Typography variant="h6" color="error.main" >
          Stock: {image.stock}
        </Typography>
        <Typography variant="h6" color="error.main" >
          Rating: {image.rating}
        </Typography>
        <Typography variant="h6" color="error.main" >
          Description: {image.description}
        </Typography>
        
        <Typography variant="h6" color="error.main">
                Created: {new Date(image.createdAt).toLocaleString()}
        </Typography>
        
      </Card>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="contained" onClick={() => navigate('/')}>
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