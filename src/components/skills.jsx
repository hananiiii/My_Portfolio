import React, { useState } from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiJquery,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiDjango,
  SiTensorflow, SiPandas, SiPostman, SiDocker, SiFigma,
  SiVisualstudiocode, SiGit, SiTypescript, SiPython,   SiApachekafka, SiLatex
} from 'react-icons/si';
import { Code, Server, Brain, BookOpen, MessageSquare, UserCheck, Clock, Users } from 'lucide-react';
import { MdOutlineManageAccounts } from 'react-icons/md';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skills = [
    { icon: <SiHtml5 className="w-8 h-8" />, title: "HTML", text: "Semantic markup, accessibility, responsive design", category: "Frontend" },
    { icon: <SiCss3 className="w-8 h-8" />, title: "CSS", text: "Modern layouts, animations, responsive design", category: "Frontend" },
    { icon: <SiJavascript className="w-8 h-8" />, title: "JavaScript", text: "ES6+, DOM manipulation, async programming", category: "Frontend" },
    { icon: <SiTypescript className="w-8 h-8" />, title: "TypeScript", text: "Type-safe JavaScript, scalable applications", category: "Frontend" },
    { icon: <SiReact className="w-8 h-8" />, title: "React", text: "Component architecture, hooks, state management", category: "Frontend" },
    { icon: <SiReact className="w-8 h-8" />, title: "Next.js", text: "Server-side rendering, static site generation", category: "Frontend" },
    { icon: <SiTailwindcss className="w-8 h-8" />, title: "Tailwind CSS", text: "Utility-first CSS, responsive components", category: "Frontend" },
    { icon: <SiJquery className="w-8 h-8" />, title: "jQuery", text: "DOM manipulation, event handling, animations", category: "Frontend" },
    { icon: <SiNodedotjs className="w-8 h-8" />, title: "Node.js", text: "Full-stack development, REST APIs", category: "Backend" },
    { icon: <SiExpress className="w-8 h-8" />, title: "Express.js", text: "Backend framework, middleware, API development", category: "Backend" },
    { icon: <SiDjango className="w-8 h-8" />, title: "Django", text: "Rapid development, secure web applications", category: "Backend" },
    { icon: <Code className="w-8 h-8" />, title: "Spring Boot", text: "Microservices, RESTful APIs, enterprise apps", category: "Backend" },
    { icon: <SiMongodb className="w-8 h-8" />, title: "MongoDB", text: "NoSQL database, flexible schemas", category: "Backend" },
    { icon: <SiMysql className="w-8 h-8" />, title: "MySQL", text: "Relational database, optimized queries", category: "Backend" },
    { icon: <SiPostgresql className="w-8 h-8" />, title: "PostgreSQL", text: "Advanced SQL, data integrity", category: "Backend" },
    { icon: <Server className="w-8 h-8" />, title: "Microservices Design", text: "Service decomposition, scalability", category: "Microservices" },
    { icon: <Server className="w-8 h-8" />, title: "Eureka", text: "Service discovery, load balancing", category: "Microservices" },
    { icon: <SiApachekafka className="w-8 h-8" />, title: "Kafka", text: "Event-driven systems, async communication", category: "Microservices" },
    { icon: <Server className="w-8 h-8" />, title: "CQRS & Event Sourcing", text: "Scalable event-driven architectures", category: "Microservices" },
    { icon: <SiPython className="w-8 h-8" />, title: "Python", text: "Versatile programming, data analysis, automation", category: "Languages" },
    { icon: <SiJavascript className="w-8 h-8" />, title: "Java", text: "Object-oriented, enterprise applications", category: "Languages" },
    { icon: <SiJavascript className="w-8 h-8" />, title: "JavaScript", text: "Dynamic web development, scripting", category: "Languages" },
    { icon: <Brain className="w-8 h-8" />, title: "Machine Learning", text: "Predictive modeling, classification", category: "AI/ML" },
    { icon: <SiPandas className="w-8 h-8" />, title: "Data Fundamentals", text: "Data preprocessing, visualization", category: "AI/ML" },
    { icon: <SiTensorflow className="w-8 h-8" />, title: "TensorFlow", text: "Deep learning, neural networks", category: "AI/ML" },
    { icon: <SiGit className="w-8 h-8" />, title: "Git", text: "Version control, collaboration, CI/CD", category: "Tools" },
    { icon: <SiDocker className="w-8 h-8" />, title: "Docker", text: "Containerization, deployment", category: "Tools" },
    { icon: <SiPostman className="w-8 h-8" />, title: "Postman", text: "API testing, documentation", category: "Tools" },
    { icon: <SiVisualstudiocode className="w-8 h-8" />, title: "VS Code", text: "Code editing, debugging", category: "Tools" },
    { icon: <SiFigma className="w-8 h-8" />, title: "Figma", text: "UI/UX design, prototyping", category: "Tools" },
    { icon: <SiLatex className="w-8 h-8" />, title: "LaTeX", text: "Document preparation, technical writing", category: "Tools" },
    { icon: <MessageSquare className="w-8 h-8" />, title: "Communication", text: "Effective collaboration, clear articulation", category: "Soft Skills" },
    { icon: <MdOutlineManageAccounts className="w-8 h-8" />, title: "Leadership", text: "Team management, project direction", category: "Soft Skills" },
    { icon: <UserCheck className="w-8 h-8" />, title: "Empathy", text: "User-centric design, team support", category: "Soft Skills" },
    { icon: <Clock className="w-8 h-8" />, title: "Time Management", text: "Prioritization, deadline adherence", category: "Soft Skills" },
    { icon: <Users className="w-8 h-8" />, title: "Teamwork", text: "Collaborative problem-solving", category: "Soft Skills" }
  ];

  const categories = ["Frontend", "Backend", "Microservices", "Languages", "AI/ML", "Tools", "Soft Skills"];

  return (
    <section id="skills" className="py-12 font-custom">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-title_color text-center mb-12">
          Skills
        </h2>
        
        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-12 px-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105
                ${activeCategory === category 
                  ? 'bg-text_color text-white shadow-lg' 
                  : 'bg-gray-100 text-title_color hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills
            .filter((skill) => skill.category === activeCategory)
            .map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex flex-col items-center">
                  <div className="text-4xl text-yelow mb-4 transform transition-transform duration-200 hover:scale-110">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-title_color mb-2 text-center">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-title_color opacity-60 text-center leading-5">
                    {skill.text}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;