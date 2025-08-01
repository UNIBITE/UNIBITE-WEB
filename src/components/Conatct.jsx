import React, { useState, useRef } from 'react'
import TeamSection from "../components/Team"
import {
  Smartphone,
  Download,
  MessageCircle,
  Truck,
  Calendar,
  Mail,
  Phone,
  MapPin,
  User,
  Send,
  CheckCircle
} from 'lucide-react'
import FAQSection from './FandQ'

const AppComingSoonContact = () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyLq5IQ7CLAfy4sfHp2p5Gwlrp4N4HsczYCzEVdK6DgrR-bNbCYpZgbHRNhFttTR0erXA/exec'
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!formData.name || !formData.email || !formData.Phone || !formData.message) {
      setIsLoading(true);
      return;
    }

    console.log(formData);

    // Create FormData and append your data manually
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('Phone', formData.Phone);
    form.append('message', formData.message);

    fetch(scriptURL, {
      method: 'POST',
      body: form  // Use the FormData object
    })
      .then(response => {
        setIsLoading(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', Phone: '', message: '' });
      })
      .catch(error => console.error('Error!', error.message));

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
      <div className="max-w-7xl mx-auto">

        {/* App Coming Soon Section */}
        <div className="text-center mb-20">
          <div className="bg-gradient-to-r from-teal-100/80 to-orange-100/80 backdrop-blur-md border-2 border-dashed border-teal-400 rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">

            {/* Header */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="p-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl shadow-lg animate-bounce">
                <Smartphone size={32} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700">
                App Coming Soon
              </h2>
            </div>

            {/* App Store Buttons */}
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="text-2xl">📦</div>
                <span className="text-xl font-semibold text-slate-700">Download App on:</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                {/* Google Play Store */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group flex items-center space-x-3 min-w-[200px]">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Download size={16} className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">GET IT ON</div>
                    <div className="text-lg font-semibold group-hover:scale-105 transition-transform">Google Play</div>
                  </div>
                </div>

                {/* App Store */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group flex items-center space-x-3 min-w-[200px]">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <Download size={16} className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-lg font-semibold group-hover:scale-105 transition-transform">App Store</div>
                  </div>
                </div>
              </div>

              {/* Launch Date */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg">
                <Calendar size={20} />
                <span className="font-bold">Available 10 Sept 2025</span>
              </div>
            </div>

            {/* App Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { icon: Truck, text: "Track orders", color: "text-teal-600" },
                { icon: Calendar, text: "Skip meals", color: "text-orange-600" },
                { icon: MessageCircle, text: "Chat with delivery agent", color: "text-yellow-600" },
                { icon: CheckCircle, text: "And much more", color: "text-green-600" }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 group">
                  <div className="p-3 bg-white/60 backdrop-blur-md rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={24} className={feature.color} />
                  </div>
                  <span className="text-sm font-medium text-slate-700 text-center">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-slate-600 text-lg">
              Get ready for the ultimate meal ordering experience with real-time tracking,
              flexible meal management, and direct communication with your delivery team.
            </p>
          </div>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <TeamSection />
        </div>
        <div style={{ marginBottom: "30px" }}>
          <FAQSection/>
        </div>
        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700 mb-6">
                Get In Touch
              </h3>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  title: 'Call Us',
                  info: '+91 8900099783',
                  subtitle: 'Mon-Sat, 9 AM - 8 PM',
                  color: 'from-teal-500 to-teal-600'
                },
                {
                  icon: Mail,
                  title: 'Email Us',
                  info: 'mealversityhelp@gmail.com',
                  subtitle: 'We reply within 24 hours',
                  color: 'from-orange-500 to-orange-600'
                },
                {
                  icon: MapPin,
                  title: 'Visit Us',
                  info: 'Kazipara, Barasat, Kolkata',
                  subtitle: 'West Bengal, India',
                  color: 'from-yellow-500 to-yellow-600'
                }
              ].map((contact, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-300/50">
                  <div className={`p-3 bg-gradient-to-r ${contact.color} rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{contact.title}</h4>
                    <p className="text-slate-700 font-medium">{contact.info}</p>
                    <p className="text-slate-500 text-sm">{contact.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-slate-300/50">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl shadow-lg">
                <Send size={24} className="text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">Send Message</h4>
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-gradient-to-r from-green-100 to-green-200 border-2 border-green-300 rounded-2xl flex items-center space-x-3">
                <CheckCircle className="text-green-600" size={24} />
                <span className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <User style={{ color: "black" }} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-4 bg-white/70 backdrop-blur-md border border-slate-300/50 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={20} />
                  <input
                    type="text"
                    name="Phone"
                    value={formData.Phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-4 py-4 bg-white/70 backdrop-blur-md border border-slate-300/50 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-4 text-slate-500" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 bg-white/70 backdrop-blur-md border border-slate-300/50 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="relative">
                <MessageCircle className="absolute left-3 top-4 text-slate-500" size={20} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 bg-white/70 backdrop-blur-md border border-slate-300/50 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLoading || !formData.name || !formData.email || !formData.Phone || !formData.message}
                className="w-full py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AppComingSoonContact;