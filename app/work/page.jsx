"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "SaaS Web Application",
    description:
      "Developed a high-performance web application featuring real-time token streaming via Server-Sent Events (SSE). Built a robust .NET 8 backend with a clean architecture, utilizing OpenAI for semantic resume analysis and tailored cover letter generation. Implemented enterprise-grade security with Azure Key Vault and automated delivery via Azure DevOps CI/CD pipelines.",
    stack: [{ name: ".NET 8" }, { name: "Blazor" }, { name: "C#" }, { name: "Azure DevOps" }],
    image: "/assets/work/thumb4.png",
    live: "https://resumatrix.co",
    github: "https://www.linkedin.com/feed/update/urn:li:activity:7398144968328126464/",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Bethany's Pie Shop - .NET 9",
    description:
      "Full-stack e-commerce application built with modern .NET 9 and ASP.NET MVC. Features product catalog, shopping cart, order management, and admin dashboard. Demonstrates clean code architecture and responsive design principles.",
    stack: [{ name: ".NET 9" }, { name: "ASP.NET MVC" }, { name: "Entity Framework" }, { name: "SQL Server" }],
    image: "/assets/work/thumb5.png",
    live: "",
    github: "https://github.com/evansodiaka/BethanysPieShop",
  },
  {
    num: "03",
    category: "backend",
    title: "SuperHero API - .NET 8",
    description:
      "Built a RESTful Web API using .NET 8 with Entity Framework Core for CRUD operations. Implements clean architecture patterns, dependency injection, and async/await for optimal performance. Features comprehensive error handling and API documentation.",
    stack: [{ name: ".NET 8" }, { name: "Entity Framework" }, { name: "Web API" }, { name: "SQL Server" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/evansodiaka/SuperHeroAPI-DotNet8",
  },
  {
    num: "04",
    category: "backend",
    title: "JWT Authentication API",
    description:
      "Developed a secure Web API implementing JWT (JSON Web Token) authentication for user registration, login, and authorization. Features token-based security, password hashing, and role-based access control for enterprise applications.",
    stack: [{ name: "ASP.NET Core" }, { name: "JWT" }, { name: "C#" }, { name: "Security" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/evansodiaka/JwtWebApi",
  },
  {
    num: "05",
    category: "frontend",
    title: "IVY Framework - Open Source",
    description:
      "Contributing to the IVY framework open source project - A .NET application showcasing IVY framework capabilities and features. Demonstrates modern C# development practices and framework integration patterns.",
    stack: [{ name: "C#" }, { name: ".NET" }, { name: "Open Source" }, { name: "IVY Framework" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/evansodiaka/IVY",
  },
  {
    num: "06",
    category: "frontend",
    title: "Online Food Vendor Platform",
    description:
      "Web platform for online ordering and vendor management. Features restaurant listings, menu browsing, and order placement functionality. Built with HTML5, CSS3, and vanilla JavaScript showcasing responsive design and interactive UI elements.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }, { name: "Responsive Design" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/evansodiaka/OnlineFoodVendor",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github/linkedin project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        {project.num === "01" ? (
                          <FaLinkedinIn className="text-white text-3xl group-hover:text-accent" />
                        ) : (
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        )}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{project.num === "01" ? "View on LinkedIn" : "Github repository"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
