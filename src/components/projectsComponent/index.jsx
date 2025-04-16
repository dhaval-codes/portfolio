import React from "react";
import {
  Heading,
  ProjectCard,
  ProjectComponentWrpr,
  ProjectsCont,
  SubHeading,
} from "./style";
import ProjectCardComponent from "./projectCardComponent";

const ProjectData = [
  {
    label: "Appraisal Application",
    image:
      "https://res.cloudinary.com/dw6ntktro/image/upload/v1740724262/Portfolio/Personal%20Portfolio/Appraisal_Application_hkpnpu.png",
    description:
      "Developed a hierarchical rating system with dashboards and PDF reports for performance assessment in education and workplaces.",
    link: "https://github.com/dhaval-codes/jba-service",
  },
  {
    label: "Role of AI in Precision Medicine",
    image:
      "https://res.cloudinary.com/dw6ntktro/image/upload/v1740724812/Portfolio/Personal%20Portfolio/ROAIIPM_w8kxuj.png",
    description:
      "Litrature review on the role of AI in Precision Medicine and its impact on the healthcare industry.",
    link: "https://docs.google.com/presentation/d/1W_N42zlWlzpr5yB_wWYPhfMNQ_JlCQH4eZZFrhmFnXc/edit?usp=sharing",
  },
  {
    label: "A GPT wrapper",
    image:
      "https://i.pinimg.com/1200x/e8/34/46/e83446756e38aa044c39bef1ea1e6c7d.jpg",
    description: "A wrapper around GPT API for easy follow up questions",
    link: "",
  },
];

function ProjectComponet({ ref }) {
  return (
    <ProjectComponentWrpr ref={ref}>
      <SubHeading>PROJECTS</SubHeading>
      <Heading>
        Presenting My <span>Projects Portfolio</span> & <br />
        <span>Research Reviews / Papers</span>
      </Heading>
      <ProjectsCont>
        {ProjectData.map((data, index) => (
          <ProjectCardComponent key={index} data={data} />
        ))}
      </ProjectsCont>
    </ProjectComponentWrpr>
  );
}

export default ProjectComponet;
