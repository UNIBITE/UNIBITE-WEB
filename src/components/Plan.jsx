import React, { useState } from 'react'
import { Check, Star, Clock, Users, Zap, Shield, User } from 'lucide-react'

const MembershipPlans = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    // {
    //   id: 'daily',
    //   type: 'Daily Flexi',
    //   price: '₹X9',
    //   period: 'per meal',
    //   meals: 'As needed',
    //   bestFor: 'Try before subscribing',
    //   icon: Clock,
    //   color: 'from-orange-500 to-orange-600',
    //   bgColor: 'from-orange-100/60 to-orange-200/60',
    //   borderColor: 'border-orange-300',
    //   features: [
    //     'Pay per meal',
    //     'No commitment',
    //     'Perfect for testing',
    //     'Same quality food',
    //     'Flexible timing'
    //   ],
    //   popular: false
    // },
    {
      id: 'weekly',
      type: 'Weekly Saver',
      price: '₹XX9',
      period: 'per week',
      meals: '14 meals',
      bestFor: 'Students & interns',
      icon: Users,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-100/60 to-teal-200/60',
      borderColor: 'border-teal-300',
      features: [
        '10 meals per week',
        '33% savings vs daily',
        'Weekly meal planning',
        'Student-friendly pricing',
        'Flexible meal timings'
      ],
      popular: true
    },
        {
      id: 'weekly',
      type: 'Weekly Saver (Lunch Only)',
      price: '₹XX9',
      period: 'per week',
      meals: '7 meals/week',
      bestFor: 'Students with night meals at home,',
      icon: User,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-100/60 to-teal-200/60',
      borderColor: 'border-teal-300',
      features: [
        ' Fills the energy gap during day',
        'Maximum savings',
        'Priority delivery',
        'Affordable & time-saving',
        'Keeps focus strong through afternoon'
      ],
      popular: false
    },
        {
      id: 'weekly',
      type: 'Weekly Saver (Dinner Only)',
      price: '₹XX9',
      period: 'per week',
      meals: '7 meals/week',
      bestFor: 'Students returning late from college/work,Daytime food outside, homely dinner need',
      icon: Users,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-100/60 to-teal-200/60',
      borderColor: 'border-teal-300',
      features: [
        'Light, homely food at night',
        'Avoids junk food at night',
        'Maximum savings',
        'Priority delivery',
        'Saves cooking hassle after a long day'
      ],
      popular: false
    },
    {
      id: 'monthly',
      type: 'Monthly Ultra Saver',
      price: '₹XXX9',
      period: 'per month',
      meals: ' 56 meals/month',
      bestFor: 'Long-term hostellers/interns',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'from-yellow-100/60 to-yellow-200/60',
      borderColor: 'border-yellow-300',
      features: [
        'More savings than weekly',
        'No need to renew every week',
        'Ideal for long schedules & consistency',
        'Monthly peace of mind',
        'Dedicated support'
      ],
      popular: true
    },
    {
      id: 'monthly',
      type: ' Monthly (Lunch Only)',
      price: '₹XXX9',
      period: 'per month',
      meals: ' 28 meals/month',
      bestFor: ' Students with dinner at home',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'from-yellow-100/60 to-yellow-200/60',
      borderColor: 'border-yellow-300',
      features: [
        'Keeps you energetic daily',
        'Monthly savings vs daily/weekly',
        'Simple, light, timely lunch every day',
        'Custom meal plans',
        'Dedicated support'
      ],
      popular: false
    },
    {
      id: 'monthly',
      type: ' Monthly (Dinner Only)',
      price: '₹XXX9',
      period: 'per month',
      meals: ' 28 meals/month',
      bestFor: 'Those looking for homely dinner',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'from-yellow-100/60 to-yellow-200/60',
      borderColor: 'border-yellow-300',
      features: [
        'Healthy closure to the day',
        'Monthly savings vs daily/weekly',
        'Simple, light, timely lunch every day',
        'Monthly peace of mind',
        'Saves ordering junk food'
      ],
      popular: false
    },

  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl shadow-lg">
              <div className="text-2xl">📦</div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700">
              Our Plans
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the perfect meal plan that fits your lifestyle and budget.
            All plans include fresh, healthy meals delivered on time.
          </p>
          <div className="mt-4 inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-4 py-2 rounded-full border border-orange-200">
            <span className="text-sm font-medium text-slate-700">(Sample Preview)</span>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${plan.bgColor} backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-2 ${plan.borderColor} group ${plan.popular ? 'ring-4 ring-teal-200 ring-opacity-50' : ''
                  }`}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1">
                      <Star size={16} className="fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${plan.color} shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}>
                    <IconComponent size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {plan.type}
                  </h3>

                  <div className="mb-4">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-800">
                      {plan.price}
                    </span>
                    <span className="text-slate-600 ml-2">
                      {plan.period}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"></div>
                      <span className="text-slate-700 font-semibold">
                        {plan.meals}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm">
                      Best for: {plan.bestFor}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className={`p-1 rounded-full bg-gradient-to-r ${plan.color} flex-shrink-0`}>
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-slate-700 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={` cursor-pointer w-full py-4 bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform ${hoveredPlan === plan.id ? 'scale-105' : ''
                    }`}
                >
                  {plan.id === 'daily' ? 'Order Now' : 'Choose Plan'}
                </button>

                {/* Savings Badge */}
                {plan.id !== 'daily' && (
                  <div className="absolute -bottom-3 right-4">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {plan.id === 'weekly' ? 'Save 33%' : 'Best Value'}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
         
        </div>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-2xl font-bold text-slate-800 mb-2'>For daily</h1>
 <button style={{marginBottom:"19px",width:"300px"}} className=" border-teal-300  to-teal-600c from-orange-500 to-orange-500 cursor-pointer w-full py-4 bg-gradient-to-r  hover:opacity-90 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform scale-105">Order Now</button>

        </div>
        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-teal-100/80 to-orange-100/80 backdrop-blur-md border-2 border-dashed border-teal-300 rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="text-teal-600" size={24} />
              <h3 className="text-xl font-bold text-slate-800">
                All Plans Include
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>Fresh, healthy meals</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>On-time delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Quality assurance</span>
              </div>
            </div>
            <p className="text-slate-600 mt-4 text-sm">
              Can't decide? Start with Daily Flexi and upgrade anytime!
              <span className="font-semibold text-teal-600">No hidden charges.</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MembershipPlans;