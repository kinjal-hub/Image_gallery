import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { customTheme1, customTheme2, customTheme3 } from './theme';
import SearchGallery from './pages/SearchGallery';
import { useEffect, useState } from 'react';
import CustomNavbar from './components/CustomNavbar';
import Favorite from './pages/Favorite';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import ImageDetail from './components/ImageDetail';
import Test from './pages/Test';




const themes = [customTheme1, customTheme2, customTheme3]; // Array of themes
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
            <Route path="/test" element={<Test />} />
            <Route path="/image/:id" element={<ImageDetail />} />
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