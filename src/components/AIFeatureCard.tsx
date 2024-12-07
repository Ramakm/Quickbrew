import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface AIFeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  action: string;
  path: string;
}

const AIFeatureCard = ({ title, description, icon: Icon, action, path }: AIFeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4">
        <Icon className="h-6 w-6 text-purple-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={path}
        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 w-full"
      >
        {action}
      </Link>
    </div>
  );
};

export default AIFeatureCard;