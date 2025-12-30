import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { ArrowUpRight, Target, Lightbulb, TrendingUp } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Key Projects</h2>
                <p className="text-secondary max-w-xl">
                    Selected case studies demonstrating end-to-end analysis and tangible business results.
                </p>
            </div>
            {/* <button className="px-6 py-3 border border-dark text-dark text-sm font-medium uppercase hover:bg-dark hover:text-white transition-all rounded-ba">
                View All Projects
            </button> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map((project) => (
                <div key={project.id} className="bg-white rounded-modal overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group flex flex-col h-full border border-gray-100">
                    <div className="p-8 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-ba">
                                {project.category}
                            </span>
                            {/* <ArrowUpRight className="text-gray-300 group-hover:text-accent transition-colors" size={24} /> */}
                        </div>

                        <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-accent transition-colors">
                            {project.title}
                        </h3>

                        <div className="space-y-6 flex-1">
                            <div>
                                <div className="flex items-center gap-2 text-xs font-bold text-subtext uppercase tracking-wide mb-2">
                                    <Target size={14} className="text-red-500" /> Problem
                                </div>
                                <p className="text-sm text-secondary leading-relaxed border-l-2 border-gray-100 pl-3">
                                    {project.problem}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 text-xs font-bold text-subtext uppercase tracking-wide mb-2">
                                    <Lightbulb size={14} className="text-yellow-500" /> Approach
                                </div>
                                <p className="text-sm text-secondary leading-relaxed border-l-2 border-gray-100 pl-3">
                                    {project.solution}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 text-xs font-bold text-subtext uppercase tracking-wide mb-2">
                                    <TrendingUp size={14} className="text-green-500" /> Outcome
                                </div>
                                <p className="text-sm text-secondary font-medium leading-relaxed border-l-2 border-green-100 pl-3 bg-green-50/30 py-2 rounded-r-ba">
                                    {project.outcome}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-medium text-gray-500 bg-white border border-gray-200 px-2 py-1 rounded-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;