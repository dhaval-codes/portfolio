import React from "react";
import {
  AboutMeWrpr,
  CarrouselWrpr,
  Description,
  Heading,
  ImageComponentWrpr,
  SubHeading,
  TextComponentWrpr,
} from "./style";
import MyImageAlso from "../../assets/MyImageAlso.png";
import Image from "next/image";
import Carrousel from "../carrousel";

const CarrouselData = [
  {
    label: "Web Development",
    data: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJS",
      "NextJS",
      "NodeJS",
      "ExpressJS",
      "Python",
      "Django",
      "Flask",
      "FastAPI",
      "MongoDB",
      "PostgresSQL",
    ],
  },
  {
    label: "App Development",
    data: [
      "JavaScript",
      "ReactNativeCLI",
      "ReactNativeExpo",
      "RealmDB",
      "MySQLLite",
    ],
  },
  {
    label: "Machine Learning",
    data: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
    ],
  },
];

function AboutMeComponent() {
  return (
    <AboutMeWrpr>
      <ImageComponentWrpr>
        <Image
          alt="My Image"
          src={MyImageAlso}
          height={350}
          width={350}
          style={{ borderRadius: "50%" }}
        />
      </ImageComponentWrpr>
      <TextComponentWrpr>
        <SubHeading>ABOUT ME</SubHeading>
        <Heading>
          <span>2 Year's Experience</span>
          <br />
          in Software Development
        </Heading>
        <Description>
          Hello there! I'm <span>Dhaval J Prasad</span>, a 20-year-old
          undergraduate at <span>IIT Madras</span>, currently in my second year
          of engineering. I specialize in web development, app development, and
          machine learning. I'm deeply passionate about my craft and committed
          to delivering high-quality solutions, backed by <span>2 years</span>{" "}
          of professional experience in the industry.
        </Description>
        <CarrouselWrpr>
          <Carrousel data={CarrouselData} />
        </CarrouselWrpr>
      </TextComponentWrpr>
    </AboutMeWrpr>
  );
}

export default AboutMeComponent;
