"use client";
import React, { useState, useRef, useEffect } from "react";
import { PageWrpr } from "./style";

// importing components
import AppHeader from "@/components/appHeader";
import HomeComponent from "@/components/homeComponent";
import AboutMeComponent from "@/components/aboutMeComponent";
import ExperienceComponent from "@/components/experienceComponent";
import ServicesComponent from "@/components/servicesComponent";
import ProjectComponet from "@/components/projectsComponent";
import BlogsComponent from "@/components/blogsComponent";
import ContactMeComponent from "@/components/contactMeComponent";

function Home() {
  // variables
  const [menuOptions, setMenuOptions] = useState([
    { label: "Home", selected: true },
    { label: "About Me", selected: false },
    { label: "Experience", selected: false },
    { label: "Services", selected: false },
    { label: "Projects", selected: false },
    { label: "Blog", selected: false },
  ]);

  // handle menu tab click
  const handleMenuOptionClick = (index) => {
    const newMenuOptions = menuOptions.map((option, i) => ({
      ...option,
      selected: i === index,
    }));
    setMenuOptions(newMenuOptions);
  };

  return (
    <PageWrpr>
      <AppHeader
        menuOptions={menuOptions}
        handleMenuOptionClick={handleMenuOptionClick}
      />
      <HomeComponent />
      <AboutMeComponent />
      <ExperienceComponent />
      <ServicesComponent />
      <ProjectComponet />
      <BlogsComponent />
      <ContactMeComponent />
    </PageWrpr>
  );
}

export default Home;
