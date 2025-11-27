// src/theme.js
import { createTheme } from '@mui/material/styles';
import { deepPurple, grey } from '@mui/material/colors';

const customTheme2 = createTheme({
  palette: {
    background: {
      default: '#f0f0f0', // A very light gray background for the overall app
      paper: '#995c5cff', // White background for Cards, etc.
    },
    text: {
        primary: '#202685ff', // Dark text color for general use
        secondary: '#555555', // Slightly lighter dark text color
    },
  },
  typography: {
    fontFamily: "Arial",
    h4: {
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#92154fff', // Darker color for headings
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#92154fff', // Darker color for subheadings
    },
    // You can customize other typography variants here
  },
  components: {
    MuiCard: {
  styleOverrides: {
    root: {
      padding: 14,
      borderRadius: 12, // Custom border radius for all cards
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Softer, lighter shadow
      transition: 'transform 0.5s ease-in-out, boxShadow 0.5s ease-in-out', // Ensure smooth transition for both properties
      '&:hover': {
        // Change these values to your desired new effect:
        transform: 'scale(1.02)', // Example: slightly increase size instead of moving up
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)', // Example: a deeper, more pronounced shadow on hover
      },
    },
  },
},

    MuiInputBase: {
      styleOverrides: {
        root: {
          // Apply these styles to the input elements within the SearchBar
          fontSize: '1rem',
          color: '#333333', // Ensure input text is dark
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '50px', // Pill-shape for the search input
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: deepPurple[500],
            borderWidth: '2px',
          },
          // Ensure the border is a light color by default for contrast
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: grey[400], 
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '5px', // e.g., Set a custom padding for all CardContent instances
          '&:last-child': {
            paddingBottom: '2px', // Ensure bottom padding is consistent
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default customTheme2;
