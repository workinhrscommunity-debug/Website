import { motion } from 'motion/react';
import { 
  Rocket, Users, CheckCircle2, ShieldCheck, 
  ArrowRight, Briefcase, Trophy, Star,
  Smartphone, Code, PenTool, Layout, 
  Database, Cpu, Terminal, Palette
} from 'lucide-react';
import { MOCK_PROJECTS, MOCK_FREELANCERS, CATEGORIES } from '../constants';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { LearnToEarn } from '../components/LearnToEarn';

export const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] px-4 sm:px-[60px] py-12 lg:py-0 flex items-center">
        <div className="max-w-[1024px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              Get Paid to <LearnToEarn />
            </h1>
            <p className="subtext text-lg text-text-dim leading-[1.6] mb-10 max-w-[520px]">
              The premier marketplace connecting early professionals with SMEs for project-based work. Build your portfolio while earning real income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard/freelancer" className="btn-hero-primary text-center">
                Start Working
              </Link>
              <Link to="/dashboard/client" className="btn-hero-secondary text-center">
                Hire Talent
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="dashboard-preview bg-gradient-to-br from-white to-slate-50 rounded-[24px] border border-black/5 h-[480px] p-6 flex flex-col gap-4 shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[14px] font-semibold text-text-dim uppercase tracking-[1px]">Talent Dashboard</span>
                <div className="w-8 h-8 bg-brand-blue rounded-full"></div>
              </div>

              <div className="bg-brand-blue/5 border border-brand-blue/10 rounded-[16px] p-5 flex justify-between items-center">
                <div>
                  <p className="text-[12px] text-text-dim uppercase tracking-[1px] m-0">Available Balance</p>
                  <div className="text-[32px] font-extrabold text-[#0F172A]">$2,450.00</div>
                </div>
                <div className="text-brand-orange font-semibold text-[14px]">+12% this month</div>
              </div>

              <div className="text-[14px] font-semibold text-text-dim uppercase tracking-[1px] mt-2">Active Projects</div>
              
              <div className="flex flex-col gap-3">
                {[
                  { title: "E-commerce UI Refresh", target: "4 days", price: "$450.00", status: "In Progress", color: "bg-brand-blue" },
                  { title: "SaaS Analytics Dashboard", target: "12 days", price: "$1,200.00", status: "Completed", color: "bg-brand-orange text-white" },
                  { title: "Mobile App Wireframing", target: "2 days", price: "$280.00", status: "Review", color: "bg-amber-400" }
                ].map((item, i) => (
                  <div key={i} className="bg-black/[0.03] border border-black/[0.05] rounded-[12px] p-4 flex justify-between items-center text-[#0F172A]">
                    <div>
                      <h4 className="text-[15px] font-bold mb-0.5">{item.title}</h4>
                      <p className="text-[12px] text-text-dim">Target: {item.target} remaining • {item.price}</p>
                    </div>
                    <div className={`${item.color} px-[10px] py-1 rounded-full text-[10px] font-bold uppercase`}>
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute -bottom-5 -left-5 bg-brand-blue text-white px-5 py-3 rounded-[12px] font-bold -rotate-3 shadow-[0_10px_20px_rgba(0,132,199,0.2)]">
                100% Verified Profiles
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Footer style */}
      <section className="h-[100px] px-4 sm:px-[60px] flex items-center justify-center sm:justify-start gap-12 sm:gap-[80px] bg-slate-50 border-y border-black/5">
        <div className="flex flex-col">
          <div className="text-[24px] font-extrabold text-brand-blue">1,000+</div>
          <div className="text-[12px] text-text-dim uppercase tracking-[1px] mt-1">Verified Freelancers</div>
        </div>
        <div className="flex flex-col">
          <div className="text-[24px] font-extrabold text-brand-blue">100+</div>
          <div className="text-[12px] text-text-dim uppercase tracking-[1px] mt-1">Businesses</div>
        </div>
        <div className="flex flex-col">
          <div className="text-[24px] font-extrabold text-brand-blue">500+</div>
          <div className="text-[12px] text-text-dim uppercase tracking-[1px] mt-1">Projects Completed</div>
        </div>
        <div className="flex flex-col hidden lg:flex">
          <div className="text-[24px] font-extrabold text-brand-blue">$150k+</div>
          <div className="text-[12px] text-text-dim uppercase tracking-[1px] mt-1">Total Paid Out</div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 20 }}
               className="glass-card p-10 border-red-500/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-red-400">For Freelancers</h3>
              <ul className="space-y-4">
                {["No portfolio", "No real experience", "No income opportunities", "No visibility"].map((pt, i) => (
                  <li key={i} className="flex gap-4 items-center text-text-dim">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 20 }}
               className="glass-card p-10 border-orange-500/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-orange-400">For Businesses</h3>
              <ul className="space-y-4">
                {["Hiring is expensive", "Freelancers can be unreliable", "Quality is inconsistent", "Hard to find quick help"].map((pt, i) => (
                  <li key={i} className="flex gap-4 items-center text-text-dim">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 italic">A Win-Win Marketplace</h2>
          <p className="text-text-dim text-lg">
            We bridge the gap between emerging talent and growing businesses through a secure, transparent platform.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Verified Profiles", icon: <ShieldCheck />, desc: "Only the best talent gets in." },
            { title: "Escrow Payments", icon: <Briefcase />, desc: "Your money is safe with us." },
            { title: "Real Experience", icon: <Rocket />, desc: "Build a portfolio that matters." },
            { title: "Fast Hiring", icon: <Users />, desc: "Get matched in minutes, not days." }
          ].map((feat, i) => (
            <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               className="glass p-8 rounded-3xl border-black/5 flex flex-col items-center text-center shadow-md shadow-black/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center text-brand-orange mb-6">
                {feat.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{feat.title}</h4>
              <p className="text-text-dim text-sm">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">How it Works</h2>
            <p className="text-text-dim">Simple 4-step process to get things done.</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-gradient-to-r from-transparent via-black/5 to-transparent" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Post a Project", desc: "Define scope and budget in minutes." },
                { title: "Get Matched", desc: "AI smart matching connects you with best-fit." },
                { title: "Work Securely", desc: "Escrow ensures safe payment and delivery." },
                { title: "Build & Grow", desc: "Freelancers gain experience and reputation." }
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full border-2 border-brand-orange/30 bg-bg-deep flex items-center justify-center font-bold text-3xl mb-6 relative z-10 shadow-[0_0_30px_rgba(242,125,38,0.1)]">
                    {i+1}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-text-dim text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Explore Categories</h2>
              <p className="text-text-dim">Find work in any niche</p>
            </div>
            <Link to="/" className="text-brand-orange font-bold hover:underline hidden sm:block">View All</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-2xl flex items-center gap-4 cursor-pointer glass-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                   <Briefcase size={20} />
                </div>
                <span className="font-semibold text-sm ">{cat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Latest Projects</h2>
              <p className="text-text-dim">Hand-picked opportunities for you</p>
            </div>
            <Link to="/projects" className="text-brand-orange font-bold hover:underline">See Marketplace</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MOCK_PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-3xl flex flex-col h-full border-black/5 shadow-sm shadow-black/5"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold text-accent-blue uppercase tracking-widest">{project.category}</span>
                  <p className="text-brand-orange font-bold">{project.budget}</p>
                </div>
                <h4 className="text-xl font-bold mb-4 flex-grow">{project.title}</h4>
                <div className="space-y-4 mb-8">
                  <div className="flex flex-wrap gap-2 text-xs">
                    {project.skills.map(s => (
                      <span key={s} className="px-3 py-1 bg-black/5 rounded-full text-text-dim">{s}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-dim">
                     <span>Client: <b>{project.clientName}</b></span>
                     <span className="flex items-center gap-1 text-brand-orange"><Star size={12} fill="currentColor" /> {project.clientRating}</span>
                  </div>
                </div>
                <Link to={`/project/${project.id}`} className="w-full py-3 rounded-xl border border-brand-orange/30 text-brand-orange font-bold text-center hover:bg-brand-orange hover:text-white transition-all">
                  View Project
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Freelancer Profiles Preview */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Verified Experts</h2>
            <p className="text-text-dim">Top professionals ready to help you grow</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             {MOCK_FREELANCERS.map((f, i) => (
               <div key={i} className="glass p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center glass-hover">
                 <img src={f.avatar} alt={f.name} className="w-32 h-32 rounded-2xl object-cover" />
                 <div className="flex-grow text-center md:text-left">
                    <div className="flex justify-between items-center mb-2">
                       <h4 className="text-xl font-bold">{f.name}</h4>
                       <span className="flex items-center gap-1 text-brand-orange font-bold"><Star size={16} fill="currentColor" /> {f.rating}</span>
                    </div>
                    <p className="text-accent-blue text-sm mb-4 font-semibold">{f.tagline}</p>
                    <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                      {f.skills.map(s => (
                        <span key={s} className="text-[10px] px-2 py-1 bg-black/5 rounded-full text-text-dim uppercase tracking-wider">{s}</span>
                      ))}
                    </div>
                    <button className="accent-gradient text-white px-6 py-2 rounded-xl text-sm font-bold w-full md:w-auto">
                      View Profile
                    </button>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 italic">Built on Trust</h2>
            <p className="text-text-dim mb-10 text-lg">We prioritize security so you can focus on work that matters.</p>
            <div className="grid sm:grid-cols-2 gap-8">
               {[
                 { title: "Verified Profiles", desc: "Rigorous vetting for all talent." },
                 { title: "Secure Escrow", desc: "Funds held until project completion." },
                 { title: "Support 24/7", desc: "Human help whenever you need it." },
                 { title: "Conflict Resolution", desc: "Fair mediation for every contract." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                     <ShieldCheck size={20} />
                   </div>
                   <div>
                     <h5 className="font-bold mb-1">{item.title}</h5>
                     <p className="text-text-dim text-sm">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="glass p-2 rounded-3xl border-black/5 overflow-hidden shadow-xl shadow-black/5">
               <img src="https://picsum.photos/seed/trust/800/600?blur=1" alt="Trust" className="w-full h-auto rounded-2xl opacity-90" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Bounty / Contest Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto glass p-12 rounded-[3rem] border-brand-orange/20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 p-12 text-brand-orange/10 -rotate-12">
            <Trophy size={200} />
          </div>
          
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-bold mb-6">NEW FEATURE</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Compete. Win. Get Paid.</h2>
            <p className="text-text-dim text-lg mb-10 max-w-2xl mx-auto">
              Participate in specialized skill challenges and win rewards for your creativity and technical expertise.
            </p>
            <button className="accent-gradient text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
              <Trophy size={24} />
              Explore Bounties
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Community Says</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-10 rounded-3xl border-black/5 italic shadow-sm shadow-black/5">
              <p className="text-lg text-text-dim mb-8 leading-relaxed">
                "WorkinHrs changed my career path. I landed my first paying web dev gig while still in my final year of college. The verified system makes everything so much easier."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/user1/60/60" className="w-12 h-12 rounded-full" alt="" />
                <div>
                  <h5 className="font-bold text-[#0F172A]">Alex Rivera</h5>
                  <p className="text-text-dim text-xs">Full Stack Developer</p>
                </div>
              </div>
            </div>
            <div className="glass p-10 rounded-3xl border-black/5 italic shadow-sm shadow-black/5">
              <p className="text-lg text-text-dim mb-8 leading-relaxed">
                "Finding affordable but high-quality talent was always a struggle until we found this platform. We've hired three interns turned freelancers who are crushing it."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/user2/60/60" className="w-12 h-12 rounded-full" alt="" />
                <div>
                  <h5 className="font-bold text-[#0F172A]">Michal S.</h5>
                  <p className="text-text-dim text-xs">CEO, TechStart Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-bold mb-8">Start your journey <br /> <span className="text-glow text-brand-orange italic">today</span></h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="accent-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-brand-orange/20">
              Join as Freelancer
            </button>
            <button className="glass px-10 py-5 rounded-2xl font-bold text-lg hover:bg-black/5 transition-colors border-black/5">
              Post your first Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
