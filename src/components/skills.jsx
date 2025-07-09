import React, { useState } from 'react';
import { 
  SiNodedotjs, 
    SiJquery, 
    SiMongodb, 
    SiExpress,
    SiMysql, 
    SiTensorflow, 
    SiPandas,
    SiPostman,
    SiDocker,
    SiFigma,
    SiVisualstudiocode ,}from 'react-icons/si';
import { BiBrain } from 'react-icons/bi';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skills = [
    {
      icon: <ion-icon name="logo-html5" />,
      title: "HTML",
      text: "Semantic markup, accessibility, responsive design",
      category: "Frontend"
    },
    {
      icon: <ion-icon name="logo-css3" />,
      title: "CSS",
      text: "Modern layouts, animations, responsive design",
      category: "Frontend"
    },
    {
      icon: <ion-icon name="logo-javascript" />,
      title: "JAVASCRIPT",
      text: "ES6+, DOM manipulation, async programming",
      category: "Frontend"
    },
    {
      icon: <ion-icon name="logo-react" />,
      title: "REACT",
      text: "Component architecture, hooks, state management",
      category: "Frontend"
    },
    {
      icon: <ion-icon name="logo-html5" />,
      title: "TAILWINDCSS",
      text: "Utility-first CSS, responsive components",
      category: "Frontend"
    },
    {
      icon: <SiJquery className="w-8 h-8" />,
      title: "JQUERY",
      text: "DOM manipulation, event handling, animations",
      category: "Frontend"
    },
    
    {
      icon: <SiMysql className="w-8 h-8" />,
      title: "MySQL",
      text: "Database design, optimization, queries",
      category: "Backend"
    },
    {
      icon: <SiMongodb className="w-8 h-8" />,
      title: "MongoDB",
      text: "Database design, optimization, queries",
      category: "Backend"
    },
    {
      icon: <SiNodedotjs className="w-8 h-8" />,
      title: "Node.js",
      text: "Full-stack development, REST APIs",
      category: "Backend"
    },
    {
      icon: <SiExpress className="w-8 h-8" />,
      title: "Express.js",
      text: "Backend framework, middleware, API development",
      category: "Backend"
    },   
    {
      icon: <BiBrain className="w-8 h-8" />,
      title: "MACHINE LEARNING",
      text: "Predictive modeling, classification, regression analysis",
      category: "AI/ML"
    },
    {
      icon: <SiPandas className="w-8 h-8" />,
      title: "DATA FUNDAMENTALS",
      text: "Data preprocessing, statistical analysis, visualization with Python, Pandas & NumPy",
      category: "AI/ML"
    },
    {
      icon: <SiTensorflow className="w-8 h-8" />,
      title: "TENSORFLOW",
      text: "Deep learning, neural networks, model deployment",
      category: "AI/ML"
    },
    {
      icon: <ion-icon name="logo-github" />,
      title: "GIT",
      text: "Version control, collaboration, CI/CD",
      category: "Tools"
    },
    {
        icon: <SiDocker className="w-8 h-8" />,
        title: "DOCKER",
        text: "Containerization, deployment, environment management",
        category: "Tools"
      },
      {
        icon: <SiPostman className="w-8 h-8" />,
        title: "POSTMAN",
        text: "API testing, documentation, request automation",
        category: "Tools"
      },
      {
        icon: <SiVisualstudiocode className="w-8 h-8" />,
        title: "VS CODE",
        text: "Advanced code editing, debugging, extensions",
        category: "Tools"
      },
      {
        icon: <SiFigma className="w-8 h-8" />,
        title: "FIGMA",
        text: "UI/UX design, prototyping, design collaboration",
        category: "Tools"
      }
  ];

  const categories = ["Frontend", "Backend", "AI/ML", "Tools"];

  return (
    <section id="skills" className="py-16 font-custom">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-title_color text-center mb-12">
          Skills
        </h2>
        
        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-12  px-4">
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
                  <div className="text-4xl text-yelow mb-4 transform transition-transform duration-300 hover:scale-110">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-title_color mb-2 text-center">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-title_color opacity-60 text-center ">
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
