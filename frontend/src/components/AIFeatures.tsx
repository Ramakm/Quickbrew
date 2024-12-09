import React from 'react';
import { FileText, MessageSquare, Brain } from 'lucide-react';
import AIFeatureCard from './AIFeatureCard';

const features = [
  {
    title: "Generate Study Materials",
    description: "Transform any topic into comprehensive study materials with our AI-powered content generation.",
    icon: Brain,
    action: "Generate Now",
    path: "/generate"
  },
  {
    title: "Chat with Documents",
    description: "Upload your documents and get instant answers to your questions through interactive chat.",
    icon: MessageSquare,
    action: "Start Chat",
    path: "/chat"
  },
  {
    title: "Instant AI Notes",
    description: "Convert lectures, videos, or text content into well-structured notes automatically.",
    icon: FileText,
    action: "Create Notes",
    path: "/notes"
  }
];

const AIFeatures = () => {
  return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            AI-Powered Learning Tools
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Enhance your learning experience with our advanced AI features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <AIFeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;