import React, { useState, useEffect } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart,
  Clock,
  Shield,
  Award,
  ChefHat,
  Truck
} from 'lucide-react'

const FloatingIcon = ({ children, delay = 0 }) => {
  return (
    <div 
      className="floating-icon"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function MealversityFooter() {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Food Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingIcon delay={0}>
          <ChefHat className="absolute top-20 left-10 text-teal-500/30 w-8 h-8" />
        </FloatingIcon>
        <FloatingIcon delay={1000}>
          <Truck className="absolute top-40 right-20 text-orange-500/30 w-6 h-6" />
        </FloatingIcon>
        <FloatingIcon delay={2000}>
          <Award className="absolute bottom-40 left-1/4 text-yellow-500/30 w-7 h-7" />
        </FloatingIcon>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="bg-gradient-to-r from-slate-800/10 to-transparent backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              
              {/* Brand Section */}
              <div className="space-y-6 animate-fadeInUp">
                <div>
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 mb-4">
                    Mealversity
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Fresh, healthy, and delicious meals delivered right to your doorstep. 
                    Your trusted partner for daily nutrition and convenience.
                  </p>
                </div>
                
                {/* Social Media */}
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, color: 'hover:text-teal-600',link:"https://www.facebook.com/share/16oUPtaFKG/" },
                    { icon: Twitter, color: 'hover:text-teal-600',link:"https://x.com/meal_versity?t=T62Io8NyKmQAro2tXf1EdQ&s=08" },
                    { icon: Instagram, color: 'hover:text-teal-600',link:"https://www.instagram.com/mealversity.in?igsh=MWtwNHlsaGszemcyZA==" },
                    { icon: Linkedin, color: 'hover:text-teal-600',link:"https://www.linkedin.com/in/meal-versity-720aa7377/" }
                  ].map((social, index) => (
                    <a href={social.link} target='_blank' key={index}>
                    <div
                      
                      className={`p-3 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-md rounded-full border border-slate-300/50 ${social.color} text-slate-600 hover:scale-110 transition-all duration-300 cursor-pointer group shadow-md`}
                    >
                      <social.icon size={20} className="group-hover:animate-bounce" />
                    </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="animate-fadeInUp animation-delay-200">
                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700 mb-6">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {['Menu', 'Pricing', 'About Us', 'How It Works', 'FAQ', 'Contact'].map((link, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-slate-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center group"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="animate-fadeInUp animation-delay-400">
                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600 mb-6">
                  Our Services
                </h4>
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: 'Daily Meal Plans', color: 'text-teal-600' },
                    { icon: Shield, text: 'Quality Assurance', color: 'text-orange-600' },
                    { icon: Truck, text: 'Fast Delivery', color: 'text-yellow-600' },
                    { icon: Heart, text: 'Healthy Options', color: 'text-amber-600' }
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="p-2 bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-md rounded-lg border border-slate-300/50 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                        <service.icon size={16} className={service.color} />
                      </div>
                      <span className="text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
                        {service.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="animate-fadeInUp animation-delay-600">
                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-6">
                  Stay Updated
                </h4>
                <p className="text-slate-600 mb-6">
                  Subscribe to get special offers, free giveaways, and updates on new menu items!
                </p>
                
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/70 backdrop-blur-md border border-slate-300/50 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 shadow-sm"
                    />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 w-5 h-5" />
                  </div>
                  
                  <button
                    onClick={handleSubscribe}
                    className="w-full py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-teal-500/25 transform hover:scale-105 transition-all duration-300"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span className={`${isHovered ? 'animate-pulse' : ''}`}>
                      Subscribe Now
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Bar */}

        {/* Bottom Bar */}
        <div className="bg-slate-600/80 backdrop-blur-md border-t border-slate-500/30">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <span className="text-slate-200">Made with</span>
                <Heart className="text-red-500 w-5 h-5 animate-pulse" />
                <span className="text-slate-200">by AIO</span>
              </div>
              
              <div className="text-center">
                <p className="text-slate-200">
                  © 2025 Mealversity. All rights reserved.
                </p>
              </div>
              
              <div className="flex space-x-6">
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </footer>
  )
}