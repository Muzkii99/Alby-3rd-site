"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Car, ShieldCheck, Star, ChevronRight, Calendar } from "lucide-react";

const FLEET = [
  { id: "1", brand: "Toyota", model: "Vitz", year: 2022, pricePerDay: 60, category: "Economy", transmission: "Automatic", seatingCapacity: 5, image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=800&q=80" },
  { id: "2", brand: "Toyota", model: "Corolla Axio", year: 2021, pricePerDay: 75, category: "Sedan", transmission: "Automatic", seatingCapacity: 5, image: "https://images.unsplash.com/photo-1621007947382-bb3c3968e3bb?auto=format&fit=crop&w=800&q=80" },
  { id: "3", brand: "Suzuki", model: "Swift", year: 2023, pricePerDay: 65, category: "Compact", transmission: "Automatic", seatingCapacity: 5, image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80" },
];

const driveInLeft = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 } } };
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

export default function AlbyRentalsHome() {
  const { scrollYProgress } = useScroll();
  const carY = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <div className="min-h-screen bg-sky-50 text-slate-800 font-sans overflow-x-hidden">
      <motion.div style={{ y: carY }} className="fixed right-4 top-0 z-50 hidden lg:flex flex-col items-center gap-2 text-sky-400">
        <Car className="h-8 w-8" />
        <div className="w-0.5 h-24 bg-sky-200 rounded-full" />
      </motion.div>

      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Alby Rentals Logo" className="h-10 w-auto" />
              <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Alby<span className="text-sky-600">Rentals</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
              <a href="#fleet" className="hover:text-sky-600 transition-colors">Our Fleet</a>
              <a href="#about" className="hover:text-sky-600 transition-colors">About Us</a>
              <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
            </div>
            <a href="mailto:albyrentals@gmail.com" className="hidden md:block bg-sky-600 hover:bg-sky-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-sky-200">Book Now</a>
            <div className="md:hidden flex items-center gap-3">
              <a href="tel:+6857611239" className="bg-sky-600 text-white p-2 rounded-full shadow-md"><Phone className="h-5 w-5" /></a>
              <details className="relative">
                <summary className="cursor-pointer bg-sky-50 p-2 rounded-lg list-none">
                  <svg className="h-6 w-6 text-sky-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </summary>
                <ul className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-sky-100 py-2 z-50">
                  <li><a href="#fleet" className="block px-4 py-2 hover:bg-sky-50 text-slate-700">Our Fleet</a></li>
                  <li><a href="#about" className="block px-4 py-2 hover:bg-sky-50 text-slate-700">About Us</a></li>
                  <li><a href="#contact" className="block px-4 py-2 hover:bg-sky-50 text-slate-700">Contact</a></li>
                  <li className="border-t border-sky-100 mt-2 pt-2"><a href="mailto:albyrentals@gmail.com" className="block px-4 py-2 text-sky-600 font-bold">Book Now</a></li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-sky-50 -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={driveInLeft}>
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Star className="h-4 w-4 fill-sky-700" /> Serving Samoa for over 40 years
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Experience Samoa at <span className="text-sky-600">Your Own Pace.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Reliable, clean, and affordable economy cars for locals and visitors. We’re not just a car rental; we’re your friendly guides and hosts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#fleet" className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-sky-200 flex items-center justify-center gap-2">
                View Our Cars <ChevronRight className="h-5 w-5" />
              </a>
              <a href="tel:+6857611239" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                <Phone className="h-5 w-5 text-sky-600" /> Call Us
              </a>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-200/50 border-4 border-white">
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80" alt="Driving in Samoa" className="w-full h-[400px] lg:h-[500px] object-cover" />
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-sky-100 flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-full"><ShieldCheck className="h-6 w-6 text-green-600" /></div>
              <div><p className="text-sm text-slate-500 font-medium">Fully Insured</p><p className="text-slate-900 font-bold">Peace of Mind</p></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="relative h-16 flex items-center justify-center overflow-hidden">
        <motion.div initial={{ backgroundPositionX: 0 }} whileInView={{ backgroundPositionX: ["0px", "100px"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="w-full h-2 bg-[linear-gradient(to_right,#0ea5e9_50%,transparent_50%)] bg-[length:40px_100%]" />
      </div>

      <section id="fleet" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Economy Fleet</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Fuel-efficient, easy to drive, and perfect for navigating Apia's streets or coastal roads.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLEET.map((car) => (
              <motion.div key={car.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="bg-sky-50/50 rounded-2xl border border-sky-100 overflow-hidden hover:shadow-xl hover:shadow-sky-100 transition-all duration-300 group">
                <div className="relative h-56 overflow-hidden">
                  <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-sky-700 shadow-sm">{car.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div><h3 className="text-xl font-bold text-slate-900">{car.brand} {car.model}</h3><p className="text-sm text-slate-500">{car.year} Model</p></div>
                    <div className="text-right"><p className="text-2xl font-bold text-sky-600">WST {car.pricePerDay}</p><p className="text-xs text-slate-500">/day</p></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-sky-100 mb-6">
                    <div className="flex flex-col items-center text-center"><Car className="h-5 w-5 text-sky-400 mb-1" /><span className="text-xs text-slate-600 font-medium">{car.seatingCapacity} Seats</span></div>
                    <div className="flex flex-col items-center text-center border-l border-sky-100"><Calendar className="h-5 w-5 text-sky-400 mb-1" /><span className="text-xs text-slate-600 font-medium">{car.transmission}</span></div>
                    <div className="flex flex-col items-center text-center border-l border-sky-100"><ShieldCheck className="h-5 w-5 text-sky-400 mb-1" /><span className="text-xs text-slate-600 font-medium">Insured</span></div>
                  </div>
                  <a href={`mailto:albyrentals@gmail.com?subject=Booking Inquiry: ${car.brand} ${car.model}`} className="w-full bg-slate-900 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                    Request This Car <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-sky-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={driveInLeft}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">More Than Just a Rental. We’re Your Hosts.</h2>
            <p className="text-sky-100 text-lg leading-relaxed mb-6">
              For over 40 years, Alby Rentals has been sharing the warmth and spirit of Samoa with every visitor. We provide personalized service, transparent pricing, and vehicles you can trust.
            </p>
            <ul className="space-y-4">
              {["Free delivery within Apia", "24/7 roadside assistance", "No hidden fees or surprise charges"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-sky-500 p-1 rounded-full"><ShieldCheck className="h-5 w-5 text-white" /></div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
            <h3 className="text-2xl font-bold mb-6">What Our Customers Say</h3>
            <div className="bg-white/10 p-4 rounded-xl">
              <div className="flex gap-1 mb-2">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
              <p className="text-sky-50 italic">"Tuaoitau was so helpful! The car was clean, cheap, and made our trip so much easier. Highly recommend Alby Rentals."</p>
              <p className="text-sm font-semibold mt-3 text-sky-200">- Sarah M., Visitor</p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer id="contact" className="bg-slate-900 text-slate-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <img src="/logo.png" alt="Alby Rentals Logo" className="h-8 w-auto" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Alby<span className="text-sky-500">Rentals</span></span>
            </div>
            <p className="text-slate-400 mb-6">Your trusted partner for affordable, reliable car rentals in Apia, Samoa.</p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-sky-500 mt-0.5 shrink-0" /><span>Vaitele St, Apia, Samoa</span></li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-sky-500 shrink-0" /><a href="tel:+6857611239" className="hover:text-sky-400 transition-colors">+685 76 11239</a></li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-sky-500 shrink-0" /><a href="mailto:albyrentals@gmail.com" className="hover:text-sky-400 transition-colors">albyrentals@gmail.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between"><span>Monday - Friday</span><span className="text-white font-medium">9:00 AM – 4:30 PM</span></li>
              <li className="flex justify-between"><span>Saturday - Sunday</span><span className="text-sky-400 font-medium">Closed</span></li>
            </ul>
            <div className="mt-6 p-4 bg-sky-900/30 rounded-xl border border-sky-800">
              <p className="text-sm text-sky-200 flex items-center gap-2"><Clock className="h-4 w-4" />Email Tuaoitau directly for weekend or after-hours booking arrangements.</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Alby Rentals. All rights reserved. Faʻafetai for choosing us!</p>
        </div>
      </footer>
    </div>
  );
}