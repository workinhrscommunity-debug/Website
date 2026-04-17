import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Image, FileText, Target, 
  Calendar, DollarSign, Plus, X, 
  CheckCircle, Briefcase, ChevronRight,
  Info, ShieldCheck, Zap
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../constants';

export const PostProject = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    budget: '',
    deadline: '',
    skills: [] as string[],
    newSkill: ''
  });

  const handleNext = () => setStep(s => s + 1);
  const handlePrev = () => setStep(s => s - 1);

  const addSkill = () => {
    if (formData.newSkill && !formData.skills.includes(formData.newSkill)) {
      setFormData({ 
        ...formData, 
        skills: [...formData.skills, formData.newSkill],
        newSkill: '' 
      });
    }
  };

  const removeSkill = (skill: string) => {
    setFormData({ 
      ...formData, 
      skills: formData.skills.filter(s => s !== skill) 
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate successful posting
    alert('Project posted successfully!');
    navigate('/dashboard/client');
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Progress Stepper */}
        <div className="flex items-center justify-between mb-12 relative overflow-hidden">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 -z-10" />
          <motion.div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-blue -z-10 transition-all duration-500"
            style={{ width: `${(step - 1) * 50}%` }}
          />
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 z-10 ${
                  step >= s ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' : 'bg-white border-2 border-slate-200 text-slate-400'
                }`}
              >
                {step > s ? <CheckCircle size={20} /> : s}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${step >= s ? 'text-brand-blue' : 'text-slate-400'}`}>
                {s === 1 ? 'Details' : s === 2 ? 'Requirements' : 'Review'}
              </span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12">
          
          {step === 1 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Project Basics</h2>
                <p className="text-text-dim text-sm">Tell us about your project and what you're looking for.</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0F172A] mb-3">Project Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Modern E-commerce Dashboard Website"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-blue transition-all"
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0F172A] mb-3">Category</label>
                  <select 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-blue transition-all"
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                    required
                  >
                    <option value="">Select a category</option>
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0F172A] mb-3">Budget Range</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim" size={18} />
                    <input 
                      type="text" 
                      placeholder="e.g. $500 - $1,000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-brand-blue transition-all"
                      value={formData.budget}
                      onChange={e => setFormData({ ...formData, budget: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button 
                  type="button" 
                  onClick={handleNext} 
                  disabled={!formData.title || !formData.category || !formData.budget}
                  className="accent-gradient text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                >
                  Next Step <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Requirements & Skills</h2>
                <p className="text-text-dim text-sm">Be specific about what skills are needed to succeed.</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0F172A] mb-3">Project Description</label>
                  <textarea 
                    placeholder="Describe the project goals, deliverables, and any specific requirements..."
                    rows={6}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-blue transition-all resize-none"
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0F172A] mb-3">Skills Needed</label>
                  <div className="flex gap-2 mb-4">
                    <input 
                      type="text" 
                      placeholder="e.g. React"
                      className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-blue transition-all"
                      value={formData.newSkill}
                      onChange={e => setFormData({ ...formData, newSkill: e.target.value })}
                      onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                    />
                    <button 
                      type="button" 
                      onClick={addSkill}
                      className="bg-[#0F172A] text-white px-6 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map(skill => (
                      <span key={skill} className="flex items-center gap-2 px-4 py-2 bg-brand-blue/5 border border-brand-blue/20 rounded-lg text-brand-blue text-xs font-bold">
                        {skill}
                        <button onClick={() => removeSkill(skill)}><X size={14} /></button>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0F172A] mb-3">Estimated Deadline</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim" size={18} />
                    <input 
                      type="text" 
                      placeholder="e.g. 2 weeks"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-brand-blue transition-all"
                      value={formData.deadline}
                      onChange={e => setFormData({ ...formData, deadline: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between pt-4 gap-4">
                <button 
                  type="button" 
                  onClick={handlePrev} 
                  className="w-full sm:w-auto bg-white border border-slate-200 text-[#0F172A] px-10 py-4 rounded-xl font-bold"
                >
                  Back
                </button>
                <button 
                  type="button" 
                  onClick={handleNext} 
                  disabled={!formData.description || formData.skills.length === 0}
                  className="w-full sm:w-auto accent-gradient text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                >
                  To Review <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Review Project</h2>
                <p className="text-text-dim text-sm">Review your information before going live.</p>
              </div>

              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Project Title</span>
                  <p className="text-xl font-bold text-[#0F172A] mt-1">{formData.title}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Category</span>
                    <p className="font-bold text-[#0F172A] mt-1">{formData.category}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Budget</span>
                    <p className="font-bold text-brand-orange mt-1">{formData.budget}</p>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Description</span>
                  <p className="text-sm text-text-dim mt-2 leading-relaxed">{formData.description}</p>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Skills</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.skills.map(s => (
                      <span key={s} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 uppercase tracking-wider">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-brand-blue/5 rounded-2xl border border-brand-blue/10">
                <ShieldCheck className="text-brand-blue shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A] mb-1">WorkinHrs Security Guarantee</h4>
                  <p className="text-[10px] text-text-dim leading-relaxed">
                    Once posted, your project will be reviewed by our team. Bids will be received through our secure escrow system. 
                    You only pay when milestones are completed.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between pt-4 gap-4">
                <button 
                  type="button" 
                  onClick={handlePrev} 
                  className="w-full sm:w-auto bg-white border border-slate-200 text-[#0F172A] px-10 py-4 rounded-xl font-bold"
                >
                  Edit Details
                </button>
                <button 
                  type="submit" 
                  className="w-full sm:w-auto accent-gradient text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  Post Project Now <Zap size={20} />
                </button>
              </div>
            </motion.div>
          )}

        </form>

        <div className="mt-12 flex items-center justify-center gap-8 md:gap-16 grayscale opacity-40">
           <div className="flex items-center gap-2"><ShieldCheck size={18}/> <span className="text-[10px] font-bold">100% SECURE ESCROW</span></div>
           <div className="flex items-center gap-2"><Target size={18}/> <span className="text-[10px] font-bold">SMART MATCHING</span></div>
           <div className="flex items-center gap-2"><Building2 size={18}/> <span className="text-[10px] font-bold">VERIFIED TALENT</span></div>
        </div>
      </div>
    </div>
  );
};
