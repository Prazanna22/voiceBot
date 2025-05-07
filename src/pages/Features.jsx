import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Features = () => {
    const navigate = useNavigate();
    return (
        <div className=" text-black px-6 py-12">
          {/* Top Section */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-xl text-red-500 font-semibold mb-1">Our Feature</h2>
              <h1 className="text-3xl md:text-4xl font-bold">
                Effortlessly oversee and enhance your<br />
                daily catering.
              </h1>
            </div>
            <p className="mt-6 md:mt-0 md:w-1/2 text-gray-700 text-base leading-relaxed">
              Now stop worrying about Delivery delays, food quantity & quality, hygiene, and even
              staff shortage. Get all your Unsolved food & beverages problem solved with
              <span className="text-red-500 font-semibold"> HOGIST</span>.
            </p>
          </div>
    
          {/* Feature Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
              <img src="https://www.hogist.com/images/indu2.png" alt="Top caterers" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-400">Over 100 top caterers</h3>
                <p className="text-gray-300">
                  Community of 100+ best Vendors all over the city for flawless Operations with flexibility,
                  Consistency, and safe food.
                </p>
              </div>
            </div>
    
            {/* Card 2 */}
            <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
              <img src="https://www.hogist.com/images/corpo2.png" alt="No Markups" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-400">No Menu Markups</h3>
                <p className="text-gray-300">
                  Say Goodbye to Menu Markups and have a transparent dining experience. You’ll always know
                  that your satisfaction is our top priority.
                </p>
              </div>
            </div>
    
            {/* Card 3 */}
            <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
              <img src="https://www.hogist.com/images/out1.png" alt="Any Budget" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-400">Any Group size, or Budget</h3>
                <p className="text-gray-300">
                  We're dedicated to understanding your desires, preferences, and budgetary constraints.
                  Tailored Experiences, Every Time.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}
