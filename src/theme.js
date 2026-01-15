// src/themes.js (Note the plural name for clarity)
import { createTheme } from '@mui/material/styles';
import { deepPurple, grey } from '@mui/material/colors';

/**
 * Custom Theme 1 (originally customTheme from src/theme.js)
 */
export const customTheme1 = createTheme({
  palette: {
    background: {
      default: 'rgb(32, 111, 139)', // A light gray background for the overall app
      paper: 'rgb(202, 207, 198)', // White background for Cards, etc.
    },
  },
  typography: {
    fontFamily: "Helvetica Neue",
    h4: {
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#8c145a',
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#411605',
    },
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


/**
 * Custom Theme 2 (originally customTheme1 from src/theme1.js)
 */
export const customTheme2 = createTheme({
  palette: {
    background: {
      default: '#f0f0f0', // A very light gray background for the overall app
      paper: '#d4ccccff', // White background for Cards, etc.
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
            transform: 'scale(1.02)', // Example: slightly increase size instead of moving up
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)', // Example: a deeper, more pronounced shadow on hover
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
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


/**
 * Custom Theme 3 (originally customTheme2 from src/theme2.js)
 */
export const customTheme3 = createTheme({
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
            transform: 'scale(1.02)', // Example: slightly increase size instead of moving up
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)', // Example: a deeper, more pronounced shadow on hover
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
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
