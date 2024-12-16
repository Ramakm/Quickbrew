import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {supabase} from '../lib/supabase'


const Pricing = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null)

  async function getLoggedInUser() {
    try {
      // Get the session
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Error retrieving session:', error.message);
        return null;
      }

      if (data.session) {
        // Get the user object from the session
        const loggedInUser = data.session.user;

        setUser(loggedInUser)
        return {data: loggedInUser}
      } else {
        console.log('No user is currently logged in.');
        return {error: {message: "No user is currently logged in"}};
      }
    } catch (err) {
      console.error('Error retrieving user:', err.message);
      return {error: {message: "Error retrieving user"}};
    }
  }

  useEffect(() => {
    const {data, error } = getLoggedInUser()
    if (error) {
      alert(error.message)
      return
    }
    const script = document.createElement('script')
    script.src = "https://cdn.paddle.com/paddle/paddle.js"
    script.async = true
    script.onload = () => {
      window.Paddle.Enviroment.set("sandbox")
      window.Paddle?.Setup({ vendor: Number(import.meta.env.VITE_PUBLIC_PADDLE_VENDOR_ID) })
    }
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  })

  const handleCheckout = (productId) =>  {
    window.Paddle.Checkout.open({
      items: [{
        priceId: productId,
        quantity: 1
      }],
      customer: {
        email: user.email,
        }
    });
  }

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
        {/*I had to duplicate the code to pass the checkout funcs
           all the other text can be sent to a constant file so 
           that th codebase is neat */}
          <div
            className="bg-white rounded-lg shadow-lg p-8 ring-2 ring-purple-600 transform scale-105"
          >
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold absolute -mt-12">
              Most Popular
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
            <p className="text-4xl font-bold text-gray-900 mb-6">
              $49
              <span className="text-lg font-normal text-gray-600">/month</span>
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">Everything in Basic</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">Advanced Document Analysis</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">Priority AI Processing</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">Custom Study Plans</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">Premium Support</span>
              </li>
            </ul>
            <button
              onClick={() => handleCheckout(import.meta.env.VITE_POPULAR_PLAN_ID)}
              className="w-full py-3 px-4 rounded-md font-semibold bg-purple-600 text-white hover:bg-purple-700"
            >
              Subscribe Now
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
            <p className="text-4xl font-bold text-gray-900 mb-6">
              $29
              <span className="text-lg font-normal text-gray-600">/month</span>
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">Generate Study Materials</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">Basic AI Chat Support</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">Simple Note Generation</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">Access to Community Forums</span>
              </li>
            </ul>
            <button
              onClick={() => handleCheckout(import.meta.env.VITE_BASIC_PLAN_ID)}
              className="w-full py-3 px-4 rounded-md font-semibold bg-gray-100 text-gray-900 hover:bg-gray-200"
            >
              Subscribe Now
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
            <p className="text-4xl font-bold text-gray-900 mb-6">
              $99
              <span className="text-lg font-normal text-gray-600">/month</span>
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">Everything in Pro</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">Dedicated AI Resources</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">Team Collaboration</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">Custom Integrations</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">Priority 24/7 Support</span>
              </li>
            </ul>
            <button
              onClick={() => handleCheckout(import.meta.env.VITE_ENTERPRISE_PLAN_ID)}
              className="w-full py-3 px-4 rounded-md font-semibold bg-gray-100 text-gray-900 hover:bg-gray-200"
            >
              Subscribe Now
            </button>
          </div>
      </div>

      </div>
    </div>
  );
};

export default Pricing;