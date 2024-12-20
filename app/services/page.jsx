"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "System Maintenance and Troubleshooting",
    description:
      "Identifying, analyzing, and resolving technical issues with hardware, software, and networks to ensure smooth operations.",
    href: "",
  },
  {
    num: "02",
    title: "Network Setup and Configuration",
    description:
      "Designing, installing, and configuring networks for small to medium-sized businesses, including Wi-Fi, servers, and network security.",
    href: "",
  },
  {
    num: "03",
    title: "Custom Website Design and Development",
    description:
      "Building modern, responsive websites tailored to client needs using the latest technologies like HTML, CSS, JavaScript, and PHP.",
    href: "",
  },
  {
    num: "04",
    title: "Website Maintenance",
    description:
      "Offering regular maintenance services to ensure the website runs optimally, including system updates, bug fixes, and performance optimization.",
    href: "",
  },
  {
    num: "05",
    title: "E-Commerce Development",
    description:
      "Creating online stores with complete features such as payment systems, product catalogs, and inventory management.",
    href: "",
  },
  {
    num: "06",
    title: "IT Consultation",
    description:
      "Providing technical consultations to help businesses choose the right technology solutions for their needs.",
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
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 
                    flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Title */}
                <h2 className="text-[35px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* Description */}
                <p className="text-white/60">{service.description}</p>
                {/* Border */}
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
