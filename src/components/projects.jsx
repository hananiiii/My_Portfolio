import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Commerce from "../assets/commerce8.png";
import Res from "../assets/res.png";
import Home from "../assets/home1.png";
const Projects = () => {
    const projects = [
        {
            title: "House Renting Website",
            pic: Home,
            text: "A modern house renting platform built with React and Tailwind CSS. Features include property listings, search functionality, and responsive design for optimal viewing across all devices.",
            link: "https://prismatic-rolypoly-70bc7c.netlify.app/",
            tech: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
            github: "#" 
        },
        {
            title: "E-commerce Website",
            pic: Commerce,
            text: "Full-featured e-commerce platform with product catalog, shopping cart, and checkout process. Implements user authentication and responsive design principles.",
            link: "https://capable-selkie-381670.netlify.app/",
            tech: ["React", "Tailwindcss", "FakeApi" ],
            github: "https://github.com/hananiiii/clothesstore" 
        },
        {
            title: "Restaurant Website",
            pic: Res,
            text: "Dynamic restaurant website featuring menu management, table reservations, and interactive UI. Optimized for both desktop and mobile viewing.",
            link: "https://majestic-faloodeh-95de1e.netlify.app/",
            tech: ["React", "Tailwind CSS","Responsive Design"],
            github: "https://github.com/hananiiii/restaurant_website" 
        }
    ];

    return (
        <section id="projects" className="py-20 font-custom bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-title_color text-center mb-16">
                    Featured Projects
                </h2>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className={`flex flex-col lg:flex-row gap-8 items-center ${
                                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}
                        >
                            {/* Image Container */}
                            <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-xl">
                                <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-200">
                                    <img 
                                        src={project.pic} 
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="w-full lg:w-2/5 space-y-4">
                                <h3 className="text-2xl font-bold text-title_color">
                                    {project.title}
                                </h3>

                                <p className="text-title_color/70 leading-relaxed">
                                    {project.text}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 py-4">
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
                                        className="p-2 text-title_color hover:text-text_color transition-colors"
                                        aria-label="View Source Code"
                                    >
                                        <FiGithub size={24} />
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-title_color hover:text-text_color transition-colors"
                                        aria-label="View Live Site"
                                    >
                                        <FiExternalLink size={24} />
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