'use client'

import React, { useState } from 'react';
import { 
  Menu, X, ArrowRight, DollarSign, Globe,
  Sparkles, Lock,  Play
} from "lucide-react";

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      icon: DollarSign,
      title: "Instant Transactions",
      description: "Execute global payments in milliseconds with our advanced blockchain architecture."
    },
    {
      icon: Lock,
      title: "Quantum-Safe Security",
      description: "Future-proof your assets with quantum-resistant cryptography and security protocols."
    },
    {
      icon: Globe,
      title: "Borderless Integration",
      description: "Seamlessly connect with global financial systems through our compatibility layer."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="w-full max-w-7xl mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-8">
            <div className="text-lg lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 whitespace-nowrap">
              CryptoNext
            </div>

            <div className="hidden md:flex gap-3 lg:gap-6">
              {["Features", "Solutions", "Pricing", "Developers"].map((item) => (
                <button key={item} className="text-xs lg:text-base text-gray-300 hover:text-white transition whitespace-nowrap">
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block text-xs lg:text-base bg-white/10 hover:bg-white/20 px-3 lg:px-6 py-2 rounded-full whitespace-nowrap">
              Launch App
            </button>

            <button className="md:hidden p-1" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-black/90 backdrop-blur-lg border-b border-white/10 p-4 flex flex-col gap-2">
            {["Features", "Solutions", "Pricing", "Developers"].map((item) => (
              <button key={item} className="text-gray-300 hover:text-white text-sm w-full text-left py-3 px-2 hover:bg-white/5 rounded-lg transition-colors">
                {item}
              </button>
            ))}
            <button className="bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg text-sm w-full text-left mt-2">Launch App</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute top-60 -right-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        </div>

        <div className="relative text-center space-y-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Revolutionary Blockchain Technology</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            The Future of Finance is Decentralized
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Experience unprecedented financial freedom with our next-generation cryptocurrency platform.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold flex items-center gap-2 transition hover:scale-105">
              Start Trading <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold bg-white/10 hover:bg-white/20 flex items-center gap-2">
              Watch Demo <Play className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 sm:py-32 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold">Revolutionary Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Experience the next generation of cryptocurrency trading with our advanced features.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
              className="group p-6 sm:p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <feature.icon className={`w-10 h-10 sm:w-12 sm:h-12 mb-6 ${activeFeature === index ? 'text-blue-400' : 'text-gray-400'}`} />
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 sm:py-32 px-4 text-center">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20" />
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 md:p-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Ready to Start Your Crypto Journey?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Join millions of users worldwide and experience the future of finance today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100">
                Create Free Account
              </button>
              <button className="bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white/20">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}