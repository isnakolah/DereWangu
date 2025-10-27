import React from 'react';
import { Shield, MapPin, Phone, Lock, Heart } from 'lucide-react';
import { SafetyFeature } from '../../types';

const features: SafetyFeature[] = [
  { icon: Shield, title: "Verified Chauffeurs", desc: "Background checks, license verification, face matching & reference calls" },
  { icon: MapPin, title: "Live Trip Tracking", desc: "Share real-time location with unlimited trusted contacts instantly" },
  { icon: Phone, title: "24/7 Safety Center", desc: "SOS button, automatic check-ins, and instant emergency dispatch" },
  { icon: Lock, title: "Privacy Protected", desc: "End-to-end encryption, minimal data retention, GDPR compliant" }
];

export default function SafetySection() {
  return (
    <section id="safety" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🛡️ Safety First, Always
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Built for Your Peace of Mind</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Every aspect of DereWangu is engineered with your safety as the absolute top priority. We go beyond basic verification.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((item, i) => (
                <div key={i} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-green-500/50 transition group">
                  <div className="bg-green-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h4 className="font-bold mb-2 text-lg">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h4 className="font-bold mb-2">Trusted by Families</h4>
                  <p className="text-sm text-slate-300">"I always share my DereWangu trips with my parents. They love the peace of mind knowing exactly where I am and that I'm with a verified driver."</p>
                  <p className="text-xs text-slate-400 mt-2">— Sarah M., Nairobi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl p-1">
              <div className="bg-slate-900/90 rounded-3xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-6">Safety Control Center</h3>

                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold">Trip Status</span>
                      <span className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        Active & Monitored
                      </span>
                    </div>
                    <div className="text-sm text-slate-300">Last automatic check-in: 2 min ago</div>
                    <div className="text-xs text-slate-400 mt-1">Next check-in: 3 minutes</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700">
                      <div className="text-2xl font-bold text-blue-400">2</div>
                      <div className="text-xs text-slate-400">Contacts Notified</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700">
                      <div className="text-2xl font-bold text-purple-400">18</div>
                      <div className="text-xs text-slate-400">Minutes to Home</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 py-4 rounded-xl font-bold transition shadow-lg shadow-red-500/30 flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5" />
                    Emergency SOS
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition">
                      Share Location
                    </button>
                    <button className="bg-slate-700 hover:bg-slate-600 py-3 rounded-xl font-semibold transition">
                      Call Support
                    </button>
                  </div>
                </div>

                <div className="mt-6 text-center text-sm text-slate-400 bg-slate-800/30 rounded-lg p-3 border border-slate-800">
                  <Lock className="w-4 h-4 inline mr-1" />
                  Your safety is actively monitored throughout the journey
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

