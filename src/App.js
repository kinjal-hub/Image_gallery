import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import customTheme from './theme';
import customTheme1 from './theme1';
import customTheme2 from './theme2';
import SearchGallery from './pages/SearchGallery';
import { useEffect, useState } from 'react';
import CustomNavbar from './components/CustomNavbar';
import Favorite from './pages/Favorite';
import Contact from './pages/Contact';
import Signin from './pages/Signin';

const themes = [customTheme, customTheme1, customTheme2]; // Array of themes

function App() {
  
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setCurrentThemeIndex(prevIndex => (prevIndex + 1) % themes.length);
    }, 10000);

    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <Router>
    <div className="App">
      <ThemeProvider theme={themes[currentThemeIndex]}>
      <CssBaseline />
      <CustomNavbar />
      <Routes>
      <Route path="/" element={<SearchGallery />} />
            <Route path="/Home" element={<SearchGallery />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
      </Routes>
      </ThemeProvider>
    </div>
    </Router>
  );
}
export default App;
