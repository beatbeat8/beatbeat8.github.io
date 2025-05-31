import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Card, Chip, Collapse, Divider } from '@mui/material';

import projects from '../data/ProjectData.js';

export default function ProjectsPage() {
  const body1FontSizeXS = '0.8rem'; // md is 1rem
  const body2FontSizeXS = '0.7rem'; // md is 0.9rem

  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  const rightPanelRef = useRef(null);

  useEffect(() => {
    const rightPanel = rightPanelRef.current;

    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = rightPanel;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight;

      // If the user is scrolling down and right panel is already at the bottom
      if (isAtBottom && e.deltaY > 0) {
        e.preventDefault(); // prevent stuck scroll
        window.scrollBy({ top: e.deltaY, behavior: 'auto' });
      }
    };

    if (rightPanel) {
      rightPanel.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
        if (rightPanel) {
          rightPanel.removeEventListener('wheel', handleWheel);
        }
      };
    }, []);

  return (
    
        <Box
        sx={{
            display: 'flex',
            height: '100vh', // full viewport height
            width: '100%', // full viewport width
            p:{xs: 1, md: 2}, // padding for small screens
        }}
        >
        {/* Left column - fixed width */}
        <Box
            sx={{
            width: {xs:'100%', md:'350px'}, // fixed width
            color: 'white',
            overflowY: 'auto',
            borderRight: '1px solid #333',
            flexShrink: 0,     
            scrollbarWidth: 'none',         // Firefox
            '&::-webkit-scrollbar': {
                display: 'none',              // Chrome, Safari
            },
            }}
        >
          <Typography variant="body1" sx={{ color: 'cyan', mb: 2, textAlign: 'center', display: {xs: 'flex', md: 'none'} }}>
            Select a Project to view it's details. Select again to collapse.
          </Typography>
            
            {projects.map((project) => (
          <Card
            key={project.id}
            className="hover-cursor"
            onClick={() => setSelectedId(selectedId === project.id ? null : project.id)}
            sx={{
                bgcolor: selectedId === project.id ? '#2a2a2a' : 'transparent',
                mb: 2,
                p: {xs:1, md:2},
                border: '1px solid transparent',
                borderRadius: 0, // removes corner rounding
                boxShadow: 'none', // makes it flat
                cursor: 'pointer',
                '&:hover': {
                    borderColor: selectedId !== project.id ? '#555' : '#333',
                },
                transition: 'background-color 0.3s ease, border 0.3s ease',
            }}
        >
            <Typography variant="h6" sx={{ color: selectedId === project.id ? '#DCDCAA' : 'gray' }}>
              {project.shortTitle}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: selectedId === project.id ? 'white' : 'gray', fontSize: { xs: body2FontSizeXS, md: '1rem' } }}>
              {project.shortDesc}
            </Typography>
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{ mr: 0.5, mb: 0.5,
                    bgcolor: selectedId === project.id ? '#333' : '3a3a3a', 
                    color: selectedId === project.id ? '#569CD6' : 'gray',
                    fontSize: { xs: body2FontSizeXS, md: '1rem' } 
                  }}
              />
            ))}
            
            <Collapse in={selectedId === project.id} timeout="auto" unmountOnExit sx={{ display: {md:"none"} }}>
              <Divider sx={{ opacity: 1, borderColor: '#3a3a3a', my:1}}/>
              {selectedProject ? (
              <>
                <Typography variant="h4" sx={{ color: '#DCDCAA', mb: 2 }}>
                  {selectedProject.fullTitle}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, mb: 1, fontSize: { xs: body2FontSizeXS, md: '1rem' } }}></Typography>
                <Typography variant="body2" sx={{ mb: 1, color: 'white', fontSize: { xs: body2FontSizeXS, md: '1rem' } }}>
                  {selectedProject.date} | {selectedProject.duration}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, mb: 1, fontSize: { xs: body2FontSizeXS, md: '1rem' } }}></Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6, fontSize: { xs: body1FontSizeXS, md: '1rem' } }}>
                  {selectedProject.full}
                </Typography>
              
              </>
            ) : (
              ""
            )}
            </Collapse>
          </Card>
          
        ))}
      </Box>

        {/* Right column - fills remaining space */}
        <Box
            ref={rightPanelRef}
            sx={{
            flexGrow: 1,
            color: 'white',
            overflowY: 'auto',
            scrollbarWidth: 'none',         
            '&::-webkit-scrollbar': {
                display: 'none',              
            },
            px:4,
            display: {xs: 'none', md: 'block'}, // hide on small screens
            }}
        >
            {selectedProject ? (
          <>
            <Typography variant="h4" sx={{ color: '#DCDCAA', mb: 2 }}>
              {selectedProject.fullTitle}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, mb: 1, fontSize: { xs: body2FontSizeXS, md: '1rem' } }}></Typography>
            <Typography variant="body2" sx={{ mb: 1, color: 'white', fontSize: { xs: body2FontSizeXS, md: '1rem' } }}>
              {selectedProject.date} | {selectedProject.duration}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, mb: 1, fontSize: { xs: body2FontSizeXS, md: '1rem' } }}></Typography>
            <>
              {selectedProject.full}
            </>
            
            </>
        ) : (
          <Typography variant="body1" sx={{ color: 'cyan', mb: 2, textAlign: 'center', display: {xs: 'none', md: 'flex'} }}>
            Select a Project to view it's details. Select again to close. 
          </Typography>
        )}
        </Box>
        </Box>
  );
}
