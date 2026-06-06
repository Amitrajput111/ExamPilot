'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockSubjects } from '@/lib/mockData';
import { ArrowRight, RefreshCw, BookOpen, GraduationCap, ChevronLeft, ChevronRight, Award, Flame, ChevronDown, Settings } from 'lucide-react';

function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // URL Parameter parsing
  const initialUni = searchParams.get('uni') || 'RGPV';
  const initialBranch = searchParams.get('branch') || 'CSE';
  const initialSem = searchParams.get('sem') || '1'; // Default to Semester 1

  // Selection states
  const [university, setUniversity] = useState(initialUni);
  const [branch, setBranch] = useState(initialBranch);
  const [semester, setSemester] = useState(initialSem);
  const [showSwitchers, setShowSwitchers] = useState(false);



  // Sync state from query parameters
  useEffect(() => {
    if (searchParams.get('uni')) setUniversity(searchParams.get('uni')!);
    if (searchParams.get('branch')) setBranch(searchParams.get('branch')!);
    if (searchParams.get('sem')) setSemester(searchParams.get('sem')!);
  }, [searchParams]);

  // Active check for MVP paths (RGPV CSE Semesters 1 to 8)
  const isMVPSelected = 
    university === 'RGPV' && 
    branch === 'CSE' && 
    ['1', '2', '3', '4', '5', '6', '7', '8'].includes(semester);

  // Filter subjects based on university, branch, and semester
  const filteredSubjects = mockSubjects.filter(s => 
    s.university === university && 
    s.branch === branch && 
    s.semester === Number(semester)
  );

  // Slider State for Study Strategy slides
  const [activeSlide, setActiveSlide] = useState(0);
  const studySlides = [
    {
      title: "💡 RGPV Examiner Rubrics & Marking Scheme",
      desc: "Valuations at RGPV strongly reward visual clarity. For 8-mark questions, ensure you draft clean, pen-sketchable diagrams. Structured bullet points (Introduction, Points, Applications, and Conclusion) earn maximum scores.",
      color: "bg-blue-50 border-blue-200 text-blue-900",
      accent: "text-blue-600"
    },
    {
      title: "🧠 Active Recall & Progress Tracking",
      desc: "Leverage the Bottom Syllabus Drawer on the study page to toggle topic checkmarks. Ticked topics persist in your browser database, allowing you to prioritize weak areas 24-48 hours before entering the exam.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-900",
      accent: "text-emerald-600"
    },
    {
      title: "⏱️ Time Allocation During Exam Hours",
      desc: "Pace yourself! Reserve exactly 22-25 minutes for each 8-mark question. Save 10-15 minutes at the end of the 3-hour session to draw board-ruled highlights around final answers and label diagrams.",
      color: "bg-indigo-50 border-indigo-200 text-indigo-900",
      accent: "text-indigo-600"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800">
      <Header />

      <main className="flex-grow bg-slate-50/30 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Textbook Curriculum Header Card */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-300 bg-indigo-500/20 border border-indigo-500/30 px-3 py-1 rounded-full uppercase">
                    {university} / {branch} ENGINEERING / SEMESTER {semester}
                  </span>
                  
                  <button 
                    onClick={() => setShowSwitchers(!showSwitchers)} 
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-[10px] font-bold text-white transition-all cursor-pointer"
                  >
                    <Settings size={10} />
                    <span>Change Course Path</span>
                    <ChevronDown size={10} className={`transition-transform duration-200 ${showSwitchers ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-none text-white">
                  Exam Intelligence Study Portal
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  Choose a subject from the exam preparation deck below to study examiner model answers, view simple sketchable diagrams, and track your syllabus progress.
                </p>
              </div>

              {/* Stats Card */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-6 text-center text-slate-350 font-mono text-xs shrink-0 self-stretch sm:self-auto justify-around items-center">
                <div>
                  <span className="block text-white font-bold text-lg">{filteredSubjects.length}</span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400">Subjects</span>
                </div>
                <div className="border-l border-white/10 h-8" />
                <div>
                  <span className="block text-white font-bold text-lg">{filteredSubjects.length * 5}</span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400">Units</span>
                </div>
                <div className="border-l border-white/10 h-8" />
                <div>
                  <span className="block text-white font-bold text-lg">120+</span>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400">Solved Qs</span>
                </div>
              </div>
            </div>

            {/* Collapsible Switchers Section */}
            {showSwitchers && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-4 animate-scale-in text-white">
                {/* University Row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest font-mono shrink-0 w-24">University:</span>
                  <div className="flex flex-wrap gap-2">
                    {['RGPV', 'AKTU', 'VTU'].map(u => (
                      <button
                        key={u}
                        onClick={() => {
                          setUniversity(u);
                          router.push(`/dashboard?uni=${u}&branch=${branch}&sem=${semester}`);
                        }}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                          university === u 
                            ? 'bg-white text-slate-900 shadow-sm scale-102 font-extrabold' 
                            : 'bg-white/10 hover:bg-white/20 text-slate-205'
                        }`}
                      >
                        {u}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Branch Row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest font-mono shrink-0 w-24">Branch:</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'CSE', label: 'Computer Science' },
                      { id: 'IT', label: 'Information Tech' },
                      { id: 'ECE', label: 'Electronics & Comm' }
                    ].map(b => (
                      <button
                        key={b.id}
                        onClick={() => {
                          setBranch(b.id);
                          router.push(`/dashboard?uni=${university}&branch=${b.id}&sem=${semester}`);
                        }}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                          branch === b.id 
                            ? 'bg-white text-slate-900 shadow-sm scale-102 font-extrabold' 
                            : 'bg-white/10 hover:bg-white/20 text-slate-205'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Semester Row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest font-mono shrink-0 w-24">Semester:</span>
                  <div className="flex flex-wrap gap-2 py-0.5">
                    {['1', '2', '3', '4', '5', '6', '7', '8'].map(s => (
                      <button
                        key={s}
                        onClick={() => {
                          setSemester(s);
                          router.push(`/dashboard?uni=${university}&branch=${branch}&sem=${s}`);
                        }}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                          semester === s 
                            ? 'bg-indigo-500 text-white shadow-sm scale-102 font-extrabold' 
                            : 'bg-white/10 hover:bg-white/20 text-slate-205'
                        }`}
                      >
                        Sem {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Slider study card */}
            <div className="border-t border-white/10 pt-6">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-mono text-indigo-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Flame size={14} className="text-amber-500 animate-pulse" />
                  Study Tips & Exam Strategy ({activeSlide + 1}/3)
                </span>
                <div className="flex gap-1.5">
                  <button 
                    onClick={() => setActiveSlide(prev => prev > 0 ? prev - 1 : 2)}
                    className="p-1 rounded bg-white/5 hover:bg-white/10 text-white border border-white/10 cursor-pointer transition-colors"
                    title="Previous Slide"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button 
                    onClick={() => setActiveSlide(prev => prev < 2 ? prev + 1 : 0)}
                    className="p-1 rounded bg-white/5 hover:bg-white/10 text-white border border-white/10 cursor-pointer transition-colors"
                    title="Next Slide"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
              <div className={`p-4 rounded-xl border transition-all duration-300 ${studySlides[activeSlide].color}`}>
                <h3 className="font-bold text-xs sm:text-sm flex items-center gap-1.5">
                  <Award size={16} className={studySlides[activeSlide].accent} />
                  {studySlides[activeSlide].title}
                </h3>
                <p className="text-xs mt-1.5 leading-relaxed font-medium">{studySlides[activeSlide].desc}</p>
              </div>
            </div>
          </div>



          {/* Curriculum Offline warning */}
          {!isMVPSelected && (
            <div className="bg-amber-50/60 border border-amber-250/30 rounded-xl p-8 text-center space-y-4 max-w-md mx-auto">
              <h2 className="text-base font-bold text-slate-850">Curriculum Track Offline</h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Currently, Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) Computer Science & Engineering (CSE) tracks are indexed.
              </p>
              <button
                onClick={() => {
                  setUniversity('RGPV');
                  setBranch('CSE');
                  setSemester('1');
                  router.push('/dashboard?uni=RGPV&branch=CSE&sem=1');
                }}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded transition-colors cursor-pointer"
              >
                Reset to Semester 1
              </button>
            </div>
          )}

          {/* Active Subjects Grid */}
          {isMVPSelected && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <BookOpen size={14} />
                  Available Course Decks ({filteredSubjects.length})
                </h2>
              </div>

              {filteredSubjects.length === 0 ? (
                <div className="bg-white border border-slate-200 rounded-xl p-12 text-center text-slate-400 text-xs">
                  No subjects indexed for this selection yet.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredSubjects.map((subject) => (
                    <div
                      key={subject.id}
                      className="bg-white border border-slate-250/80 rounded-2xl p-6 hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-500 font-mono bg-slate-100 border border-slate-200 px-2.5 py-1 rounded">
                            {subject.code}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">
                            RGPV Syllabus Standard
                          </span>
                        </div>

                        <div>
                          <h3 className="text-base font-extrabold text-slate-900">{subject.name}</h3>
                          <p className="text-[11px] text-slate-455 mt-1">Syllabus modules: {subject.units.length} academic units</p>
                        </div>

                        {/* List of Units in short layout */}
                        <div className="pt-3 border-t border-slate-100">
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
                            Units Covered Overview
                          </span>
                          <div className="space-y-1.5 text-xs text-slate-655 font-medium">
                            {subject.units.map(unit => (
                              <div key={unit.id} className="flex items-center gap-2 truncate">
                                <span className="h-1.5 w-1.5 bg-slate-350 rounded-full shrink-0"></span>
                                <span className="truncate">Unit {unit.number}: {unit.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-150/70">
                        <Link
                          href={`/subject/${subject.id}?uni=${university}&branch=${branch}&sem=${semester}`}
                          className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow"
                        >
                          <span>Launch Exam Study Room</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen items-center justify-center bg-slate-50">
        <RefreshCw className="text-slate-500 animate-spin" size={24} />
        <p className="text-xs font-bold text-slate-500 mt-2">Loading Syllabus Dashboard...</p>
      </div>
    }>
      <DashboardContent />
    </Suspense>
  );
}
