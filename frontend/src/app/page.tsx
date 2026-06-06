'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, BookOpen, Clock, BarChart3, GraduationCap, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  
  // Selection Wizard state
  const [selectedUniversity, setSelectedUniversity] = useState('RGPV');
  const [selectedBranch, setSelectedBranch] = useState('CSE');
  const [selectedSemester, setSelectedSemester] = useState('1'); // Defaults to 1st Semester (First Year)
  
  // Voting Form state for offline combinations
  const [votedEmail, setVotedEmail] = useState('');
  const [votedSuccess, setVotedSuccess] = useState(false);
  const [votedCount, setVotedCount] = useState(942);

  // Active MVP check: RGPV CSE Semesters 1 to 8
  const isMVPSelected = 
    selectedUniversity === 'RGPV' && 
    selectedBranch === 'CSE' && 
    ['1', '2', '3', '4', '5', '6', '7', '8'].includes(selectedSemester);

  const handleReveal = () => {
    if (isMVPSelected) {
      router.push(`/dashboard?uni=${selectedUniversity}&branch=${selectedBranch}&sem=${selectedSemester}`);
    }
  };

  const handleVoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!votedEmail) return;
    setVotedSuccess(true);
    setVotedCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        {/* Selection Wizard Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200/50">
                  <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                  RGPV Exam Prep Platform
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                  Stop Reading Everything.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Study Only What Matters.
                  </span>
                </h1>

                <p className="text-base text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Analyze previous year trends, high-frequency questions, and model answers based on the official RGPV syllabus. Built for First and Third Year CSE students.
                </p>

                <div className="hidden lg:flex items-center gap-6 pt-4 text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-green-600" />
                    First Year (Sem 1) Live
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-green-600" />
                    Third Year (Sem 5) Live
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-green-600" />
                    Simple Pen-and-Paper Diagrams
                  </span>
                </div>
              </div>

              {/* Right Column: Selection Card */}
              <div className="lg:col-span-6">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-6 sm:p-8 space-y-6 relative">
                  <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-blue-600 text-white font-bold text-[9px] px-3 py-1 rounded-full tracking-wider uppercase shadow-sm">
                    Curriculum Selector
                  </div>
                  
                  <div className="space-y-1">
                    <h2 className="text-lg font-bold text-slate-950">Select Your Course Path</h2>
                    <p className="text-xs text-slate-400">Select your academic track to load dynamic subjects.</p>
                  </div>

                  <div className="space-y-4 pt-2">
                    {/* Step 1: Choose University */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">1. University</label>
                      <select
                        value={selectedUniversity}
                        onChange={(e) => setSelectedUniversity(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:bg-white focus:border-blue-500 transition-all cursor-pointer"
                      >
                        <option value="RGPV">Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)</option>
                        <option value="AKTU">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</option>
                        <option value="VTU">Visvesvaraya Technological University (VTU)</option>
                      </select>
                    </div>

                    {/* Step 2: Choose Branch */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">2. Branch / Department</label>
                      <select
                        value={selectedBranch}
                        onChange={(e) => setSelectedBranch(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:bg-white focus:border-blue-500 transition-all cursor-pointer"
                      >
                        <option value="CSE">Computer Science & Engineering (CSE)</option>
                        <option value="IT">Information Technology (IT)</option>
                        <option value="ECE">Electronics & Communication (ECE)</option>
                      </select>
                    </div>

                    {/* Step 3: Choose Semester */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">3. Semester (Year Track)</label>
                      <select
                        value={selectedSemester}
                        onChange={(e) => setSelectedSemester(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:bg-white focus:border-blue-500 transition-all cursor-pointer"
                      >
                        <option value="1">1st Semester (1st Year - BCE/Maths-I)</option>
                        <option value="2">2nd Semester (1st Year - Electives)</option>
                        <option value="3">3rd Semester (2nd Year)</option>
                        <option value="4">4th Semester (2nd Year)</option>
                        <option value="5">5th Semester (3rd Year - Computer Graphics)</option>
                        <option value="6">6th Semester (3rd Year)</option>
                        <option value="7">7th Semester (4th Year)</option>
                        <option value="8">8th Semester (4th Year)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submission or Roadmap Vote */}
                  <div className="pt-4 border-t border-slate-100">
                    {isMVPSelected ? (
                      <button
                        onClick={handleReveal}
                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
                      >
                        Reveal Curriculum Subjects
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    ) : (
                      <div className="bg-amber-50/70 border border-amber-200/50 rounded-xl p-4 text-center space-y-3 animate-scale-in">
                        <div className="text-xs text-amber-800 font-medium leading-relaxed">
                          ⚠️ **MVP Scope Note:** Currently **RGPV CSE Semester 1** and **Semester 5** are active. Vote to unlock this combination next!
                        </div>
                        
                        {votedSuccess ? (
                          <div className="text-xs font-bold text-green-700 bg-green-50 py-2 rounded-lg border border-green-200/30">
                            ✓ Vote registered! {votedCount} votes collected.
                          </div>
                        ) : (
                          <form onSubmit={handleVoteSubmit} className="flex gap-2">
                            <input
                              type="email"
                              required
                              placeholder="Enter email to notify"
                              value={votedEmail}
                              onChange={(e) => setVotedEmail(e.target.value)}
                              className="flex-1 bg-white border border-slate-200 p-2 rounded-lg text-xs focus:outline-none focus:border-amber-400 placeholder-slate-400"
                            />
                            <button
                              type="submit"
                              className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer"
                            >
                              Vote
                            </button>
                          </form>
                        )}
                        <span className="text-[9px] text-slate-400 font-semibold block">{votedCount} students requested this curriculum path.</span>
                      </div>
                    )}
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-white border-y border-slate-150/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <h2 className="text-2xl font-bold text-slate-900">Simple Academic Reference Layout</h2>
              <p className="text-sm text-slate-500">Focus entirely on exam questions and structured solutions. No flashy dashboards or unnecessary widgets—just clear study sheets.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-6 border border-slate-200 rounded-xl bg-slate-50/50 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <BarChart3 size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900">Pattern Frequency</h3>
                <p className="text-xs text-slate-550 leading-relaxed">
                  We categorize question repeat metrics based on previous year papers. Learn the topics that are highly likely to be asked.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 border border-slate-200 rounded-xl bg-slate-50/50 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900">Exam Grading Layout</h3>
                <p className="text-xs text-slate-550 leading-relaxed">
                  Model answers structured for full marks: detailed introductions (100+ words), point explanations, simple schematics, and conclusions.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 border border-slate-200 rounded-xl bg-slate-50/50 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900">Quick Recall Points</h3>
                <p className="text-xs text-slate-550 leading-relaxed">
                  Collapsible bullet summaries at the end of each answer. Expand to quickly memorize key points before entering the exam hall.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
