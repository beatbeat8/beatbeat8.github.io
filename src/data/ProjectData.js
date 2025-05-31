import React from "react";
import { Typography, Box } from "@mui/material";

const body1FontSizeXS = '0.8rem'; // md is 1rem
const body2FontSizeXS = '0.7rem'; // md is 0.9rem

const projects = [

    // ITSA =======================================================================================================

    {
      id: 1,
      shortTitle: 'CRM for UBS',
      fullTitle: 'Customer Relationship Management System for UBS',
      tags: ['AWS', 'Cloud-Native Architecture', 'Cloud Services'],
      shortDesc: 'SMU-X Project: CRM system for UBS using AWS services.',
      date: 'Jan 2025 - Apr 2025',
      duration: '~10 weeks',
      full: (
        <>
          <Typography variant="body1" gutterBottom sx={{fontSize: { xs: body1FontSizeXS, md: '1rem' }}}>
            This project was part of the SMU-X program, where we collaborated with UBS to develop a Customer Relationship Management (CRM) system. 
            The goal was to create a cloud-native architecture that could efficiently manage customer interactions and data.
          </Typography>
          
          <Typography variant="body2" gutterBottom sx={{mt:2, mb:1, color:'white', textAlign: 'center', fontSize: { xs: body2FontSizeXS, md: '1rem' }}}>
            Architecture Diagram
          </Typography>
          <Box sx={{px:{xs:0, md:3}}}>
            <img
                src={`${process.env.PUBLIC_URL}/images/ITSA_G1T2_ArchitectureDiagram.jpg`}
                alt="Architecture diagram"
                style={{ width: '100%', borderRadius: 8, marginBottom: 16}}
            />
          </Box>

          <Typography variant="body2" gutterBottom sx={{m1:2, mb:1, color:'white', textAlign: 'center', fontSize: { xs: body2FontSizeXS, md: '1rem' } }}>
            Screens
          </Typography>
          <Box sx={{px:{xs:0, md:3}}}>
            <img
                src={`${process.env.PUBLIC_URL}/images/screen1admin.png`}
                alt="Admin Dashboard"
                style={{ width: '100%', borderRadius: 8, marginBottom: 16}}
            />
          </Box>
          <Box sx={{px:{xs:0, md:3}}}>
            <img
                src={`${process.env.PUBLIC_URL}/images/screen2agent.png`}
                alt="Agent Dashboard"
                style={{ width: '100%', borderRadius: 8, marginBottom: 16}}
            />
          </Box>

          <Box sx={{px:{xs:0, md:3}}}>
            <img
                src={`${process.env.PUBLIC_URL}/images/screen3all.png`}
                alt="View All Clients"
                style={{ width: '100%', borderRadius: 8, marginBottom: 16}}
            />
          </Box>
          
        </>
      ),
    },

    // FYP =========================================================================================
    {
        id: 2,
        shortTitle: 'Triaging @ CGH',
        fullTitle: 'Automated Triaging System for Changi General Hospital',
        tags: ['Classification', 'Automation', 'UAT'],
        shortDesc: 'Final Year Project categorising patients into priority levels.',
        date: 'Oct 2023 - Apr 2024',
        duration: '~7 months',
        full: (
            <>
                <Typography variant="body1" gutterBottom sx={{fontSize: { xs: body1FontSizeXS, md: '1rem' }}}>
                    For my final year project (that I took in Year 3), my team worked with Changi General Hospital (CGH) to develop an automated triaging system for head-related injuries.
                    The system asks patients a series of questions via a web survey and classifies them into 3 priority levels: P1, P2, and P3.
                </Typography>

                <Typography variant="body2" gutterBottom sx={{mt:2, mb:1, color:'white', textAlign: 'center', fontSize: { xs: body2FontSizeXS, md: '1rem' }}}>
                    Project Poster
                </Typography>
                <Box sx={{px:{xs:0, md:3}}}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/FYP_Poster.jpg`}
                        alt="Project Poster"
                        style={{ width: '100%', borderRadius: 8, marginBottom: 16}}
                    />
                </Box>

                <Typography variant="body2" gutterBottom sx={{mt:2, mb:1, color:'white', textAlign: 'center', fontSize: { xs: body2FontSizeXS, md: '1rem' }}}>
                    Project Video
                </Typography>
                <Box sx={{px:{xs:0, md:3, aspectRatio: '16 / 9',}}} >
                    <iframe
                        width="100%"
                        height='100%'
                        src="https://www.youtube.com/embed/O6Aauf3Sd44"
                        title="FYP Team Sort() Project Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ borderRadius: 8, marginBottom: 16, border: 'none', outline: 'none'}}
                    ></iframe>
                </Box>

                <Typography variant="body1" gutterBottom sx={{mt:2, fontSize: { xs: body1FontSizeXS, md: '1rem' }}}>
                    My group was also very fortunate to have come in <Box component="span" sx={{ color: 'cyan' }}>1st runner up</Box>{' '} 
                    in the DELL Cloud Native Award that semester. Huge thanks to our supervisor, our sponsors and 
                    of course, my team members for all the hard work and support throughout the project!
                </Typography>
                <Typography variant="body2" gutterBottom sx={{mt:2, mb:1, color:'white', textAlign: 'center', fontSize: { xs: body2FontSizeXS, md: '1rem' }}}>
                    DELL Cloud Native Award Presentation
                </Typography>
                <Box sx={{px:{xs:0, md:3}}}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/dellPresentation.jpeg`}
                        alt="Dell Award"
                        style={{ width: '100%', borderRadius: 8, marginBottom: 16}}
                    />
                </Box>
            </>
      ),
    },

  ];

  
  export default projects;