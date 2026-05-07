'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Bell, MessageCircle, HelpCircle } from 'lucide-react';
import bg_hero from './public/landing/bg-hero.webp';
import logo_verification from './public/landing/logo/verification.png';
import logo_syllabus from './public/landing/logo/syllabus.png';
import logo_pricing from './public/landing/logo/pricing.png'; 
import bg_person from './public/landing/bg_person.png';

export default function Home() {
  return (
    <div className="w-full">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
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
      <section className="py-20 px-4 relative h-screen pt-[72px]">
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
        <div className="max-w-[1760px] mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">
            For Teachers: Teach on Your Terms
          </h2>
          <p className="text-center text-gray-600 mb-20">
            We believe in empowering educators with fair compensation and flexible <br /> scheduling
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Trusted Verification */}
            <div className="text-left bg-white p-6 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Image src={logo_verification} alt="Verification" width={32} height={32} />
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
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Image src={logo_syllabus} alt="Syllabus" width={32} height={32} />
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
              <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mb-4">
                <Image src={logo_pricing} alt="Pricing" width={32} height={32} />
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
        <div className="max-w-[1760px] mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            For Students: Discover Your Ideal Mentor
          </h2>
          <p className="text-gray-600 mb-12">
            Finding the right teacher has never been easier, safer, or more accessible.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image & Card */}
            <div className="flex flex-col gap-6 bg-slate-500">
              {/* Character Image */}
              <div className="bg-gradient-to-b from-teal-400 to-teal-500 rounded-2xl p-12 text-center h-96 flex flex-col items-center justify-center">
                <Image src={bg_person} alt="Person" width={300} height={300} />
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
            </div>

            {/* Right Side - Two Cards */}
            <div className="flex flex-col gap-6">
              {/* Card 1: Trusted & Verified */}
              <div className="bg-blue-100 rounded-2xl p-14">
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
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-14 text-white">
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