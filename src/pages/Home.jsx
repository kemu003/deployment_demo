import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div
      className="
        min-h-screen
        bg-[url('/bg.jpg')]
        bg-no-repeat
        bg-center
        bg-contain      /* fit whole image on small screens */
        sm:bg-cover     /* cover from ≥640px up */
        sm:bg-center
      "
    >
      <div className="relative bg-white/80 px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-20 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Welcome to Rapstar Investment Co. Ltd
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-7 text-gray-700">
              Your trusted partner in engineering excellence and innovative solutions. We connect you with expert engineers and quality products for your success.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/portfolio"
                className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                View Our Portfolio
              </Link>
              <Link
                to="/about"
                className="text-sm font-semibold text-gray-900 hover:underline"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  