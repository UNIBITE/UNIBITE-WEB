import React, { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { CiDeliveryTruck } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { PiCookingPotFill } from "react-icons/pi";
import { MdFlatware } from "react-icons/md";
import { FaStar } from "react-icons/fa";
export default function HomePage() {


  return (
    <div>
      <div className=''>
        <p style={{ fontFamily: "Bebas Neue", marginTop: "10px" }}
          className='text-9xl font-bold text-[#ffcd00] text-center' >Mealversity</p>
        <TypeAnimation sequence={[
          // Same substring at the start will only be typed out once, initially
          'Your Daily Meals',
          1000,
          'Your Daily Meals, Delivered Smartly.',
          1000
        ]}
          speed={10}
          style={{ fontFamily: "Bebas Neue", marginTop: "10px" }}
          className='text-[#2ad628] text-center text-4xl font-bold min-h-[60px]'
          wrapper='p'
          repeat={Infinity} />
      </div>


      <div className="problmslove">
        <p style={{ fontFamily: "Lato", marginTop: "10px", textDecoration: "underline" }}
          className='text-6xl font-bold text-[#c79629] flex justify-center items-center animate-fadeInUp'>
          Are you tired of..
          <span className="ml-4 text-6xl">😩</span>
        </p>

        <div className="mainp flex justify-evenly flex-wrap" style={{ marginTop: "30px" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "130px",
            width: "300px",
            border: "4px solid #ffcd00",
            borderRadius: "14px",
            padding: "10px",
            textAlign: "center"
          }} className="p1 problembox font-bold text-2xl text-[#ee1831] animate-slideInLeft animation-delay-200">
            🥴 Eating oily restaurant food every day?
          </div>

          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "130px",
            width: "300px",
            border: "4px solid #ffcd00",
            borderRadius: "14px",
            padding: "10px",
            textAlign: "center"
          }} className="p2 problembox font-bold text-2xl text-[#ee1831] animate-slideInRight animation-delay-400">
            😓 Mess food that's either late or tasteless?
          </div>

          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "130px",
            width: "300px",
            border: "4px solid #ffcd00",
            borderRadius: "14px",
            padding: "10px",
            textAlign: "center"
          }} className="p3 problembox font-bold text-2xl text-[#ee1831] animate-bounceIn animation-delay-600">
            🥹 No time to cook during classes or work?
          </div>

          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "130px",
            width: "300px",
            border: "4px solid #ffcd00",
            borderRadius: "14px",
            padding: "10px",
            textAlign: "center"
          }} className="p4 problembox font-bold text-2xl text-[#ee1831] animate-slideInLeft animation-delay-800">
            💸 Spending ₹5000–₹7000/month on unhealthy food?
          </div>
        </div>
      </div>
      <div className="ourPromiss">
        <div className="headp" style={{ marginTop: "25px" }}>
          <div className='flex items-center justify-center' style={{border:"3px dashed #5c00ff ",padding:"10px"}}>
            <p style={{ fontFamily: "Lato" }} className='text-4xl font-bold text-[#6940f1] text-wrap w-[60vw] text-center animate-fadeInUp'>Mealversity gives you fresh, simple, tasty, and healthy meals every single day—without the mess.
              Whether you're a student, intern, or office-goer, you’ll love our.</p>
          </div>

          <div className="mainpcard flex justify-evenly flex-wrap " style={{ margin: "20px 0px" }}>
            <div className="card1 animate-slideInLeft animation-delay-800" style={{ height: "350px", width: "330px", border: "1px solid #f1c440" }}>
Home-style meals made by trusted local kitchens
<MdFlatware/>

            </div>
            <div className="card1 animate-slideInLeft animation-delay-800" style={{ height: "350px", width: "330px", border: "1px solid #f1c440" }}>
On-time delivery by verified delivery agents
<CiDeliveryTruck/>
            </div>
            <div className="card1 animate-slideInLeft animation-delay-800" style={{ height: "350px", width: "330px", border: "1px solid #f1c440" }}>
Affordable weekly & monthly plans.
<GiMoneyStack/>
            </div>
            <div className="card1 animate-slideInLeft animation-delay-800" style={{ height: "350px", width: "330px", border: "1px solid #f1c440" }}>
 Flexible payment via UPI, Wallet, or Cash
 <FaStar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}