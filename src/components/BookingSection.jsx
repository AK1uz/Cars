import React from 'react';
import { ChevronDown, ArrowUpDown } from 'lucide-react';

function BookingSection() {
    return (
        /* Asosiy fon rasmdegidek och kulrang bo'ldi */
        <div className="w-full  px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-5 relative font-sans">

            {/* 1. PICK - UP KARTASI (Oppoq rangda) */}
            <div className="w-full bg-white rounded-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100/50 transition-all duration-300 group">

                {/* Sarlavha qismi (Ko'k radio nuqta) */}
                <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-4 h-4 rounded-full border-4 border-blue-600 bg-transparent flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-900 font-semibold text-base tracking-wide">Pick - Up</span>
                </div>

                {/* Tanlovlar paneli (Grid) */}
                <div className="grid grid-cols-3 gap-4 divide-x divide-gray-100">

                    {/* Locations */}
                    <div className="cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors group/item">
                        <label className="block text-gray-900 font-bold text-sm md:text-base mb-1">Locations</label>
                        <div className="flex items-center justify-between text-gray-400 text-xs md:text-sm">
                            <span className="group-hover/item:text-gray-600 transition-colors">Select your city</span>
                            <ChevronDown className="w-4 h-4 text-gray-400 group-hover/item:text-blue-600 transition-colors" />
                        </div>
                    </div>

                    {/* Date */}
                    <div className="cursor-pointer hover:bg-gray-50 p-1 pl-4 rounded-lg transition-colors group/item">
                        <label className="block text-gray-900 font-bold text-sm md:text-base mb-1">Date</label>
                        <div className="flex items-center justify-between text-gray-400 text-xs md:text-sm">
                            <span className="group-hover/item:text-gray-600 transition-colors">Select your date</span>
                            <ChevronDown className="w-4 h-4 text-gray-400 group-hover/item:text-blue-600 transition-colors" />
                        </div>
                    </div>

                    {/* Time */}
                    <div className="cursor-pointer hover:bg-gray-50 p-1 pl-4 rounded-lg transition-colors group/item">
                        <label className="block text-gray-900 font-bold text-sm md:text-base mb-1">Time</label>
                        <div className="flex items-center justify-between text-gray-400 text-xs md:text-sm">
                            <span className="group-hover/item:text-gray-600 transition-colors">Select your time</span>
                            <ChevronDown className="w-4 h-4 text-gray-400 group-hover/item:text-blue-600 transition-colors" />
                        </div>
                    </div>

                </div>
            </div>

            {/* 2. O'RTADAGI SWAP TUGMASI (Ko'k va soya effektli) */}
            <div className="z-10 -my-5 lg:my-0 lg:-mx-7">
                <button className="w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl flex items-center justify-center shadow-[0_10px_25px_rgba(37,99,235,0.35)] active:scale-90 hover:scale-105 transition-all duration-300 group/btn">
                    <ArrowUpDown className="w-5 h-5 group-hover/btn:rotate-180 transition-transform duration-500 ease-out" />
                </button>
            </div>

            {/* 3. DROP - OFF KARTASI (Oppoq rangda) */}
            <div className="w-full bg-white rounded-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100/50 transition-all duration-300 group">

                {/* Sarlavha qismi (Och ko'k radio nuqta) */}
                <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-4 h-4 rounded-full border-4 border-sky-400 bg-transparent flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-900 font-semibold text-base tracking-wide">Drop - Off</span>
                </div>

                {/* Tanlovlar paneli (Grid) */}
                <div className="grid grid-cols-3 gap-4 divide-x divide-gray-100">

                    {/* Locations */}
                    <div className="cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors group/item">
                        <label className="block text-gray-900 font-bold text-sm md:text-base mb-1">Locations</label>
                        <div className="flex items-center justify-between text-gray-400 text-xs md:text-sm">
                            <span className="group-hover/item:text-gray-600 transition-colors">Select your city</span>
                            <ChevronDown className="w-4 h-4 text-gray-400 group-hover/item:text-sky-500 transition-colors" />
                        </div>
                    </div>

                    {/* Date */}
                    <div className="cursor-pointer hover:bg-gray-50 p-1 pl-4 rounded-lg transition-colors group/item">
                        <label className="block text-gray-900 font-bold text-sm md:text-base mb-1">Date</label>
                        <div className="flex items-center justify-between text-gray-400 text-xs md:text-sm">
                            <span className="group-hover/item:text-gray-600 transition-colors">Select your date</span>
                            <ChevronDown className="w-4 h-4 text-gray-400 group-hover/item:text-sky-500 transition-colors" />
                        </div>
                    </div>

                    {/* Time */}
                    <div className="cursor-pointer hover:bg-gray-50 p-1 pl-4 rounded-lg transition-colors group/item">
                        <label className="block text-gray-900 font-bold text-sm md:text-base mb-1">Time</label>
                        <div className="flex items-center justify-between text-gray-400 text-xs md:text-sm">
                            <span className="group-hover/item:text-gray-600 transition-colors">Select your time</span>
                            <ChevronDown className="w-4 h-4 text-gray-400 group-hover/item:text-sky-500 transition-colors" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default BookingSection