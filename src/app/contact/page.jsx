import React from "react";
import { aboutData } from "../utils/aboutData"; 

const Contact = () => {
  return (
    <section className="py-16 bg-gray-900 mt-8 lg:mt-20">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-8">Contact Me</h2>
        <p className="text-lg text-gray-400 mb-12">
          Feel free to reach out to me for any inquiries or collaborations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Email Section */}
          <div className="bg-gray-300 hover:bg-white shadow-lg rounded-lg p-6 text-gray-800 transform transition-colors duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Email</h3>
            <p className="text-lg mb-4">{aboutData.contact.email}</p>
            <a
              href={`mailto:${aboutData.contact.email}`}
              className="text-indigo-600 font-semibold hover:underline"
            >
              Send an Email
            </a>
          </div>

          {/* LinkedIn Section */}
          <div className="bg-gray-300 hover:bg-white shadow-lg rounded-lg p-6 text-gray-800 transform transition-colors duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">LinkedIn</h3>
            <p className="text-lg mb-4">
              Connect with me on LinkedIn to explore professional collaborations.
            </p>
            <a
              href={aboutData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Visit my LinkedIn
            </a>
          </div>

          {/* GitHub Section */}
          <div className="bg-gray-300 hover:bg-white shadow-lg rounded-lg p-6 text-gray-800 transform transition-colors duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">GitHub</h3>
            <p className="text-lg mb-4">
              Explore my repositories and open-source projects on GitHub.
            </p>
            <a
              href={aboutData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Visit my GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
