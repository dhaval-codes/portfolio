import React from "react";
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

function HomeComponent() {
  return (
    <HomeComponentWrpr>
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
                "https://drive.google.com/uc?export=download&id=10yGHQImk-_XLVgXTcVYMVxb5glOtpj6r"
              )
            }
          />
        </ButtonsContainer>
      </TextComponentWrpr>
      <ImageComponentWrpr>
        <Image
          src={MyImage}
          alt="My Image"
          width={350}
          height={350}
          style={{ borderRadius: "50%" }}
        ></Image>
      </ImageComponentWrpr>
    </HomeComponentWrpr>
  );
}

export default HomeComponent;
