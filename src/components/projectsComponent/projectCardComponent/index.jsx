import React from "react";
import {
  Description,
  Heading,
  ProjectCardWrpr,
  ProjectTextWrpr,
} from "./style";

function ProjectCardComponent({ data }) {
  return (
    <ProjectCardWrpr
      backgroundImage={data.image}
      onClick={() => window.open(data.link)}
    >
      <ProjectTextWrpr>
        <Heading>{data.label}</Heading>
        <Description>{data.description}</Description>
      </ProjectTextWrpr>
    </ProjectCardWrpr>
  );
}

export default ProjectCardComponent;
