import React from 'react';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-dark text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's work together.</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
              I'm always seeking opportunities to contribute to the sustainable growth of organizations through process improvement and technology application.
            </p>
            
            <div className="space-y-6">
              <a 
                href={`mailto:${SOCIAL_LINKS.email}`} 
                className="flex items-center gap-4 text-xl hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                {SOCIAL_LINKS.email}
              </a>
              <div className="flex items-center gap-4 text-xl text-gray-300">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                   <MapPin size={20} />
                </div>
                Nam Tu Liem District, Hanoi
              </div>
              <a 
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer" 
                className="flex items-center gap-4 text-xl hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <Linkedin size={20} />
                </div>
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-modal border border-white/10">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/10 border border-white/20 rounded-ba px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/10 border border-white/20 rounded-ba px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-500"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-ba px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder-gray-500"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent-dark text-dark font-bold py-4 rounded-ba transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Nguyễn Thị Quỳnh Trang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;