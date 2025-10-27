import React from 'react';
import { Shield, MapPin, Phone, Lock, Star, Zap, TrendingUp, CheckCircle, Users } from 'lucide-react';
import { PricingFeature } from '../../types';

const includedFeatures: PricingFeature[] = [
  { icon: Shield, title: "Professional Vetted Chauffeur", desc: "Background checked & licensed" },
  { icon: MapPin, title: "Live GPS Tracking", desc: "Real-time location sharing" },
  { icon: Phone, title: "24/7 Safety Center Access", desc: "SOS & emergency support" },
  { icon: Lock, title: "Insurance Coverage", desc: "Full trip protection" },
  { icon: Star, title: "Quality Guarantee", desc: "Rated drivers only" },
  { icon: Zap, title: "Instant Booking", desc: "No waiting, no hassle" }
];

const badges = [
  { label: "No Surge Pricing", icon: TrendingUp },
  { label: "Cancel Anytime", icon: CheckCircle },
  { label: "Multiple Payment Options", icon: Users },
  { label: "Digital Receipts", icon: Star }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Fair & Transparent
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Simple, Honest Pricing</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">See your exact fare before you book. No surge pricing surprises. Ever.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
            <h3 className="text-2xl font-bold mb-8">Pricing Breakdown</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <h4 className="font-semibold text-lg mb-1">Base Fare</h4>
                  <p className="text-sm text-slate-400">Covers chauffeur dispatch</p>
                </div>
                <div className="text-3xl font-bold text-blue-400">KSh 500</div>
              </div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <h4 className="font-semibold text-lg mb-1">Per Kilometer</h4>
                  <p className="text-sm text-slate-400">Distance-based rate</p>
                </div>
                <div className="text-3xl font-bold text-purple-400">KSh 80</div>
              </div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <h4 className="font-semibold text-lg mb-1">Service Fee</h4>
                  <p className="text-sm text-slate-400">Platform & safety features</p>
                </div>
                <div className="text-3xl font-bold text-pink-400">10%</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold mb-1">Example Trip</h4>
                    <p className="text-sm text-slate-400">Westlands to Kilimani (8km)</p>
                  </div>
                  <div className="text-2xl font-bold">KSh 1,210</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-1">
            <div className="bg-slate-900/90 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="space-y-4">
                {includedFeatures.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-0.5">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-800 flex items-center gap-3">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <badge.icon className="w-5 h-5 text-green-400" />
              </div>
              <span className="font-semibold text-sm">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

