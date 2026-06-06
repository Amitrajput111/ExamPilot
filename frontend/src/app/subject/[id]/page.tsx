'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import { mockSubjects, Subject, Unit, Question } from '@/lib/mockData';
import { 
  BookOpen, ArrowLeft, ChevronRight, ChevronLeft, 
  Menu, X, CheckCircle, RefreshCw, ChevronUp, ChevronDown, Settings
} from 'lucide-react';
import Link from 'next/link';

function DiagramRenderer({ type }: { type: string }) {
  switch (type) {
    case 'taylor':
      return (
        <svg viewBox="0 0 240 140" className="w-full max-w-xs mx-auto text-slate-800 font-mono">
          <rect x="5" y="5" width="230" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <g stroke="#e2e8f0" strokeWidth="0.5">
            <line x1="20" y1="40" x2="220" y2="40" />
            <line x1="20" y1="70" x2="220" y2="70" />
            <line x1="20" y1="100" x2="220" y2="100" />
            <line x1="60" y1="15" x2="60" y2="125" />
            <line x1="120" y1="15" x2="120" y2="125" />
            <line x1="180" y1="15" x2="180" y2="125" />
          </g>
          <line x1="20" y1="70" x2="220" y2="70" stroke="#94a3b8" strokeWidth="1" />
          <line x1="120" y1="15" x2="120" y2="125" stroke="#94a3b8" strokeWidth="1" />
          <text x="212" y="66" className="text-[7px] fill-slate-400 font-bold">X</text>
          <text x="124" y="24" className="text-[7px] fill-slate-400 font-bold">Y</text>
          <path d="M 40,85 C 80,68 100,50 120,40 C 140,30 160,35 180,65 C 195,85 210,120 220,125" fill="none" stroke="#4f46e5" strokeWidth="2" />
          <text x="175" y="48" className="text-[6px] fill-indigo-650 font-bold">e^x cos(x)</text>
          <line x1="50" y1="110" x2="180" y2="10" stroke="#a855f7" strokeWidth="1" strokeDasharray="3" />
          <text x="170" y="22" className="text-[6px] fill-purple-600 font-bold">1 + x</text>
          <path d="M 50,115 C 80,75 100,50 120,40 C 140,30 165,30 185,5" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeDasharray="2" />
          <text x="135" y="12" className="text-[5px] fill-amber-600 font-bold">1 + x - x³/3</text>
          <circle cx="120" cy="40" r="3" fill="#ef4444" />
          <text x="125" y="44" className="text-[6px] fill-red-600 font-bold">(0, 1)</text>
        </svg>
      );
    case 'beta-gamma':
      return (
        <svg viewBox="0 0 240 140" className="w-full max-w-xs mx-auto text-slate-800 font-mono">
          <rect x="5" y="5" width="230" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="35" y1="115" x2="200" y2="115" stroke="#94a3b8" strokeWidth="1.2" />
          <line x1="35" y1="20" x2="35" y2="115" stroke="#94a3b8" strokeWidth="1.2" />
          <text x="195" y="112" className="text-[7px] fill-slate-455 font-bold">X</text>
          <text x="39" y="27" className="text-[7px] fill-slate-455 font-bold">Y</text>
          <path d="M 35,115 L 35,45 A 70,70 0 0,1 105,115 Z" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1" strokeDasharray="1" />
          <text x="60" y="85" className="text-[6px] fill-indigo-600 font-bold">Region R</text>
          <line x1="35" y1="115" x2="85" y2="65" stroke="#ec4899" strokeWidth="1.5" />
          <circle cx="85" cy="65" r="2.5" fill="#ec4899" />
          <text x="90" y="63" className="text-[6.5px] fill-pink-600 font-bold">P(r, θ)</text>
          <path d="M 55,115 A 20,20 0 0,0 49,101" fill="none" stroke="#0f766e" strokeWidth="1" />
          <text x="56" y="108" className="text-[6px] fill-teal-700 font-bold">θ</text>
          <rect x="130" y="25" width="90" height="50" rx="4" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <text x="135" y="36" className="text-[5.5px] fill-slate-500 font-bold">x = r cos(θ)</text>
          <text x="135" y="47" className="text-[5.5px] fill-slate-500 font-bold">y = r sin(θ)</text>
          <text x="135" y="58" className="text-[5.5px] fill-slate-500 font-bold">dx dy = r dr dθ</text>
          <text x="135" y="69" className="text-[5.5px] fill-indigo-650 font-bold">r ∈ [0, ∞), θ ∈ [0, π/2]</text>
        </svg>
      );
    case 'euler-partial':
      return (
        <svg viewBox="0 0 240 140" className="w-full max-w-xs mx-auto text-slate-800 font-mono">
          <rect x="5" y="5" width="230" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <rect x="15" y="45" width="45" height="40" rx="8" fill="white" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="37" y="63" textAnchor="middle" className="text-[8px] fill-slate-700 font-bold">x, y</text>
          <text x="37" y="75" textAnchor="middle" className="text-[5px] fill-slate-400 uppercase font-bold">Variables</text>
          <rect x="85" y="35" width="70" height="60" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" />
          <text x="120" y="55" textAnchor="middle" className="text-[8px] fill-emerald-800 font-bold">z = f(x,y)</text>
          <text x="120" y="68" textAnchor="middle" className="text-[5.5px] fill-emerald-650 font-bold">Homogeneous</text>
          <text x="120" y="80" textAnchor="middle" className="text-[5px] fill-emerald-500 font-mono">Degree n = 1</text>
          <rect x="180" y="45" width="45" height="40" rx="8" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
          <text x="202" y="63" textAnchor="middle" className="text-[8px] fill-indigo-800 font-bold">u = sin⁻¹(z)</text>
          <text x="202" y="75" textAnchor="middle" className="text-[5px] fill-indigo-550 uppercase font-bold">Composite</text>
          <g stroke="#64748b" strokeWidth="1.2" fill="none">
            <path d="M 60,65 L 82,65" />
            <path d="M 155,65 L 177,65" />
            <polygon points="82,65 77,62 77,68" fill="#64748b" />
            <polygon points="177,65 172,62 172,68" fill="#64748b" />
          </g>
          <rect x="30" y="108" width="180" height="22" rx="4" fill="#1e293b" />
          <text x="120" y="122" textAnchor="middle" className="text-[7.5px] fill-emerald-400 font-bold font-mono">x(∂u/∂x) + y(∂u/∂y) = tan(u)</text>
        </svg>
      );
    case 'comp-block':
      return (
        <svg viewBox="0 0 240 140" className="w-full max-w-xs mx-auto text-slate-800 font-mono">
          <rect x="5" y="5" width="230" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <rect x="10" y="35" width="45" height="35" rx="4" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.2" />
          <text x="32" y="52" textAnchor="middle" className="text-[7px] fill-blue-800 font-bold">Input</text>
          <text x="32" y="61" textAnchor="middle" className="text-[4.5px] fill-blue-500 uppercase">Keyboard/Mouse</text>
          <rect x="70" y="15" width="100" height="75" rx="6" fill="white" stroke="#475569" strokeWidth="1.5" />
          <text x="120" y="24" textAnchor="middle" className="text-[6px] fill-slate-400 uppercase tracking-widest font-bold">CPU Workspace</text>
          <rect x="75" y="30" width="90" height="22" rx="3" fill="#faf5ff" stroke="#a855f7" strokeWidth="1" />
          <text x="120" y="43" textAnchor="middle" className="text-[6.5px] fill-purple-800 font-bold">Control Unit (CU)</text>
          <rect x="75" y="59" width="90" height="22" rx="3" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1" />
          <text x="120" y="72" textAnchor="middle" className="text-[6.5px] fill-emerald-800 font-bold">Arithmetic Logic (ALU)</text>
          <rect x="70" y="100" width="100" height="30" rx="4" fill="#fffbeb" stroke="#d97706" strokeWidth="1.2" />
          <text x="120" y="112" textAnchor="middle" className="text-[7px] fill-amber-800 font-bold">Memory System</text>
          <text x="120" y="122" textAnchor="middle" className="text-[4.5px] fill-amber-600 font-bold">RAM (Volatile) | SSD (Non-volatile)</text>
          <rect x="185" y="35" width="45" height="35" rx="4" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.2" />
          <text x="207" y="52" textAnchor="middle" className="text-[7px] fill-blue-800 font-bold">Output</text>
          <text x="207" y="61" textAnchor="middle" className="text-[4.5px] fill-blue-500 uppercase">Monitor/Print</text>
          <g stroke="#64748b" strokeWidth="1.2" fill="none">
            <path d="M 55,52 L 67,52" />
            <path d="M 170,52 L 182,52" />
            <path d="M 120,90 L 120,98" />
            <polygon points="67,52 62,49 62,55" fill="#64748b" />
            <polygon points="182,52 177,49 177,55" fill="#64748b" />
            <polygon points="120,90 117,94 123,94" fill="#64748b" />
            <polygon points="120,98 117,94 123,94" fill="#64748b" />
          </g>
        </svg>
      );
    case 'thevenin':
      return (
        <svg viewBox="0 0 240 140" className="w-full max-w-xs mx-auto text-slate-800 font-mono">
          <rect x="5" y="5" width="230" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <circle cx="45" cy="70" r="14" fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />
          <text x="45" y="66" textAnchor="middle" className="text-[8px] fill-indigo-800 font-bold">+</text>
          <text x="45" y="80" textAnchor="middle" className="text-[8px] fill-indigo-800 font-bold">-</text>
          <text x="22" y="73" className="text-[7px] fill-indigo-705 font-bold">Vth</text>
          <path d="M 85,30 L 91,25 L 97,35 L 103,25 L 109,35 L 115,25 L 121,35 L 127,30" fill="none" stroke="#ea580c" strokeWidth="1.5" />
          <text x="106" y="18" textAnchor="middle" className="text-[7px] fill-orange-605 font-bold">Rth</text>
          <path d="M 45,56 L 45,30 L 85,30" fill="none" stroke="#475569" strokeWidth="1.2" />
          <path d="M 127,30 L 170,30" fill="none" stroke="#475569" strokeWidth="1.2" />
          <path d="M 45,84 L 45,110 L 170,110" fill="none" stroke="#475569" strokeWidth="1.2" />
          <circle cx="170" cy="30" r="2.5" fill="#475569" />
          <circle cx="170" cy="110" r="2.5" fill="#475569" />
          <text x="175" y="27" className="text-[7.5px] fill-slate-700 font-bold">A</text>
          <text x="175" y="115" className="text-[7.5px] fill-slate-700 font-bold">B</text>
          <path d="M 170,30 L 170,55 L 165,58 L 175,64 L 165,70 L 175,76 L 165,82 L 175,88 L 170,91 L 170,110" fill="none" stroke="#22c55e" strokeWidth="1.2" />
          <text x="182" y="73" className="text-[7px] fill-emerald-650 font-bold">RL</text>
        </svg>
      );
    case 'newtons-rings':
      return (
        <svg viewBox="0 0 240 140" className="w-full max-w-xs mx-auto text-slate-800 font-mono">
          <rect x="5" y="5" width="230" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <g transform="translate(10, 10)">
            <rect x="10" y="85" width="80" height="12" fill="white" stroke="#94a3b8" strokeWidth="1.2" />
            <text x="50" y="93" textAnchor="middle" className="text-[5px] fill-slate-500">Glass Plate</text>
            <path d="M 15,55 L 85,55 A 80,80 0 0,1 50,85 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.2" />
            <text x="50" y="47" textAnchor="middle" className="text-[5.5px] fill-sky-800 font-bold">Plano-Convex Lens</text>
            <path d="M 35,80 L 22,70" stroke="#f59e0b" strokeWidth="0.8" fill="none" />
            <polygon points="35,80 30,76 33,81" fill="#f59e0b" />
            <text x="10" y="67" className="text-[5px] fill-amber-605 font-bold">Air Film</text>
          </g>
          <g transform="translate(165, 70)">
            <circle cx="0" cy="0" r="45" fill="none" stroke="#cbd5e1" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="38" fill="none" stroke="#000" strokeWidth="4.5" />
            <circle cx="0" cy="0" r="30" fill="none" stroke="#000" strokeWidth="3.5" />
            <circle cx="0" cy="0" r="22" fill="none" stroke="#000" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="14" fill="none" stroke="#000" strokeWidth="1.8" />
            <circle cx="0" cy="0" r="6" fill="none" stroke="#000" strokeWidth="1.2" />
            <circle cx="0" cy="0" r="2.5" fill="#000" />
            <text x="0" y="-52" textAnchor="middle" className="text-[6px] fill-slate-500 uppercase tracking-wider font-bold">Newton's Rings</text>
          </g>
          <line x1="108" y1="15" x2="108" y2="125" stroke="#e2e8f0" strokeDasharray="3" />
        </svg>
      );
    case 'stack-op':
      return (
        <svg viewBox="0 0 240 140" className="w-full max-w-xs mx-auto text-slate-800 font-mono">
          <rect x="5" y="5" width="230" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="90" y1="20" x2="90" y2="120" stroke="#475569" strokeWidth="2" />
          <line x1="140" y1="20" x2="140" y2="120" stroke="#475569" strokeWidth="2" />
          <line x1="90" y1="120" x2="140" y2="120" stroke="#475569" strokeWidth="2" />
          <text x="115" y="130" textAnchor="middle" className="text-[5.5px] fill-slate-400 uppercase">Stack Array</text>
          <rect x="94" y="96" width="42" height="20" fill="#f0fdf4" rx="2" stroke="#22c55e" strokeWidth="1" />
          <text x="115" y="108" textAnchor="middle" className="text-[7px] fill-emerald-800 font-bold">A [0]</text>
          <rect x="94" y="72" width="42" height="20" fill="#f0fdf4" rx="2" stroke="#22c55e" strokeWidth="1" />
          <text x="115" y="84" textAnchor="middle" className="text-[7px] fill-emerald-800 font-bold">B [1]</text>
          <rect x="94" y="48" width="42" height="20" fill="#eff6ff" rx="2" stroke="#3b82f6" strokeWidth="1" />
          <text x="115" y="60" textAnchor="middle" className="text-[7px] fill-blue-800 font-bold">C [2]</text>
          <path d="M 180,58 L 148,58" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
          <polygon points="148,58 153,55 153,61" fill="#3b82f6" />
          <text x="185" y="61" className="text-[8px] fill-blue-800 font-bold">TOP = 2</text>
          <path d="M 40,25 C 55,25 75,35 84,48" stroke="#ea580c" strokeWidth="1.2" strokeDasharray="3" fill="none" />
          <polygon points="84,48 83,43 79,46" fill="#ea580c" />
          <text x="35" y="20" textAnchor="middle" className="text-[6.5px] fill-orange-600 font-bold">PUSH (D)</text>
          <path d="M 136,44 C 145,30 165,20 180,20" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="3" fill="none" />
          <polygon points="180,20 175,17 177,23" fill="#ef4444" />
          <text x="190" y="15" textAnchor="middle" className="text-[6.5px] fill-red-650 font-bold">POP (C)</text>
        </svg>
      );
    case 'dbms-3schema':
      return (
        <svg viewBox="0 0 240 140" className="w-full max-w-xs mx-auto text-slate-800 font-mono">
          <rect x="5" y="5" width="230" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <rect x="15" y="15" width="210" height="25" rx="4" fill="#faf5ff" stroke="#a855f7" strokeWidth="1" />
          <text x="120" y="23" textAnchor="middle" className="text-[6.5px] fill-purple-800 font-bold">External Level (Views 1, 2, ...)</text>
          <text x="120" y="32" textAnchor="middle" className="text-[4.5px] fill-purple-500 uppercase font-bold">Individual User Views</text>
          <rect x="15" y="55" width="210" height="25" rx="4" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1" />
          <text x="120" y="63" textAnchor="middle" className="text-[6.5px] fill-blue-800 font-bold">Conceptual Level (Logical Schema)</text>
          <text x="120" y="72" textAnchor="middle" className="text-[4.5px] fill-blue-500 uppercase font-bold">Tables, Relationships & Constraints</text>
          <rect x="15" y="95" width="130" height="25" rx="4" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1" />
          <text x="80" y="103" textAnchor="middle" className="text-[6.5px] fill-emerald-800 font-bold">Internal Level (Physical)</text>
          <text x="80" y="112" textAnchor="middle" className="text-[4.5px] fill-emerald-500 uppercase font-bold">Data Storage & Indexes</text>
          <path d="M 190,95 C 190,90 220,90 220,95 L 220,115 C 220,120 190,120 190,115 Z" fill="#fffbeb" stroke="#d97706" strokeWidth="1" />
          <path d="M 190,95 C 190,100 220,100 220,95" fill="none" stroke="#d97706" strokeWidth="1" />
          <path d="M 190,102 C 190,107 220,107 220,102" fill="none" stroke="#d97706" strokeWidth="1" />
          <path d="M 190,109 C 190,114 220,114 220,109" fill="none" stroke="#d97706" strokeWidth="1" />
          <text x="205" y="117" textAnchor="middle" className="text-[4.5px] fill-amber-700 font-bold font-mono">Disk Files</text>
          <g stroke="#64748b" strokeWidth="1.2" fill="none">
            <path d="M 60,40 L 60,50" />
            <polygon points="60,40 57,44 63,44" fill="#64748b" />
            <polygon points="60,50 57,46 63,46" fill="#64748b" />
            <text x="65" y="47" className="text-[4.5px] fill-slate-400 font-bold">Logical Indep.</text>
            <path d="M 80,80 L 80,90" />
            <polygon points="80,80 77,84 83,84" fill="#64748b" />
            <polygon points="80,90 77,86 83,86" fill="#64748b" />
            <text x="85" y="87" className="text-[4.5px] fill-slate-400 font-bold">Physical Indep.</text>
          </g>
        </svg>
      );
    case 'iot-planes':
      return (
        <svg viewBox="0 0 240 140" className="w-full max-w-xs mx-auto text-slate-800 font-mono">
          <rect x="5" y="5" width="230" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <g transform="translate(10, 10)">
            <rect x="10" y="5" width="60" height="20" rx="3" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1" />
            <text x="40" y="17" textAnchor="middle" className="text-[6px] fill-blue-800 font-bold">Data Plane</text>
            <rect x="85" y="5" width="60" height="20" rx="3" fill="#faf5ff" stroke="#a855f7" strokeWidth="1" />
            <text x="115" y="17" textAnchor="middle" className="text-[6px] fill-purple-800 font-bold">Control Plane</text>
            <rect x="160" y="5" width="60" height="20" rx="3" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1" />
            <text x="190" y="17" textAnchor="middle" className="text-[6px] fill-emerald-800 font-bold">Mgmt Plane</text>
            <rect x="10" y="45" width="135" height="30" rx="4" fill="white" stroke="#94a3b8" strokeWidth="1" />
            <text x="77.5" y="58" textAnchor="middle" className="text-[5.5px] fill-slate-750 font-bold">Sensors & RFID Nodes</text>
            <text x="77.5" y="68" textAnchor="middle" className="text-[4.5px] fill-slate-400 font-bold">Physical and transport</text>
            <rect x="155" y="45" width="65" height="30" rx="4" fill="#fffbeb" stroke="#d97706" strokeWidth="1" />
            <text x="187.5" y="58" textAnchor="middle" className="text-[5.5px] fill-amber-850 font-bold">Cloud & AI</text>
            <text x="187.5" y="68" textAnchor="middle" className="text-[4.5px] fill-amber-600 font-bold">Analytics</text>
            <g stroke="#94a3b8" strokeWidth="1" fill="none">
              <path d="M 40,25 L 40,40" />
              <path d="M 115,25 L 115,40" />
              <path d="M 190,25 L 190,40" />
              <polygon points="40,40 37,36 43,36" fill="#94a3b8" />
              <polygon points="115,40 112,36 118,36" fill="#94a3b8" />
              <polygon points="190,40 187,36 193,36" fill="#94a3b8" />
            </g>
            <rect x="10" y="90" width="210" height="20" rx="3" fill="#fff5f5" stroke="#f87171" strokeWidth="1" />
            <text x="115" y="102" textAnchor="middle" className="text-[6.5px] fill-red-800 font-bold uppercase tracking-wider">IoT Applications & APIs</text>
          </g>
        </svg>
      );
    case 'iot-architecture':
      return (
        <svg viewBox="0 0 240 140" className="w-full max-w-xs mx-auto text-slate-800 font-mono">
          <rect x="5" y="5" width="230" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <g transform="translate(15, 10)">
            <rect x="10" y="0" width="190" height="18" rx="3" fill="#fff5f5" stroke="#ef4444" strokeWidth="1" />
            <text x="105" y="11" textAnchor="middle" className="text-[6px] fill-red-850 font-bold">Business Layer (Management & Strategy)</text>
            <rect x="10" y="24" width="190" height="18" rx="3" fill="#faf5ff" stroke="#a855f7" strokeWidth="1" />
            <text x="105" y="35" textAnchor="middle" className="text-[6px] fill-purple-850 font-bold">Application Layer (Dashboards & Services)</text>
            <rect x="10" y="48" width="190" height="18" rx="3" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1" />
            <text x="105" y="59" textAnchor="middle" className="text-[6px] fill-blue-850 font-bold">Processing Layer (Data Analysis & Cloud DB)</text>
            <rect x="10" y="72" width="190" height="18" rx="3" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1" />
            <text x="105" y="83" textAnchor="middle" className="text-[6px] fill-emerald-850 font-bold">Communication Layer (Gateways & Network)</text>
            <rect x="10" y="96" width="190" height="18" rx="3" fill="#fffbeb" stroke="#d97706" strokeWidth="1" />
            <text x="105" y="107" textAnchor="middle" className="text-[6px] fill-amber-850 font-bold">Device Layer (Physical Sensors & Actuators)</text>
          </g>
        </svg>
      );
    case 'iot-functional-blocks':
      return (
        <svg viewBox="0 0 240 140" className="w-full max-w-xs mx-auto text-slate-800 font-mono">
          <rect x="5" y="5" width="230" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <g transform="translate(10, 10)">
            <rect x="10" y="5" width="60" height="22" rx="3" fill="#fffbeb" stroke="#d97706" strokeWidth="1" />
            <text x="40" y="18" textAnchor="middle" className="text-[6.5px] fill-amber-850 font-bold">Devices Block</text>
            <rect x="85" y="5" width="60" height="22" rx="3" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1" />
            <text x="115" y="18" textAnchor="middle" className="text-[6.5px] fill-emerald-850 font-bold">Communication</text>
            <rect x="160" y="5" width="60" height="22" rx="3" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1" />
            <text x="190" y="18" textAnchor="middle" className="text-[6.5px] fill-blue-850 font-bold">Services Block</text>
            <rect x="10" y="45" width="95" height="22" rx="3" fill="#faf5ff" stroke="#a855f7" strokeWidth="1" />
            <text x="57.5" y="58" textAnchor="middle" className="text-[6.5px] fill-purple-850 font-bold">Management Block</text>
            <rect x="125" y="45" width="95" height="22" rx="3" fill="#fff1f2" stroke="#f43f5e" strokeWidth="1" />
            <text x="172.5" y="58" textAnchor="middle" className="text-[6.5px] fill-rose-850 font-bold">Security Block</text>
            <rect x="10" y="85" width="210" height="25" rx="4" fill="white" stroke="#475569" strokeWidth="1.2" />
            <text x="115" y="100" textAnchor="middle" className="text-[7.5px] fill-slate-800 font-bold uppercase tracking-wider">Application Block (UI Dashboard)</text>
            <g stroke="#94a3b8" strokeWidth="1" fill="none" strokeDasharray="2">
              <path d="M 40,27 L 40,45" />
              <path d="M 190,27 L 190,45 M 190,45 L 172.5,45" />
            </g>
          </g>
        </svg>
      );
    case 'iot-comm-models':
      return (
        <svg viewBox="0 0 240 140" className="w-full max-w-xs mx-auto text-slate-800 font-mono">
          <rect x="5" y="5" width="230" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <g transform="translate(10, 10)">
            <rect x="10" y="45" width="55" height="30" rx="4" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.2" />
            <text x="37.5" y="60" textAnchor="middle" className="text-[7.5px] fill-blue-800 font-bold">Publisher</text>
            <text x="37.5" y="70" textAnchor="middle" className="text-[5px] fill-blue-500 uppercase">Sensors</text>
            <rect x="85" y="25" width="60" height="70" rx="6" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5" />
            <text x="115" y="50" textAnchor="middle" className="text-[7.5px] fill-emerald-800 font-bold">Message</text>
            <text x="115" y="60" textAnchor="middle" className="text-[7.5px] fill-emerald-800 font-bold">Broker</text>
            <text x="115" y="70" textAnchor="middle" className="text-[5px] fill-emerald-500 font-mono uppercase">MQTT</text>
            <rect x="165" y="45" width="55" height="30" rx="4" fill="#faf5ff" stroke="#a855f7" strokeWidth="1.2" />
            <text x="192.5" y="60" textAnchor="middle" className="text-[7.5px] fill-purple-800 font-bold">Subscriber</text>
            <text x="192.5" y="70" textAnchor="middle" className="text-[5px] fill-purple-500 uppercase">Console/DB</text>
            <g stroke="#475569" strokeWidth="1.2" fill="none">
              <path d="M 65,60 L 82,60" />
              <path d="M 145,60 L 162,60" />
              <polygon points="82,60 77,57 77,63" fill="#475569" />
              <polygon points="162,60 157,57 157,63" fill="#475569" />
            </g>
            <text x="73.5" y="53" textAnchor="middle" className="text-[5.5px] fill-slate-500 font-bold">Publish</text>
            <text x="153.5" y="53" textAnchor="middle" className="text-[5.5px] fill-slate-500 font-bold">Subscribe</text>
          </g>
        </svg>
      );
    case 'iot-comm-apis':
      return (
        <svg viewBox="0 0 240 140" className="w-full max-w-xs mx-auto text-slate-800 font-mono">
          <rect x="5" y="5" width="230" height="130" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <g transform="translate(10, 10)">
            <rect x="10" y="45" width="40" height="30" rx="4" fill="#fffbeb" stroke="#d97706" strokeWidth="1.2" />
            <text x="30" y="62" textAnchor="middle" className="text-[7px] fill-amber-800 font-bold">Device</text>
            <rect x="75" y="35" width="70" height="50" rx="4" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.2" />
            <text x="110" y="55" textAnchor="middle" className="text-[7.5px] fill-blue-800 font-bold">API Gateway</text>
            <text x="110" y="65" textAnchor="middle" className="text-[5.5px] fill-blue-500 uppercase">REST/WebSockets</text>
            <rect x="170" y="45" width="45" height="30" rx="4" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.2" />
            <text x="192.5" y="62" textAnchor="middle" className="text-[7px] fill-emerald-800 font-bold">Cloud DB</text>
            <g stroke="#475569" strokeWidth="1.2" fill="none">
              <path d="M 50,60 L 72,60" />
              <path d="M 145,60 L 167,60" />
              <polygon points="72,60 67,57 67,63" fill="#475569" />
              <polygon points="167,60 162,57 162,63" fill="#475569" />
            </g>
          </g>
        </svg>
      );
    default:
      return null;
  }
}

