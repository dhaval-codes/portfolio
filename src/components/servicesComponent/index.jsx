import React from "react";
import {
  Description,
  Heading,
  ServiceCardCont,
  ServicesWrpr,
  SubHeading,
} from "./style";
import ServiceCard from "./serviceCard";

import WebDevIcon from "@/assets/icons/WebDevIcon";
import MobileDevIcon from "@/assets/icons/MobileDevIcon";
import MachineLearningIcon from "@/assets/icons/MachineLearningIcon";

const ServicesData = [
  {
    label: "Website / Web App Development",
    description:
      "Creating functional and responsive websites that are user-friendly and visually appealing that are tailored to your business needs",
    icon: WebDevIcon,
  },
  {
    label: "Cross platform Mobile App Development",
    description:
      "Creating functional and responsive apps that can reach a wider audience and are tailored to your business needs",
    icon: MobileDevIcon,
  },
  {
    label: "Machine Leaning / AI Development",
    description:
      "Developing AI algorithms and training ML models that can help you automate your business processes and make data driven decisions",
    icon: MachineLearningIcon,
  },
];

function ServicesComponent({ ref }) {
  return (
    <ServicesWrpr ref={ref}>
      <SubHeading>SERVICES</SubHeading>
      <Heading>
        Exploring My <span> Software Skills</span>
      </Heading>
      <Description>
        I transform your ideas into{" "}
        <span>Web Apps, Mobile Apps, and AI applications</span> that inspires
        you as well captivates your customers
      </Description>
      <ServiceCardCont>
        {ServicesData.map((item, index) => (
          <ServiceCard key={index} data={item} />
        ))}
      </ServiceCardCont>
    </ServicesWrpr>
  );
}

export default ServicesComponent;
