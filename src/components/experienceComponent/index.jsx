import React from "react";
import {
  CardDescription,
  CardHeading,
  Description,
  ExperienceCardWrpr,
  ExperienceComponentWrpr,
  ExprienceCard,
  Heading,
  SubHeading,
} from "./style";

const ExperienceData = [
  {
    heading: "Frontend Internship",
    description:
      "Started working at Rhombuz in July'23 as frontend intern. I was responsible for developing the frontend for enterprise level solutions for companies like Mercedes and AplhamatricX.",
  },
  {
    heading: "Promoted to Software Engineer",
    description:
      "After 10 months of internship, I was promoted to Software Engineer. I worked on cross platform mobile app for Tomra. And also extensively worked on the data and graphs for Food and Health Organization application for African countries.",
  },
  {
    heading: "Promoted to Senior Software Engineer",
    description:
      "After 5 months of FTR, I was promoted to Senior Software Engineer. I led a T-Mobile USA project where my team built an npm library and a frontend app to parse swagger files, make custom API calls, and edit/download swagger data.",
  },
  {
    heading: "Software Engineer Internship",
    description:
      "I resigned from prev. company in order to step into AI/ML world. I joined AI4Bharat Labs, at IIT Madras and working on AI Platforms like Anudesh, Shoonya and Chhitralekha as Software Engineer dealing with ML Engineering.",
  },
];

function ExperienceComponent() {
  return (
    <ExperienceComponentWrpr>
      <SubHeading>EXPERIENCE</SubHeading>
      <Heading>What sets me apart from rest of the SWE / SDE / MTS?</Heading>
      <ExperienceCardWrpr>
        {ExperienceData.map((data, index) => (
          <ExprienceCard key={index}>
            <CardHeading>{data.heading}</CardHeading>
            <CardDescription>{data.description}</CardDescription>
          </ExprienceCard>
        ))}
      </ExperienceCardWrpr>
      <Description>
        *I'm doing all this while persuing my bachelors at IIT Madras
      </Description>
    </ExperienceComponentWrpr>
  );
}

export default ExperienceComponent;
