import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, Button, Box, CircularProgress, Autocomplete } from '@mui/material';


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
    <Container maxWidth="xs" sx={{ py: 4, marginTop:8 }}>
      
      <Card sx={{ p: 2, borderRadius: "30px", margin: '5px',padding:'5px' }}>
        <CardMedia
          component="img"
          image={image.img}
          alt={image.title}
          style={{ maxHeight: 300, objectFit: 'contain' }}
          sx= {{ borderRadius: "30px", mb:2}}

        />
        <Typography variant="h6"  gutterBottom align="center" textAlign="left" color="black" fontWeight="bold" >
           {image.title}
        </Typography>
       <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="body1" fontFamily="cursive" color="black">Stock:</Typography>
          <Typography variant="body1" fontFamily="cursive" color="black" textAlign="right">{image.stock}</Typography>
       </Box>

  
       <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="body1" fontFamily="cursive" color="black">Rating:</Typography>
          <Typography variant="body1" fontFamily="cursive" color="black" textAlign="right">{image.rating} ★★★★★</Typography>
       </Box>

  
       <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="body1" fontFamily="cursive" color="black">Price:</Typography>
          <Typography variant="body1" fontFamily="cursive" color="black" textAlign="right">₹{image.price}</Typography>
       </Box>

  
       <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="body1" fontFamily="cursive" color="black">Description:</Typography>
          <Typography variant="body1" fontFamily="cursive" color="black" textAlign="right">{image.description}</Typography>
       </Box>

  
       <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 , mb:2 }}>
          <Typography variant="body1" fontFamily="cursive" color="black">Created:</Typography>
          <Typography variant="body1" fontFamily="cursive" color="black" textAlign="right">{new Date(image.createdAt).toLocaleString()}</Typography>
       </Box>
</Card>
<Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="contained" onClick={() => navigate('/')}>
          Back to Gallery
        </Button>
        <Button variant="contained" color="primary" onClick={handleDeleteImage}>
          Delete Image
        </Button>
      </Box>
    </Container>
  );
};

export default ImageDetail;