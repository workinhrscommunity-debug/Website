import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, SlidersHorizontal, MapPin, 
  Clock, DollarSign, Filter, ChevronRight,
  Star, Briefcase, LayoutGrid, List as ListIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_PROJECTS, CATEGORIES } from '../constants';

export const BrowseProjects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = MOCK_PROJECTS.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-12">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-3">
            Browse Opportunities
          </h1>
          <p className="text-text-dim">
            Discover {MOCK_PROJECTS.length}+ verified projects across {CATEGORIES.length} categories.
            Start building your career today.
          </p>
        </div>
        <Link 
          to="/post-project"
          className="accent-gradient text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shrink-0"
        >
          <Briefcase size={20} /> Post Your Project
        </Link>
      </div>

      {/* Search & Filter Bar */}
      <div className="glass-card p-4 md:p-5 mb-8 md:mb-12 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
        <div className="flex-grow relative group w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim group-focus-within:text-brand-blue transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search projects, skills, or companies..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-brand-blue transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <select 
            className="w-full sm:w-auto bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-all text-sm font-medium appearance-none min-w-[160px]"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-[#0F172A] hover:bg-slate-50 transition-colors shrink-0">
            <Filter size={18} /> Filters
          </button>
        </div>

        <div className="hidden md:flex gap-1 p-1 bg-slate-100 rounded-xl">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-brand-blue' : 'text-text-dim'}`}
          >
            <LayoutGrid size={20} />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-brand-blue' : 'text-text-dim'}`}
          >
            <ListIcon size={20} />
          </button>
        </div>
      </div>

      {/* Results Section */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              key={project.id}
              className="glass-card p-6 flex flex-col h-full hover:shadow-lg transition-all border-slate-100 hover:border-brand-blue/20"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest px-2 py-1 bg-brand-blue/5 rounded">
                  {project.category}
                </span>
                <span className="text-brand-orange font-bold text-lg">{project.budget}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-[#0F172A] flex-grow leading-tight">
                {project.title}
              </h3>
              
              <p className="text-text-dim text-sm mb-6 line-clamp-2">
                {project.description}
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {project.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-100 text-text-dim text-[10px] font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200" />
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-[#0F172A] truncate">{project.clientName}</p>
                      <div className="flex items-center gap-1 text-brand-orange text-[9px] font-bold">
                        <Star size={8} fill="currentColor" /> {project.clientRating}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-text-dim text-[10px]">
                    <Clock size={12} /> {project.deadline}
                  </div>
                </div>
                
                <Link 
                  to={`/project/${project.id}`}
                  className="w-full py-3 bg-slate-50 border border-slate-200 text-[#0F172A] rounded-xl font-bold text-sm text-center hover:border-brand-blue hover:text-brand-blue transition-all"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              key={project.id}
              className="glass-card p-6 flex flex-col md:flex-row items-center gap-8 hover:shadow-md transition-all border-slate-100"
            >
              <div className="hidden md:flex w-16 h-16 rounded-2xl bg-brand-blue/5 items-center justify-center text-brand-blue shrink-0">
                <Briefcase size={32} />
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-3 items-center mb-2">
                  <h3 className="text-xl font-bold text-[#0F172A]">{project.title}</h3>
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest px-2 py-0.5 bg-brand-blue/5 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-text-dim text-sm mb-4 line-clamp-1">{project.description}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {project.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-100 text-text-dim text-[10px] font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end gap-3 shrink-0 min-w-[150px]">
                <p className="text-xl font-bold text-brand-orange">{project.budget}</p>
                <div className="flex items-center gap-2 text-text-dim text-xs">
                  <Clock size={14} /> {project.deadline}
                </div>
                <Link 
                  to={`/project/${project.id}`}
                  className="px-6 py-2 bg-brand-blue text-white rounded-xl font-bold text-sm hover:scale-105 transition-transform"
                >
                  Apply
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 glass-card">
          <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-6 text-slate-400">
            <Search size={40} />
          </div>
          <h3 className="text-2xl font-bold text-[#0F172A] mb-2">No projects found</h3>
          <p className="text-text-dim max-w-sm mx-auto">
            We couldn't find any projects matching your criteria. 
            Try adjusting your search or category filters.
          </p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="mt-8 text-brand-blue font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};
