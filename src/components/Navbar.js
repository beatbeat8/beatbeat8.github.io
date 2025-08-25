import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Menu, MenuItem } from "@mui/material";
import { GitHub, LinkedIn, Email, Download } from "@mui/icons-material";
import { useLocation, useNavigate, Link } from 'react-router-dom';

import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = location.pathname.split('/')[1] || 'about-me';
  const formatRoute = (label) => label.toLowerCase().replace(/\s+/g, '-');
  const path = location.pathname.split('/') || 'about-me';

  const handleTabClick = (tabLabel) => {
    navigate(`/${formatRoute(tabLabel)}`, { replace: true });
  };

  const [hoveredTab, setHoveredTab] = useState("");
  const handleMouseEnter = (tab) => setHoveredTab(tab);
  const handleMouseLeave = () => setHoveredTab("");

  const getText = (tab) => {
    const tabPath = formatRoute(tab);
    return activeTab === tabPath || hoveredTab === tab ? `<${tab}/>` : tab;
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const tabs = ["About Me", "Projects", "Fun Stuff"];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#333" }} elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Brand Name */}
          {/* <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Beatrice's Portfolio
          </Typography> */}

        {/* Hamburger Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ mr: "auto", display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        
        {/* Tabs */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {tabs.map((tab) => (
            <Box
              key={tab}
              sx={{
                width: "140px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1,
              }}
              className="hover-cursor"
            >
              <Link
                key={tab}
                to={`/${formatRoute(tab)}`}
                style={{
                  textDecoration: "none",
                  color: "white", 
                }}
                className="hover-cursor"
              >
              <Typography
                sx={{
                  fontSize: '1rem',
                  display: "inline",
                  opacity: activeTab === formatRoute(tab) ? 1 : 0.5,
                  transition: "opacity 0.3s ease",
                  flexShrink: 0,
                  width: "auto",
                  cursor: "pointer",
                }}
                onMouseEnter={() => handleMouseEnter(tab)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleTabClick(tab)}
                className="hover-cursor"
              >
                {getText(tab)}
              </Typography>
              </Link>
            </Box>
          ))}
        </Box>

        <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: { backgroundColor: "#222" }
        }}
      >
        {tabs.map((tab) => (
          <MenuItem
            key={tab}
            component={Link}
            to={`/${formatRoute(tab)}`}
            onClick={() => {
              handleTabClick(tab);
              handleMenuClose();
            }}
            sx={{
              color: "white",
              opacity: path === tab ? 1 : 0.7,
              fontWeight: path === tab ? "bold" : "normal",
            }}
          >
            {getText(tab)}
          </MenuItem>
        ))}
      </Menu>
      

        {/* Icons */}
        <Box>
          <IconButton
            href="https://github.com/beatbeat8"
            target="_blank"
            sx={{ color: "white" }}
            title="Beatrice on GitHub"
          >
            <GitHub />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/beatrice-gan/"
            target="_blank"
            sx={{ color: "white" }}
            title="Beatrice on LinkedIn"
          >
            <LinkedIn />
          </IconButton>

          <IconButton
            href="mailto:b3atricegan@gmail.com"
            target="_blank"
            sx={{ color: "white" }}
            title="Email to Beatrice"
          >
            <Email />
          </IconButton>

          {/* <IconButton
            href="/BeatriceGanResume.pdf"
            download="BeatriceGanResume.pdf"
            sx={{ color: "white" }}
            title="Download My Resume"
          >
            <Download />
          </IconButton> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;