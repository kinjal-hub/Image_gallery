    import  { useState } from 'react';
    import {  TextField } from '@mui/material';
    import InputAdornment from '@mui/material/InputAdornment';
    import IconButton from '@mui/material/IconButton'; 
    import SearchIcon from '@mui/icons-material/Search';
    const SearchBar = ({ onSearch }) => {
      const [searchTerm, setSearchTerm] = useState('');

      const handleChange = (event) => {
        const newValue = event.target.value;
        setSearchTerm(newValue);
        onSearch(newValue); 
      };
      return (
        <TextField
          endIcon={<SearchIcon />}
          label="Search"
          variant="outlined"
          content="center"
          InputProps={{
        endAdornment: ( 
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
       }}
          value={searchTerm}
          onChange={handleChange}
          sx={{
          width: '80%', // Adjust width as needed
          maxWidth: 600, // Optional: set a maximum width
        }}
        />
        
      );
    };
export default SearchBar;