function getQuestionDisplayNumber(q: { id: string }, index: number): string {
  const match = q.id.match(/q(\d+)$/i);
  if (match) {
    return match[1];
  }
  return (index + 1).toString();
}

function MarkdownNotesRenderer({ content }: { content: string }) {
  // Simple custom parser for exam notes markdown content
  const lines = content.split('\n');
  const renderedElements: React.ReactNode[] = [];
  
  let inCodeBlock = false;
  let codeBlockLines: string[] = [];
  
  let listItems: string[] = [];
  
  const flushList = (key: number) => {
    if (listItems.length > 0) {
      renderedElements.push(
        <ul key={`list-${key}`} className="list-disc pl-5 my-3.5 space-y-1.5 text-slate-700 text-xs sm:text-sm">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed font-semibold">{item}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Filter out Introduction and Diagram literal headers, as well as redundant titles/PYQ info
    if (
      trimmed === '## Introduction' || 
      trimmed === '## Diagram' ||
      /^# Q\d+\./i.test(trimmed) ||
      /^### PYQ:/i.test(trimmed) ||
      /^### Importance:/i.test(trimmed) ||
      (trimmed.startsWith('###') && (
        trimmed.includes('Probability') || 
        trimmed.includes('Theory') || 
        trimmed.includes('Short') || 
        trimmed.includes('Note')
      ))
    ) {
      continue;
    }
    
    // Code block handler
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        // End of code block
        inCodeBlock = false;
        const codeText = codeBlockLines.join('\n');
        
        // If it contains flowchart arrows, render as gorgeous rounded box components!
        const hasArrows = codeBlockLines.some(l => l.includes('↓') || l.includes('↑') || l.includes('→') || l.includes('←'));
        if (hasArrows) {
          renderedElements.push(
            <div key={`diagram-${i}`} className="my-6 p-6 border border-slate-200 rounded-2xl bg-slate-50/40 flex flex-col items-center gap-1.5 max-w-xs mx-auto shadow-sm">
              {codeBlockLines.map((l, idx) => {
                const cleanLine = l.trim();
                if (cleanLine === '') return null;
                if (cleanLine.includes('↓')) {
                  return <div key={idx} className="text-indigo-650 font-extrabold text-lg my-1 text-center select-none">↓</div>;
                }
                if (cleanLine.includes('↑')) {
                  return <div key={idx} className="text-indigo-650 font-extrabold text-lg my-1 text-center select-none">↑</div>;
                }
                return (
                  <div key={idx} className="w-full bg-white border border-slate-200 text-slate-800 text-[10px] sm:text-xs font-bold text-center py-2.5 px-4 rounded-xl shadow-sm hover:border-indigo-300 hover:shadow transition-all uppercase tracking-wider font-sans">
                    {cleanLine}
                  </div>
                );
              })}
            </div>
          );
        } else {
          // Regular code block
          renderedElements.push(
            <pre key={`code-${i}`} className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4 overflow-x-auto text-[11px] sm:text-xs font-mono text-slate-755 leading-relaxed shadow-inner">
              <code>{codeText}</code>
            </pre>
          );
        }
        codeBlockLines = [];
      } else {
        // Start of code block
        flushList(i);
        inCodeBlock = true;
      }
      continue;
    }
    
    if (inCodeBlock) {
      codeBlockLines.push(line);
      continue;
    }
    
    // Bullet point list handler
    if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
      const bulletText = line.trim().substring(2);
      listItems.push(bulletText);
      continue;
    } else {
      flushList(i);
    }
    
    // Horizontal rule
    if (line.trim() === '---') {
      renderedElements.push(<hr key={`hr-${i}`} className="my-6 border-slate-200" />);
      continue;
    }
    
    // Headings
    if (line.startsWith('# ')) {
      renderedElements.push(
        <h1 key={`h1-${i}`} className="text-sm sm:text-base font-extrabold text-slate-900 mt-6 mb-3 border-b border-slate-100 pb-1 font-sans">
          {line.substring(2)}
        </h1>
      );
      continue;
    }
    
    if (line.startsWith('## ')) {
      renderedElements.push(
        <h2 key={`h2-${i}`} className="text-xs sm:text-sm font-extrabold text-indigo-700 mt-5 mb-2.5 font-sans">
          {line.substring(3)}
        </h2>
      );
      continue;
    }
    
    if (line.startsWith('### ')) {
      renderedElements.push(
        <h3 key={`h3-${i}`} className="text-[11px] sm:text-xs font-extrabold text-slate-800 mt-4 mb-2 font-sans">
          {line.substring(4)}
        </h3>
      );
      continue;
    }
    
    // Empty line or simple paragraphs
    if (line.trim() === '') {
      continue;
    }
    
    // Normal paragraph
    renderedElements.push(
      <p key={`p-${i}`} className="text-xs sm:text-sm text-slate-700 leading-relaxed my-2.5 font-semibold text-justify">
        {line}
      </p>
    );
  }
  
  // Flush remaining list items if any
  flushList(lines.length);
  
  return <div className="space-y-1 font-sans pr-1 select-text">{renderedElements}</div>;
}

