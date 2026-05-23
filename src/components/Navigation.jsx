import React from 'react';
import { Search, SlidersHorizontal, Heart, Bell, Settings } from 'lucide-react';

 function Navigation() {
  return (
    <div className="w-full bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100 shadow-sm">
      
      {/* 1. LOGOTIP */}
      <div className="text-blue-600 font-bold text-2xl tracking-wider cursor-pointer select-none active:scale-95 transition-transform">
        MORENT
      </div>

      {/* 2. QIDIRUV BLOCKI (Pro Fokus bilan) */}
      <div className="flex items-center border border-gray-200 rounded-full px-4 py-2 w-96 bg-gray-50/50 focus-within:border-blue-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100 transition-all duration-300">
        {/* Qidiruv ikonkarasi */}
        <Search className="text-gray-400 w-5 h-5 mr-2" />
        
        {/* Matn yozish joyi */}
        <input type="text"   placeholder="Search something here"  className="w-full outline-none text-sm text-gray-700 bg-transparent placeholder-gray-400"   />
        
        {/* Filtr slayderi */}
        <SlidersHorizontal className="text-gray-400 w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
      </div>

      {/* 3. O'NG TOMON (Ikonkalar va Profil) */}
      <div className="flex items-center space-x-4">
        
        {/* Yurakcha */}
        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-red-50 hover:border-red-100 active:scale-95 transition-all duration-200">
          <Heart className="w-5 h-5" />
        </button>

        {/* Qo'ng'iroqcha (Aktiv pulsatsiya bilan) */}
        <button className="relative w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-100 active:scale-95 transition-all duration-200">
          <Bell className="w-5 h-5" />
          {/* Pulsatsiya qiluvchi qizil nuqta */}
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>

        {/* Sozlamalar */}
        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-100 hover:rotate-45 active:scale-95 transition-all duration-300">
          <Settings className="w-5 h-5" />
        </button>

        {/* Foydalanuvchi rasmi */}
        <div className="w-10 h-10 rounded-full p-[2px] border border-gray-200 hover:border-blue-500 transition-colors duration-300 cursor-pointer active:scale-95">
          <img    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100"  alt="User Avatar"   className="w-full h-full rounded-full object-cover"   />
      
        </div>

      </div>

    </div>
  );
}

export default Navigation