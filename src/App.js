import './App.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./theme.css";
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './views/LandingPage';
import ProjectsPage from './views/ProjectsPage';
import FunStuffPage from './views/FunStuffPage';
import ScrollToTop from './components/ScrollToTop';

const theme = createTheme({
  typography: {
    fontFamily: '"Fira Code", monospace',
    h1: {
      fontSize: 'clamp(2.5rem, 7vw, 4rem)',
    },
    h2: {
      fontSize: 'clamp(2rem, 6vw, 3.5rem)',
    },
    h3: {
      fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
    },
    h4: {
      fontSize: 'clamp(1.3rem, 4.5vw, 2rem)',
    },
    h5: {
      fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
    },
    h6: {
      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
    },
    body1: {
      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
    },
    body2: {
      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
    },
  },
  palette: {
    text: {
      primary: "#ffffff", // Ensures all text is white
    },
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div style={outerDivStyle}>
      <div style={appContainerStyle}>
          <Navbar/>
          <div style={contentStyle}>
            <ScrollToTop />
            <Routes>
              <Route path="/about-me" element={<LandingPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/fun-stuff" element={<FunStuffPage />} />
              <Route path="/" element={<LandingPage />} />
            </Routes>
          </div>
        <Footer /> 
      </div>
    </div>
    </ThemeProvider>
  );
};


const outerDivStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center", 
  minHeight: "100vh", 
  backgroundColor: "#333",
};

const appContainerStyle = {
  display: "flex",
  flexDirection: "column",
  maxWidth: "1200px", 
  width: "100%", 
  flexGrow: 1, 
};

const contentStyle = {
  flexGrow: 1, 
  display: "flex",
  flexDirection: "column",
  alignItems: "center", 
};

function App() {
  return (
    <Layout />
  );
}

export default App;
