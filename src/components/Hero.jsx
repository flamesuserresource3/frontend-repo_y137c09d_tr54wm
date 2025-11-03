import Spline from '@splinetool/react-spline';
import { Rocket, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full w-fit border border-white/20 mb-6">
          <Users className="w-4 h-4" />
          <span className="text-sm">Fandom • Find your people, online and IRL</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Discover, meet, and rally with fans near you
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl">
          Join game-day tailgates, K‑pop meetups, and local happenings. See who’s going, coordinate on a live map, and navigate there together.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-3 rounded-lg transition">
            <Rocket className="w-5 h-5" />
            Get started
          </button>
          <a href="#search" className="text-white/90 hover:text-white underline underline-offset-4">Explore nearby events</a>
        </div>
      </div>
    </section>
  );
}
