import { motion } from 'motion/react';
import { 
  TrendingUp, Clock, CheckCircle, BarChart3, 
  Search, Filter, ExternalLink, Star
} from 'lucide-react';
import { MOCK_PROJECTS } from '../constants';

export const FreelancerDashboard = () => {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2 text-[#0F172A]">Welcome back, Sarah! 👋</h1>
          <p className="text-text-dim">You have <span className="text-brand-orange font-bold">2 active</span> projects this week.</p>
        </div>
        <button className="accent-gradient text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-brand-orange/20">
          <Search size={20} />
          Find New Projects
        </button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Earnings", value: "$4,250", icon: <TrendingUp className="text-brand-orange" />, change: "+12%" },
          { label: "Active Projects", value: "2", icon: <Clock className="text-brand-blue" />, change: "On track" },
          { label: "Completed", value: "15", icon: <CheckCircle className="text-brand-orange" />, change: "+3 this month" },
          { label: "Profile Views", value: "1.2k", icon: <BarChart3 className="text-brand-blue" />, change: "+5.4%" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
                {stat.icon}
              </div>
              <span className="text-[10px] px-2 py-1 bg-black/5 rounded-full text-text-dim uppercase font-bold tracking-wider">
                {stat.change}
              </span>
            </div>
            <p className="text-text-dim text-sm uppercase tracking-wider mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Active Projects & Recommended */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <Clock className="text-brand-blue" />
                Active Projects
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { title: "SaaS Marketing Assets", client: "TechStart", status: "Ongoing", progress: 65 },
                { title: "Mobile UI Design", client: "FitFlow", status: "Revision", progress: 90 }
              ].map((proj, i) => (
                <div key={i} className="glass-card p-6 glass-hover">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-[#0F172A]">{proj.title}</h4>
                      <p className="text-text-dim text-sm">Client: {proj.client} • {proj.status}</p>
                    </div>
                    <button className="text-text-dim hover:text-brand-blue transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-grow h-2 bg-black/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${proj.progress}%` }}
                        className="h-full accent-gradient"
                      />
                    </div>
                    <span className="text-xs font-bold text-text-dim">{proj.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
             <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <Filter className="text-brand-orange" />
                Recommended for You
              </h2>
              <button className="text-brand-orange text-sm font-bold">View All</button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
               {MOCK_PROJECTS.slice(0, 2).map((proj, i) => (
                 <div key={i} className="glass-card p-6 flex flex-col h-full glass-hover">
                   <div className="flex justify-between mb-4">
                      <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">{proj.category}</span>
                      <span className="text-brand-orange font-bold text-sm">{proj.budget}</span>
                   </div>
                   <h4 className="font-bold mb-4 flex-grow">{proj.title}</h4>
                   <div className="flex flex-wrap gap-2 mb-6">
                      {proj.skills.map(s => <span key={s} className="text-[10px] px-2 py-1 bg-black/5 rounded-full text-text-dim border border-black/5">{s}</span>)}
                   </div>
                   <button className="w-full py-2 rounded-lg border border-black/10 text-sm font-bold hover:bg-black/5 transition-colors text-[#0F172A]">
                     Quick Apply
                   </button>
                 </div>
               ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <section className="glass-card p-8 border-brand-orange/10">
            <h3 className="font-bold mb-6 flex items-center gap-2">
              <BarChart3 className="text-brand-orange" size={20} />
              Profile Strength
            </h3>
            <div className="relative w-32 h-32 mx-auto mb-6">
               <svg className="w-full h-full transform -rotate-90">
                 <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-black/5" />
                 <circle 
                   cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" 
                   strokeDasharray="364.4" strokeDashoffset="54.6"
                   className="text-brand-orange"
                 />
               </svg>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <span className="text-2xl font-bold text-[#0F172A]">85%</span>
               </div>
            </div>
            <p className="text-center text-sm text-text-dim mb-6">Complete your portfolio to unlock high-budget projects.</p>
            <ul className="space-y-3 text-xs">
               <li className="flex items-center gap-2 text-brand-orange"><CheckCircle size={14}/> Add 3 Portfolio Items</li>
               <li className="flex items-center gap-2 text-brand-orange"><CheckCircle size={14}/> Verified Identity</li>
               <li className="flex items-center gap-2 text-text-dim"><span className="w-3.5 h-3.5 rounded-full border border-black/20 inline-block" /> Connect LinkedIn</li>
            </ul>
          </section>

          <section className="glass-card p-8">
             <h3 className="font-bold mb-6 text-[#0F172A]">Upcoming Payments</h3>
             <div className="space-y-4">
                {[
                  { amount: "$800.00", date: "Apr 20", label: "Milestone 2 - App UI" },
                  { amount: "$450.00", date: "Apr 25", label: "Branding Kit" }
                ].map((pay, i) => (
                  <div key={i} className="flex justify-between items-center border-l-2 border-brand-blue pl-4">
                    <div>
                      <p className="font-bold text-[#0F172A]">{pay.amount}</p>
                      <p className="text-[10px] text-text-dim uppercase">{pay.date} • {pay.label}</p>
                    </div>
                  </div>
                ))}
             </div>
             <button className="w-full mt-6 py-3 bg-black/5 rounded-xl text-sm font-bold hover:bg-black/10 transition-colors">Manage Funds</button>
          </section>
        </div>
      </div>
    </div>
  );
};
