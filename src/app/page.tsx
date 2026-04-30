'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Bell, MessageCircle, HelpCircle } from 'lucide-react';
import bg_hero from './public/landing/bg-hero.webp' 

export default function Home() {
  return (
    <div className="w-full">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex justify-between items-center h-[72px]">
            
            <div className="flex items-center space-x-2">
              <span className="text-[24px] font-extrabold text-primary">Gurunesia</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary text-sm">
                Find Teachers
              </a>
              <a href="#" className="text-gray-700 hover:text-primary text-sm">
                Dashboard
              </a>
              <a href="#" className="text-gray-700 hover:text-primary text-sm">
                Verification
              </a>
              <a href="#" className="text-gray-700 hover:text-primary text-sm">
                Earnings
              </a>
            </div>

            <div className="flex items-center space-x-4">
              {/* Bell Icon */}
              <button className="text-primary hover:text-gray-600">
                <Bell size={24} strokeWidth={3}/>
              </button>

              {/* Chat Icon */}
              <button className="text-primary hover:text-gray-600">
                <MessageCircle size={24} strokeWidth={3}/>
              </button>

              {/* Help Icon */}
              <button className="text-primary hover:text-gray-600">
                <HelpCircle size={24} strokeWidth={3}/>
              </button>

              {/* Profile Button */}
              <button className="px-4 py-2 border-2 border-gray-300 text-primary rounded-lg hover:bg-gray-50 text-sm font-medium">
                Profile
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 relative h-screen">
        <Image
          src={bg_hero}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white/50"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center mt-40">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Educators, Enhancing Education.
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Connecting passionate, verified teachers with students across Indonesia
            <br />
            A fair, transparent, and trusted platform for modern education.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/register?role=teacher"
              className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-blue-900 transition duration-300"
            >
              Become a Teacher
            </Link>
            <Link
              href="/register?role=student"
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-blue-200 transition duration-300"
            >
              Find a Teacher
            </Link>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-16 px-4 bg-[#EFF4FF]">
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
            <div className="text-left bg-white p-6 rounded-xl">
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
            <div className="text-left bg-white p-6 rounded-xl">
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
            <div className="text-left bg-white p-6 rounded-xl">
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

      {/* Students Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            For Students: Discover Your Ideal Mentor
          </h2>
          <p className="text-gray-600 mb-12">
            Finding the right teacher has never been easier, safer, or more accessible.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image & Card */}
            <div className="flex flex-col gap-6">
              {/* Character Image */}
              <div className="bg-gradient-to-b from-teal-400 to-teal-500 rounded-2xl p-12 text-center h-96 flex items-center justify-center">
                <div className="text-white text-8xl">👨</div>
              </div>

              {/* Search by Location Card */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-6 h-6 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900">Search by Location</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Find highly qualified educators right in your neighborhood or for convenient online sessions.
                </p>
              </div>
            </div>

            {/* Right Side - Two Cards */}
            <div className="flex flex-col gap-6">
              {/* Card 1: Trusted & Verified */}
              <div className="bg-blue-100 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👨‍💼</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted & Verified</h3>
                    <p className="text-gray-700 text-sm">
                      Every educator undergoes strict credential checks before they join.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Seamless Booking */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Seamless Booking</h3>
                    <p className="text-blue-100 text-sm">
                      Schedule sessions, manage payments, and communicate directly through one secure platform.
                    </p>
                  </div>
                </div>
              </div>
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