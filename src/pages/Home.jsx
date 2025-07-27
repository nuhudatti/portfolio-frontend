import React from 'react';
import DattiImage from '../assets/Datti.jpg'; // Make sure this file exists

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative group">
              <img
                src={DattiImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300";
                }}
                alt="Nuhu Muhammad Datti"
                className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -bottom-4 -right-4 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                EST. 2025
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="w-full lg:w-2/3 space-y-6 text-gray-800">
            <h1 className="text-4xl font-bold text-gray-900">Hi, I'm Nuhu Muhammad Datti</h1>
            <h2 className="text-xl font-medium text-gray-600">Founder of 5IRE • Blockchain Architect • Tech Visionary</h2>

            <p className="text-lg leading-relaxed">
              From building my first academy in Primary 3 to designing decentralized systems that transform learning, I’m not waiting for the future I’m coding it into existence.
            </p>

            <div className="bg-gray-100 p-4 rounded-md border-l-4 border-gray-400 text-gray-700">
              <p>
                Not defined by grades but by grit. A diploma graduete turned founder. A campus intern turned digital pioneer.
              </p>
            </div>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Launched <strong>EverLearn</strong> to gamify learning for Africa’s youth</li>
              <li>Created <strong>ULA</strong> as a digital gold vault for knowledge</li>
              <li>Architected <strong>PSI</strong> – integrating AI into Nigerian public service</li>
            </ul>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-16 text-center border-t pt-8 border-gray-300">
          <blockquote className="text-2xl italic text-gray-700">
            "From dust I began, to eternity I echo."
          </blockquote>
          <p className="mt-2 text-gray-600">— Legacy Code Line #1, 5IRE Protocol</p>
        </div>
      </main>
    </div>
  );
}
