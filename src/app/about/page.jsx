import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react'; 
import { aboutData } from '../utils/aboutData';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 lg:mt-20">
      <div className="max-w-4xl mx-auto mt-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-white font-extrabold text-transparent bg-clip-text mb-6">
            {aboutData.title}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {aboutData.description}
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-gray-800 bg-opacity-75 rounded-xl shadow-lg p-8 transition-all hover:scale-[1.02] hover:shadow-2xl mt-20">
          <h2 className="text-3xl font-semibold text-white mb-8">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(aboutData.skills).map(([category, skills]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-medium text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-600 bg-opacity-80 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-all shadow-sm hover:shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-gray-800 rounded-xl shadow-2xl mb-12 p-8 transform transition-all hover:scale-105 hover:shadow-3xl ease-in-out appear mt-24">
          <h2 className="text-3xl font-semibold text-white mb-8">Projects</h2>
          <div className="space-y-8">
            {aboutData.projects.map((project, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6 hover:border-blue-400 transition-all">
                <h3 className="text-2xl font-medium text-white flex items-center gap-2">
                  <project.icon className="w-6 h-6 text-blue-400" /> {project.name}
                </h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  {project.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 mt-2 inline-block hover:text-blue-300 transition-colors"
                >
                  GitHub Repo
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-gray-800 rounded-xl shadow-2xl mb-12 p-8 transform transition-all hover:scale-105 hover:shadow-3xl ease-in-out appear mt-10">
          <h2 className="text-3xl font-semibold text-white mb-8">Experience</h2>
          <div className="space-y-8">
            {aboutData.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6 hover:border-blue-400 transition-all">
                <h3 className="text-2xl font-medium text-white">{exp.role}</h3>
                <p className="text-gray-400">{exp.company} | {exp.period}</p>
                <ul className="mt-2 space-y-1 text-gray-300">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>• {achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-gray-800 rounded-xl shadow-2xl mb-12 p-8 transform transition-all hover:scale-105 hover:shadow-3xl ease-in-out appear">
          <h2 className="text-3xl font-semibold text-white mb-8">Education</h2>
          <div className="space-y-8">
            {aboutData.education.map((edu, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6 hover:border-blue-400 transition-all">
                <h3 className="text-2xl font-medium text-white">{edu.degree}</h3>
                <p className="text-gray-400">{edu.university} | {edu.year}</p>
                <p className="text-gray-400">CGPA: {edu.CGPA}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="bg-gray-800 rounded-xl shadow-2xl mb-12 p-8 transform transition-all hover:scale-105 hover:shadow-3xl ease-in-out appear">
          <h2 className="text-3xl font-semibold text-white mb-8">Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.hobbies.map((hobby, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all"
              >
                <hobby.icon className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="font-medium text-white">{hobby.name}</h3>
                  <p className="text-gray-400">{hobby.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 transform transition-all hover:scale-105 hover:shadow-3xl ease-in-out">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Let's Connect</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href={`mailto:${aboutData.contact.email}`}
              className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </a>
            <a
              href={aboutData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
            <a
              href={aboutData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;