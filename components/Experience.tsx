import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Calendar, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Work Experience</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((item, index) => (
              <div key={item.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm mt-1.5 z-10"></div>

                {/* Date Mobile */}
                <div className="md:hidden pl-8 text-sm font-semibold text-accent mb-1 flex items-center gap-2">
                   <Calendar size={14} /> {item.period}
                </div>

                {/* Content */}
                <div className="flex-1 md:w-1/2 pl-8 md:pl-0">
                    <div className={`bg-white p-6 rounded-modal border border-gray-100 shadow-card hover:shadow-hover transition-all duration-300 relative ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                        {/* Connector Line (Desktop) */}
                        <div className={`hidden md:block absolute top-6 h-px w-12 bg-gray-200 ${index % 2 === 0 ? '-left-12' : '-right-12'}`}></div>

                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="text-lg font-bold text-dark">{item.role}</h3>
                                <div className="text-secondary font-medium flex items-center gap-2">
                                    <Briefcase size={14} /> {item.company}
                                </div>
                            </div>
                            <span className="hidden md:inline-block px-3 py-1 bg-gray-50 text-xs font-semibold text-secondary rounded-full border border-gray-100">
                                {item.period}
                            </span>
                        </div>
                        
                        <p className="text-secondary text-sm mb-4 leading-relaxed">
                            {item.description}
                        </p>

                        <div className="space-y-2">
                            {item.achievements.map((ach, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-subtext">
                                    <span className="text-accent mt-1.5">•</span>
                                    <span>{ach}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Empty space for the other side of timeline */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;