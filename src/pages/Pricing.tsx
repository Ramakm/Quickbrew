import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    price: 29,
    features: [
      'Generate Study Materials',
      'Basic AI Chat Support',
      'Simple Note Generation',
      'Access to Community Forums'
    ]
  },
  {
    name: 'Pro',
    price: 49,
    features: [
      'Everything in Basic',
      'Advanced Document Analysis',
      'Priority AI Processing',
      'Custom Study Plans',
      'Premium Support'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 99,
    features: [
      'Everything in Pro',
      'Dedicated AI Resources',
      'Team Collaboration',
      'Custom Integrations',
      'Priority 24/7 Support'
    ]
  }
];

const Pricing = () => {
  const navigate = useNavigate();

  const handleSubscribe = (planName: string) => {
    // In a real app, this would handle the subscription process
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Choose Your Learning Journey
          </h2>
          <p className="text-xl text-gray-600">
            Unlock the power of AI-enhanced learning with our premium plans
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-purple-600 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold absolute -mt-12">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-gray-900 mb-6">
                ${plan.price}
                <span className="text-lg font-normal text-gray-600">/month</span>
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleSubscribe(plan.name)}
                className={`w-full py-3 px-4 rounded-md font-semibold ${
                  plan.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;