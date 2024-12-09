import React from 'react';
import { Brain, Target, Clock, Users } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Learning',
    description: 'Personalized learning paths adapted to your unique needs and pace.',
    icon: Brain,
  },
  {
    name: 'Smart Progress Tracking',
    description: 'Monitor your progress with detailed analytics and insights.',
    icon: Target,
  },
  {
    name: 'Learn at Your Pace',
    description: 'Flexible scheduling that fits your lifestyle and commitments.',
    icon: Clock,
  },
  {
    name: 'Community Support',
    description: 'Connect with peers and experts in your field of study.',
    icon: Users,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to learn
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col items-center md:flex-row md:items-start"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;