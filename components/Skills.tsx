import React from 'react';
import { SKILLS_DATA } from '../constants';
import { Database, Users, GitBranch, Layout, FileSpreadsheet, CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch(category) {
      case 'Technical': return <Database size={20} />;
      case 'Analysis': return <GitBranch size={20} />;
      case 'Soft Skills': return <Users size={20} />;
      case 'Tools': return <Layout size={20} />;
      default: return <CheckCircle size={20} />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Core Competencies</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            A balanced mix of technical proficiency and business acumen to deliver comprehensive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Analysis', 'Technical', 'Soft Skills', 'Tools'].map((category) => {
             const categorySkills = SKILLS_DATA.filter(s => s.category === category);
             return (
               <div key={category} className="bg-white p-6 rounded-modal shadow-card hover:shadow-hover transition-all duration-300">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-input rounded-full text-accent text-dark">
                     {getIcon(category)}
                   </div>
                   <h3 className="text-lg font-bold text-dark">{category}</h3>
                 </div>
                 
                 <div className="space-y-3">
                   {categorySkills.map((skill) => (
                     <div key={skill.name} className="flex items-start gap-2">
                       <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                       <span className="text-sm font-medium text-secondary leading-relaxed">{skill.name}</span>
                     </div>
                   ))}
                 </div>
               </div>
             );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Tech Stack Logos (Text representation for code simplicity) */}
            {['Jira', 'Confluence', 'Bizagi Modeler', 'Power BI', 'Visio', 'SQL Server'].map(tool => (
                <div key={tool} className="text-xl font-bold text-gray-400 hover:text-dark cursor-default text-center">{tool}</div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;