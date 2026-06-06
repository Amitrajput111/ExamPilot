import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 mt-auto py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">
              EP
            </div>
            <span className="font-bold text-white tracking-tight">
              ExamPilot <span className="text-slate-500 font-normal">| RGPV CSE Study Reference</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-500 text-[11px]">
              &copy; {new Date().getFullYear()} ExamPilot. All rights reserved.
            </span>
          </div>

          {/* Clean Concise Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
            <Link href="/dashboard" className="hover:text-blue-400 transition-colors">
              Dashboard
            </Link>
            <Link href="/admin" className="hover:text-blue-400 transition-colors">
              Admin Panel
            </Link>
            <span className="hover:text-blue-400 transition-colors cursor-pointer">
              Resources
            </span>
            <span className="hover:text-blue-400 transition-colors cursor-pointer">
              Support Desk
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

