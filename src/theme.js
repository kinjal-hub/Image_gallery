// src/theme.js
import { createTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

const customTheme = createTheme({
  palette: {
   background: {
      default: '#d1bebeff', // A light gray background for the overall app
      paper: '#ebc3c3ff', // White background for Cards, etc.
    },
  },
  typography: {
   fontFamily: "Helvetica Neue", 
    h4: {
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#4a148c',
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#4a148c',
    },
    // You can customize other typography variants here
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '14px',
          borderRadius: '12px', // Custom border radius for all cards
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Softer shadow
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiInputBase: {
        styleOverrides: {
            root: {
                // Apply these styles to the input elements within the SearchBar
                fontSize: '1rem',
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

export default customTheme;
