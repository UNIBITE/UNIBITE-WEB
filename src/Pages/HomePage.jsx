import React, { useState, useEffect } from 'react'

export default function HomePage() {
  const [currentText, setCurrentText] = useState('Your Daily Meals');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = ['Your Daily Meals', 'Your Daily Meals, Delivered Smartly.'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === texts[textIndex]) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else {
          setCurrentText(texts[textIndex].substring(0, currentText.length + 1));
        }
      } else {
        if (currentText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        } else {
          setCurrentText(texts[textIndex].substring(0, currentText.length - 1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, texts]);

  return (
    <div>
      <div className=''>
        <p style={{ fontFamily: "Bebas Neue", marginTop: "10px" }}
          className='text-9xl font-bold text-[#c79629] text-center' >Mealversity</p>
        <p style={{ fontFamily: "Bebas Neue", marginTop: "10px" }}
          className='text-[#c79629] text-center text-4xl font-bold min-h-[60px]'>
          {currentText}
          <span className="animate-pulse">|</span>
        </p>
      </div>
      

      <div className="problmslove">
        <p style={{ fontFamily: "Lato", marginTop: "10px", textDecoration: "underline" }} 
           className='text-6xl font-bold text-[#c79629] flex justify-center items-center animate-fadeInUp'>
          Are you tired of..
          <span className="ml-4 text-7xl">😩</span>
        </p>
        
        <div className="mainp flex justify-evenly flex-wrap" style={{ marginTop: "30px" }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "130px", 
            width: "300px", 
            border: "4px solid #c79629", 
            borderRadius: "14px", 
            padding: "10px", 
            textAlign: "center" 
          }} className="p1 problembox font-bold text-2xl text-[#eeaa18] animate-slideInLeft animation-delay-200">
            🥴 Eating oily restaurant food every day?
          </div>
          
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "130px", 
            width: "300px", 
            border: "4px solid #c79629", 
            borderRadius: "14px", 
            padding: "10px", 
            textAlign: "center" 
          }} className="p2 problembox font-bold text-2xl text-[#eeaa18] animate-slideInRight animation-delay-400">
            😓 Mess food that's either late or tasteless?
          </div>
          
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "130px", 
            width: "300px", 
            border: "4px solid #c79629", 
            borderRadius: "14px", 
            padding: "10px", 
            textAlign: "center" 
          }} className="p3 problembox font-bold text-2xl text-[#eeaa18] animate-bounceIn animation-delay-600">
            🥹 No time to cook during classes or work?
          </div>
          
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "130px", 
            width: "300px", 
            border: "4px solid #c79629", 
            borderRadius: "14px", 
            padding: "10px", 
            textAlign: "center" 
          }} className="p4 problembox font-bold text-2xl text-[#eeaa18] animate-slideInLeft animation-delay-800">
            💸 Spending ₹5000–₹7000/month on unhealthy food?
          </div>
        </div>
      </div>
    </div>
  )
}