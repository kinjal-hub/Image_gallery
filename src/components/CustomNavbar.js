import  { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { customTheme1 } from '../theme';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', icon: <HomeIcon />, path: '/' },
  { name: 'Favorite', icon: <FavoriteIcon />, path: '/favorite' },
  { name: 'Contact', icon: <ContactMailIcon />, path: '/contact' },
  { name: 'Test',  path: '/test' },
];

const CustomNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((link) => (
          <ListItem button key={link.name} component={Link} to={link.path}>
            {link.icon}
            <ListItemText primary={link.name} sx={{ marginLeft: 2 }} />
          </ListItem>
        ))}
        
        {/* <ListItem button component={Link} to="./pages/SignIn">
            <AccountCircleIcon />
            <ListItemText primary="Sign In" sx={{ marginLeft: 2 }} />
        </ListItem> */}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" sx= {{ backgroundColor: customTheme1.palette.background.default }}>
      <Toolbar>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexGrow: 1, backgroundColor: customTheme1.palette.background.default }}>
        <img
           src="data:image/jpeg;base64,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" // Replace with the actual path to your logo file
           alt="MyApp Logo"
           style={{ height: '29px', cursor: 'pointer' }} // Adjust height as needed for your design
           sx={{ flexGrow: 1, justifyself:'start', ml: 2, }}
        />
       </Box>

        {isMobile ? (
          <>
            {/* Mobile View: Menu Button */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right" // Drawer opens from the right
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawerList}
            </Drawer>
          </>
        ) : (
          /* Desktop View: Navigation Buttons */
          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: customTheme1.palette.background.default }}>
            {navLinks.map((link) => (
              <Button
                key={link.name}
                color="inherit"
                component={Link}
                to={link.path}
                startIcon={link.icon}
              >
                {link.name}
              </Button>
            ))}
            <Button
              color="inherit"
              component={Link}
              to="/signin"
              variant="outlined"
              sx={{ ml: 2 }}
              startIcon={<AccountCircleIcon />}
            >
              Sign In
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default CustomNavbar;
