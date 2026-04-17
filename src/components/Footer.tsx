import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-black/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Logo className="mb-6" />
            <p className="text-text-dim text-sm max-w-xs">
              Empowering the next generation of professionals through verified work and real-world experience.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#0F172A] font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-text-dim">
              <li><Link to="/" className="hover:text-brand-orange transition-colors">About</Link></li>
              <li><Link to="/" className="hover:text-brand-orange transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#0F172A] font-bold mb-4 text-sm uppercase tracking-wider">Marketplace</h4>
            <ul className="space-y-2 text-sm text-text-dim">
              <li><Link to="/projects" className="hover:text-brand-orange transition-colors">Browse Projects</Link></li>
              <li><Link to="/post-project" className="hover:text-brand-orange transition-colors">Post a Project</Link></li>
              <li><Link to="/how-it-works" className="hover:text-brand-orange transition-colors">How it Works</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#0F172A] font-bold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-text-dim">
              <li><Link to="/" className="hover:text-brand-orange transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-brand-orange transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[#0F172A] font-bold mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-text-dim hover:text-brand-blue transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-text-dim hover:text-brand-orange transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-text-dim hover:text-brand-orange transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-dim text-xs">
            © 2026 WorkinHrs. All rights reserved. Built for early professionals.
          </p>
          <div className="flex space-x-6 text-text-dim text-xs">
            <span>English (US)</span>
            <span>Marketplace</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
