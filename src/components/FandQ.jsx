import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "What is MealVersity?",
      answer: "MealVersity is a subscription-based meal service that delivers fresh, healthy, and homemade-style food right to your hostel, PG, or campus — perfect for students staying away from home."
    },
    {
      id: 2,
      question: "Who can subscribe to MealVersity?",
      answer: "Our service is ideal for college students, working professionals, or anyone living in hostels or away from home who needs affordable and nutritious meals daily."
    },
    {
      id: 3,
      question: "What type of food do you serve?",
      answer: "We offer a variety of vegetarian and non-vegetarian Indian meals — balanced, tasty, and prepared with hygiene as our top priority. Menus change daily!"
    },
    {
      id: 4,
      question: "How does the subscription work?",
      answer: "You can choose from daily, weekly, or monthly meal plans. Once subscribed, your meals are delivered at your chosen time every day."
    },
    {
      id: 5,
      question: "Can I customize my meal plan?",
      answer: "Yes! You can choose between veg/non-veg plans and specify dietary preferences (like less oil/spice) while placing your order."
    },
    {
      id: 6,
      question: "What cities do you currently serve?",
      answer: "Currently, MealVersity operates in select university towns, with plans to expand to more cities soon! Contact us to check availability in your area."
    },
    {
      id: 7,
      question: "Is there a trial option before subscribing?",
      answer: "Absolutely! We offer 1-day and 3-day trial plans so you can taste the quality before committing to a longer plan."
    },
    {
      id: 8,
      question: "Can I cancel my subscription anytime?",
      answer: "You can pause or cancel your subscription anytime through your MealVersity account dashboard or by contacting our support team."
    },
    {
      id: 9,
      question: "What areas are currently covered?",
      answer: "We currently deliver to major hostels, PGs, and campus areas in our service cities. Check our coverage map or contact us to confirm delivery to your location."
    },
    {
      id: 10,
      question: "How do you verify home chefs?",
      answer: "Our home chefs go through a rigorous verification process including background checks, kitchen inspections, food safety training, and regular quality audits to ensure the highest standards."
    },
    {
      id: 11,
      question: "What if I don't like the food?",
      answer: "Your satisfaction is our priority! If you're not happy with a meal, contact our support team immediately. We offer replacements or refunds based on our quality guarantee policy."
    },
    {
      id: 12,
      question: "Is payment safe and secure?",
      answer: "Yes, all payments are processed through secure gateways. We accept UPI, debit/credit cards, and wallets with bank-level security."
    },
    {
      id: 13,
      question: "Whom do I contact for support?",
      answer: "You can reach our support team via WhatsApp or the 'Contact Us' section on the website. We're available 7 days a week to help you!"
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div id='FAQ' className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50 py-12 px-4" style={{borderRadius:"29px"}}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Got questions? We've got answers about MealVersity and our tiffin service
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-slate-800 pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {openItems[item.id] ? (
                    <ChevronUp className="w-6 h-6 text-teal-500 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400 transition-transform duration-200" />
                  )}
                </div>
              </button>
              
              {openItems[item.id] && (
                <div className="px-6 pb-5 pt-2">
                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-slate-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-teal-100 mb-6 text-lg">
              Our support team is here to help you 7 days a week
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-teal-600 px-8 py-3 rounded-xl  cursor-pointer font-semibold hover:bg-slate-50 transition-colors duration-200 shadow-lg">
                Contact Support
              </button>
              <button className="bg-orange-500 cursor-pointer  text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍽️</span>
            </div>
            <h4 className="font-semibold text-slate-800 mb-2">Fresh Daily</h4>
            <p className="text-sm text-slate-600">Meals prepared fresh every day</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚚</span>
            </div>
            <h4 className="font-semibold text-slate-800 mb-2">On Time</h4>
            <p className="text-sm text-slate-600">Reliable delivery to your doorstep</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h4 className="font-semibold text-slate-800 mb-2">24/7 Support</h4>
            <p className="text-sm text-slate-600">We're always here to help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

