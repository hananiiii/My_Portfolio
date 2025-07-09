import React, { useState } from 'react';
import { Code, Server, Brain, BookOpen, ArrowRight } from 'lucide-react';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Full-Stack Development",
      shortDesc: "Building end-to-end web solutions",
      longDesc: "Crafting scalable and responsive web applications using modern frontend and backend technologies. From dynamic user interfaces with React and Next.js to robust APIs with Node.js and Spring Boot, I deliver seamless experiences.",
      technologies: ["React", "Next.js","Tailwindcss", "Node.js","Express js","Django", "Spring Boot", "MongoDB", "MySQL","PostgreSQL" ]
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Microservices Architecture",
      shortDesc: "Designing scalable, event-driven systems",
      longDesc: "Architecting modular platforms with microservices using Eureka, Kafka, and Axon Framework. Implementing CQRS, Event Sourcing, and circuit breakers for reliable, high-performance solutions.",
      technologies: ["Spring Boot", "Kafka", "Eureka","Gateway","CQRS", "Axon Framework", "REST APIs"]
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI/ML Solutions",
      shortDesc: "Leveraging data for intelligent applications",
      longDesc: "Developing predictive models and intelligent systems using TensorFlow and Python. Specializing in data preprocessing, neural networks, and deploying AI-driven features for enhanced functionality.",
      technologies: ["Machine Learning ","TensorFlow", "Python", "Pandas", "NumPy"]
    },
   
  ];

  return (
    <section id="services" className="lg:mt-44 mt-32 font-custom mb-32">
      <h1 className="text-4xl flex justify-center items-center font-semibold text-title_color mb-20">
        Services
      </h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 lg:mx-24 mx-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${
              activeIndex === index ? 'shadow-lg' : 'shadow-sm'
            }`}
          >
            <div
              className="p-6 cursor-pointer h-full"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-lg bg-white text-xl text-yelow mb-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-title_color mb-2">
                    {service.title}
                  </h3>
                  <p className="text-title_color opacity-40 text-md mb-4">
                    {service.shortDesc}
                  </p>
                </div>
                <ArrowRight
                  className={`w-5 h-5 text-yelow transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-90' : ''
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                }`}
              >
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-title_color opacity-40 text-sm mb-4 text-center">
                    {service.longDesc}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm rounded-full bg-white border border-yelow text-yelow font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;