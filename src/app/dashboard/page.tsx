'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { 
  MagnifyingGlassIcon, 
  HeartIcon, 
  BellIcon, 
  Cog6ToothIcon,
  ArrowRightIcon,
  FunnelIcon,
  XMarkIcon,
  StarIcon,
  MapPinIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

export default function Dashboard() {
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const [savedCars, setSavedCars] = useState([
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2023,
      price: 28990,
      mileage: 15000,
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80',
      saved: true
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Accord',
      year: 2022,
      price: 26990,
      mileage: 22000,
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80',
      saved: true
    },
    {
      id: 3,
      make: 'BMW',
      model: '3 Series',
      year: 2023,
      price: 42990,
      mileage: 8000,
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80',
      saved: false
    },
  ]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const toggleSave = (id: number) => {
    setSavedCars(cars =>
      cars.map(car =>
        car.id === id ? { ...car, saved: !car.saved } : car
      )
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-gray-900">AEG</h1>
              <nav className="hidden md:flex items-center gap-6">
                <a href="/" className="text-gray-600 hover:text-gray-900">Browse</a>
                <a href="/dashboard" className="text-black font-medium">My Dashboard</a>
                <a href="/dashboard" className="text-gray-600 hover:text-gray-900">Saved Cars</a>
                <a href="/dashboard" className="text-gray-600 hover:text-gray-900">Searches</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                <BellIcon className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                <div className="w-10 h-10 bg-[#006400] rounded-full flex items-center justify-center text-white font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h2>
          <p className="text-gray-600">
            Here's what's happening with your car search
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Saved Cars</p>
                <p className="text-2xl font-bold text-gray-900">{savedCars.filter(c => c.saved).length}</p>
              </div>
              <HeartIcon className="w-8 h-8 text-red-500" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Searches</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <MagnifyingGlassIcon className="w-8 h-8 text-[#006400]" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Price Alerts</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
              <BellIcon className="w-8 h-8 text-yellow-500" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">New Matches</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <StarIcon className="w-8 h-8 text-blue-500" />
            </div>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  {showFilters ? <XMarkIcon className="w-5 h-5" /> : <FunnelIcon className="w-5 h-5" />}
                </button>
              </div>
              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>All Makes</option>
                    <option>Toyota</option>
                    <option>Honda</option>
                    <option>BMW</option>
                    <option>Mercedes-Benz</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mileage</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>Any Mileage</option>
                    <option>Under 10k</option>
                    <option>10k - 30k</option>
                    <option>30k - 50k</option>
                    <option>50k+</option>
                  </select>
                </div>
                <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Saved Cars Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Saved Cars</h3>
                <button className="text-sm text-[#006400] hover:underline">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {savedCars.map((car, index) => (
                  <motion.div
                    key={car.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative">
                      <img
                        src={car.image}
                        alt={`${car.year} ${car.make} ${car.model}`}
                        className="w-full h-48 object-cover"
                      />
                      <button
                        onClick={() => toggleSave(car.id)}
                        className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                      >
                        {car.saved ? (
                          <HeartIconSolid className="w-5 h-5 text-red-500" />
                        ) : (
                          <HeartIcon className="w-5 h-5 text-gray-600" />
                        )}
                      </button>
                      <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium">
                        ${car.price.toLocaleString()}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {car.year} {car.make} {car.model}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          {car.location}
                        </span>
                        <span>{car.mileage.toLocaleString()} mi</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <button className="text-sm text-[#006400] hover:underline font-medium">
                          View Details
                        </button>
                        <button className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors">
                          Contact Dealer
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Searches</h3>
              <div className="space-y-4">
                {[
                  { query: 'Toyota Camry under $30k', results: 45, date: '2 days ago' },
                  { query: 'Honda Accord 2020+', results: 32, date: '5 days ago' },
                  { query: 'BMW 3 Series', results: 18, date: '1 week ago' },
                ].map((search, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{search.query}</p>
                      <p className="text-sm text-gray-600">{search.results} results • {search.date}</p>
                    </div>
                    <ArrowRightIcon className="w-5 h-5 text-gray-400" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

