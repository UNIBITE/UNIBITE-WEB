import React, { useState, useEffect, useRef } from 'react'
import { DollarSign, Truck, Utensils, Star } from 'lucide-react'
import MealversityFooter from '../components/Footer';
import MealversityLandingPage from "../components/Head"
import MembershipPlans from '../components/Plan';
import AppComingSoonContact from '../components/Conatct';
import ProblemsSection from '../components/Problem';
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  return [elementRef, isVisible];
};

const TypeAnimation = ({ text, className, style }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    'Your Daily Meals',
    'Your Daily Meals, Delivered Smartly.'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < texts[currentTextIndex].length) {
        setDisplayText(texts[currentTextIndex].substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentIndex(0);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, currentTextIndex]);

  return (
    <p className={className} style={style}>
      {displayText}
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default function HomePage() {
  const [cardRef, isVisible] = useIntersectionObserver();

  return (

    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      <MealversityLandingPage/>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}

      {/* Problems Section */}
      <ProblemsSection/>


      {/* Promise Section */}
      <div className="relative z-10 py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100/50 to-orange-100/50 backdrop-blur-sm"></div>
        <div className="relative z-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="bg-gradient-to-r from-orange-100/80 to-yellow-100/80 backdrop-blur-md border-4 border-dashed border-teal-500 rounded-3xl p-8 shadow-2xl">
                <p className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-800 animate-fadeInUp" style={{fontFamily:"Cinzel"}}>
                  Mealversity gives you fresh, simple, tasty, and healthy meals every single day—without the mess.
                  Whether you're a student, intern, or office-goer, you'll love our.
                </p>
              </div>
            </div>

            <div ref={cardRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Home-style meals made by trusted local kitchens",
                  icon: Utensils,
                  color: "from-teal-500 to-teal-600",
                  bgColor: "from-teal-100/60 to-teal-200/60",
                  textColor: "text-slate-700"
                },
                {
                  title: "On-time delivery by verified delivery agents",
                  icon: Truck,
                  color: "from-orange-500 to-orange-600",
                  bgColor: "from-orange-100/60 to-orange-200/60",
                  textColor: "text-slate-700"
                },
                {
                  title: "Affordable weekly & monthly plans",
                  icon: DollarSign,
                  color: "from-yellow-500 to-yellow-600",
                  bgColor: "from-yellow-100/60 to-yellow-200/60",
                  textColor: "text-slate-700"
                },
                {
                  title: "Flexible payment via UPI, Wallet, or Cash",
                  icon: Star,
                  color: "from-amber-500 to-amber-600",
                  bgColor: "from-amber-100/60 to-amber-200/60",
                  textColor: "text-slate-700"
                }
              ].map((card, index) => (
                <div
                  key={index}
                  className={`${isVisible ? 'animate-slideInUp' : 'opacity-0'} bg-gradient-to-br ${card.bgColor} backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer border border-white/40 group`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-center">
                    <p className={`text-xl font-bold ${card.textColor} mb-6 leading-tight`} style={{fontFamily:"Play"}}>
                      {card.title}
                    </p>
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${card.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon size={48} className="text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
<div>
  <MembershipPlans/>
</div>
<div>
  <AppComingSoonContact/>
</div>
<MealversityFooter/>
    </div>
  )
}