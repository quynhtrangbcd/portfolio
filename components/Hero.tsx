import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 transform translate-x-20 z-0 hidden lg:block"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 space-y-8">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold tracking-wider uppercase rounded-ba">
              Business Analyst
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark leading-[1.1] tracking-tight">
              Process <br/>
              <span className="text-secondary">Optimization</span> & <br/>
              <span className="text-accent">ERP Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-primary max-w-lg leading-relaxed pt-2">
              I analyze business processes and identify requirements to develop IT solutions that enhance operational efficiency and reduce costs.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-accent text-dark font-bold text-sm uppercase tracking-wider rounded-ba shadow-lg hover:shadow-xl hover:bg-accent-dark transition-all flex items-center justify-center gap-2"
            >
              Get in Touch <ArrowRight size={18} />
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 bg-white border border-gray-200 text-dark font-medium text-sm uppercase tracking-wider rounded-ba hover:border-dark hover:bg-gray-50 transition-all flex items-center justify-center"
            >
              View Projects
            </a>
          </div>

          <div className="pt-8 flex items-center gap-8 text-sm text-subtext">
            <div>
              <span className="block text-2xl font-bold text-dark">3+</span>
              <span>Years Experience</span>
            </div>
            <div className="h-10 w-px bg-gray-300"></div>
            <div>
              <span className="block text-2xl font-bold text-dark">6+</span>
              <span>Major Projects</span>
            </div>
            <div className="h-10 w-px bg-gray-300"></div>
            <div>
              <span className="block text-2xl font-bold text-dark">ERP</span>
              <span>Specialist</span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
           {/* Abstract Data Visual Representation */}
           <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 transform rotate-3">
                <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <div className="h-3 w-24 bg-gray-200 rounded-full"></div>
                        <div className="flex gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-400"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                            <div className="h-3 w-3 rounded-full bg-green-400"></div>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-4 gap-4 items-end pb-4">
                         {[40, 65, 45, 80].map((h, i) => (
                             <div key={i} className="w-full bg-input rounded-t-sm relative group overflow-hidden" style={{height: '100%'}}>
                                 <div 
                                    className="absolute bottom-0 w-full bg-accent transition-all duration-1000 ease-out" 
                                    style={{height: `${h}%`, opacity: 0.8 + (i * 0.05)}}
                                 ></div>
                             </div>
                         ))}
                    </div>
                    <div className="h-px w-full bg-gray-200 mb-4"></div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 text-xs">A</div>
                            <div className="flex-1 h-2 bg-gray-100 rounded-full">
                                <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                            </div>
                        </div>
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs">B</div>
                            <div className="flex-1 h-2 bg-gray-100 rounded-full">
                                <div className="w-1/2 h-full bg-accent rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-dark text-white p-6 rounded-lg shadow-xl max-w-[200px]">
                  <p className="text-xs font-mono text-gray-400 mb-1">Status</p>
                  <p className="text-lg font-bold">Optimization Complete</p>
                  <div className="mt-3 flex items-center gap-2 text-green-400 text-sm">
                      <span>▲ 24.5%</span>
                      <span className="text-gray-400">Efficiency</span>
                  </div>
              </div>
           </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary hover:text-accent transition-colors animate-bounce hidden md:block"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;