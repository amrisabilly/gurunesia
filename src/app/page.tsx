'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-16 bg-red-300">
          <div className="flex justify-between items-center h-16">
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                G
              </div>
              <span className="text-xl font-bold text-blue-600">Gurunesie</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">
                Find Teachers
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">
                Dashboard
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">
                Verification
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">
                Earnings
              </a>
              <button className="text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                  />
                </svg>
              </button>
            </div>

            <div>
              <h1>Icons 1</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Educators, Enhancing Education.
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Connecting passionate, verified teachers with students across Indonesia
            <br />
            A fair, transparent, and trusted platform for modern education.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/register?role=teacher"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Become a Teacher
            </Link>
            <Link
              href="/register?role=student"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
            >
              Find a Teacher
            </Link>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">
            For Teachers: Teach on Your Terms
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We believe in empowering educators with fair compensation and flexible scheduling
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Trusted Verification */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-2.77 3.066 3.066 0 00-3.58 3.048A3.066 3.066 0 006.267 3.455zm9.8 8.334c.683-.802 1.08-1.81 1.08-2.896a4.094 4.094 0 00-5.147-3.937A4.093 4.093 0 0010 5.5a4.093 4.093 0 003.923 4.5 4.094 4.094 0 001.144 1.789zM5.604 7.45c.502.284.959.626 1.345 1.023A3.057 3.057 0 006.134 7.71 3.056 3.056 0 005.604 7.45z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Trusted Verification
              </h3>
              <p className="text-gray-600">
                Secure and straightforward verification with your KTP and sertifikat to build trust
                with students instantly.
              </p>
            </div>

            {/* Feature 2: Syllabus Creation */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Syllabus Creation
              </h3>
              <p className="text-gray-600">
                Easily create and manage your own personalized teaching syllabus and course curriculum
                unique to your teaching style and expertise.
              </p>
            </div>

            {/* Feature 3: Fair Pricing */}
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.16 2.75a.75.75 0 00-1.32 0l-1.3 3.948H1.75a.75.75 0 00-.44 1.358l3.15 2.277-1.3 3.948a.75.75 0 001.155.84l3.15-2.277 3.15 2.277a.75.75 0 001.155-.84l-1.3-3.948 3.15-2.277a.75.75 0 00-.44-1.358H10.76l-1.3-3.948a.75.75 0 00-.71-.447.75.75 0 00-.62.447z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fair Pricing
              </h3>
              <p className="text-gray-600">
                Set competitive rates with our intelligent pricing guidance based on local UAR
                standards ensuring fair compensation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
          <p>&copy; 2024 Gurunesie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}