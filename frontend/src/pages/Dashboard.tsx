import React from 'react';
import { Book, MessageSquare, FileText, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white h-screen fixed shadow-lg">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-purple-600">Quickbrew</h2>
          </div>
          <nav className="mt-6">
            <Link
              to="/dashboard"
              className="flex items-center px-6 py-3 text-gray-700 bg-gray-100"
            >
              <Book className="h-5 w-5 mr-3" />
              Dashboard
            </Link>
            <Link
              to="/generate"
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
            >
              <MessageSquare className="h-5 w-5 mr-3" />
              Study Materials
            </Link>
            <Link
              to="/chat"
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
            >
              <FileText className="h-5 w-5 mr-3" />
              Document Chat
            </Link>
            <Link
              to="/notes"
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50"
            >
              <Settings className="h-5 w-5 mr-3" />
              AI Notes
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Welcome to Quickbrew</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Stats */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Study Materials</h3>
              <p className="text-3xl font-bold text-purple-600">12</p>
              <p className="text-gray-600">Generated this month</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Chats</h3>
              <p className="text-3xl font-bold text-purple-600">45</p>
              <p className="text-gray-600">Active conversations</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Notes</h3>
              <p className="text-3xl font-bold text-purple-600">28</p>
              <p className="text-gray-600">Notes generated</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 border-b">
                <p className="text-gray-600">Generated study materials for "Machine Learning Basics"</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <div className="p-4 border-b">
                <p className="text-gray-600">Chat session with "Advanced Physics" document</p>
                <p className="text-sm text-gray-500">5 hours ago</p>
              </div>
              <div className="p-4">
                <p className="text-gray-600">Created AI notes from "History Lecture 3"</p>
                <p className="text-sm text-gray-500">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;