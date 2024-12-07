import React from 'react';
import { Users, Award, BookOpen, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Student-Centric',
      description: 'Everything we do is focused on enhancing the learning experience for our students.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in our AI technology and educational content.'
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'Continuously pushing the boundaries of AI-powered education.'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Making quality education accessible and effective for everyone.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Quickbrew AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing education through artificial intelligence, making learning more efficient, engaging, and accessible than ever before.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            At Quickbrew AI, we believe in the power of technology to transform education. Our mission is to empower students worldwide with cutting-edge AI tools that make learning more effective and enjoyable. We're committed to breaking down barriers in education and creating personalized learning experiences that adapt to each student's unique needs.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="h-12 w-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/Ram.jpg"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">Ramakrushna</h3>
              <p className="text-gray-600">Founder</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                alt="Head of Education"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">Dr. Michael Brown</h3>
              <p className="text-gray-600">Head of Education</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;