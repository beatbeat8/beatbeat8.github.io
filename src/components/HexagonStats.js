// import React, { useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

const skillsData = [
    { skill: "Frontend", level: 90, details: ["React", "Vue", "JavaScript", "CSS", "MUI", "Bootstrap"], },
    { skill: "Backend", level: 80, details: ["Java (Springboot)", "Python (Flask)", "SQL", "REST"], },
    { skill: "CI/CD", level: 70, details: ["Docker", "Jenkins", "Git"] },
    { skill: "Infrastructure", level: 80, details: ["AWS", "Azure"] },
    { skill: "Other Tools", level: 75, details: ["QGIS", "JIRA", "Figma", "R Programming Language"]},
    { skill: "Soft Skills", level: 90, details: ["Teamwork", "Communication", "Problem-solving"]},
  ];

  const ClickableSkillLabel = ({ payload, x, y, cx, cy, onSkillSelect }) => {
    let textAnchor = "middle";
    if (x < cx) textAnchor = "end";
    if (x > cx) textAnchor = "start";
    let dx = 0;
    if (x === cx && y > cy) dx = 10;
  
    const skillData = skillsData.find(skill => skill.skill === payload.value);
  
    // Responsive font size based on window width
    let fontSize = 14; // default
    if (window.innerWidth < 600) fontSize = 10;
    else if (window.innerWidth < 900) fontSize = 12;
    // You can further tune these breakpoints and sizes
  
    return (
      <text
        x={x}
        y={y}
        textAnchor={textAnchor}
        dy={dx}
        dx={0}
        fill="white"
        style={{fontSize }}
        className="hover-cursor"
        onClick={() => onSkillSelect(skillData)}
      >
        {payload.value}
      </text>
    );
  };
  
const HexagonStats = ({ onSkillSelect }) => {

    return (
        <ResponsiveContainer width="100%" height={400} >
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }} style={{ cursor: 'url("/images/strawberryPointer.svg")' }}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" tick={(props) => <ClickableSkillLabel {...props} onSkillSelect={onSkillSelect} />} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false}/>
                <Radar name="Skill Level" dataKey="level" stroke="cyan" fill="cyan" fillOpacity={0.2} 
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};


export default HexagonStats;