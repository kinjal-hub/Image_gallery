import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GalleryCard from '../components/GalleryCard';
import SearchBar from './SerchBar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Container, Typography, Grid, Box, TextField, Stack } from '@mui/material';
import { isBefore, isAfter, isSameDay, parseISO } from 'date-fns';

const SearchGallery = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // 2. Initialize navigate
  const navigate = useNavigate();

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

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = images.filter(img => {
      const matchesSearch = img.title.toLowerCase().includes(term);
      const imgDate = parseISO(img.createdAt);
      let matchesDate = true;
      if (startDate && endDate) {
        matchesDate = (isAfter(imgDate, startDate) || isSameDay(imgDate, startDate)) && (isBefore(imgDate, endDate) || isSameDay(imgDate, endDate));
      } else if (startDate) {
        matchesDate = isAfter(imgDate, startDate) || isSameDay(imgDate, startDate);
      } else if (endDate) {
        matchesDate = isBefore(imgDate, endDate) || isSameDay(imgDate, endDate);
      }
      return matchesSearch && matchesDate;
    });
    setFilteredImages(filtered);
  }, [searchTerm, startDate, endDate, images]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (loading) return <Typography align="center">Loading...</Typography>;
  if (error) return <Typography color="error" align="center">Error: {error}</Typography>;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Searchable Gallery
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 4, justifyContent: 'center' }}>
          <Box sx={{ width: { xs: '100%', md: '40%' } }}>
            <SearchBar onSearch={handleSearch} />
          </Box>
          <DatePicker label="Start Date" value={startDate} onChange={(newValue) => setStartDate(newValue)} renderInput={(params) => <TextField {...params} fullWidth />} />
          <DatePicker label="End Date" value={endDate} onChange={(newValue) => setEndDate(newValue)} renderInput={(params) => <TextField {...params} fullWidth />} />
        </Stack>
        {filteredImages.length === 0 ? (
          <Typography align="center" sx={{ mt: 4 }}>
            No images found matching your criteria.
          </Typography>
        ) : (
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {filteredImages.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <GalleryCard
                  img={item.img}
                  title={item.title}
                  id={item._id}
                  subtitle={new Date(item.createdAt).toLocaleDateString()}
                  onClick={() => navigate(`/image/${item._id}`)}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </LocalizationProvider>
  );
};

export default SearchGallery;
