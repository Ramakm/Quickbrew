import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor?: string;
}

const FeatureCard = ({ title, description, icon, bgColor, textColor = 'text-white' }: FeatureCardProps) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 ${textColor}`}>
      <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="opacity-90">{description}</p>
    </div>
  );
};

export default FeatureCard;