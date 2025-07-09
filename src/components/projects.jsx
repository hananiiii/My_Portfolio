import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Placeholder images (replace with actual project screenshots)
import KhidmaTicImg from '../assets/KhidmaTicImg.png';
import VideoConfImg from '../assets/VideoConfIm.png';
import SocialServicesImg from '../assets/esii.png';

const Projects = () => {
  const projects = [
    {
      title: "KhidmaTic Startup Project",
      pic: KhidmaTicImg,
      text: "A microservices-based platform and Mobile Application connecting users with qualified home maintenance professionals. Features include user authentication, service booking, and payment processing, built with a scalable architecture.",
      github: "https://github.com/KhidmaTic",
      report: "https://drive.google.com/file/d/1QRl-qiOAskQk5LEbqgcgXPttuWQlxx3E/view",
      tech: [ "Next js","React Native","Django","Laravel","Node js","Express js", "Spring Boot", "Kafka", "MongoDB","MySQL", "Docker", "Eureka"]
    },
    {
      title: "Video Conferencing App",
      pic: VideoConfImg,
      text: "A real-time video conferencing application with chat, screen sharing, and user authentication. Designed for seamless communication across devices with a responsive UI.",
      github: "https://github.com/TheCometProject",
      report: "https://drive.google.com/file/d/1JdjOSaut-caWf97VWaPLymhR8dp5y9-6/view?usp=sharing",
      tech: ["React", "Tailwind CSS" ,"Node.js", "Express js", "Socket.IO", "Mongo db"]
    },
    {
      title: "Gestion des Œuvres Sociales",
      pic: SocialServicesImg,
      text: "A management system for social services, featuring a user-friendly interface for managing resources and services. Integrated with a robust backend for efficient data handling.",
      github: "https://github.com/saadiahmed-hash/frontendProject_1SC",
      report: "https://drive.google.com/file/d/1yd0j4YvLCQL496dt07qH3n6AeEcTHSqy/view",
      tech: ["React",  "Tailwind CSS","Laraval", "MySQL"]
    }
  ];

  return (
    <section id="projects" className="py-12 font-custom bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-title_color text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.pic}
                  alt={project.title}
                  className="w-full h-full object-center  transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-title_color">
                  {project.title}
                </h3>
                <p className="text-sm text-title_color/70 leading-relaxed">
                  {project.text}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm font-medium text-text_color bg-text_color/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-title_color hover:text-yelow transition-colors"
                    aria-label="View Source Code"
                  >
                    <Github size={24} />
                  </a>
                  
                  <a
                    href={project.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-title_color hover:text-yelow transition-colors"
                    aria-label="View Project Report"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;