'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Shield, Check, Plus, AlertCircle, Trash2, Award, 
  Layers, UploadCloud, CheckSquare, Sparkles 
} from 'lucide-react';
import { mockSubjects } from '@/lib/mockData';

interface ApprovalItem {
  id: string;
  type: 'question' | 'revision_sheet' | 'answer';
  subjectName: string;
  unit: number;
  title: string;
  author: string;
  status: 'pending' | 'approved';
}

export default function AdminPanel() {
  const [approvals, setApprovals] = useState<ApprovalItem[]>([
    {
      id: 'app-1',
      type: 'question',
      subjectName: 'Computer Graphics',
      unit: 2,
      title: 'Derive Midpoint Circle Drawing Algorithm steps and state its initial decision variable.',
      author: 'Student Contributor (Amit)',
      status: 'pending'
    },
    {
      id: 'app-2',
      type: 'answer',
      subjectName: 'Database Management Systems',
      unit: 2,
      title: 'Model Answer for candidate key verification using Armstrong Axioms.',
      author: 'Faculty Member (Dr. Sharma)',
      status: 'pending'
    },
    {
      id: 'app-3',
      type: 'revision_sheet',
      subjectName: 'Computer Networks',
      unit: 1,
      title: '1-Page Summary Cheat sheet for IEEE 802.11 Wireless standard.',
      author: 'Content Team (Varun)',
      status: 'pending'
    }
  ]);

  const [uniInput, setUniInput] = useState('');
  const [subjectNameInput, setSubjectNameInput] = useState('');
  const [createdUnis, setCreatedUnis] = useState<string[]>(['RGPV', 'AKTU', 'VTU']);
  const [feedMsg, setFeedMsg] = useState<string | null>(null);

  const handleApprove = (id: string) => {
    setApprovals(prev =>
      prev.map(item => (item.id === id ? { ...item, status: 'approved' } : item))
    );
    setFeedMsg('Content Approved successfully! Added to live study indexes.');
    setTimeout(() => setFeedMsg(null), 3000);
  };

  const handleReject = (id: string) => {
    setApprovals(prev => prev.filter(item => item.id !== id));
    setFeedMsg('Content Rejected and flagged for review.');
    setTimeout(() => setFeedMsg(null), 3000);
  };

  const handleCreateUni = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uniInput) return;
    setCreatedUnis(prev => [...prev, uniInput.toUpperCase()]);
    setFeedMsg(`University "${uniInput.toUpperCase()}" registered successfully in the cluster databases.`);
    setUniInput('');
    setTimeout(() => setFeedMsg(null), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-slate-50/50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
          
          {/* Header Banner */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-red-600 bg-red-50 w-fit px-2.5 py-0.5 rounded-full border border-red-200/30">
                <Shield size={14} />
                <span className="text-[10px] font-bold uppercase">Administrator Session</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">ExamPilot Console</h1>
              <p className="text-xs text-slate-500">
                Manage universities, configure branch semesters, upload previous paper PDFs, and verify student submissions.
              </p>
            </div>

            <div className="text-xs text-slate-400 bg-slate-100 px-3 py-1.5 rounded-xl font-bold">
              Database Connection: PostgreSQL (5432) • Meili: ONLINE
            </div>
          </div>

          {/* Feedback message */}
          {feedMsg && (
            <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-2xl text-xs font-bold flex items-center gap-2 animate-scale-in">
              <Check size={16} />
              {feedMsg}
            </div>
          )}

          {/* Admin Stats Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm">
              <span className="text-xs text-slate-400 font-semibold block">Total Universities</span>
              <span className="text-2xl font-bold text-slate-800 block mt-1">{createdUnis.length} Registered</span>
              <span className="text-[10px] text-blue-600 font-semibold block mt-1">1 Live in MVP</span>
            </div>

            <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm">
              <span className="text-xs text-slate-400 font-semibold block">Total Subjects</span>
              <span className="text-2xl font-bold text-slate-800 block mt-1">{mockSubjects.length} Active</span>
              <span className="text-[10px] text-slate-400 font-semibold block mt-1">RGPV CSE 5th Semester</span>
            </div>

            <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm">
              <span className="text-xs text-slate-400 font-semibold block">Pending Approvals</span>
              <span className="text-2xl font-bold text-red-600 block mt-1">
                {approvals.filter(i => i.status === 'pending').length} Submissions
              </span>
              <span className="text-[10px] text-slate-400 font-semibold block mt-1">Requires expert check</span>
            </div>

            <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm">
              <span className="text-xs text-slate-400 font-semibold block">Index Coverage</span>
              <span className="text-2xl font-bold text-slate-800 block mt-1">100% Crawled</span>
              <span className="text-[10px] text-green-600 font-semibold block mt-1">Meilisearch fully synced</span>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Content Approvals (2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center px-2">
                <h2 className="text-lg font-bold text-slate-800">Review Submitted Study Content</h2>
                <span className="text-xs font-semibold text-slate-400">Moderation Feed</span>
              </div>

              <div className="space-y-4">
                {approvals.length > 0 ? (
                  approvals.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-4 relative overflow-hidden"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                              {item.type.replace('_', ' ').toUpperCase()}
                            </span>
                            <span className="text-[9px] font-semibold text-blue-600">
                              {item.subjectName} (Unit {item.unit})
                            </span>
                          </div>
                          <h3 className="text-sm font-bold text-slate-800 leading-relaxed pt-1">{item.title}</h3>
                          <p className="text-[10px] text-slate-400">Submitted by: {item.author}</p>
                        </div>

                        {item.status === 'approved' ? (
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/30 flex items-center gap-1">
                            <Check size={12} />
                            Approved
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/30">
                            Review Needed
                          </span>
                        )}
                      </div>

                      {item.status === 'pending' && (
                        <div className="flex items-center justify-end gap-2.5 border-t border-slate-50 pt-3">
                          <button
                            onClick={() => handleReject(item.id)}
                            className="px-3.5 py-1.5 border border-slate-200 hover:border-red-200 hover:bg-red-50 text-slate-500 hover:text-red-600 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                          >
                            Reject
                          </button>
                          <button
                            onClick={() => handleApprove(item.id)}
                            className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                          >
                            Approve & Publish
                          </button>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="bg-white border border-slate-200/80 rounded-2xl p-12 text-center text-slate-400">
                    <CheckSquare size={36} className="mx-auto text-slate-300 mb-2" />
                    <p className="text-sm font-bold">All caught up!</p>
                    <p className="text-xs mt-0.5">No pending content approvals left in current queue.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Quick DB Configuration forms */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Form 1: Create University */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <Layers size={16} className="text-blue-500" />
                  Add New University (SQL)
                </h3>
                
                <form onSubmit={handleCreateUni} className="space-y-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">University Name (Abbr.)</label>
                    <input
                      type="text"
                      placeholder="e.g. AKTU, VTU, JNTU"
                      value={uniInput}
                      onChange={(e) => setUniInput(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1 transition-all cursor-pointer"
                  >
                    <Plus size={14} />
                    Insert University Row
                  </button>
                </form>
              </div>

              {/* Form 2: Bulk Seed Content */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <UploadCloud size={16} className="text-blue-500" />
                  Syllabus PDF Seed
                </h3>
                <p className="text-xs text-slate-400">
                  Upload official RGPV syllabus PDFs to trigger our parser and auto-generate topics, descriptions, and tag difficulty.
                </p>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:bg-slate-50 hover:border-blue-300 transition-all cursor-pointer">
                  <UploadCloud size={32} className="mx-auto text-slate-400 mb-2" />
                  <span className="text-xs font-bold text-slate-700 block">Drag Syllabus PDF here</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Supports RGPV official templates</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
