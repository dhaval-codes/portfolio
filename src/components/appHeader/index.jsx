"use client";
import React, { useState } from "react";
import { AppHeaderWrpr, HeaderLogoWrpr, HeaderNavWrpr, NavItem } from "./style";
import Button from "../button";
import Image from "next/image";
import Logo from "../../assets/Logo.png";

function AppHeader({ menuOptions, handleMenuOptionClick }) {
  return (
    <AppHeaderWrpr>
      <HeaderLogoWrpr>
        <Image src={Logo} height={50}></Image>
      </HeaderLogoWrpr>
      <HeaderNavWrpr>
        {menuOptions.map((option, index) => (
          <NavItem
            key={index}
            onClick={() => handleMenuOptionClick(index)}
            selected={option.selected}
          >
            {option.label}
          </NavItem>
        ))}
        <Button label={"Contact Me"} />
      </HeaderNavWrpr>
    </AppHeaderWrpr>
  );
}

export default AppHeader;
