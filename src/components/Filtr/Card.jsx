import { Fuel, Heart, Users, CircleStar  } from 'lucide-react';
import React, { useState } from 'react'

const Card = () => {
    const [isLiked, setIsLiked] = useState(true);
    return (
        <div className="max-w-[300px] bg-white rounded-[10px] p-4 shadow-sm border border-gray-100 font-sans select-none">
            {/* Header: Title and Like Button */}
            <div className="flex justify-between items-start mb-1">
                <div>
                    <h3 className="text-[20px] font-bold text-[#1a202c] leading-tight">
                        Koenigsegg
                    </h3>
                    <span className="text-[14px] font-semibold text-[#90a3bf]">
                        Sport
                    </span>
                </div>
                <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="focus:outline-none transition-transform active:scale-95 mt-1"
                >
                    <Heart
                        className={`w-6 h-6 transition-colors ${isLiked ? 'fill-[#ff4d4f] stroke-[#ff4d4f]' : 'stroke-[#90a3bf] fill-none'
                            }`}
                    />
                </button>
            </div>

            {/* Image Section */}
            <div className="my-8 flex justify-center items-center h-[120px]">
                <img
                    src="UR_IMAGE_URL_HERE"
                    alt="Koenigsegg"
                    className="object-contain w-full h-full"
                />
            </div>

            {/* Specifications */}
            <div className="flex justify-between items-center mb-6 text-[#90a3bf] text-[14px] font-medium">
                <div className="flex items-center gap-1.5">
                    <Fuel className="w-5 h-5 text-[#90a3bf]" />
                    <span>90L</span>
                </div>

                <div className="flex items-center gap-1.5">
                    <CircleStar className="flex items-center gap-1.5"/>
                    <span>Manual</span>
                </div>

                <div className="flex items-center gap-1.5">
                    <Users className="w-5 h-5 text-[#90a3bf]" />
                    <span>2 People</span>
                </div>
            </div>

            {/* Footer: Price and Action Button */}
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-[20px] font-bold text-[#1a202c]">
                        $99.00/
                    </span>
                    <span className="text-[14px] font-bold text-[#90a3bf] ml-0.5">
                        day
                    </span>
                </div>

                <button className="bg-[#3563e9] hover:bg-[#2952c8] text-white font-semibold text-[14px] px-5 py-3 rounded-[8px] transition-colors active:scale-98">
                    Rent Now
                </button>
            </div>
        </div>
    )
}

export default Card