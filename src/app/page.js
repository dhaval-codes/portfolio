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
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    homeRef,
    aboutMeRef,
    experienceRef,
    servicesRef,
    projectsRef,
    blogRef,
    contactRef,
  ];

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

    // Smooth scroll to the clicked section
    sectionRefs[index]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageWrpr>
      <AppHeader
        menuOptions={menuOptions}
        handleMenuOptionClick={handleMenuOptionClick}
      />
      <HomeComponent ref={homeRef} />
      <AboutMeComponent ref={aboutMeRef} />
      <ExperienceComponent ref={experienceRef} />
      <ServicesComponent ref={servicesRef} />
      <ProjectComponet ref={projectsRef} />
      <BlogsComponent ref={blogRef} />

      <ContactMeComponent />
    </PageWrpr>
  );
}

export default Home;
