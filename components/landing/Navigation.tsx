import React from 'react';
import { Shield, Menu, X } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navigation({ scrolled, mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/98 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">DereWangu</span>
              <div className="text-xs text-slate-400 -mt-1">We'll get you there safe.</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition">How It Works</a>
            <a href="#safety" className="text-slate-300 hover:text-white transition">Safety</a>
            <a href="#for-business" className="text-slate-300 hover:text-white transition">For Business</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
            <button className="text-slate-300 hover:text-white transition">Become a Driver</button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2.5 rounded-xl font-semibold transition shadow-lg shadow-blue-500/30">
              Get Started
            </button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-lg border-t border-slate-800">
          <div className="px-4 py-6 space-y-4">
            <a href="#how-it-works" className="block text-slate-300 hover:text-white py-2">How It Works</a>
            <a href="#safety" className="block text-slate-300 hover:text-white py-2">Safety</a>
            <a href="#for-business" className="block text-slate-300 hover:text-white py-2">For Business</a>
            <a href="#pricing" className="block text-slate-300 hover:text-white py-2">Pricing</a>
            <button className="block w-full text-left text-slate-300 hover:text-white py-2">Become a Driver</button>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl font-semibold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

