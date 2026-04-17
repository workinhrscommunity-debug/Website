import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Calendar, DollarSign, Clock, ShieldCheck, 
  ArrowLeft, Share2, Star, CheckCircle2,
  Briefcase, Send
} from 'lucide-react';
import { MOCK_PROJECTS } from '../constants';

export const ProjectPage = () => {
  const { id } = useParams();
  const project = MOCK_PROJECTS.find(p => p.id === id) || MOCK_PROJECTS[0];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-text-dim hover:text-brand-blue mb-8 transition-colors group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Marketplace
      </Link>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 glass rounded-full text-brand-blue text-xs font-bold uppercase tracking-widest">
                {project.category}
              </span>
              <span className="text-text-dim/40">•</span>
              <span className="text-text-dim text-xs">Posted 2 days ago</span>
            </div>

            <h1 className="text-4xl font-bold mb-8 text-[#0F172A]">{project.title}</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
               <div className="glass-card p-4 border-black/5 shadow-sm shadow-black/5">
                  <p className="text-text-dim text-[10px] uppercase font-bold tracking-widest mb-2 flex items-center gap-1">
                    <DollarSign size={12} /> Budget
                  </p>
                  <p className="font-bold text-brand-orange">{project.budget}</p>
               </div>
               <div className="glass-card p-4 border-black/5 shadow-sm shadow-black/5">
                  <p className="text-text-dim text-[10px] uppercase font-bold tracking-widest mb-2 flex items-center gap-1">
                    <Clock size={12} /> Timeline
                  </p>
                  <p className="font-bold text-[#0F172A]">{project.deadline}</p>
               </div>
               <div className="glass-card p-4 border-black/5 shadow-sm shadow-black/5">
                  <p className="text-text-dim text-[10px] uppercase font-bold tracking-widest mb-2 flex items-center gap-1">
                    <Briefcase size={12} /> Work Type
                  </p>
                  <p className="font-bold text-[#0F172A]">Project Based</p>
               </div>
               <div className="glass-card p-4 border-black/5 shadow-sm shadow-black/5">
                  <p className="text-text-dim text-[10px] uppercase font-bold tracking-widest mb-2 flex items-center gap-1">
                    <ShieldCheck size={12} /> Security
                  </p>
                  <p className="font-bold text-[#0F172A]">Escrow Only</p>
               </div>
            </div>

            <section className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-[#0F172A]">About the Project</h3>
              <div className="prose prose-slate max-w-none text-text-dim leading-relaxed space-y-4">
                <p>{project.description}</p>
                <p>
                  We are looking for a dedicated professional who can handle technical requirements while maintaining a high standard of design and UX consistency. The ideal candidate should have experience in {project.skills.join(', ')}.
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Direct communication with the stakeholders</li>
                  <li>Weekly milestone updates</li>
                  <li>Scalable and maintainable code/design assets</li>
                  <li>Portfolio-ready final delivery</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-6 text-[#0F172A]">Skills Required</h3>
              <div className="flex flex-wrap gap-3">
                {project.skills.map(skill => (
                  <span key={skill} className="px-5 py-2.5 glass-hover bg-black/5 border border-black/5 rounded-xl text-sm font-semibold transition-all text-text-dim">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="glass-card p-8 border-brand-orange/10 sticky top-28 shadow-xl shadow-brand-orange/5"
           >
              <h4 className="text-xl font-bold mb-6 text-[#0F172A]">Submit Your Bid</h4>
              <div className="space-y-6">
                 <div>
                    <label className="block text-[10px] uppercase font-bold text-text-dim mb-2 tracking-widest">Your Quote ($)</label>
                    <input type="number" placeholder="0.00" className="w-full bg-black/5 border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors text-[#0F172A]" />
                 </div>
                 <div>
                    <label className="block text-[10px] uppercase font-bold text-text-dim mb-2 tracking-widest">Estimated Delivery</label>
                    <select className="w-full bg-black/5 border border-black/5 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors appearance-none text-[#0F172A]">
                       <option className="bg-white">Under 1 week</option>
                       <option className="bg-white">1-2 weeks</option>
                       <option className="bg-white">3-4 weeks</option>
                       <option className="bg-white">1 month+</option>
                    </select>
                 </div>
                 <button className="w-full accent-gradient text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-brand-orange/20">
                    <Send size={18} />
                    Apply Now
                 </button>
                 <div className="flex items-center gap-2 justify-center text-[10px] text-text-dim uppercase font-bold tracking-widest">
                    <CheckCircle2 size={12} className="text-brand-orange" />
                    Verified Application Fee: $0
                 </div>
              </div>

              <div className="mt-10 pt-10 border-t border-black/5">
                 <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-text-dim">About Client</h5>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center font-bold text-brand-blue border border-brand-blue/10">
                      {project.clientName.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-[#0F172A]">{project.clientName}</p>
                      <div className="flex items-center gap-1 text-brand-orange text-[10px] font-bold">
                         <Star size={10} fill="currentColor" /> {project.clientRating} Rating
                      </div>
                    </div>
                 </div>
                 <div className="space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-dim">Verified Business</span>
                      <ShieldCheck size={14} className="text-brand-orange" />
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-dim">Projects Posted</span>
                      <span className="font-bold">14</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-text-dim">Total Spent</span>
                      <span className="font-bold">$24,800+</span>
                    </div>
                 </div>
              </div>

              <button className="w-full mt-8 py-3 bg-black/5 hover:bg-black/10 rounded-xl text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-colors text-[#0F172A]">
                 <Share2 size={14} />
                 Share Project
              </button>
           </motion.div>
        </div>
      </div>
    </div>
  );
};
