import React from "react";
import { FaLaptopCode, FaTrophy, FaProjectDiagram, FaCertificate } from "react-icons/fa";

const experiences = [
  {
    category: "Work Experience",
    icon: <FaLaptopCode />,
    title: "Developer at Magdev",
    date: "Present",
    description: "Building and maintaining web applications at Magdev (magdev.tech), focusing on modern frontend and backend technologies.",
  },
  {
    category: "Competitions & Achievements",
    icon: <FaTrophy />,
    title: "1st Place - National Hackathon (Algérie Post)",
    date: "AI & Computer Vision Track",
    description: "Developed an innovative AI-based solution to enhance postal services using Computer Vision and AI techniques.",
  },
  {
    category: "Competitions & Achievements",
    icon: <FaTrophy />,
    title: "4th Place - Problem-Solving Event",
    date: "Competitive Programming",
    description: "Achieved 4th place in a national problem-solving contest, showcasing algorithmic and data structure expertise.",
  },
  {
    category: "Projects",
    icon: <FaProjectDiagram />,
    title: "Video Conferencing App",
    date: "CP Project",
    description: "Developed a real-time video conferencing application with chat, screen sharing, and user authentication features.",
  },
  {
    category: "Projects",
    icon: <FaProjectDiagram />,
    title: "Gestion des Œuvres Sociales",
    date: "CS Project",
    description: "Designed a management system for social services, focusing on user-friendly UI and backend integration.",
  },
  {
    category: "Certifications",
    icon: <FaCertificate />,
    title: "Machine Learning & Data Fundamentals",
    date: "Certified",
    description: "Completed courses in Machine Learning and Data Fundamentals, strengthening AI and data analysis expertise.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="lg:mt-44 mt-32 font-custom">
      <h1 className="text-4xl flex justify-center items-center font-semibold text-title_color">
        Experience
      </h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-12 mx-12 my-20">
        {experiences.map((exp, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-center gap-4">
              <span className="text-4xl text-yelow">{exp.icon}</span>
              <div>
                <h2 className="text-xl font-semibold text-title_color">{exp.title}</h2>
                <p className="text-sm text-gray-500">{exp.date}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-title_color opacity-70">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
