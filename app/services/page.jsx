"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Full-Stack .NET Web Development",
    description:
    "Building production-grade web applications using C#,\r\n.NET 8, ASP.NET Core,"
    +"and SQL Server. I design scalable backends with clean architecture, RESTful "
    +"APIs, and modern responsive front ends using React. Perfect for SaaS products, "
    +"enterprise dashboards, and mission-critical systems serving thousands of users.",
    href: "www.resumatrix.co",
  },
  {
    num: "02",
    title: "Cloud Modernization & Azure Migration",
    description:
      "Migrate your monolithic or on-premise .NET applications to Azure cloud infrastructure. Refactor legacy codebases for performance, security, and "
      +"maintainability while keeping systems live. Includes deployment to Azure "+"App Service, SQL optimization, and CI/CD pipeline setup for continuous "
      +"reliability and rapid iteration.",
    href: "",
  },
  {
    num: "03",
    title: "API Design & Third-Party Integrations",
    description:
      "Design and build secure REST APIs (OAuth2/JWT) for internal and external "
      +"consumers. Integrate payment gateways, HR platforms, communication tools, "
      +"and other third-party services. I handle background job processing, queuing "
      +"systems, and error resilience so your integrations work reliably 24/7.",
    href: "",
  },
  {
    num: "04",
    title: "Technical MVP & Startup Development",
    description:
      "Turn your SaaS idea into a working MVP in weeks, not months. Using AI-assisted coding (Cursor, Copilot), I rapidly prototype full-stack applications from concept to deployment. You get clean, documented code, production-ready infrastructure, and a foundation that scales as your business grows.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
