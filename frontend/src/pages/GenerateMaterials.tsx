import React, { useState } from 'react';
import { Book, Loader } from 'lucide-react';

const GenerateMaterials = () => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // API call would go here
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Book className="h-8 w-8 text-purple-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Generate Study Materials</h1>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
                Enter Your Topic
              </label>
              <textarea
                id="topic"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="Enter the topic or concept you want to study..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-4">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin h-4 w-4 mr-2" />
                    Generating...
                  </>
                ) : (
                  'Generate Materials'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GenerateMaterials;