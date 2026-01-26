import React from 'react';
import { Briefcase, MapPin, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">About Me</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Profile Card */}
          <div className="col-span-1">
            <div className="bg-white rounded-modal border border-gray-100 shadow-card p-8 text-center sticky top-28">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden border-4 border-white shadow-md">
                {/* Using a neutral avatar placeholder since no photo is available in the extracted text */}
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">
                  <span className="text-4xl">QT</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark">Nguyễn Thị Quỳnh Trang</h3>
              <p className="text-accent font-medium mb-4">Business Analyst</p>

              <div className="space-y-3 text-left border-t border-gray-100 pt-6">
                <div className="flex items-center gap-3 text-secondary text-sm">
                  <MapPin size={16} className="text-primary" />
                  <span>Nam Tu Liem, Hanoi</span>
                </div>
                <div className="flex items-center gap-3 text-secondary text-sm">
                  <Briefcase size={16} className="text-primary" />
                  <span>4+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3 text-secondary text-sm">
                  <BookOpen size={16} className="text-primary" />
                  <span>Hanoi University (IT)</span>
                </div>
                <div className="flex items-center gap-3 text-secondary text-sm">
                  <Award size={16} className="text-primary" />
                  <span>IELTS Eq. 6.0</span>
                </div>
              </div>

              <div className="mt-8">
                <a href="#contact" className="block w-full py-3 bg-dark text-white text-sm font-medium rounded-ba hover:bg-gray-800 transition-colors">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-dark">Professional Summary</h3>
            <p className="text-secondary leading-relaxed text-lg">
              As a Business Analyst with over four years of in-depth experience in the ERP field, I have participated in multiple projects involving the implementation and optimization of ERP systems for businesses across various industries, including spa, technology, and seafood processing.
            </p>
            <p className="text-secondary leading-relaxed">
              I excel in gathering, analyzing, and identifying business requirements to develop suitable IT solutions that enhance operational efficiency and reduce costs. I have hands-on experience working with Odoo ERP software, optimizing processes related to sales and purchase management, finance, inventory, and production. I have successfully collaborated with stakeholders to develop requirement documents, design business processes, and support end-user training.
            </p>
            <p className="text-secondary leading-relaxed">
              My strong communication and teamwork skills enable me to connect effectively with different departments and present solutions clearly, ensuring alignment and support for system implementation. Passionate about process improvement and technology application, I am always seeking opportunities to contribute to the sustainable growth of an organization.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-input rounded-ba border-l-4 border-accent">
                <h4 className="font-bold text-dark mb-2">Problem Solving</h4>
                <p className="text-sm text-secondary">Analyzing business processes to identify areas for improvement and evaluating multiple solutions.</p>
              </div>
              <div className="p-6 bg-input rounded-ba border-l-4 border-dark">
                <h4 className="font-bold text-dark mb-2">Documentation</h4>
                <p className="text-sm text-secondary">Writing clear Business Requirement Documents (BRD) and Functional Specifications.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-dark pt-4">Industry Experience</h3>
            <div className="flex flex-wrap gap-3">
              {['ERP Implementation', 'Seafood Processing', 'Automotive', 'Technology', 'Spa & Beauty', 'Banking/Finance', 'AI/Computer Vision'].map((industry) => (
                <span key={industry} className="px-4 py-2 bg-white border border-gray-200 text-secondary text-sm font-medium rounded-full shadow-sm">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;