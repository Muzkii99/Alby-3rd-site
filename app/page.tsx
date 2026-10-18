"use client";

import { useState } from 'react';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/Alby LOGO Final.png" alt="Alby Rentals" className="w-14 h-10 object-contain" />
            <div className="brand-wordmark">
              <span className="text-xl font-bold text-gray-900">Alby</span>
              <span className="text-xl font-light text-blue-600"> Rentals</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-medium">About</a>
            <a href="#fleet" className="text-gray-700 hover:text-blue-600 transition font-medium">Our Fleet</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition font-medium">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">Contact</a>
            <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-medium">Inquire Now</a>
          </div>

          <button className="md:hidden text-gray-700" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

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
        <img src="https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=1920&q=80" alt="Samoa coastline" className="w-full h-full object-cover" />
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
            <a href="#fleet" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-center text-lg shadow-lg shadow-blue-600/30">View Our Fleet</a>
            <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition font-semibold text-center text-lg">Send an Inquiry</a>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Your Trusted Car Rental Partner in Samoa</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">Alby Rentals is a locally-owned car rental business based in the heart of Samoa. We pride ourselves on providing reliable, well-maintained vehicles at competitive prices for both locals and visitors.</p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">Whether you&apos;re here for a holiday, business trip, or just need a temporary vehicle, we&apos;ve got you covered. Simply send us an inquiry, and we&apos;ll handle the rest — from confirming availability to arranging airport pickup or delivery.</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div><p className="font-semibold text-gray-900">Affordable</p><p className="text-sm text-gray-500">Best rates in Samoa</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div><p className="font-semibold text-gray-900">Flexible</p><p className="text-sm text-gray-500">Daily &amp; weekly rates</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </div>
                <div><p className="font-semibold text-gray-900">Airport Pickup</p><p className="text-sm text-gray-500">We meet you on arrival</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <div><p className="font-semibold text-gray-900">Trusted</p><p className="text-sm text-gray-500">Local &amp; reliable</p></div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm text-center"><p className="text-3xl font-bold text-blue-600">30+</p><p className="text-gray-600 text-sm mt-1">Years Experience</p></div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center"><p className="text-3xl font-bold text-blue-600">500+</p><p className="text-gray-600 text-sm mt-1">Happy Customers</p></div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center"><p className="text-3xl font-bold text-blue-600">10+</p><p className="text-gray-600 text-sm mt-1">Vehicles Available</p></div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center"><p className="text-3xl font-bold text-blue-600">24/7</p><p className="text-gray-600 text-sm mt-1">Support</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fleet() {
  const cars = [
    { name: "Toyota Corolla", type: "Sedan", seats: 5, transmission: "Automatic", price: "$65", image: "🚗", description: "Perfect for couples or small families exploring the island." },
    { name: "Toyota RAV4", type: "SUV", seats: 5, transmission: "Automatic", price: "$95", image: "🚙", description: "Great for families and adventures to remote beaches." },
    { name: "Hyundai iLoad", type: "Van", seats: 8, transmission: "Automatic", price: "$120", image: "🚐", description: "Ideal for groups and family trips around Samoa." },
    { name: "Toyota Hilux", type: "Pickup", seats: 5, transmission: "Automatic", price: "$110", image: "🛻", description: "Perfect for rugged terrain and carrying equipment." },
    { name: "Suzuki Swift", type: "Compact", seats: 4, transmission: "Automatic", price: "$50", image: "🚗", description: "Budget-friendly option for solo travelers or couples." },
    { name: "Mitsubishi Pajero", type: "4WD", seats: 7, transmission: "Automatic", price: "$130", image: "🚙", description: "The ultimate vehicle for exploring all of Samoa." },
  ];

  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">Our Fleet</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Ride</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">From compact cars for zipping around town to rugged 4WDs for island exploration, we have the right vehicle for every need.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 flex items-center justify-center">
                <span className="text-6xl">{car.image}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                  <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">{car.type}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{car.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    {car.seats} Seats
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {car.transmission}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div><span className="text-2xl font-bold text-blue-600">{car.price}</span><span className="text-gray-500 text-sm">/day</span></div>
                  <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium">Inquire</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>, title: "Airport Pickup", description: "We&apos;ll meet you at Faleolo International Airport with your vehicle ready and waiting for you." },
    { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: "Delivery Service", description: "We deliver and pick up vehicles at your hotel, resort, or any location around Samoa." },
    { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: "Well-Maintained Vehicles", description: "All our cars are regularly serviced and thoroughly cleaned before every rental." },
    { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Flexible Pricing", description: "Daily, weekly, and monthly rates available. Special discounts for long-term rentals." },
    { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, title: "Friendly Local Service", description: "As a locally-owned business, we offer personalised service and local knowledge to help you get around." },
    { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Easy Booking Process", description: "Simply send us an inquiry, we&apos;ll confirm availability, and arrange everything for you hassle-free." },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">More Than Just Car Rentals</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">We go above and beyond to make your Samoa experience seamless and memorable.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-6 rounded-xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all">
              <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 transition-colors">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { name: "Sarah M.", location: "Australia", text: "Alby Rentals made our Samoa holiday so much easier. The car was clean, reliable, and the price was very fair. Highly recommend!", rating: 5 },
    { name: "James T.", location: "New Zealand", text: "Excellent service from start to finish. Airport pickup was seamless and the RAV4 was perfect for exploring the island. Will definitely use again.", rating: 5 },
    { name: "Leilani F.", location: "Samoa", text: "I&apos;ve been using Alby Rentals for all my business trips. Always professional, always on time. The best rental service in Samoa.", rating: 5 },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-200 font-semibold uppercase tracking-wide mb-2">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 mb-4 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>
              <div><p className="text-white font-semibold">{testimonial.name}</p><p className="text-blue-200 text-sm">{testimonial.location}</p></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-blue-200 mb-4 text-sm">Happy with our service?</p>
          <a href="https://share.google/tfxEN57gKt7gNFs4c" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition transform hover:scale-105">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Read or Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [needsAirportPickup, setNeedsAirportPickup] = useState(false);

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Inquire About a Rental</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Send us your details and preferred dates. We&apos;ll check availability and get back to you with a booking form to complete your reservation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Send us an inquiry</h3>
            <p className="text-gray-500 text-sm mb-6">Fill in the form below and we&apos;ll reply to your email shortly.</p>
            
            <form action="https://formsubmit.co/albyrentals@gmail.com" method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value="New Rental Inquiry - Alby Rentals Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://albyrentals.netlify.app/thank-you" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp *</label>
                <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="+685 xxxxxxx" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Pick-up Date *</label>
                  <input type="date" name="pickup_date" required className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Return Date *</label>
                  <input type="date" name="return_date" required className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle of Interest</label>
                <select name="vehicle" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition">
                  <option value="">Select a vehicle (optional)</option>
                  <option value="Toyota Corolla">Toyota Corolla – Sedan ($65/day)</option>
                  <option value="Toyota RAV4">Toyota RAV4 – SUV ($95/day)</option>
                  <option value="Hyundai iLoad">Hyundai iLoad – Van ($120/day)</option>
                  <option value="Toyota Hilux">Toyota Hilux – Pickup ($110/day)</option>
                  <option value="Suzuki Swift">Suzuki Swift – Compact ($50/day)</option>
                  <option value="Mitsubishi Pajero">Mitsubishi Pajero – 4WD ($130/day)</option>
                  <option value="Not sure">Not sure yet (Please advise)</option>
                </select>
              </div>

              {/* Smart Airport Pickup Details */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 space-y-4">
                <h4 className="font-semibold text-blue-900 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  Airport Pickup Details (Optional)
                </h4>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Do you need airport pickup?</label>
                  <select 
                    name="airport_pickup" 
                    value={needsAirportPickup ? "Yes" : "No"}
                    onChange={(e) => setNeedsAirportPickup(e.target.value === "Yes")}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                  >
                    <option value="No">No, I will pick up in Lepea</option>
                    <option value="Yes">Yes, please meet me at Faleolo Airport (+$80)</option>
                  </select>
                  {needsAirportPickup && (
                    <p className="text-xs text-blue-800 font-semibold mt-2 bg-blue-100 p-2 rounded-md">
                      * Please note: Airport pickup and drop-off incurs an additional fee of $80 WST.
                    </p>
                  )}
                </div>
                
                {needsAirportPickup && (
                  <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-blue-200">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Flight Number</label>
                      <input type="text" name="flight_number" className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="e.g., PJ 891" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Arrival Time</label>
                      <input type="time" name="arrival_time" className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition" />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message / Special Requests</label>
                <textarea name="message" rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition resize-none" placeholder="Delivery to a specific resort?"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-lg shadow-lg shadow-blue-600/20">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                How Booking Works
              </h4>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2"><span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span><span>Send us an inquiry using the form or WhatsApp.</span></li>
                <li className="flex items-start gap-2"><span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span><span>We&apos;ll check availability and reply with a booking form.</span></li>
                <li className="flex items-start gap-2"><span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span><span>Once confirmed, we&apos;ll send our ANZ bank details for a deposit.</span></li>
                <li className="flex items-start gap-2"><span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span><span>Your vehicle will be ready for pick-up or airport delivery!</span></li>
              </ol>
            </div>

            {/* CLICKABLE LOCATION CARD */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Alby+Rentals+Lepea+Samoa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group block"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Location</h4>
                  <p className="text-gray-600 group-hover:text-blue-600 transition-colors">Lepea, Samoa</p>
                  <p className="text-blue-500 text-sm font-medium mt-1">Tap to open in Google Maps ↗</p>
                </div>
              </div>
            </a>

            {/* CLICKABLE PHONE CARD */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone / WhatsApp</h4>
                  <a href="tel:+68521271" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">+685 21271</a>
                  <a href="tel:+6857611239" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">+685 7611239 (Mobile)</a>
                </div>
              </div>
            </div>

            {/* CLICKABLE EMAIL CARD */}
            <a 
              href="mailto:albyrentals@gmail.com"
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group block"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Email</h4>
                  <p className="text-gray-600 group-hover:text-blue-600 transition-colors">albyrentals@gmail.com</p>
                  <p className="text-blue-500 text-sm font-medium mt-1">Tap to send an email ↗</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/Alby LOGO Final white.png" alt="Alby Rentals" className="w-14 h-10 object-contain bg-gray-900" />
              <div><span className="text-xl font-bold text-white">Alby</span><span className="text-xl font-light text-blue-400"> Rentals</span></div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">Your trusted car rental partner in Samoa. We provide reliable, affordable vehicles for locals and visitors to explore the beautiful islands of Samoa.</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#fleet" className="text-gray-400 hover:text-blue-400 transition">Our Fleet</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lepea, Samoa</li>
              <li>+685 21271</li>
              <li>+685 7611239 (Mobile)</li>
              <li>albyrentals@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Alby Rentals. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Made with ❤️ in Samoa</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Fleet />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />

      <a 
        href="https://wa.me/6857611239?text=Hi%20Alby%20Rentals,%20I%20would%20like%20to%20inquire%20about%20renting%20a%20car."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition z-50 flex items-center gap-2 font-semibold"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Chat on WhatsApp
      </a>
    </div>
  );
}
