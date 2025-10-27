import React from 'react';
import { CheckCircle, TrendingUp } from 'lucide-react';
import { BusinessPlan } from '../../types';

const plans: BusinessPlan[] = [
  {
    title: "Hotels & Venues",
    subtitle: "Perfect for bars, clubs & restaurants",
    features: [
      "Custom branded QR codes for tables",
      "Priority chauffeur dispatch",
      "Promotional coupon codes",
      "Real-time analytics dashboard",
      "Liability reduction support",
      "24/7 dedicated account manager"
    ],
    cta: "Partner With Us",
    accent: "blue"
  },
  {
    title: "Corporate Events",
    subtitle: "Keep your team safe",
    features: [
      "Prepaid ride bundle packages",
      "Employee safety programs",
      "Event planning integration",
      "Expense reporting tools",
      "Custom pickup zones",
      "Post-event analytics"
    ],
    cta: "Get Enterprise Plan",
    accent: "purple"
  },
  {
    title: "Insurance Partners",
    subtitle: "Reduce claims, increase safety",
    features: [
      "Policyholder safer-driver credits",
      "Incident prevention programs",
      "Co-branded safety campaigns",
      "Claims reduction analytics",
      "White-label options",
      "API integration support"
    ],
    cta: "Discuss Partnership",
    accent: "pink"
  }
];

export default function BusinessSection() {
  return (
    <section id="for-business" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Business Solutions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Partner with DereWangu</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">Safer outcomes for your customers, guests, and employees</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-br from-${plan.accent}-500/10 to-${plan.accent}-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all`}></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-sm text-slate-400">{plan.subtitle}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className={`w-5 h-5 text-${plan.accent}-400 flex-shrink-0 mt-0.5`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full bg-gradient-to-r from-${plan.accent}-600 to-${plan.accent}-700 hover:from-${plan.accent}-700 hover:to-${plan.accent}-800 py-4 rounded-xl font-bold transition shadow-lg`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-slate-800 rounded-2xl p-8 text-center">
          <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Custom Solutions Available</h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">Need something specific? We work with large organizations to create tailored safety programs.</p>
          <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-xl font-bold transition">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