function IotUnitNotesView({ unit, activeQuestionId }: { unit: Unit; activeQuestionId: string | null }) {
  const [isExtraExpanded, setIsExtraExpanded] = useState(true);

  // Split questions into PYQs and Extra
  const pyqs = unit.questions.filter(q => q.askedYears.length > 0);
  const extraQuestions = unit.questions.filter(q => q.askedYears === undefined || q.askedYears.length === 0);

  // Auto scroll to active question when it changes
  useEffect(() => {
    if (activeQuestionId) {
      const isExtra = extraQuestions.some(q => q.id === activeQuestionId);
      if (isExtra && !isExtraExpanded) {
        setIsExtraExpanded(true);
      }
      
      // Delay slightly to allow layout calculations
      const timer = setTimeout(() => {
        const el = document.getElementById(`q-${activeQuestionId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [activeQuestionId, isExtraExpanded, extraQuestions]);

  return (
    <div className="space-y-10 pb-12 animate-scale-in">
      <div className="border-b border-slate-200 pb-4">
        <span className="text-[10px] text-indigo-650 font-bold uppercase tracking-wider font-mono">CSE • Semester 8 • Unit {unit.number}</span>
        <h1 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">{unit.title}</h1>
        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-semibold">{unit.overview}</p>
      </div>

      {/* 1. Previous Year Questions Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider font-sans">Previous Year Questions</h2>
        </div>
        
        {pyqs.length > 0 ? (
          <div className="space-y-8">
            {pyqs.map((q) => {
              const isActive = activeQuestionId === q.id;
              const absIdx = unit.questions.findIndex(x => x.id === q.id);
              return (
                <div key={q.id} id={`q-${q.id}`} className={`scroll-mt-24 space-y-4 transition-all duration-300 ${isActive ? 'scale-[1.01]' : ''}`}>
                  <div className={`rounded-2xl p-5 space-y-2.5 transition-all border duration-300 ${
                    isActive 
                      ? 'bg-indigo-50/40 border-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.08)]' 
                      : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex flex-wrap items-center gap-2">
                      {q.askedYears.length > 0 && (
                        <span className="text-[8.5px] font-bold bg-slate-900 text-white px-2 py-0.5 rounded font-mono">
                          PYQ: {q.askedYears.join(', ')}
                        </span>
                      )}
                      <span className="text-[8.5px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded font-mono">
                        {'★'.repeat(q.stars)}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-relaxed">
                      Q{getQuestionDisplayNumber(q, absIdx)}. {q.text}
                    </h3>
                  </div>
                  {q.modelAnswer.content && (
                    <div className={`bg-white border rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-300 ${
                      isActive 
                        ? 'border-indigo-300 shadow-[0_4px_20px_rgba(99,102,241,0.06)]' 
                        : 'border-slate-200'
                    }`}>
                      <MarkdownNotesRenderer content={q.modelAnswer.content} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-xs text-slate-450 font-semibold italic">No previous year questions indexed for this unit.</p>
        )}
      </div>

      {/* 2. Collapsible Extra Important Questions Section */}
      <div className="space-y-4">
        <button
          onClick={() => setIsExtraExpanded(!isExtraExpanded)}
          className="w-full flex items-center justify-between border-b border-slate-100 pb-2 cursor-pointer group focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider font-sans group-hover:text-indigo-655 transition-colors">
              Extra Important Questions ({extraQuestions.length})
            </h2>
          </div>
          {isExtraExpanded ? (
            <ChevronUp size={16} className="text-slate-500" />
          ) : (
            <ChevronDown size={16} className="text-slate-400" />
          )}
        </button>

        {isExtraExpanded && (
          <div className="space-y-8 pt-2 animate-scale-in">
            {extraQuestions.map((q) => {
              const isActive = activeQuestionId === q.id;
              const absIdx = unit.questions.findIndex(x => x.id === q.id);
              return (
                <div key={q.id} id={`q-${q.id}`} className={`scroll-mt-24 space-y-4 transition-all duration-300 ${isActive ? 'scale-[1.01]' : ''}`}>
                  <div className={`rounded-2xl p-5 space-y-2.5 transition-all border duration-300 ${
                    isActive 
                      ? 'bg-indigo-50/40 border-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.08)]' 
                      : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[8.5px] font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded font-mono">
                        Important Question
                      </span>
                      <span className="text-[8.5px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded font-mono">
                        {'★'.repeat(q.stars)}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-relaxed">
                      Q{getQuestionDisplayNumber(q, absIdx)}. {q.text}
                    </h3>
                  </div>
                  {q.modelAnswer.content && (
                    <div className={`bg-white border rounded-2xl p-6 sm:p-8 shadow-sm transition-all duration-300 ${
                      isActive 
                        ? 'border-indigo-300 shadow-[0_4px_20px_rgba(99,102,241,0.06)]' 
                        : 'border-slate-200'
                    }`}>
                      <MarkdownNotesRenderer content={q.modelAnswer.content} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function SubjectPageContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const subjectId = params.id as string;
  
  // URL Query Parameters to know the current semester context
  const uni = searchParams.get('uni') || 'RGPV';
  const branch = searchParams.get('branch') || 'CSE';
  const sem = searchParams.get('sem') || '1';

  const [activeSubject, setActiveSubject] = useState<Subject | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  
  // Mobile sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Desktop folding sidebar collapse state
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  // Quick Revision Panel state (collapsed by default)
  const [isRevisionOpen, setIsRevisionOpen] = useState(false);

  // Track covered/read questions in the active subject
  const [coveredQuestions, setCoveredQuestions] = useState<string[]>([]);

  // Accordion state for sidebar units
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({});
  const [isSubjectSelectorOpen, setIsSubjectSelectorOpen] = useState(false);

  const toggleUnitExpanded = (unitId: string) => {
    setExpandedUnits(prev => ({
      ...prev,
      [unitId]: !prev[unitId]
    }));
  };

  useEffect(() => {
    if (selectedUnit) {
      setExpandedUnits(prev => ({
        ...prev,
        [selectedUnit.id]: true
      }));
    }
  }, [selectedUnit]);


  const handleSwitchTrack = (newUni: string, newBranch: string, newSem: string, targetSubjectId?: string | null) => {
    const newSemesterSubjects = mockSubjects.filter(s => 
      s.university === newUni && 
      s.branch === newBranch && 
      s.semester === Number(newSem)
    );

    if (newSemesterSubjects.length > 0) {
      const targetSub = targetSubjectId 
        ? (newSemesterSubjects.find(s => s.id === targetSubjectId) || newSemesterSubjects[0])
        : newSemesterSubjects[0];
      
      setActiveSubject(targetSub);
      setSelectedUnit(targetSub.units[0]);
      setSelectedQuestion(null);
      setIsRevisionOpen(false);
      router.push(`/subject/${targetSub.id}?uni=${newUni}&branch=${newBranch}&sem=${newSem}`);
    } else {
      router.push(`/dashboard?uni=${newUni}&branch=${newBranch}&sem=${newSem}`);
    }
  };

  // Filter all subjects for the selected semester to show in the switcher bar
  const semesterSubjects = mockSubjects.filter(s => 
    s.university === uni && 
    s.branch === branch && 
    s.semester === Number(sem)
  );

  // Group all subjects for the active university and branch by semester
  const allSubjectsBySemester = React.useMemo(() => {
    const grouped: Record<number, Subject[]> = {};
    mockSubjects.forEach(s => {
      if (s.university === uni && s.branch === branch) {
        if (!grouped[s.semester]) {
          grouped[s.semester] = [];
        }
        grouped[s.semester].push(s);
      }
    });
    return grouped;
  }, [uni, branch]);

  useEffect(() => {
    const foundSubject = mockSubjects.find(s => s.id === subjectId);
    if (foundSubject) {
      setActiveSubject(foundSubject);
      setSelectedUnit(foundSubject.units[0]);
      setSelectedQuestion(null); // By default, show the first Unit index
    } else if (semesterSubjects.length > 0) {
      setActiveSubject(semesterSubjects[0]);
      setSelectedUnit(semesterSubjects[0].units[0]);
      setSelectedQuestion(null);
    }
  }, [subjectId, sem]);

  // Load progress status from localStorage
  useEffect(() => {
    if (subjectId) {
      const saved = localStorage.getItem(`covered-${subjectId}`);
      if (saved) {
        try {
          setCoveredQuestions(JSON.parse(saved));
        } catch (e) {}
      } else {
        setCoveredQuestions([]);
      }
    }
  }, [subjectId]);

  const toggleQuestionCovered = (qId: string) => {
    const next = coveredQuestions.includes(qId)
      ? coveredQuestions.filter(id => id !== qId)
      : [...coveredQuestions, qId];
    setCoveredQuestions(next);
    localStorage.setItem(`covered-${subjectId}`, JSON.stringify(next));
  };

  const handleSwitchSubject = (sub: Subject) => {
    setActiveSubject(sub);
    setSelectedUnit(sub.units[0]);
    setSelectedQuestion(null);
    setIsRevisionOpen(false);
    router.push(`/subject/${sub.id}?uni=${uni}&branch=${branch}&sem=${sem}`);
  };

  const handleSelectUnit = (unit: Unit) => {
    setSelectedUnit(unit);
    setSelectedQuestion(null);
    setIsRevisionOpen(false);
  };

  const handleSelectQuestion = (unit: Unit, q: Question) => {
    setSelectedUnit(unit);
    setSelectedQuestion(q);
    setIsRevisionOpen(false);
  };

  // Next and Previous Navigation logic that flows through units and questions sequentially
  const getNavigationPaths = () => {
    if (!activeSubject || !selectedUnit) return { prev: null, next: null };
    
    const unitIndex = activeSubject.units.findIndex(u => u.id === selectedUnit.id);
    
    // If viewing Unit Index (no question selected)
    if (!selectedQuestion) {
      const prevUnit = unitIndex > 0 ? activeSubject.units[unitIndex - 1] : null;
      const nextUnit = unitIndex < activeSubject.units.length - 1 ? activeSubject.units[unitIndex + 1] : null;
      
      return {
        prev: prevUnit 
          ? (prevUnit.questions.length > 0 
              ? { label: `Q${getQuestionDisplayNumber(prevUnit.questions[prevUnit.questions.length - 1], prevUnit.questions.length - 1)}: ${prevUnit.questions[prevUnit.questions.length - 1].text.substring(0, 20)}...`, action: () => handleSelectQuestion(prevUnit, prevUnit.questions[prevUnit.questions.length - 1]) }
              : { label: `Unit ${prevUnit.number} Index`, action: () => handleSelectUnit(prevUnit) }
            )
          : null,
        next: selectedUnit.questions.length > 0 
          ? { label: `Q${getQuestionDisplayNumber(selectedUnit.questions[0], 0)}: ${selectedUnit.questions[0].text.substring(0, 20)}...`, action: () => handleSelectQuestion(selectedUnit, selectedUnit.questions[0]) }
          : (nextUnit ? { label: `Unit ${nextUnit.number} Index`, action: () => handleSelectUnit(nextUnit) } : null)
      };
    }

    // If viewing a Question
    const qIndex = selectedUnit.questions.findIndex(q => q.id === selectedQuestion.id);
    const prevQ = qIndex > 0 ? selectedUnit.questions[qIndex - 1] : null;
    const nextQ = qIndex < selectedUnit.questions.length - 1 ? selectedUnit.questions[qIndex + 1] : null;
    const nextUnit = unitIndex < activeSubject.units.length - 1 ? activeSubject.units[unitIndex + 1] : null;

    return {
      prev: prevQ 
        ? { label: `Q${getQuestionDisplayNumber(prevQ, qIndex - 1)}: ${prevQ.text.substring(0, 20)}...`, action: () => handleSelectQuestion(selectedUnit, prevQ) }
        : { label: `Unit ${selectedUnit.number} Index`, action: () => handleSelectUnit(selectedUnit) },
      next: nextQ
        ? { label: `Q${getQuestionDisplayNumber(nextQ, qIndex + 1)}: ${nextQ.text.substring(0, 20)}...`, action: () => handleSelectQuestion(selectedUnit, nextQ) }
        : (nextUnit ? { label: `Unit ${nextUnit.number} Index`, action: () => handleSelectUnit(nextUnit) } : null)
    };
  };

  const nav = getNavigationPaths();

  if (!activeSubject) {
    return (
      <div className="flex flex-col h-screen overflow-hidden bg-white font-sans text-slate-800 relative">
        <Header />
        
        <main className="flex-grow flex items-center justify-center p-8 text-center bg-slate-50/30">
          <div className="max-w-md p-6 border border-slate-250/80 rounded-2xl bg-white shadow-sm space-y-4">
            <h2 className="text-lg font-extrabold text-slate-900">Subject Not Found / Offline</h2>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              The requested syllabus subject track is offline or index database is blank. Currently, Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) Computer Science & Engineering (CSE) tracks are indexed.
            </p>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => handleSwitchTrack('RGPV', 'CSE', '1')} 
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl cursor-pointer transition-colors shadow-sm w-full"
              >
                Reset to RGPV CSE Sem 1
              </button>
              <Link 
                href="/dashboard"
                className="px-4 py-2 border border-slate-250 hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-xl cursor-pointer transition-colors w-full inline-block text-center"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }


  const totalQuestionsCount = activeSubject.units.reduce((acc, u) => acc + u.questions.length, 0);
  const coveredQuestionsCount = activeSubject.units.reduce((acc, u) => acc + u.questions.filter(q => coveredQuestions.includes(q.id)).length, 0);
  const coveragePercent = totalQuestionsCount > 0 ? Math.round((coveredQuestionsCount / totalQuestionsCount) * 100) : 0;

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white text-slate-800 relative">
      <Header />

      <div className="flex flex-grow overflow-hidden relative">
        <aside 
          className={`fixed inset-y-0 left-0 z-40 md:relative md:z-auto md:translate-x-0 shrink-0 border-r border-slate-200 bg-slate-50/60 flex flex-col h-full transform transition-all duration-305 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } ${
            isSidebarCollapsed ? 'md:w-0 overflow-hidden md:border-r-0' : 'w-80'
          }`}
        >
          <div className="p-4 border-b border-slate-200 bg-slate-100/40 shrink-0 space-y-3">
            <Link 
              href={`/dashboard?uni=${uni}&branch=${branch}&sem=${sem}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-655 hover:text-indigo-800 transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Subjects</span>
            </Link>
            
            <div className="relative">
              <button 
                onClick={() => setIsSubjectSelectorOpen(!isSubjectSelectorOpen)}
                className="w-full text-left bg-white border border-slate-200 hover:border-slate-350 p-2.5 rounded-xl flex items-center justify-between cursor-pointer transition-all shadow-sm focus:outline-none"
              >
                <div className="min-w-0 pr-1">
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                    Active Subject
                  </span>
                  <h3 className="text-xs font-extrabold text-slate-900 truncate">
                    {activeSubject.code} &bull; {activeSubject.name}
                  </h3>
                </div>
                <ChevronDown size={14} className={`text-slate-400 shrink-0 transition-transform duration-200 ${isSubjectSelectorOpen ? 'rotate-180' : ''}`} />
              </button>

              {isSubjectSelectorOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-50 overflow-hidden divide-y divide-slate-100 animate-slide-down">
                  <div className="p-2 bg-slate-50 text-[8px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                    All Semester Subjects
                  </div>
                  <div className="max-h-80 overflow-y-auto no-scrollbar divide-y divide-slate-100">
                    {Object.keys(allSubjectsBySemester).sort().map((semesterStr) => {
                      const semesterNum = Number(semesterStr);
                      const subjects = allSubjectsBySemester[semesterNum];
                      return (
                        <div key={semesterNum} className="p-1 space-y-0.5">
                          <div className="px-2 py-1 text-[7.5px] font-bold text-slate-400 uppercase tracking-wider font-mono bg-slate-50/50 rounded">
                            Semester {semesterNum}
                          </div>
                          {subjects.map((sub) => {
                            const isActive = sub.id === activeSubject.id;
                            return (
                              <button
                                key={sub.id}
                                onClick={() => {
                                  handleSwitchTrack(uni, branch, semesterNum.toString(), sub.id);
                                  setIsSubjectSelectorOpen(false);
                                }}
                                className={`w-full text-left p-2 rounded-lg text-[10px] font-semibold transition-all cursor-pointer flex flex-col ${
                                  isActive 
                                    ? 'bg-indigo-50 text-indigo-650 font-bold border border-indigo-100/50' 
                                    : 'text-slate-605 hover:bg-slate-50 hover:text-slate-900 border border-transparent'
                                }`}
                              >
                                <span className="text-[7.5px] font-mono opacity-60 leading-none mb-0.5">{sub.code}</span>
                                <span className="truncate leading-normal">{sub.name}</span>
                              </button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar p-3 space-y-4">
            <div className="space-y-2">
              <span className="text-[9px] font-bold text-slate-455 uppercase tracking-wider block font-mono px-1">
                Syllabus & Units
              </span>
              <div className="space-y-2">
                {activeSubject.units.map((unit) => {
                  const isUnitSelected = selectedUnit?.id === unit.id;
                  const isExpanded = !!expandedUnits[unit.id];
                  const coveredInUnit = unit.questions.filter(q => coveredQuestions.includes(q.id)).length;
                  const totalInUnit = unit.questions.length;
                  
                  return (
                    <div 
                      key={unit.id} 
                      className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                        isUnitSelected 
                          ? 'border-indigo-400 bg-white shadow-sm' 
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <button 
                        onClick={() => {
                          toggleUnitExpanded(unit.id);
                          handleSelectUnit(unit);
                        }} 
                        className={`w-full text-left p-3 flex items-center justify-between text-xs font-bold cursor-pointer transition-colors ${
                          isUnitSelected ? 'bg-indigo-50/5' : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[9px] font-mono font-bold shrink-0 ${
                            isUnitSelected ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500'
                          }`}>
                            0{unit.number}
                          </span>
                          <div className="min-w-0">
                            <h4 className="text-slate-900 truncate text-[11px]">Unit {unit.number}</h4>
                            <p className="text-[9px] text-slate-400 font-normal truncate mt-0.5">{unit.title}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0 ml-1">
                          {totalInUnit > 0 && (
                            <span className="text-[9px] text-slate-400 font-mono bg-slate-100 px-1 py-0.5 rounded">
                              {coveredInUnit}/{totalInUnit}
                            </span>
                          )}
                          {isExpanded ? (
                            <ChevronDown size={14} className="text-slate-500" />
                          ) : (
                            <ChevronRight size={14} className="text-slate-400" />
                          )}
                        </div>
                      </button>

                      {/* Accordion Questions List */}
                      {isExpanded && (
                        <div className="border-t border-slate-100 bg-slate-50/30 p-1.5 space-y-1">
                          {unit.questions.map((q, qIdx) => {
                            const isQuestionSelected = selectedQuestion?.id === q.id;
                            const isCovered = coveredQuestions.includes(q.id);
                            
                            return (
                              <button
                                key={q.id}
                                onClick={() => handleSelectQuestion(unit, q)}
                                className={`w-full text-left px-2.5 py-2 rounded-lg text-[10px] leading-relaxed font-semibold transition-all flex items-start gap-2 cursor-pointer ${
                                  isQuestionSelected 
                                    ? 'bg-indigo-650 text-white shadow-sm' 
                                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                                }`}
                              >
                                <span className={`mt-0.5 shrink-0 h-4 w-4 rounded-full flex items-center justify-center text-[8px] font-mono font-bold ${
                                  isQuestionSelected 
                                    ? 'bg-indigo-500 text-white' 
                                    : isCovered
                                      ? 'bg-emerald-100 text-emerald-700'
                                      : 'bg-slate-200 text-slate-500'
                                }`}>
                                  {isCovered && !isQuestionSelected ? '✓' : getQuestionDisplayNumber(q, qIdx)}
                                </span>
                                <span className="flex-grow flex flex-col gap-0.5">
                                  <span className="line-clamp-2">{q.text}</span>
                                  <span className="flex items-center gap-1.5 mt-0.5">
                                    {q.askedYears && q.askedYears.length > 0 && (
                                      <span className={`text-[7px] font-extrabold px-1 rounded font-mono uppercase tracking-wider ${
                                        isQuestionSelected 
                                          ? 'bg-white/20 text-white' 
                                          : 'bg-slate-950 text-white'
                                      }`}>
                                        PYQ
                                      </span>
                                    )}
                                    {q.stars > 0 && (
                                      <span className={`text-[8px] font-mono ${
                                        isQuestionSelected ? 'text-amber-300' : 'text-amber-500'
                                      }`}>
                                        {'★'.repeat(q.stars)}
                                      </span>
                                    )}
                                  </span>
                                </span>
                              </button>
                            );
                          })}
                          {unit.questions.length === 0 && (
                            <div className="text-[9px] text-slate-400 italic p-2 text-center">
                              No questions indexed yet.
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-slate-200 bg-slate-100/50 shrink-0 space-y-2">
            <div className="flex justify-between items-center text-[10px] font-bold"><span className="text-slate-455 font-mono uppercase tracking-wider">Syllabus Coverage</span><span className="text-slate-800 font-mono">{coveragePercent}%</span></div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden"><div className="bg-blue-600 h-1.5 rounded-full transition-all duration-300" style={{ width: `${coveragePercent}%` }} /></div>
            <div className="text-[9px] text-slate-450 font-medium font-mono text-center">{coveredQuestionsCount} of {totalQuestionsCount} topics covered</div>
          </div>
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-50 h-20 w-3 bg-white border border-slate-200 hover:bg-slate-100 rounded-r-md items-center justify-center cursor-pointer transition-all hover:w-4 group shadow-[2px_0_8px_rgba(0,0,0,0.04)]"
            title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            <span className="text-[8px] text-slate-400 group-hover:text-slate-655 font-bold font-mono select-none">
              {isSidebarCollapsed ? '›' : '‹'}
            </span>
          </button>
        </aside>
        {isSidebarOpen && (<div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/20 z-30 md:hidden" />)}
        <div className="flex-grow flex flex-col overflow-hidden h-full relative">
          <div className="flex items-center justify-between bg-slate-50 border-b border-slate-200 px-6 py-3 shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <button onClick={() => setIsSidebarOpen(true)} className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 cursor-pointer shadow-sm hover:bg-slate-50"><Menu size={14} /><span>Syllabus Menu</span></button>
              {isSidebarCollapsed && (<button onClick={() => setIsSidebarCollapsed(false)} className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 cursor-pointer shadow-sm hover:bg-slate-50 animate-scale-in"><Menu size={14} /><span>Show Syllabus</span></button>)}
              <div className="min-w-0">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Active Subject</span>
                <h2 className="text-xs sm:text-sm font-extrabold text-slate-800 truncate leading-tight">{activeSubject.code} &bull; {activeSubject.name}</h2>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0"><span className="text-[10px] font-mono font-bold text-indigo-600 bg-indigo-50 border border-indigo-200/50 px-2.5 py-0.5 rounded-full">{coveragePercent}% Covered</span></div>
          </div>
          <main className="flex-grow overflow-y-auto bg-white p-4 sm:p-10 flex flex-col justify-between pb-24">
            <div className="flex-grow max-w-3xl w-full mx-auto space-y-6">
              {activeSubject.id === 'internet-of-things' && selectedUnit ? (
                <IotUnitNotesView unit={selectedUnit} activeQuestionId={selectedQuestion?.id || null} />
              ) : selectedUnit && !selectedQuestion ? (
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-3"><span className="text-xs text-slate-400 font-bold uppercase tracking-wider font-mono">Module overview</span><h1 className="text-xl font-bold text-slate-900 mt-1">Unit {selectedUnit.number}: {selectedUnit.title}</h1></div>
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Previous Year Questions ({selectedUnit.questions.length})</h3>
                    {selectedUnit.questions.length > 0 ? (
                      <div className="border border-slate-200 rounded-xl divide-y divide-slate-100 bg-white shadow-sm overflow-hidden animate-scale-in">
                        {selectedUnit.questions.map((q, idx) => (
                          <div key={q.id} onClick={() => handleSelectQuestion(selectedUnit, q)} className="p-4 hover:bg-slate-50 cursor-pointer transition-colors flex items-start justify-between gap-4">
                            <div className="space-y-1"><span className="text-[9px] font-bold text-slate-400 block font-mono">QUESTION {idx + 1}</span><h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">{q.text}</h4></div>
                            <ChevronRight className="text-slate-400 mt-2 shrink-0" size={16} />
                          </div>
                        ))}
                      </div>
                    ) : (<div className="p-4 bg-slate-50 border border-slate-200 border-dashed rounded-lg text-xs text-slate-455 text-center font-medium">Syllabus topics for this unit are being indexed.</div>)}
                  </div>
                </div>
              ) : selectedUnit && selectedQuestion ? (
                <div className="space-y-8 animate-scale-in">
                  <button onClick={() => setSelectedUnit(selectedUnit)} className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer transition-colors"><ChevronLeft size={14} />Back to Unit {selectedUnit.number} Questions</button>
                  <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      {selectedQuestion.askedYears.length > 0 && (
                        <span className="text-[9px] font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono">
                          Asked: {selectedQuestion.askedYears.join(', ')}
                        </span>
                      )}
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded font-mono ${
                        selectedQuestion.importance === 'High' 
                          ? 'bg-red-55 text-red-700 border border-red-200' 
                          : 'bg-amber-55 text-amber-700 border border-amber-200'
                      }`}>
                        {selectedQuestion.importance} Importance
                      </span>
                      <span className="text-[9px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded font-mono flex items-center gap-0.5">
                        {'★'.repeat(selectedQuestion.stars)}
                      </span>
                    </div>
                    <h1 className="text-xs sm:text-sm font-extrabold text-slate-950 leading-relaxed">Q. {selectedQuestion.text}</h1>
                  </div>
                  {selectedQuestion.modelAnswer.content ? (
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                      <MarkdownNotesRenderer content={selectedQuestion.modelAnswer.content} />
                    </div>
                  ) : (
                    <div className="space-y-8">
                      {/* Section 1: Introduction */}
                      <div className="space-y-2">
                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">1. Introduction</h3>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify pl-1 font-semibold">{selectedQuestion.modelAnswer.introduction}</p>
                      </div>

                      {/* Section 2: Diagram */}
                      {selectedQuestion.modelAnswer.diagramSvgType && (
                        <div className="space-y-3">
                          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">2. Conceptual Diagram</h3>
                          <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/40 shadow-sm flex flex-col items-center">
                            <DiagramRenderer type={selectedQuestion.modelAnswer.diagramSvgType} />
                            {selectedQuestion.modelAnswer.diagramDescription && (
                              <p className="text-[10px] text-slate-500 mt-3.5 text-center leading-relaxed max-w-md italic font-semibold">
                                Figure 2.1: {selectedQuestion.modelAnswer.diagramDescription}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Section 3: Step-by-Step Explanation */}
                      {selectedQuestion.modelAnswer.explanation && (
                        <div className="space-y-4">
                          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">3. Step-by-Step Explanation</h3>
                          <div className="space-y-4">
                            {selectedQuestion.modelAnswer.explanation.map((step, index) => {
                              // Try to split bold markdown titles e.g. **Title Statement**: Content
                              const hasBoldTitle = step.startsWith('**');
                              let displayTitle = `Point ${index + 1}`;
                              let displayBody = step;

                              if (hasBoldTitle) {
                                const splitIdx = step.indexOf('**:');
                                if (splitIdx !== -1) {
                                  displayTitle = step.substring(2, splitIdx);
                                  displayBody = step.substring(splitIdx + 3).trim();
                                }
                              }

                              return (
                                <div key={index} className="space-y-1.5 bg-slate-50/30 p-4 rounded-xl border border-slate-200 shadow-sm">
                                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2">
                                    <span className="h-5 w-5 bg-slate-950 text-white font-mono text-[9px] rounded-full flex items-center justify-center font-bold">
                                      {index + 1}
                                    </span>
                                    <span>{displayTitle}</span>
                                  </h4>
                                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed pl-7">{displayBody}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Section 4: Advantages */}
                      {selectedQuestion.modelAnswer.advantages && (
                        <div className="space-y-3">
                          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">4. Key Advantages</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                            {selectedQuestion.modelAnswer.advantages.map((adv, idx) => (
                              <div key={idx} className="p-3.5 border border-emerald-150/70 bg-emerald-50/15 rounded-xl flex items-start gap-2.5">
                                <span className="text-emerald-600 font-bold shrink-0">✓</span>
                                <span className="font-semibold text-slate-700 leading-relaxed">{adv}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Section 5: Practical Applications */}
                      {selectedQuestion.modelAnswer.applications && (
                        <div className="space-y-3">
                          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">5. Practical Applications</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                            {selectedQuestion.modelAnswer.applications.map((app, idx) => (
                              <div key={idx} className="p-3.5 border border-indigo-100 bg-indigo-50/10 rounded-xl flex items-start gap-2.5">
                                <span className="text-indigo-600 font-bold shrink-0">•</span>
                                <span className="font-semibold text-slate-700 leading-relaxed">{app}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Section 6: Conclusion */}
                      {selectedQuestion.modelAnswer.conclusion && (
                        <div className="space-y-3">
                          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">6. Conclusion</h3>
                          <div className="border border-slate-200 rounded-xl p-4.5 bg-slate-50 border-l-4 border-l-slate-900 shadow-sm italic text-xs leading-relaxed text-slate-600 pl-6">
                            "{selectedQuestion.modelAnswer.conclusion}"
                          </div>
                        </div>
                      )}

                      {/* Section 7: Quick Revision Points */}
                      <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-sm">
                        <button 
                          onClick={() => setIsRevisionOpen(!isRevisionOpen)} 
                          className={`w-full px-5 py-3.5 hover:bg-slate-100/80 text-left text-xs font-bold text-slate-705 flex items-center justify-between transition-all cursor-pointer ${
                            isRevisionOpen ? 'border-b border-slate-200 bg-slate-100/40' : ''
                          }`}
                        >
                          <span className="flex items-center gap-1.5">
                            <BookOpen size={14} className="text-indigo-550" />
                            <span>7. Quick Revision Points</span>
                          </span>
                          <span className="text-[10px] font-mono flex items-center gap-1 text-slate-400">
                            {isRevisionOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </span>
                        </button>
                        
                        {isRevisionOpen && selectedQuestion.modelAnswer.quickRevisionBullets && (
                          <div className="p-5 bg-white space-y-3 animate-slide-down">
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2 font-mono">Checklist for Quick Revision</p>
                            <div className="grid grid-cols-1 gap-2.5">
                              {selectedQuestion.modelAnswer.quickRevisionBullets.map((bullet, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl border border-slate-150/70 hover:border-indigo-150/70 transition-all hover:bg-indigo-50/5">
                                  <input 
                                    type="checkbox" 
                                    id={`rev-bullet-${idx}`} 
                                    className="mt-0.5 h-3.5 w-3.5 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500 cursor-pointer"
                                  />
                                  <label 
                                    htmlFor={`rev-bullet-${idx}`}
                                    className="text-[11px] font-semibold text-slate-605 select-none cursor-pointer leading-normal flex-grow"
                                  >
                                    {bullet}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
            <div className="flex justify-between items-center border-t border-slate-200 mt-12 pt-6 text-xs font-bold max-w-3xl w-full mx-auto shrink-0">
              {nav.prev ? <button onClick={nav.prev.action} className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-750 rounded-lg flex items-center gap-1.5 cursor-pointer"><ChevronLeft size={16} />{nav.prev.label}</button> : <div />}
              {nav.next ? <button onClick={nav.next.action} className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg flex items-center gap-1.5 cursor-pointer">{nav.next.label}<ChevronRight size={16} /></button> : <button onClick={() => router.push(`/dashboard?uni=${uni}&branch=${branch}&sem=${sem}`)} className="px-4 py-2 bg-slate-900 hover:bg-slate-850 text-white rounded-lg flex items-center gap-1.5 cursor-pointer"><span>Complete Subject</span><CheckCircle size={14} /></button>}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default function SubjectPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen items-center justify-center bg-slate-50">
        <RefreshCw className="text-slate-500 animate-spin" size={24} />
        <p className="text-xs font-bold text-slate-500 mt-2">Loading Syllabus Details...</p>
      </div>
    }>
      <SubjectPageContent />
    </Suspense>
  );
}
