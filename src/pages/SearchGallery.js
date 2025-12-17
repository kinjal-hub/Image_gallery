import { useState, useEffect } from 'react';
import GalleryCard from '../components/GalleryCard';
import SearchBar from './SerchBar';
import { Container, Typography, Grid } from '@mui/material';

const SearchGallery = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/images');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setImages(data);
        setFilteredImages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  // Filter images when searchTerm changes
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = images.filter(img =>
      img.title.toLowerCase().includes(term)
    );
    setFilteredImages(filtered);
  }, [searchTerm, images]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (loading) return <Typography align="center">Loading...</Typography>;
  if (error) return <Typography color="error" align="center">Error: {error}</Typography>;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Searchable Gallery
      </Typography>

      <SearchBar onSearch={handleSearch} />

      {filteredImages.length === 0 ? (
        <Typography align="center" sx={{ mt: 4 }}>
          No images found matching "{searchTerm}"
        </Typography>
      ) : (
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {filteredImages.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <GalleryCard
                img={item.img}
                title={item.title}
                id={item._id}
                onClick={() => alert(`Image ID: ${item.id}`)} // placeholder
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default SearchGallery;
