import React from "react";
import { Link } from "react-router-dom";
import img from "../import/import";

const Home = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="px-6 md:px-16 py-10">
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-3xl px-12 py-14 grid md:grid-cols-2 gap-8 items-center overflow-hidden relative min-h-[340px]">

          <div className="text-white z-10">
            <h1 className="text-3xl md:text-4xl font-semibold leading-snug mb-4">
              Smarter skin care starts here<br />
              understand your skin, treat it right.
            </h1>
            <p className="text-white/85 text-base mb-8 max-w-sm">
              From quick AI scans to real doctor advice, everything you need to take care of your skin is right here—simple, reliable, and made for you.
            </p>
            <button className="bg-white text-blue-600 px-6 py-2.5 rounded-full font-medium text-sm shadow hover:scale-105 transition">
              Book a Demo
            </button>
          </div>

          <div className="relative flex justify-end items-end h-full">
            <img
              src={img.lady}
              alt="AI Scan"
              className="relative right-0 h-110 object-cover rounded-2xl"
            />
          </div>

        </div>
      </section>

      {/* WHY CURELY */}
      <section className="px-6 md:px-16 py-14 bg-white">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div className="relative">
            <img
              src={img.pic1}
              alt="Skin Analysis"
              className="rounded-2xl w-full object-cover"
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-3">
              <div>
                <p className="text-xs text-gray-400">Skin tone</p>
                <p className="text-sm font-semibold text-gray-800">3.5 <span className="text-green-500 font-normal text-xs">Good</span></p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-7">Why Curely ?</h2>

            <div className="space-y-6 text-gray-600 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">AI Powered Skin Analysis</h4>
                <p>Get instant, accurate skin analysis powered by advanced AI—so you know what's actually going on, not just guessing.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Expert Care, Anytime</h4>
                <p>Connect with certified dermatologists whenever you need—no long waits, no unnecessary visits.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Personalized, Not Generic</h4>
                <p>Receive skincare routines, reminders, and guidance tailored specifically to your skin, lifestyle, and environment.</p>
              </div>
            </div>

            <button className="mt-7 bg-blue-500 hover:bg-blue-600 text-white text-sm px-6 py-2.5 rounded-full transition">
              Try SkinHealth+ today
            </button>
          </div>

        </div>
      </section>

      {/* 3 STEP CARDS */}
      <section className="px-6  mb-20  py-14">
        <h2 className="text-xl font-semibold mb-8">Know what your skin needs</h2>

        <div className="grid md:grid-cols-3 gap-10  ">
          {[
            "Scan your skin",
            "Understand what's going on",
            "Take the right next step",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-3xl p-10 flex flex-col items-center justify-center text-center text-gray-600 hover:shadow-md transition min-h-[250px]"
            >
              <p className="text-base font-medium">{item}</p>
              <p className="mt-4 text-gray-400 text-xl">↓</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="px-6 md:px-16 py-14 bg-white">
        <h2 className="text-xl font-semibold mb-2">Helping thousands understand their skin better</h2>

        <div className="mt-8 max-w-lg mx-auto">
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <p className="text-yellow-400 text-lg mb-3">★★★★★</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              "I'd been struggling with mysterious breakouts for two years. SkinHealth identified it as hormonal acne in 30 seconds. My dermatologist confirmed it the next week. This app is genuinely life-changing."
            </p>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">Condition: Hormonal Acne</span>
              <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">✓ Cleared in 6 weeks</span>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <img src="/sarah.jpeg" alt="Sarah" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-semibold text-sm">Sarah M.</p>
                <p className="text-xs text-gray-400">Graphic Designer, NYC</p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>
          </div>
        </div>

        {/* #CareMadeSimple blurb */}
        <div className="mt-14 text-center">
          <p className="text-gray-400 text-sm font-medium tracking-wide mb-2">#CareMadeSimple</p>
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            We're building a smarter, more accessible way to care for your skin so anyone, anywhere, can get the clarity and guidance they deserve.
          </p>
          <button className="mt-5 border border-gray-300 text-gray-700 text-sm px-5 py-2 rounded-full hover:bg-gray-50 transition">
            Expertise
          </button>
        </div>
      </section>

      {/* EXPERTS */}
      <section className="px-6 md:px-16 py-14 bg-white">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
          <h2 className="text-xl font-semibold">Talk to experts who understand your skin</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Connect with certified dermatologists who review, guide, and support you at every step of your skin journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { name: "Dr. Ankit B", specialty: "Surgical Dermatologist", img: "/ankit 2.jpeg", bg: "bg-gray-100" },
            { name: "Dr. Shreya G", specialty: "Dermatologist", img: "/arpit 2.jpeg", bg: "bg-yellow-50" },
            { name: "Dr. Mahi S", specialty: "Dermatologist", img: "/trisha 2.jpeg", bg: "bg-gray-100" },
            { name: "Dr. Arpit S", specialty: "Pediatric Dermatologist", img: "/piyush.jpeg", bg: "bg-gray-100" },
          ].map((doc, i) => (
            <div
              key={i}
              className={`${doc.bg} rounded-2xl overflow-hidden hover:shadow-md transition`}
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-full h-52 object-cover object-top"
              />
              <div className="p-3">
                <p className="font-semibold text-sm">{doc.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{doc.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 md:px-16 py-10">
        <div className="bg-gradient-to-r from-gray-100 to-blue-100 rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center gap-6 overflow-hidden relative">

          <div className="relative z-10">
            <h2 className="text-xl font-semibold mb-1">Stop guessing your skin condition.</h2>
            <p className="text-gray-500 text-sm">Start understanding it &amp; treating it the right way.</p>
          </div>

          {/* Decorative blobs in background */}
          <div className="absolute right-40 top-2 w-24 h-24 bg-blue-200 rounded-full opacity-30 blur-2xl pointer-events-none"></div>
          <div className="absolute right-20 bottom-2 w-16 h-16 bg-blue-300 rounded-full opacity-20 blur-xl pointer-events-none"></div>

          <Link to="/scan-page" className="relative z-10">
            <button className="border border-gray-300 bg-white text-gray-800 text-sm px-6 py-2.5 rounded-full hover:shadow-md transition whitespace-nowrap">
              Scan your Skin Now
            </button>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-16 py-12 bg-white border-t border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              <span className="font-semibold text-sm">Curely</span>
            </div>
            <p className="text-xs text-gray-400 mb-4">Helping you understand and care for your skin everyday.</p>
            <div className="flex gap-3 text-gray-400 text-sm">
              <a href="#" className="hover:text-blue-500 transition">f</a>
              <a href="#" className="hover:text-blue-500 transition">t</a>
              <a href="#" className="hover:text-blue-500 transition">in</a>
              <a href="#" className="hover:text-blue-500 transition">P</a>
            </div>
          </div>

          {/* Entity types */}
          <div>
            <p className="font-semibold text-xs mb-3 text-gray-700">Entity types</p>
            <ul className="space-y-2 text-xs text-gray-400">
              {["AI scan", "Communities", "Blogs", "Partners", "About us", "FAQs"].map(l => (
                <li key={l}><a href="#" className="hover:text-blue-500 transition">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-xs mb-3 text-gray-700">Services</p>
            <ul className="space-y-2 text-xs text-gray-400">
              {["Press", "Payout", "Library", "Blog", "Help Center"].map(l => (
                <li key={l}><a href="#" className="hover:text-blue-500 transition">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="font-semibold text-xs mb-3 text-gray-700">Resources</p>
            <ul className="space-y-2 text-xs text-gray-400">
              {["Terms & Conditions", "FAQs", "Content Support", "Privacy Policy", "Surveys & Feedback"].map(l => (
                <li key={l}><a href="#" className="hover:text-blue-500 transition">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="font-semibold text-xs mb-3 text-gray-700">Support</p>
            <ul className="space-y-2 text-xs text-gray-400">
              {["Contact", "Affiliates", "Sitemap", "Cancellation Policy", "Pricing"].map(l => (
                <li key={l}><a href="#" className="hover:text-blue-500 transition">{l}</a></li>
              ))}
            </ul>
          </div>

        </div>

        {/* Big watermark text */}
        <div className="relative overflow-hidden mt-4">
          <p className="text-[80px] md:text-[120px] font-bold text-blue-100 select-none leading-none tracking-tight">
            Curely
          </p>
        </div>

        <p className="text-center text-xs text-gray-300 mt-2">Copyright 2025 @Curely. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Home;