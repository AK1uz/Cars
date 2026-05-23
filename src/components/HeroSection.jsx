import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react'; 
import bugattiImg from '../assets/bugatti.png'; 
import ferrariImg from '../assets/ferrariimg.png'; 

export default function HeroSection() {
  return (
    <div className="w-full  px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
      
      {/* 1. CHAP KARTA: Premium Light Blue Card */}
      <div className="group relative rounded-3xl p-8 md:p-10 flex flex-col justify-between h-100 overflow-hidden bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:shadow-[0_0_50px_rgba(56,189,248,0.4)] transition-all duration-500 ease-out">
        
        {/* Orqa fondagi harakatlanuvchi noodatiy dekoratsiya */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-60"></div>

        {/* Matn va Kontent */}
        <div className="relative z-10 max-w-[320px]">
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider border border-white/10">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Top Rated
          </div>


          <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-4 drop-shadow-sm">
            The Best Platform <br /> for Car Rental
          </h2>

          <p className="text-sky-100/90 text-sm md:text-base font-normal leading-relaxed mb-6">
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
          
          {/* Glassmorphism Pro Button */}
          <button className="group/btn relative bg-slate-900 text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-lg flex items-center gap-2 overflow-hidden hover:bg-slate-800 active:scale-95 transition-all duration-300">
            <span>Rental Car</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>


        </div>

        {/* Mashina Rasmi (3D Hover Effekt) */}
        <div className="absolute -bottom-2 right-4 lg:right-6 z-10 pointer-events-none">
          <img   src={bugattiImg}   alt="Bugatti Rental" className="w-70 sm:w-90 md:w-105 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] group-hover:scale-105 group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-500 ease-out"   />
        </div>
      </div>

      {/* 2. O'NG KARTA: Dark Royal Blue Card */}
      <div className="group relative rounded-3xl p-8 md:p-10 flex flex-col justify-between h-100 overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 shadow-[0_0_30px_rgba(30,58,138,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-all duration-500 ease-out border border-blue-950">
        
        {/* Orqa fondagi neon liniyalar */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e40af_1px,transparent_1px),linear-gradient(to_bottom,#1e40af_1px,transparent_1px)] bg-[length:24px_24px]"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-all duration-700"></div>

        {/* Matn va Kontent */}
        <div className="relative z-10 max-w-[320px]">



          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 backdrop-blur-md text-blue-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider border border-blue-500/20">
            ⚡ Super Price
          </div>


          <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-4">
            Easy way to rent a <br /> car at a low price
          </h2>

          
          <p className="text-slate-300 text-sm md:text-base font-normal leading-relaxed mb-6">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
          
          {/* Neon Glow Button */}
          <button className="group/btn relative bg-blue-600 text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(37,99,235,0.4)] flex items-center gap-2 overflow-hidden hover:bg-blue-500 hover:shadow-[0_4px_25px_rgba(37,99,235,0.6)] active:scale-95 transition-all duration-300">
            <span>Rental Car</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mashina Rasmi (3D Hover Effekt) */}
        <div className="absolute -bottom-2 right-4 lg:right-6 z-10 pointer-events-none">
          <img   src={ferrariImg}  alt="Ferrari Rental"  className="w-70 sm:w-90 md:105 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] group-hover:scale-105 group-hover:-translate-y-2 group-hover:-rotate-1 transition-all duration-500 ease-out" />
    
    
        </div>
      </div>

    </div>
  );
}