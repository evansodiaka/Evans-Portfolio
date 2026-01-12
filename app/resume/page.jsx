"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiDotnet,
  SiSharp,
  SiBlazor,
  SiDjango,
  SiPostgresql,
  SiAmazondynamodb,
  SiGooglecloud,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I am a results-driven Software Engineer with over 5 years of experience in building scalable web applications and cloud-based solutions. My expertise lies in the .NET ecosystem, Azure cloud services, and full-stack development.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Evans Odiaka",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1(204) 869 6366",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "evans-odiaka",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Canadian-Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "evansodiaka@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I have worked with various companies to build and modernize their software systems, focusing on performance, scalability, and user experience.",
  items: [
    {
      company: "Western Financial Group",
      position: "Senior Software Engineer (.NET)",
      duration: "Jul 2022 - Present",
    },
    {
      company: "Kidco Construction LTD",
      position: "Software Engineer",
      duration: "Sep 2021 - Jun 2022",
    },
    {
      company: "Think box",
      position: "UI/UX Designer Tester",
      duration: "Jul 2019 - Sep 2021",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Academic foundation in Computer Science and continuous learning through certifications and practical application.",
  items: [
    {
      institution: "University of Manitoba",
      degree: "Bachelor of Science in Computer Science",
      duration: "2015 - 2021",
    },
    {
      institution: "Microsoft Certified",
      degree: "Azure Developer Fundamentals",
      duration: "2025",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "A comprehensive set of technical skills focused on modern software development, cloud infrastructure, and user-centric design.",
  skillList: [
    {
      icon: <SiSharp />,
      name: "C#",
    },
    {
      icon: <SiDotnet />,
      name: ".NET 8",
    },
    {
      icon: <SiBlazor />,
      name: "Blazor",
    },
    {
      icon: <FaAws />,
      name: "Azure",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <SiDjango />,
      name: "django",
    },
    {
      icon: <SiPostgresql />,
      name: "SQL",
    },
    {
      icon: <SiAmazondynamodb />,
      name: "dynamodb",
    },
    {
      icon: <SiGooglecloud />,
      name: "GCP",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[500px]">
                  <section className="py-4 space-y-8 px-2">
                    {/* Western Financial Group */}
                    <div className="group">
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">Jul 2022 – Present</h3>
                      </div>
                      <h4 className="text-xl font-semibold text-white/90 mb-2">Associate Software Engineer (.NET) – Remote</h4>
                      <p className="text-lg text-white/60 mb-6 font-medium">Western Financial Group</p>
                      <ul className="space-y-3 text-white/80">
                        <li>• Developed SaaS web apps with C#/.NET 8, Blazor components, improving performance 40%.</li>
                        <li>• Built secure REST APIs (OAuth2/JWT) following SOLID principles with cross-functional teams.</li>
                        <li>• Automated Azure DevOps pipelines, cutting release cycles 30%; led 30+ zero-defect releases.</li>
                        <li>• Mentored as Senior Developer; achieved 95% sprint completion, zero critical incidents.</li>
                      </ul>
                      <p className="mt-4 text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-lg inline-block">
                        C#, .NET 8, Blazor, Azure DevOps, SQL Server, Entity Framework, REST API
                      </p>
                    </div>

                    {/* Kidco Construction */}
                    <div className="group border-l-4 border-white/10 pl-6">
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-4"></div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">Sep 2021 – Jun 2022</h3>
                      </div>
                      <h4 className="text-xl font-semibold text-white/90 mb-2">Software Engineer</h4>
                      <p className="text-lg text-white/60 mb-6 font-medium">Kidco Construction LTD – Calgary, AB</p>
                      <ul className="space-y-3 text-white/80">
                        <li>• Migrated .NET 3.5 legacy systems to .NET 8/ASP.NET MVC, boosting efficiency 35%.</li>
                        <li>• Optimized Azure databases for high-availability under heavy workloads.</li>
                        <li>• Collaborated end-to-end SDLC; drove 95% sprint completion and team velocity gains.</li>
                      </ul>
                      <p className="mt-4 text-sm font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-lg inline-block">
                        C#, .NET 8, ASP.NET MVC, Azure, SQL Server, Entity Framework
                      </p>
                    </div>

                    {/* Think Box */}
                    <div className="group">
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-4"></div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">Jul 2019 – Sep 2021</h3>
                      </div>
                      <h4 className="text-xl font-semibold text-white/90 mb-2">UI/UX Designer Tester</h4>
                      <p className="text-lg text-white/60 mb-6 font-medium">Think Box – Winnipeg, MB</p>
                      <ul className="space-y-3 text-white/80">
                        <li>• Built UIs and automated tests, improving efficiency 50%.</li>
                        <li>• Implemented responsive designs with development teams.</li>
                        <li>• Enhanced test coverage, reducing UI support tickets 30%.</li>
                      </ul>
                      <p className="mt-4 text-sm font-medium text-orange-400 bg-orange-400/10 px-3 py-1 rounded-lg inline-block">
                        UI/UX, Automated Testing, AWS
                      </p>
                    </div>
                  </section>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
