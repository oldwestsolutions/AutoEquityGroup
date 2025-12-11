'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <header className="w-full py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-red-600">
          AEG
        </Link>
        
        <div className="flex items-center gap-8">
          {isAuthenticated && user ? (
            <>
              <Link 
                href="/dashboard" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Dashboard
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#006400] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <button 
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Link 
              href="/login" 
              className="bg-black text-white hover:bg-gray-800 transition-colors rounded-2xl px-6 py-2"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 