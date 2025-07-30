import React, { useState, useEffect } from 'react'
import picformela from "../assets/picformale.png"
import icone from "../assets/icone.jpeg"
const MealversityLandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
            {/* Header */}
            <header className="px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-slate-800 rounded-[50%] flex items-center justify-center">
                        <img src={icone} alt="" style={{borderRadius:"50%"}} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-800">MEALVERSITY</h1>
                </div>

                {/* CTA Button */}
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg cursor-pointer">
                    Download App
                </button>
            </header>

            {/* Main Content */}
            <main className="px-6 py-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight mb-6">
                                A new startup for hostel and meal services
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                We provide comfortable hostel accommodation and tasty meals for students and bachelors.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg cursor-pointer">
                              Download App
                            </button>
                            <p className="text-slate-600 text-lg">
                                Our app Wil be launching in September 2025
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Illustration */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                        <img src={picformela} alt="" />
                        </div>
                    </div>
                </div>
            </main>

            {/* Mobile Menu Button (Hidden by default) */}
            <div className="md:hidden fixed top-4 right-4">
                <button className="p-2 bg-white rounded-lg shadow-md">
                    <div className="w-6 h-1 bg-slate-800 mb-1"></div>
                    <div className="w-6 h-1 bg-slate-800 mb-1"></div>
                    <div className="w-6 h-1 bg-slate-800"></div>
                </button>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        
        .floating-plate {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
        </div>
    )
}

export default MealversityLandingPage