'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, BookOpen, GraduationCap, FileText, User, Shield, CheckCircle, HelpCircle } from 'lucide-react';
import { searchMockData, SearchResult } from '@/lib/mockData';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [role, setRole] = useState<'student' | 'admin'>('student');
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Load default role from localStorage if available
    const savedRole = localStorage.getItem('exampilot-role');
    if (savedRole === 'admin') {
      setRole('admin');
    }
  }, []);

  const handleRoleChange = (newRole: 'student' | 'admin') => {
    setRole(newRole);
    localStorage.setItem('exampilot-role', newRole);
    if (newRole === 'admin') {
      router.push('/admin');
    } else {
      router.push('/dashboard');
    }
  };

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      setSearchResults(searchMockData(searchQuery));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Click outside search listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              EP
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">Exam<span className="text-blue-600">Pilot</span></span>
              <p className="text-[10px] text-slate-400 font-medium tracking-wider -mt-1 uppercase">Intelligence Platform</p>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium text-slate-600 hover:text-blue-600 flex items-center gap-1 transition-colors py-2 cursor-pointer">
                Universities
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 rounded-xl bg-white border border-slate-100 shadow-xl opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 p-2">
                <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">Engineering</div>
                <Link href="/dashboard?uni=RGPV" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors">
                  <GraduationCap size={16} className="text-slate-400" />
                  RGPV University
                </Link>
                <div className="px-3 py-1 text-xs text-slate-400 italic mt-1 border-t border-slate-50 pt-1.5">More coming in Phase 2</div>
              </div>
            </div>
          </nav>
        </div>

        {/* Global Search Bar */}
        <div ref={searchRef} className="flex-1 max-w-md relative mx-2">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search topics (e.g. Normalization, Bresenham)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              className="w-full pl-10 pr-4 py-2 bg-slate-100/80 border border-transparent rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
            />
          </div>

          {/* Instant Search Results Dropdown */}
          {isSearchFocused && searchQuery && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden z-50 animate-scale-in">
              <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-400 flex items-center justify-between">
                <span>Instant Results for "{searchQuery}"</span>
                <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Meili-Index</span>
              </div>
              
              <div className="max-h-80 overflow-y-auto divide-y divide-slate-50">
                {searchResults.length > 0 ? (
                  searchResults.map((result, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setIsSearchFocused(false);
                        setSearchQuery('');
                        router.push(`/subject/${result.subjectId}?tab=questions&q=${encodeURIComponent(result.title)}`);
                      }}
                      className="p-3.5 hover:bg-blue-50/50 cursor-pointer transition-colors flex items-start gap-3"
                    >
                      <div className="mt-0.5 p-1.5 rounded-lg bg-slate-100 text-slate-500">
                        {result.type === 'topic' ? <BookOpen size={16} /> : <FileText size={16} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                            {result.subjectName} (Unit {result.unitNumber})
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">
                            {result.type}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-slate-800 truncate">{result.title}</h4>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{result.snippet}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-slate-400">
                    <HelpCircle size={32} className="mx-auto text-slate-300 mb-2" />
                    <p className="text-sm font-medium">No results found in RGPV-CSE indices</p>
                    <p className="text-xs mt-0.5">Try searching "Bresenham", "OSI", or "Spiral"</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* User / Authentication Options */}
        <div className="flex items-center gap-3">
          {/* User Role Switcher for Demo */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-all cursor-pointer">
              {role === 'admin' ? (
                <>
                  <Shield size={14} className="text-red-500" />
                  <span>Admin Mode</span>
                </>
              ) : (
                <>
                  <User size={14} className="text-blue-500" />
                  <span>Student Mode</span>
                </>
              )}
            </button>
            <div className="absolute right-0 top-full mt-1.5 w-44 rounded-xl bg-white border border-slate-100 shadow-xl opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 p-1">
              <button
                onClick={() => handleRoleChange('student')}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  role === 'student' ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Student Interface</span>
                {role === 'student' && <CheckCircle size={12} />}
              </button>
              <button
                onClick={() => handleRoleChange('admin')}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  role === 'admin' ? 'bg-red-50 text-red-600' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Admin Panel</span>
                {role === 'admin' && <CheckCircle size={12} />}
              </button>
            </div>
          </div>

          {/* Quick Sign Out or Status */}
          <Link
            href="/dashboard"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all shadow-md shadow-blue-500/10 cursor-pointer"
          >
            Start Preparing
          </Link>
        </div>
      </div>
    </header>
  );
}
