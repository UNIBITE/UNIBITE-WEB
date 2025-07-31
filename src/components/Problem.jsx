import React from 'react';

export default function ProblemsSection() {
  return (
    <div className="relative z-10 py-20 px-4 overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 backdrop-blur-sm">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-500/10 rounded-lg rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-500/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative z-20">
        {/* Enhanced heading with improved typography */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-800 animate-pulse relative">
              Are you tired of..
              <span className="ml-4 text-6xl text-slate-700"></span>
            </h2>
            {/* Decorative underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced grid with improved styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            { text: "Eating oily restaurant food every day?", delay: "200", icon: "🍔" },
            { text: "Mess food that's either late or tasteless?", delay: "400", icon: "🎈" },
            { text: "No time to cook during classes or work?", delay: "600", icon: "⏰" },
            { text: "Spending ₹5000–₹7000/month on unhealthy food?", delay: "800", icon: "💸" }
          ].map((problem, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-orange-100/90 to-yellow-100/90 backdrop-blur-lg border-4 border-teal-500 rounded-3xl p-8 text-center shadow-2xl hover:shadow-teal-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden"
              style={{ 
                animationDelay: `${problem.delay}ms`,
                height: "160px",
                animation: `slideInUp 0.8s ease-out both`
              }}
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-teal-500 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-3">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {problem.icon}
                </div>
                <p className="font-bold text-xl md:text-2xl text-slate-700 leading-tight group-hover:text-slate-800 transition-colors duration-300" 
                   style={{fontFamily: "Lato"}}>
                  {problem.text}
                </p>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
            </div>
          ))}
        </div>
        
        {/* Additional decorative elements */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"
                style={{animationDelay: `${i * 200}ms`}}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom keyframes styles */}
    </div>
  );
}