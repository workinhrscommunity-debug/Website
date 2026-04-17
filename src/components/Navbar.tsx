import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass h-20 px-4 sm:px-10 lg:px-[60px] flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="flex-shrink-0">
          <Logo />
        </Link>
      </div>
      
      <div className="hidden md:block">
        <div className="flex items-baseline space-x-[32px]">
          <Link to="/how-it-works" className="nav-link">How it Works</Link>
          <Link to="/projects" className="nav-link">Browse Projects</Link>
          <Link to="/dashboard/client" className="nav-link">For Businesses</Link>
          <Link to="/dashboard/freelancer" className="nav-link">For Freelancers</Link>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-[20px]">
        <button className="text-text-dim text-sm font-medium hover:text-brand-orange transition-colors">Login</button>
        <Link to="/post-project" className="btn-cta-nav">
          Post a Project
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-text-dim hover:text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed top-0 right-0 h-screen w-[280px] bg-white z-50 md:hidden shadow-2xl flex flex-col p-6"
            >
              <div className="flex justify-between items-center mb-10">
                <Logo />
                <button onClick={() => setIsOpen(false)} className="text-text-dim">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                <Link to="/how-it-works" onClick={() => setIsOpen(false)} className="nav-link text-lg font-bold">How it Works</Link>
                <Link to="/projects" onClick={() => setIsOpen(false)} className="nav-link text-lg font-bold">Browse Projects</Link>
                <Link to="/dashboard/client" onClick={() => setIsOpen(false)} className="nav-link text-lg font-bold">For Businesses</Link>
                <Link to="/dashboard/freelancer" onClick={() => setIsOpen(false)} className="nav-link text-lg font-bold">For Freelancers</Link>
                
                <div className="pt-8 border-t border-black/5 flex flex-col gap-4">
                  <button onClick={() => setIsOpen(false)} className="w-full py-4 text-text-dim font-bold text-center border border-slate-200 rounded-xl">Login</button>
                  <Link to="/post-project" onClick={() => setIsOpen(false)} className="w-full btn-cta-nav text-center py-4 rounded-xl">
                    Post a Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
