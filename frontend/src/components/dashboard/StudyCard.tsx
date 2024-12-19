// import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StudyCardProps {
  question: string;
  options: string[];
  currentCard: number;
  totalCards: number;
}

const StudyCard = ({ question, options, currentCard, totalCards }: StudyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-6">{question}</h2>
      
      <div className="space-y-4">
        {options.map((option, index) => (
          <button
            key={index}
            className="w-full text-left p-4 rounded border hover:border-indigo-600 transition-colors"
          >
            {option}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mt-8">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-sm text-gray-600">
          {currentCard} of {totalCards} flashcards
        </span>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default StudyCard;