// import React from 'react';
import { FileText, FileQuestion, MessageSquare, Plus, ChevronRight } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import StudyCard from '../components/dashboard/StudyCard';
import FeatureCard from '../components/dashboard/FeatureCard';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome, Aiden Reeves</h1>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            <Plus className="w-5 h-5" />
            Create New Set
          </button>
        </div>

        <div className="flex gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6">Continue Studying</h2>
            
            <StudyCard
              question="Which rule is used to differentiate the function y = c f(x)?"
              options={[
                "Constant rule",
                "Product rule",
                "Chain rule",
                "Sum rule"
              ]}
              currentCard={1}
              totalCards={3}
            />

            <div className="grid grid-cols-3 gap-6">
              <FeatureCard
                title="Magic Notes"
                description="Create instant notes from any PDF, website, or image."
                icon={<FileText className="w-6 h-6 text-white" />}
                bgColor="bg-indigo-600"
              />
              
              <FeatureCard
                title="Chat with PDF"
                description="Upload a PDF and start an AI conversation."
                icon={<MessageSquare className="w-6 h-6 text-white" />}
                bgColor="bg-blue-500"
              />
              
              <FeatureCard
                title="Magic Answers"
                description="Get instant step-by-step answers to any question."
                icon={<FileQuestion className="w-6 h-6 text-white" />}
                bgColor="bg-emerald-500"
              />
            </div>
          </div>

          <div className="w-80">
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">
                Calculus Concepts
              </h3>
              <p className="text-indigo-700 mb-4">
                Flashcards covering differential calculus concepts including differentiation rules, exponential and trigonometric functions, and shape of a graph.
              </p>
              <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Continue Studying
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;