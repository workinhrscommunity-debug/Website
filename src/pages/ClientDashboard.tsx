import { motion } from 'motion/react';
import { 
  Plus, Users, Briefcase, Wallet, 
  BarChart3, MessageSquare, Star, ArrowUpRight
} from 'lucide-react';
import { MOCK_PROJECTS } from '../constants';

export const ClientDashboard = () => {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2 text-[#0F172A]">Business Overview</h1>
          <p className="text-text-dim">You have <span className="text-brand-blue font-bold">3 candidates</span> to review for "Branding Kit".</p>
        </div>
        <button className="accent-gradient text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-brand-orange/20">
          <Plus size={20} />
          Post New Project
        </button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Active Spend", value: "$2,800", icon: <Wallet className="text-brand-orange" />, sub: "In Escrow" },
          { label: "Open Roles", value: "2", icon: <Briefcase className="text-brand-blue" />, sub: "Projects live" },
          { label: "Total Talent", value: "12", icon: <Users className="text-brand-blue" />, sub: "Hired to date" },
          { label: "Success Rate", value: "98%", icon: <Star className="text-brand-orange" />, sub: "Verified delivery" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            className="glass-card p-6"
          >
            <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center mb-4">
              {stat.icon}
            </div>
            <p className="text-text-dim text-sm uppercase tracking-wider mb-1">{stat.label}</p>
            <p className="text-2xl font-bold mb-1 text-[#0F172A]">{stat.value}</p>
            <p className="text-[10px] text-text-dim/60 font-bold uppercase">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Briefcase size={20} />
              Live Projects
            </h3>
            <div className="space-y-4">
              {MOCK_PROJECTS.slice(0, 2).map((proj, i) => (
                <div key={i} className="glass-card p-6 flex flex-col md:flex-row justify-between gap-6 glass-hover">
                   <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                         <h4 className="font-bold text-lg">{proj.title}</h4>
                         <span className="px-2 py-0.5 bg-brand-orange/10 text-brand-orange text-[10px] rounded font-bold uppercase tracking-wider">Active</span>
                      </div>
                      <p className="text-text-dim text-sm mb-4">Budget: {proj.budget} • 12 Applications</p>
                      <div className="flex -space-x-2">
                         {[1,2,3].map(j => (
                           <img key={j} src={`https://picsum.photos/seed/${j+20}/40/40`} className="w-8 h-8 rounded-full border-2 border-bg-card" alt="" />
                         ))}
                         <div className="w-8 h-8 rounded-full border-2 border-bg-card bg-bg-deep flex items-center justify-center text-[10px] font-bold text-text-dim">+9</div>
                      </div>
                   </div>
                   <div className="flex md:flex-col justify-end gap-2">
                      <button className="px-4 py-2 bg-black/5 rounded-lg text-sm font-bold hover:bg-black/10 transition-colors text-[#0F172A]">Manage</button>
                      <button className="px-4 py-2 border border-brand-blue/30 text-brand-blue rounded-lg text-sm font-bold hover:bg-brand-blue hover:text-white transition-all">Review Bids</button>
                   </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-[#0F172A]">
              <BarChart3 size={20} />
              Recent Applications
            </h3>
            <div className="glass-card overflow-x-auto">
              <table className="w-full text-left min-w-[600px] md:min-w-[auto]">
                <thead className="bg-black/5 text-[10px] font-bold text-text-dim uppercase tracking-widest">
                  <tr>
                    <th className="px-6 py-4">Freelancer</th>
                    <th className="px-6 py-4">Project</th>
                    <th className="px-6 py-4">Rating</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {[
                    { name: "John Doe", project: "E-commerce Dev", rating: 4.9 },
                    { name: "Sarah Smith", project: "Branding Kit", rating: 4.8 },
                    { name: "Mike Ross", project: "Mobile UI", rating: 4.7 }
                  ].map((app, i) => (
                    <tr key={i} className="hover:bg-black/[0.02] transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-brand-blue/10" />
                          <span className="font-bold text-sm text-[#0F172A]">{app.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs text-text-dim">{app.project}</td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-1 text-brand-orange font-bold text-xs"><Star size={12} fill="currentColor" /> {app.rating}</span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-brand-blue hover:underline text-xs font-bold">View Bid</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
           <section className="glass-card p-8">
              <h4 className="font-bold mb-6 flex items-center justify-between">
                 Payments & Escrow
                 <ArrowUpRight size={18} className="text-text-dim" />
              </h4>
              <div className="space-y-6">
                 <div>
                   <p className="text-3xl font-bold bg-brand-orange/10 p-4 rounded-2xl text-brand-orange text-center">$2,450.00</p>
                   <p className="text-center text-[10px] uppercase text-text-dim mt-2 tracking-widest">Secured in Smart Contract</p>
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-text-dim">Pending Release</span>
                      <span className="font-bold">$1,200</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-text-dim">Completed</span>
                      <span className="font-bold">$12,850</span>
                    </div>
                 </div>
                 <button className="w-full py-3 bg-black/5 rounded-xl text-sm font-bold hover:bg-black/10 transition-colors text-[#0F172A]">Manage Funds</button>
              </div>
           </section>

            <section className="glass-card p-8 border-brand-blue/10">
              <h4 className="font-bold mb-6 flex items-center gap-2 text-[#0F172A]">
                 <MessageSquare size={18} className="text-brand-blue" />
                 Unread Messages
              </h4>
              <div className="space-y-4">
                 {[1,2].map(i => (
                    <div key={i} className="flex gap-4 items-start p-3 hover:bg-black/[0.03] rounded-xl cursor-pointer transition-colors">
                       <div className="w-10 h-10 rounded-full bg-black/5 shrink-0" />
                       <div className="flex-grow min-w-0">
                          <p className="font-bold text-sm truncate text-[#0F172A]">Sarah Chen</p>
                          <p className="text-xs text-text-dim truncate">Sent you an update on Milestone 3...</p>
                       </div>
                       <div className="w-2 h-2 rounded-full bg-brand-blue mt-1.5" />
                    </div>
                 ))}
              </div>
           </section>
        </div>
      </div>
    </div>
  );
};
