import { motion } from 'motion/react';
import { 
  UserRound, Building2, CheckCircle2, 
  Wallet, Search, Briefcase, Zap, 
  ShieldCheck, Trophy, MessageSquare 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorks = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/10 rounded-full text-brand-blue text-xs font-bold uppercase tracking-wider mb-8"
          >
            <Zap size={14} /> The Platform Guide
          </motion.nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 text-[#0F172A]"
          >
            How <span className="text-brand-orange italic">Workin</span><span className="text-[#104cdb]">Hrs</span> Works
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-text-dim text-lg md:text-xl"
          >
            Bridging the gap between early-career professionals and scaling businesses 
            through a secure, merit-based freelance ecosystem.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 mt-12 md:mt-20">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          
          {/* For Freelancers Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                <UserRound size={28} />
              </div>
              <h2 className="text-3xl font-bold text-[#0F172A]">For Freelancers</h2>
            </div>

            <div className="space-y-12 relative">
              {/* Vertical Connector */}
              <div className="absolute left-6 top-8 bottom-0 w-px bg-slate-200 hidden md:block" />

              {[
                {
                  title: "Create Your Verified Profile",
                  desc: "Complete your profile with your skills, portfolio projects, and education. We verify your identity to ensure a safe marketplace.",
                  icon: <ShieldCheck className="text-brand-orange" />,
                },
                {
                  title: "Browse & Apply for Projects",
                  desc: "Filter through thousands of projects matching your skills. Use our AI-matching to find projects that help you grow.",
                  icon: <Search className="text-brand-orange" />,
                },
                {
                  title: "Submit Bids & Get Hired",
                  desc: "Send tailored proposals to clients. Showcase your expertise and negotiate milestones directly within the platform.",
                  icon: <Briefcase className="text-brand-orange" />,
                },
                {
                  title: "Work & Get Paid Securely",
                  desc: "Work on milestones, communicate via our secure chat, and receive payments through our escrow system as you hit project targets.",
                  icon: <Wallet className="text-brand-orange" />,
                }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 relative z-10">
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-white border-2 border-slate-200 shrink-0 items-center justify-center font-bold text-slate-400">
                    {i + 1}
                  </div>
                  <div className="flex-grow glass-card p-6 md:p-8 hover:shadow-md transition-shadow">
                    <div className="mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-[#0F172A]">{step.title}</h3>
                    <p className="text-text-dim text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* For Businesses Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Building2 size={28} />
              </div>
              <h2 className="text-3xl font-bold text-[#0F172A]">For Businesses</h2>
            </div>

            <div className="space-y-12 relative">
              {/* Vertical Connector */}
              <div className="absolute left-6 top-8 bottom-0 w-px bg-slate-200 hidden md:block" />

              {[
                {
                  title: "Post Your Project",
                  desc: "Define your requirements, budget, and timeline. Our intuitive posting form helps you attract the right talent quickly.",
                  icon: <Briefcase className="text-brand-blue" />,
                },
                {
                  title: "Review Bids & Hire",
                  desc: "Evaluate proposals from verified professionals. Review their portfolios, ratings, and past performance on WorkinHrs.",
                  icon: <UserRound className="text-brand-blue" />,
                },
                {
                  title: "Secure Escrow Funding",
                  desc: "Deposit project funds into our secure escrow. Funds are only released when you approve the delivered work.",
                  icon: <ShieldCheck className="text-brand-blue" />,
                },
                {
                  title: "Manage & Receive Work",
                  desc: "Track progress, chat with your freelancer, and approve milestones. Get results that help your business scale.",
                  icon: <CheckCircle2 className="text-brand-blue" />,
                }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 relative z-10">
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-white border-2 border-slate-200 shrink-0 items-center justify-center font-bold text-slate-400">
                    {i + 1}
                  </div>
                  <div className="flex-grow glass-card p-6 md:p-8 hover:shadow-md transition-shadow">
                    <div className="mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-[#0F172A]">{step.title}</h3>
                    <p className="text-text-dim text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Trust Section */}
      <section className="py-24 mt-20 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The WorkinHrs Trust Guarantee</h2>
            <p className="text-slate-400 max-w-xl mx-auto">We've built several layers of security to ensure every interaction on the platform is safe and fair.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10">
              <Trophy className="text-brand-orange mb-6" size={40} />
              <h4 className="text-xl font-bold mb-4">Verified Talent</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Every freelancer goes through a vetting process including identity verification and skill assessment.</p>
            </div>
            <div className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10">
              <ShieldCheck className="text-brand-blue mb-6" size={40} />
              <h4 className="text-xl font-bold mb-4">Escrow Protection</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Your payments are held securely and only released when you're 100% satisfied with the outcome.</p>
            </div>
            <div className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10">
              <MessageSquare className="text-brand-orange mb-6" size={40} />
              <h4 className="text-xl font-bold mb-4">24/7 Support</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Our dedicated support team is here to help with any disputes or questions you might have.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Zap size={200} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#0F172A]">Ready to get started?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/dashboard/freelancer" className="accent-gradient text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-transform">
              Join as Freelancer
            </Link>
            <Link to="/post-project" className="bg-white border-2 border-slate-200 text-[#0F172A] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors">
              Post a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
