"use client";
import React from "react";
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
  return (
    <PageWrpr>
      <AppHeader />
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
