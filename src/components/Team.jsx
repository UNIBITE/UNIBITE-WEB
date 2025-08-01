import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Tarik Anowar",
      role: "Founder , CEO & CMO",
      description: "The visionary force behind Mealversity, leading strategy, brand building, and student engagement.",
      avatar: "TA",
      id: 1
    },
    {
      name: "Muklesur Rahaman", 
      role: "Co-Founder & COO",
      description: "Responsible for daily operations, food preparation, delivery systems, and host partnerships.",
      avatar: "MR",
      id: 2
    },
    {
      name: "Asif Ahmed",
      role: "Co-Founder & CTO", 
      description: "Leads development of the Mealversity app and web platform.",
      avatar: "AA",
      id: 3
    },
    {
      name: "Afreen Sarkar",
      role: "Co-Founder & CFO",
      description: "Manages budgeting, pricing, revenue tracking, and financial strategy.",
      avatar: "AS",
      id: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50 py-16 px-4  rounded-4xl">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            The passionate minds driving Mealversity's mission to revolutionize student dining experiences
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
            >
              {/* Gradient Border Top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-orange-400"></div>
              
              {/* Role Badge */}
              <div className="inline-block bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                {member.role.split(' ')[0]} {/* First word of role */}
              </div>

              {/* Member Info */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 font-semibold text-sm">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-sm mb-6">
                {member.description}
              </p>

              {/* Company Logo */}
              <div className="absolute bottom-4 right-6 text-cyan-600 hover:text-cyan-700 font-bold text-sm opacity-70">
                MEALVERSITY
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-teal-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center space-x-4 bg-white rounded-2xl px-8 py-4 shadow-lg">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">🍽️</span>
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold text-slate-800">Ready to join us?</p>
              <p className="text-sm text-slate-600">Start your culinary journey today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;