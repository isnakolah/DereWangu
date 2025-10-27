import React from 'react';
import { Car, Star, Award, Globe } from 'lucide-react';
import { StatItem } from '../../types';

const stats: StatItem[] = [
  { number: "5,000+", label: "Safe Rides", icon: Car },
  { number: "4.9/5", label: "Average Rating", icon: Star },
  { number: "200+", label: "Verified Chauffeurs", icon: Award },
  { number: "4 Cities", label: "And Growing", icon: Globe }
];

export default function StatsBar() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-800/50 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-3">
                <stat.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{stat.number}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

