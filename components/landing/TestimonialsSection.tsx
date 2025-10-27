import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    name: "Sarah Wanjiku",
    role: "Marketing Manager",
    location: "Nairobi",
    rating: 5,
    text: "Game changer for nights out! I love that my car gets home with me. The drivers are professional and the live tracking gives my family peace of mind.",
    avatar: "1"
  },
  {
    name: "David Omondi",
    role: "Business Owner",
    location: "Mombasa",
    rating: 5,
    text: "Used DereWangu after a late business dinner. The chauffeur was punctual, professional, and my car was treated with care. Highly recommend!",
    avatar: "2"
  },
  {
    name: "Grace Akinyi",
    role: "Event Planner",
    location: "Kisumu",
    rating: 5,
    text: "We partner with DereWangu for all our events. The QR code system is seamless and our guests love the convenience. Safety first!",
    avatar: "3"
  },
  {
    name: "James Kamau",
    role: "Tech Entrepreneur",
    location: "Nairobi",
    rating: 5,
    text: "The app is incredibly intuitive. Booking takes seconds and the driver quality is consistently excellent. This is how ride services should work.",
    avatar: "4"
  },
  {
    name: "Amina Hassan",
    role: "Healthcare Worker",
    location: "Kigali",
    rating: 5,
    text: "After exhausting night shifts, DereWangu gets me home safely in my own car. The safety features and driver vetting process are top-notch.",
    avatar: "5"
  },
  {
    name: "Peter Mutua",
    role: "Hotel Manager",
    location: "Nairobi",
    rating: 5,
    text: "We offer DereWangu to all our guests. It's reduced liability and increased guest satisfaction. A win-win partnership.",
    avatar: "6"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-slate-400">Real stories from real riders</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

