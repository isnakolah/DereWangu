import React from 'react';
import { ArrowRight, Star, Clock, MessageCircle, Shield, User } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 px-5 py-2.5 rounded-full text-sm backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Now Live in Nairobi, Mombasa, Kisumu & Kigali
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Get Home Safe.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Every Time.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
              Professional chauffeurs drive you home in <span className="text-blue-400 font-semibold">your own car</span>. Built for nights out, medical pickups, and zero-risk rides.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 transition shadow-xl shadow-blue-500/30">
                Download App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-slate-600 hover:border-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-xl text-lg font-semibold transition backdrop-blur-sm">
                Become a Chauffeur
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[
                    { icon: User, colors: 'from-blue-500 to-blue-600' },
                    { icon: Shield, colors: 'from-purple-500 to-purple-600' },
                    { icon: Star, colors: 'from-pink-500 to-pink-600' },
                    { icon: MessageCircle, colors: 'from-indigo-500 to-indigo-600' }
                  ].map((item, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.colors} border-2 border-slate-900 flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold">5,000+</div>
                  <div className="text-slate-400">Safe Rides</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold">4.9/5</div>
                  <div className="text-slate-400">Rating</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-1 backdrop-blur-sm">
              <div className="bg-slate-900/90 rounded-3xl p-8 border border-slate-700/50">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-slate-400 font-medium">Active Trip</span>
                  <span className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-xs font-semibold">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Live
                  </span>
                </div>

                <div className="space-y-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-500/20"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Pickup Location</p>
                      <p className="font-semibold text-lg">The Alchemist Bar</p>
                      <p className="text-sm text-slate-400">Westlands, Nairobi</p>
                    </div>
                  </div>

                  <div className="relative ml-2">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>
                    <div className="ml-6 py-2">
                      <div className="text-sm text-slate-400">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Estimated time: 18 minutes
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-green-500 border-4 border-green-500/20"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Destination</p>
                      <p className="font-semibold text-lg">Home</p>
                      <p className="text-sm text-slate-400">Kilimani, Nairobi</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-700/50 pt-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 ring-2 ring-blue-500/50 flex items-center justify-center">
                        <User className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900"></div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-lg">James Kimani</p>
                      <div className="flex items-center gap-3 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span>4.95</span>
                        </div>
                        <span>•</span>
                        <span>542 trips</span>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-slate-800 rounded-lg transition">
                      <MessageCircle className="w-5 h-5 text-slate-400" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 rounded-xl font-semibold transition">
                      Track Live
                    </button>
                    <button className="bg-slate-800 hover:bg-slate-700 py-3 rounded-xl font-semibold transition border border-slate-700">
                      Share Trip
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*<div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 shadow-2xl border border-slate-700/50 backdrop-blur-sm hidden lg:block">*/}
            {/*  <div className="flex items-center gap-4">*/}
            {/*    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-3 rounded-xl">*/}
            {/*      <Shield className="w-7 h-7 text-green-400" />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*      <p className="text-xs text-slate-400 uppercase tracking-wider">Safety Status</p>*/}
            {/*      <p className="font-semibold text-lg text-green-400">All Systems Active</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

