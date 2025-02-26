"use client";
import React, { useState } from "react";
import { AppHeaderWrpr, HeaderLogoWrpr, HeaderNavWrpr, NavItem } from "./style";
import Button from "../button";

function AppHeader() {
  // variables
  const [menuOptions, setMenuOptions] = useState([
    { label: "Home", selected: true },
    { label: "About Me", selected: false },
    { label: "Experience", selected: false },
    { label: "Services", selected: false },
    { label: "Projects", selected: false },
    { label: "Blog", selected: false },
  ]);

  // functions
  const handleMenuOptionClick = (index) => {
    const newMenuOptions = menuOptions.map((option, i) => {
      if (i === index) {
        return { ...option, selected: true };
      }
      return { ...option, selected: false };
    });
    ~setMenuOptions(newMenuOptions);
  };
  return (
    <AppHeaderWrpr>
      <HeaderLogoWrpr>D</HeaderLogoWrpr>
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
