"use client";
import React from "react";
import { PageWrpr } from "./style";

// importing components
import AppHeader from "@/components/appHeader";
import HomeComponent from "@/components/homeComponent";
import AboutMeComponent from "@/components/aboutMeComponent";
import ExperienceComponent from "@/components/experienceComponent";
import ServicesComponent from "@/components/servicesComponent";

function Home() {
  return (
    <PageWrpr>
      <AppHeader />
      <HomeComponent />
      <AboutMeComponent />
      <ExperienceComponent />
      <ServicesComponent />
    </PageWrpr>
  );
}

export default Home;
