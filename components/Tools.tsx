import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Tools: React.FC = () => {
  const education = [
    { name: "Bachelor's Degree", org: "Hanoi University - Faculty of Information Technology", date: "09/2018 - 06/2023" },
    { name: "Hanu Test (English)", org: "Equivalent to IELTS 6.0", date: "2023" },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education & Certs */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-8 flex items-center gap-3">
              <Award className="text-accent" /> Education & Certifications
            </h2>
            <div className="space-y-4">
              {education.map((cert) => (
                <div key={cert.name} className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-modal shadow-sm hover:border-accent transition-colors">
                  <div>
                    <h3 className="font-bold text-dark text-sm md:text-base">{cert.name}</h3>
                    <p className="text-sm text-secondary">{cert.org}</p>
                  </div>
                  <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded text-subtext">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Toolset List */}
          <div>
             <h2 className="text-2xl font-bold text-dark mb-8">Technical & Functional Skills</h2>
             <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Odoo ERP", "Bizagi Modeler", "Microsoft Ecosystem", 
                  "SQL (Basic)", "Data Grid", "AI Application",
                  "Requirement Documentation", "User Acceptance Testing (UAT)", 
                  "Workflow Automation", "CRM Systems",
                  "Training & Support", "Inventory Management", 
                  "Process Optimization", "Functional Specs"
                ].map((tool) => (
                  <div key={tool} className="flex items-center gap-2 text-secondary">
                     <CheckCircle size={16} className="text-green-500 shrink-0" />
                     <span className="text-sm">{tool}</span>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tools;