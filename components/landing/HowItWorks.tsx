import React from 'react';
import { MapPin, Car, Clock, CheckCircle } from 'lucide-react';
import { HowItWorksStep } from '../../types';

const steps: HowItWorksStep[] = [
  {
    icon: MapPin,
    title: "Set Destination",
    desc: "Enter your drop-off location or use current GPS position for instant pickup",
    color: "blue"
  },
  {
    icon: Car,
    title: "Get Matched",
    desc: "Vetted chauffeur with verified credentials and ratings is assigned instantly",
    color: "purple"
  },
  {
    icon: Clock,
    title: "Track Live",
    desc: "Real-time GPS tracking with shareable links to family and emergency contacts",
    color: "pink"
  },
  {
    icon: CheckCircle,
    title: "Arrive Safe",
    desc: "Rate your experience, add a tip, and receive your digital receipt",
    color: "green"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Simple Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get Home in 4 Easy Steps</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Our streamlined process ensures you're home safely without any hassle</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition h-full">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-${step.color}-500/20 to-${step.color}-600/20 mb-6`}>
                  <step.icon className={`w-8 h-8 text-${step.color}-400`} />
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

