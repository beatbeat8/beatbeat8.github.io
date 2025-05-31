import React, { useEffect, useState, useRef } from "react";
import { Typography, Box, Fade } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import Typewriter from "../components/Typewriter";
import HexagonStats from "../components/HexagonStats";
import ExperienceSection from '../components/ExperienceSection';


function LandingPage() {
    const body1FontSizeXS = '0.8rem';
    const body2FontSizeXS = '0.7rem';

    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillSelect = (skill) => {
        console.log(skill)
        setSelectedSkill(skill);
    };

    const [showScrollHint, setShowScrollHint] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
          if (!hasScrolled) setShowScrollHint(true);
        }, 2000);
      
        const handleScroll = () => {
          if (!hasScrolled) {
            // Detect initial downward scroll
            if (window.scrollY > 30) {
              setHasScrolled(true);
              setShowScrollHint(false);
              
              // Smooth scroll to About Me section
              aboutRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }
            // Hide scroll hint on any scroll
            else if (window.scrollY > 10) {
              setShowScrollHint(false);
            }
          }
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => {
          clearTimeout(timer);
          window.removeEventListener('scroll', handleScroll);
        };
      }, [hasScrolled]);

    return (
        <div>
            <Fade in={showScrollHint} timeout={500}>
            <Box
                sx={{
                position: 'fixed',
                bottom: 40,
                left: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                pointerEvents: 'none',
                }}
            >
                <Box
                sx={{
                    px: 2,
                    py: 1,
                    borderRadius: '8px',
                    color: 'white',
                    fontStyle: 'italic',
                    pointerEvents: 'none',
                    textAlign: 'center',
                    animation: 'float 2s ease-in-out infinite',
                }}
                >
                <Typography variant="body2">↓ Scroll to get to know me!</Typography>
                </Box>
            </Box>
            </Fade>
            <Grid container spacing={2} sx={{ p:2}}>

            {/* Hello and Greeting Picture ======================================================================================================================  height: 'calc(100vh - 64px)' */}
            <Box
                sx={{
                    minHeight: { xs: 'calc(100vh - 168px)', md: 'calc(100vh - 172px)' }, // 56px for mobile, 64px for desktop AppBar
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}
                >
                {/* Picture Section */}
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    maxWidth: 500,
                    p: 2,
                    }}
                >
                    <img
                    src={`${process.env.PUBLIC_URL}/images/beatTreCime.png`}
                    alt="Beatrice at Tre Cime"
                    style={{
                        width: '80%',
                        borderRadius: 8,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                    }}
                    />
                    <Typography variant="caption" sx={{ mt: 2, color: 'white', textAlign: 'center' }}>
                    Hiking in Dolomites, Italy
                    </Typography>
                </Box>

                {/* Greeting Section */}
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    justifyContent: { xs: 'start', md: 'centre' },
                    flex: 1,
                    p: 2,
                    }}
                >
                    <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 100,
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        color: 'white',
                        mb: 2,
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                    >
                    Hello! I'm
                    </Typography>
                    <Typography
                    variant="h3"
                    sx={{
                        color: 'cyan',
                        minHeight: '1.2em',
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                    >
                    <Typewriter
                        texts={["Beatrice!", "a Software Developer", "a Problem Solver"]}
                        typingSpeed={80}
                        deleteSpeed={50}
                        pauseDuration={2000}
                        loop={true}
                    />
                    </Typography>
                </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: { xs: '112px', md: '128px' } }} ></Box>
            
            
            {/* Education ====================================================================================================================== */}
            <Grid size={12} ref={aboutRef} sx={{ scrollMarginTop: "64px" }}>
                <Typography variant="h2" sx={{ mb: 3, textAlign: "center", color: "white", }}>
                    About Me
                </Typography>
            </Grid>
            <Grid size={{xs:12,md:7}} sx={{ order: { xs: 2, md: 1 } }}>
                <Typography variant="body1"  sx={{textAlign: "justify", mr:{md:4}, fontSize: { xs: body1FontSizeXS, md: '1rem' } }}>
                    I'm currently studying my final year at SMU, pursuing a <span style={{ color: "cyan" }}>Bachelors of Science in Information Systems</span>, and will graduate June 2025. 
                    I love people and enjoy building creative solutions that improve our lives. Head over to my{" "}
                    <Link
                    to="/projects" // This will route to your projects page
                    style={{ color: "inherit", textDecoration: "underline", }}
                    className="hover-cursor"
                    ><span style={{ color: "cyan" }}>
                    Projects
                    </span></Link>
                    {" "} tab to check out some work I did for school!
                </Typography>
                <Typography sx={{ mt: 2, fontSize: { xs: body1FontSizeXS, md: '1rem' } }} component="div">
                    My specialisations in school:
                    <ul className="dash-list">
                        <li>Digitalisation & Cloud Solutions</li>
                        <li>Smart-city Management & Technology</li>

                    </ul>
                </Typography>
            </Grid>
            <Grid size={{xs:12,md:5}} sx={{ order: { xs: 1, md: 2 } }}>
                <Box
                sx={{
                    flex: 1,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column", 
                    justifyContent: "center",
                    alignItems: "center", 
                }}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/scis_meta.jpeg`}
                        alt="Metamorphosis"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover", 
                        }}
                    />
                
                    {/* Subheading */}
                    <Typography variant="caption" sx={{ mt:1, textAlign: "center", color: "white" }}>
                        My co-facilitator and subclan for Metamorphosis, SCIS's Orientation Camp
                    </Typography>
                </Box>
            </Grid>

            {/* Skills & Stats ====================================================================================================================== */}
            <Grid size={{xs:1,md:0}} sx={{ order: { xs: 3 } }}></Grid>
            <Grid size={{xs:12,md:6}} sx={{ order: { xs: 3 } }}>
                <HexagonStats onSkillSelect={handleSkillSelect} />
            </Grid>
            <Grid size={{xs:1,md:0}} sx={{ order: { xs: 4 } }}></Grid>
            <Grid size={{xs:10,md:5}} sx={{ order: { xs: 4 } }}>

                <Typography variant="h5" sx={{ mt: 2, fontSize: { xs: body1FontSizeXS, md: '1.2rem' } }}>
                    {selectedSkill ? selectedSkill.skill : "Select a category to see my tech stack!"}
                </Typography>

                <Box sx={{ mt: 0, display: "flex", gap: 1, flexWrap: "wrap", flexDirection: "column",}}>
                    {selectedSkill ? (
                        <ul className="dash-list">
                            {selectedSkill.details.map((detail, index) => (
                                <li key={index}>
                                    <Typography
                                        component="span"
                                        sx={{ fontSize: { xs: body1FontSizeXS, md: '1.2rem' } }}
                                    >
                                        {detail}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    ) : ""}
                
                <Typography variant="body2" sx={{ mt: "auto", fontStyle: "italic", color: "gray", fontSize: { xs: body2FontSizeXS, md: '1rem' } }}>
                    ** NOTE: A relative estimate of my confidence in the respective areas. <br/>
                    Refer to my projects and experiences to see how I attained these skillsets!
                </Typography>

                </Box>
            </Grid>

            {/* Experience ====================================================================================================================== */}
            <Grid size={12} sx={{ order: { xs: 5 } }}>
                <Typography variant="h2"  sx={{ mt:3, mb: {xs:0, md:3}, textAlign: "center", color: "white" }}>
                    Experience
                </Typography>
                <ExperienceSection/>
            </Grid>
            </Grid>
        </div>
    )
}

export default LandingPage;