'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, WrenchIcon, SparklesIcon, CurrencyDollarIcon, ArrowDownIcon, CheckIcon, ArrowPathIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [searchForm, setSearchForm] = useState({
    condition: 'used',
    make: '',
    model: '',
    zipcode: ''
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-[url('/racing-stripes.svg')] opacity-10"></div>
        
        <div className="relative container mx-auto px-4">
          <Header />
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-md"
            >
              <span className="text-black tracking-widest text-sm uppercase">Unlock your dream car</span>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle search - you can add your search logic here
                    console.log('Search:', searchForm);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                      <select
                        value={searchForm.condition}
                        onChange={(e) => setSearchForm({...searchForm, condition: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-gray-800 bg-white"
                      >
                        <option value="used">Used</option>
                        <option value="new">New</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                      <input
                        type="text"
                        value={searchForm.make}
                        onChange={(e) => setSearchForm({...searchForm, make: e.target.value})}
                        placeholder="e.g., Toyota, Honda"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-gray-800 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                      <input
                        type="text"
                        value={searchForm.model}
                        onChange={(e) => setSearchForm({...searchForm, model: e.target.value})}
                        placeholder="e.g., Camry, Accord"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-gray-800 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                      <input
                        type="text"
                        value={searchForm.zipcode}
                        onChange={(e) => setSearchForm({...searchForm, zipcode: e.target.value})}
                        placeholder="e.g., 90210"
                        maxLength={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-gray-800 placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary bg-black text-white hover:bg-gray-800 transition-colors rounded-xl py-3"
                  >
                    Search Cars <ArrowRightIcon className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>

            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[400px] rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80"
                  alt="Luxury car showcase"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
              </motion.div>
            </div>
          </div>

          {/* Services Grid Section - CarGurus Style */}
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group cursor-pointer"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-[#006400]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#006400]/20 transition-colors">
                    <CurrencyDollarIcon className="w-8 h-8 text-[#006400]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Financing</h3>
                  <p className="text-gray-600 text-sm mb-4">Get pre-approved and find the best financing options for your next vehicle.</p>
                  <div className="flex items-center text-[#006400] text-sm font-medium group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group cursor-pointer"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-[#006400]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#006400]/20 transition-colors">
                    <ArrowPathIcon className="w-8 h-8 text-[#006400]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Selling Your Car</h3>
                  <p className="text-gray-600 text-sm mb-4">Get an instant offer and sell your car quickly with our streamlined process.</p>
                  <div className="flex items-center text-[#006400] text-sm font-medium group-hover:gap-2 transition-all">
                    <span>Get Started</span>
                    <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group cursor-pointer"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-[#006400]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#006400]/20 transition-colors">
                    <DocumentTextIcon className="w-8 h-8 text-[#006400]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Documents</h3>
                  <p className="text-gray-600 text-sm mb-4">Access and manage all your vehicle documents in one secure place.</p>
                  <div className="flex items-center text-[#006400] text-sm font-medium group-hover:gap-2 transition-all">
                    <span>View Documents</span>
                    <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group cursor-pointer"
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-[#006400]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#006400]/20 transition-colors">
                    <WrenchIcon className="w-8 h-8 text-[#006400]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Car Parts</h3>
                  <p className="text-gray-600 text-sm mb-4">Find genuine parts and accessories for your vehicle with rebates and discounts.</p>
                  <div className="flex items-center text-[#006400] text-sm font-medium group-hover:gap-2 transition-all">
                    <span>Shop Parts</span>
                    <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Featured Stories Section */}
          <div className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80"
                    alt="Auto insurance innovation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className="text-gray-800 text-sm font-medium">January 30, 2024</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">Revolutionizing Auto Insurance</h3>
                  <p className="text-gray-700 mb-4">How Auto Equity Group is transforming the insurance industry with innovative solutions and Italian expertise.</p>
                  <div className="flex items-center gap-2 text-[#006400] text-sm">
                    <span>Read Full Story</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80"
                    alt="Future of automotive innovation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className="text-gray-800 text-sm font-medium">January 25, 2024</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">The Future of Automotive Innovation</h3>
                  <p className="text-gray-700 mb-4">Exploring how Italian design and American technology are shaping the future of the automotive industry.</p>
                  <div className="flex items-center gap-2 text-[#006400] text-sm">
                    <span>Read Full Story</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-aeg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-12 rounded-2xl shadow-xl"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Stay Connected</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Subscribe to our newsletter for exclusive updates, special offers, and the latest news from Auto Equity Group.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-2xl bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black border border-gray-200"
                />
                <button 
                  type="submit" 
                  className="btn-primary whitespace-nowrap rounded-2xl px-8 py-4 text-lg"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 