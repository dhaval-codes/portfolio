"use client";
import React, { useState, useEffect } from "react";
import {
  ButtonsContainer,
  Description,
  Heading,
  HomeComponentWrpr,
  ImageComponentWrpr,
  SubHeading,
  TextComponentWrpr,
} from "./style";
import Image from "next/image";
import MyImage from "../../assets/MyImage.png";
import Button from "../button";
import DownloadIcon from "@/assets/icons/downloadIcon";

function HomeComponent({ ref }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <HomeComponentWrpr ref={ref}>
      <TextComponentWrpr>
        <SubHeading>Welcome to my Portfolio</SubHeading>
        <Heading>
          Hi I'm
          <br />
          <span>Dhaval J Prasad</span>
          <br />
          Software Engineer
        </Heading>
        <Description>
          Collaborating with highly skilled and creative enterprises and
          individuals on the ideas that revolutionaise the world through
          software
        </Description>
        <ButtonsContainer>
          <Button label={"Hire Me!"} buttonType="primary" />
          <Button
            label={"Download my resume"}
            buttonType="secondary"
            RightIcon={DownloadIcon}
            onClick={() =>
              window.open(
                "https://drive.google.com/uc?export=download&id=1rCkLoRuuOs6j3WDY5DHeDzo9zI1xfhIN"
              )
            }
          />
        </ButtonsContainer>
      </TextComponentWrpr>
      <ImageComponentWrpr>
        <Image
          src={MyImage}
          alt="My Image"
          width={width > 1024 ? 450 : 300}
          height={width > 1024 ? 450 : 300}
          style={{ borderRadius: "50%" }}
        ></Image>
      </ImageComponentWrpr>
    </HomeComponentWrpr>
  );
}

export default HomeComponent;
