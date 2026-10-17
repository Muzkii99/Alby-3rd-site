"use client";

import { useState } from 'react';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/Alby LOGO Final.png" alt="Alby Rentals" className="w-14 h-10 object-contain" />
            <div className="brand-wordmark">
              <span className="text-xl font-bold text-gray-900">Alby</span>
              <span className="text-xl font-light text-blue-600"> rentals</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-medium">About</a>
            <a href="#fleet" className="text-gray-700 hover:text-blue-600 transition font-medium">Our Fleet</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition font-medium">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">Contact</a>
            <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium">Inquire Now</a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-3 pt-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition font-medium px-2 py-1" onClick={() => setMobileOpen(false)}>Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-medium px-2 py-1" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#fleet" className="text-gray-700 hover:text-blue-600 transition font-medium px-2 py-1" onClick={() => setMobileOpen(false)}>Our Fleet</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition font-medium px-2 py-1" onClick={() => setMobileOpen(false)}>Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium px-2 py-1" onClick={() => setMobileOpen(false)}>Contact</a>
              <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium text-center mt-2" onClick={() => setMobileOpen(false)}>Inquire Now</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=1920&q=80"
          alt="Samoa coastline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <p className="text-blue-300 font-medium text-lg mb-4 tracking-wide uppercase">Welcome to Samoa</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Explore Paradise<br />
            <span className="text-blue-400">Today</span>
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl mb-8 leading-relaxed">
            Discover the beauty of Samoa with Alby Rentals. Reliable, affordable car rentals based in Lepea, Apia. From airport pickups to delivery across the island — we make it easy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#fleet" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-center text-lg shadow-lg shadow-blue-600/30">
              View Our Fleet
            </a>
            <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition font-semibold text-center text-lg">
              Send an Inquiry
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Car Rental Partner in Samoa
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Alby Rentals is a locally-owned car rental business based in the heart of Samoa. We pride ourselves on providing reliable, well-maintained vehicles at competitive prices for both locals and visitors.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you're here for a holiday, business trip, or just need a temporary vehicle, we've got you covered. Simply send us an inquiry, and we'll handle the rest — from confirming availability to arranging airport pickup or delivery.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Affordable</p>
                  <p className="text-sm text-gray-500">Best rates in Samoa</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Flexible</p>
                  <p className="text-sm text-gray-500">Daily & weekly rates</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Airport Pickup</p>
                  <p className="text-sm text-gray-500">We meet you on arrival</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-60
