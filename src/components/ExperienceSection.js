import React, { useState } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const body1FontSizeXS = '0.8rem';
const body2FontSizeXS = '0.7rem';

const experiences = [
  {
    id: 1,
    company: 'Hitachi Rail GTS',
    position: 'Software Engineer Intern',
    period: 'Jan 25 - Present',
    duration: '6 months',
    picture: 'hitachiInterns.jpeg',
    pictureSubtitle: 'Hitachi Rail GTS Interns 2025',
    summary: 'Hitachi Rail GTS provides rail transport solutions, advanced technology and services for rail systems such as signalling solutions and software.',
    responsibilities: 'Developed and maintained software applications for data visualisation and analysis.\nConducted testing and debugging of data parsing applications.',
    tech: 'Python \nBash \nJenkins \nAzure',
  },
  {
    id: 2,
    company: 'KPMG',
    position: 'Tax Technology & Transformation Intern',
    period: 'May 24 - Aug 24',
    duration: '3 months',
    picture: 'kpmgFootball.jpeg',
    pictureSubtitle: 'KPMG Sports Day 2024',
    summary: 'KPMG is a global leader in audit, tax, and advisory services.',
    responsibilities: 'Interned with the Generative AI team, writing user stories (Jira) and testing tools created for the Tax department.\nConducted chatbot testing and collaborated with the tax team to enhance tax processes and systems.',
    tech: 'Testing \nChatbot',
  },
  {
    id: 3,
    company: 'SMU',
    position: 'Teaching Assistant | Research Assistant',
    period: 'Aug 23 - Aug 24',
    duration: '1 year',
    summary: 'Singapore Management University (SMU) offers TA and RA opportunities for students excelling in their studies.',
    responsibilities: 'Assisted professors in class management.\nProvided support to students in understanding course materials.\nConducted survey research for Cooling Singapore 2.0, a government-backed project led by Professor Winston Chow. \nAnalysed climate data and provided visualisations and wind flow analysis for the project.',
    tech: 'Python \nR',
  },
  {
    id: 4,
    company: 'Civil Service College',
    position: 'Courseware Developer Intern',
    period: 'May 23 - Aug 23',
    duration: '3 months',
    picture: 'CSCInterns.jpeg',
    pictureSubtitle: 'Civil Service College Interns 2023',
    summary: 'Civil Service College (CSC) a public institution for training and development of public sector professionals in Singapore.',
    responsibilities: 'Assisted in the revamp of "Introduction to Python" and "Data Analysis with Python".\nLiased with the course developer and project manager to push for course reform.',
    tech: 'Python \nR',
  },
]

export default function ExperienceSection({ data = experiences }) {

  const [selectedId, setSelectedId] = useState(null);
  const selectedExperience = data.find((exp) => exp.id === selectedId);

  return (
    <Grid container >
    <Grid size={{xs:12, md:6}} sx={{ justifyContent: {xs: "centre", md:"flex-start"}, }}>
      <Timeline position="right" sx={{px:{xs:0, sm:1}}}>
      {data.map((exp, idx) => (
          <TimelineItem key={exp.id}>
            <TimelineOppositeContent sx={{ width: {xs: 80, sm: 180}, minWidth: 0, flex: 'none', }}> 
              <Typography variant="body2"  sx={{color: selectedId === exp.id ? 'white' : 'grey', fontSize: { xs: body2FontSizeXS, md: '1rem' }}}>
                {exp.period}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                color="inherit"
                sx={{
                  bgcolor: selectedId === exp.id ? 'white' : 'grey',
                }}
              />
              {idx < data.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py:0, width: '' }}
              className="hover-cursor"
              selected={selectedId === exp.id}
              onClick={() => setSelectedId(exp.id)}
            >
            <Box sx={{ pb:2, backgroundColor: 'transparent', borderRadius: 2 }}>
              <Typography variant='h6' sx={{py:0, color:selectedId === exp.id ? "cyan" : "gray"}}>
                {exp.company}
              </Typography>
              <Typography variant="body2" sx={{color: selectedId === exp.id ? 'white' : 'grey', fontSize: { xs: body2FontSizeXS, md: '1rem' }}}>
                {exp.position}
              </Typography>
            </Box>
            </TimelineContent>
          </TimelineItem>
        ))}

      </Timeline>
    </Grid>

    <Grid size={{xs:12, md:6}} sx={{ justifyContent: "center"}}>
      <Box
          sx={{
          flexGrow: 1,
          color: 'white',
          overflowY: 'auto',
          scrollbarWidth: 'none',         
          '&::-webkit-scrollbar': {
              display: 'none',              
          },
          px:{md:4},
          }}
      >
          {selectedExperience ? (
        <>
          <Typography variant="h6" sx={{ color: '#DCDCAA'}}>
            {selectedExperience.company} 
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: 'gray', fontSize: { xs: body2FontSizeXS, md: '1rem' } }}>
            {selectedExperience.period} | {selectedExperience.duration}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, mb: 1, fontSize: { xs: body2FontSizeXS, md: '1rem' } }}></Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6, fontSize: { xs: body1FontSizeXS, md: '1rem' } }}>
            Role: {selectedExperience.position}
          </Typography>
          {selectedExperience.picture ? (
          <Box>
          <Typography variant="body2" sx={{ mt: 2, mb: 1 }}></Typography>
            <img
              src={`${process.env.PUBLIC_URL}/images/${selectedExperience.picture}`}
              alt={selectedExperience.company}
              style={{ width: '100%', borderRadius: 8, marginBottom: 0}}
            />
            <Typography variant="body2" gutterBottom sx={{mb:1, color:'white', textAlign: 'center', fontSize: { xs: body2FontSizeXS, md: '1rem' }}}>
              {selectedExperience.pictureSubtitle}
            </Typography>
          </Box>
          ) : null}
          
          <Typography variant="body2" sx={{ mt: 2, mb: 1 }}></Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.6, textAlign: 'justify', fontSize: { xs: body1FontSizeXS, md: '1rem' } }}>
            {selectedExperience.summary}
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, mb: 1 }}></Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: { xs: body1FontSizeXS, md: '1rem' } }}>
            Responsibilities:
            <ul className="dash-list">
              {selectedExperience.responsibilities.split('\n').map((item, index) => {
                const linkText = "Cooling Singapore 2.0";
                const linkUrl = "https://cityperspectives.smu.edu.sg/article/cooling-singapore-20-step-towards-becoming-climate-resilient-and-regenerative-city"; 

                if (item.includes(linkText)) {
                  
                  const [before, after] = item.split(linkText);
                  return (  
                    <li key={index}>
                      {before}
                      <a
                        href={linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "cyan", textDecoration: "underline" }}
                      >
                        {linkText}
                      </a>
                      {after}
                    </li>
                  );
                }
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, mb: 1 }}></Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.6, textAlign: 'justify', fontSize: { xs: body1FontSizeXS, md: '1rem' } }}>
            Technologies/Skills:
            <ul className="dash-list">
              {selectedExperience.tech.split('\n').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, mb: 1 }}></Typography>
            
          </>
      ) : (
        <Box sx={{ textAlign: 'center'}}>
          <Typography variant="body1" sx={{ fontSize: { xs: body1FontSizeXS, md: '1rem' } }}>Select a project to view details</Typography>
        </Box>
      )}
      </Box>
    </Grid>

    </Grid>
  );
}
