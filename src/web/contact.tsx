import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Users, ShoppingCart, Menu, X } from 'lucide-react';

const HeroPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-400/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <BarChart3 className="w-8 h-8 text-orange-400" />
              <span className="ml-2 text-2xl font-bold text-white">Growlytic</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/90 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">Contact</a>
            <div className="relative">
              <a href="#" className="text-white/90 hover:text-white transition-colors flex items-center">
                Pages
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-white/90" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors font-medium">
              All Templates
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-emerald-600/95 backdrop-blur-sm border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              <a href="#" className="block text-white/90 hover:text-white transition-colors">Home</a>
              <a href="#" className="block text-white/90 hover:text-white transition-colors">Features</a>
              <a href="#" className="block text-white/90 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="block text-white/90 hover:text-white transition-colors">Contact</a>
              <a href="#" className="block text-white/90 hover:text-white transition-colors">Pages</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-7xl font-bold text-white leading-tight transform transition-all duration-1000 ${
              animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Your Smartest<br />
              <span className="text-green-200">Marketing Assistant</span>
            </h1>
          </div>

          {/* Floating Cards and Central Image */}
          <div className="relative max-w-4xl mx-auto">
            {/* Engagement Uplift Card - Top Left */}
            <div className={`absolute top-0 left-0 md:left-8 w-64 transform transition-all duration-1000 delay-500 ${
              animationStarted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
            }`}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-700 font-semibold">Engagement<br />Uplift</h3>
                  <div className="flex items-center text-orange-500">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">+25.3%</span>
                  </div>
                </div>
                <div className="h-20 relative">
                  <svg className="w-full h-full" viewBox="0 0 200 60">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,50 Q20,45 40,42 T80,38 T120,32 T160,28 T200,25"
                      stroke="#10b981"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M0,50 Q20,45 40,42 T80,38 T120,32 T160,28 T200,25 L200,60 L0,60 Z"
                      fill="url(#gradient)"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Central Person Image */}
            <div className={`relative z-20 mx-auto w-80 h-96 transform transition-all duration-1000 delay-700 ${
              animationStarted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}>
              <div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-200 rounded-3xl overflow-hidden shadow-2xl relative">
                {/* Person silhouette/placeholder */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-64 bg-gradient-to-t from-yellow-500 via-orange-400 to-orange-300 rounded-t-full"></div>
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gray-800 rounded-full"></div>
                {/* Phone in hand */}
                <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 translate-x-8 w-12 h-20 bg-gray-800 rounded-lg shadow-lg"></div>
              </div>
            </div>

            {/* Followers Stats Card - Top Right */}
            <div className={`absolute top-12 right-0 md:right-8 w-56 transform transition-all duration-1000 delay-600 ${
              animationStarted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
            }`}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-700 font-semibold">Followers<br />Stats</h3>
                  <div className="flex items-center text-orange-500">
                    <span className="text-sm">+20%</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Instagram</span>
                    </div>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Facebook</span>
                    </div>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">LinkedIn</span>
                    </div>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  {/* Bar Chart */}
                  <div className="mt-4 flex items-end space-x-1 h-12">
                    <div className="w-4 bg-green-500 rounded-t opacity-60" style={{height: '60%'}}></div>
                    <div className="w-4 bg-green-500 rounded-t opacity-70" style={{height: '70%'}}></div>
                    <div className="w-4 bg-green-500 rounded-t opacity-80" style={{height: '80%'}}></div>
                    <div className="w-4 bg-green-500 rounded-t" style={{height: '100%'}}></div>
                    <div className="w-4 bg-green-500 rounded-t opacity-90" style={{height: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Card - Bottom Left */}
            <div className={`absolute bottom-0 left-0 md:left-16 w-52 transform transition-all duration-1000 delay-800 ${
              animationStarted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
            }`}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">Live</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">2.4K</h3>
                <p className="text-sm text-gray-600">Active Users</p>
                <div className="mt-3 flex items-center text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="text-sm">+12% from last week</span>
                </div>
              </div>
            </div>

            {/* Revenue Card - Bottom Right */}
            <div className={`absolute bottom-8 right-0 md:right-16 w-48 transform transition-all duration-1000 delay-900 ${
              animationStarted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
            }`}>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">Revenue</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">$12.5K</h3>
                <div className="flex items-center text-green-600">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  <span className="text-xs">+8.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors cursor-pointer">
          <span className="text-white font-bold text-sm">in</span>
        </div>
        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors cursor-pointer">
          <span className="text-white font-bold text-sm">X</span>
        </div>
        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors cursor-pointer">
          <span className="text-white font-bold text-sm">in</span>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;