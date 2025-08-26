import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Users, Menu, X } from 'lucide-react';

const HeroPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [flipStates, setFlipStates] = useState({
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false,
    central: false
  });

  useEffect(() => {
    setAnimationStarted(true);

    // Start flip animations with staggered timing
    const flipIntervals = [
      setTimeout(() => {
        setFlipStates(prev => ({ ...prev, topLeft: true }));
        setInterval(() => {
          setFlipStates(prev => ({ ...prev, topLeft: !prev.topLeft }));
        }, 4000);
      }, 3000),

      setTimeout(() => {
        setFlipStates(prev => ({ ...prev, topRight: true }));
        setInterval(() => {
          setFlipStates(prev => ({ ...prev, topRight: !prev.topRight }));
        }, 4000);
      }, 3500),

      setTimeout(() => {
        setFlipStates(prev => ({ ...prev, bottomLeft: true }));
        setInterval(() => {
          setFlipStates(prev => ({ ...prev, bottomLeft: !prev.bottomLeft }));
        }, 4000);
      }, 4000),

      setTimeout(() => {
        setFlipStates(prev => ({ ...prev, bottomRight: true }));
        setInterval(() => {
          setFlipStates(prev => ({ ...prev, bottomRight: !prev.bottomRight }));
        }, 4000);
      }, 4500),

      setTimeout(() => {
        setFlipStates(prev => ({ ...prev, central: true }));
        setInterval(() => {
          setFlipStates(prev => ({ ...prev, central: !prev.central }));
        }, 5000);
      }, 2000)
    ];

    return () => {
      flipIntervals.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-sky-600 to-pink-700 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/assets/sky.png')] bg-cover bg-center bg-no-repeat opacity-20"></div>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/30 to-pink-400/30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl"></div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <img
                src="/assets/sou1.png"
                alt="Growlytic Logo"
                className="w-30 h-30 object-contain"
              />
            </div>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
  <a
    href="#"
    className="relative text-lg font-semibold text-white/80 hover:text-white transition-colors group"
  >
    Home
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
  </a>

  <a
    href="#"
    className="relative text-lg font-semibold text-white/80 hover:text-white transition-colors group"
  >
    Features
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
  </a>

  <a
    href="#"
    className="relative text-lg font-semibold text-white/80 hover:text-white transition-colors group"
  >
    Pricing
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
  </a>

  <a
    href="#"
    className="relative text-lg font-semibold text-white/80 hover:text-white transition-colors group"
  >
    Contact
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
  </a>

  <div className="relative group">
    {/* <a
      href="#"
      className="flex items-center text-lg font-semibold text-white/80 hover:text-white transition-colors group"
    >
      <span className="bg-gradient-to-r from-white-400 to-pink-500 bg-clip-text text-transparent">
        Pages
      </span>
    </a> */}
  </div>
</div>


          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
  <button className="relative px-8 py-3 rounded-full font-semibold text-white 
    bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 
    shadow-lg shadow-orange-500/30 
    transition duration-300 ease-in-out
    hover:scale-105 hover:shadow-orange-500/50 
    hover:ring-4 hover:ring-orange-400/50">
    Sign In
  </button>

  <button className="relative px-8 py-3 rounded-full font-semibold text-white 
    bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 
    shadow-lg shadow-orange-500/30 
    transition duration-300 ease-in-out
    hover:scale-105 hover:shadow-orange-500/50 
    hover:ring-4 hover:ring-orange-400/50">
    Sign Up
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
  <h1
    className={`text-5xl md:text-7xl font-extrabold leading-tight tracking-tight 
      bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent
      drop-shadow-lg transform transition-all duration-1000
      ${animationStarted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
  >
    Empower Your <br />
    <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-purple-800 
      bg-clip-text text-transparent animate-pulse">
      SaaS Experience
    </span>
  </h1>

  <p
    className={`mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto transition-all duration-1000
      ${animationStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
  >
    Build, scale, and manage your business with the next-gen cloud solution.  
    Designed for performance, security, and growth.
  </p>
</div>


          {/* Floating Cards and Central Image */}
          <div className="relative max-w-5xl mx-auto">
            {/* Engagement Uplift Card - Top Left */}
            <div className={`absolute top-0 left-0 md:left-8 w-64 transform transition-all duration-1000 delay-500 ${animationStarted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
              }`}>
              <div
                className={`relative h-40 [transform-style:preserve-3d] transition-transform duration-700 ${flipStates.topLeft ? '[transform:rotateY(180deg)]' : ''
                  }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-700 font-semibold">Newest Tech<br />Uplift</h3>
                    <div className="flex items-center text-orange-500">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">+25.3%</span>
                    </div>
                  </div>
                  <div className="h-20 relative">
                    <svg className="w-full h-full" viewBox="0 0 200 60">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
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

                {/* Back Side */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-700 font-semibold">RFQ Total</h3>
                    <div className="flex items-center text-blue-500">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">+18.7%</span>
                    </div>
                  </div>
                  <div className="h-20 relative">
                    <svg className="w-full h-full" viewBox="0 0 200 60">
                      <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,45 Q20,40 40,35 T80,30 T120,25 T160,22 T200,20"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M0,45 Q20,40 40,35 T80,30 T120,25 T160,22 T200,20 L200,60 L0,60 Z"
                        fill="url(#gradient2)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Person Image */}
            <div className={`relative z-20 mx-auto w-80 h-96 transform transition-all duration-1000 delay-700 ${animationStarted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
              }`}>
              <div
                className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-1000 ${flipStates.central ? '[transform:rotateY(180deg)]' : ''
                  }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 [backface-visibility:hidden] w-full h-full bg-gradient-to-b from-blue-100 to-blue-200 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/assets/saas.png"
                    alt="Marketing Person"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] w-full h-full bg-gradient-to-b from-purple-100 to-purple-200 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/assets/saas15.jpg"
                    alt="Marketing Assistant"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Followers Stats Card - Top Right */}
            <div className={`absolute top-12 right-0 md:right-8 w-56 transform transition-all duration-1000 delay-600 ${animationStarted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
              }`}>
              <div
                className={`relative h-52 [transform-style:preserve-3d] transition-transform duration-700 ${flipStates.topRight ? '[transform:rotateY(180deg)]' : ''
                  }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
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

                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-700 font-semibold">Reach<br />Growth</h3>
                    <div className="flex items-center text-purple-500">
                      <span className="text-sm">+32%</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600">Twitter</span>
                      </div>
                      <span className="text-sm font-medium">50%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600">TikTok</span>
                      </div>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600">YouTube</span>
                      </div>
                      <span className="text-sm font-medium">15%</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Card - Bottom Left */}
            <div className={`absolute bottom-0 left-0 md:left-16 w-52 transform transition-all duration-1000 delay-800 ${animationStarted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
              }`}>
              <div
                className={`relative h-40 [transform-style:preserve-3d] transition-transform duration-700 ${flipStates.bottomLeft ? '[transform:rotateY(180deg)]' : ''
                  }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
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

                {/* Back Side */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">New</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">1.8K</h3>
                  <p className="text-sm text-gray-600">New Signups</p>
                  <div className="mt-3 flex items-center text-blue-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-sm">+18% from last week</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Card - Bottom Right */}
            {/* <div className={`absolute bottom-8 right-0 md:right-16 w-48 transform transition-all duration-1000 delay-900 ${
              animationStarted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
            }`}>
              <div 
                className={`relative h-32 [transform-style:preserve-3d] transition-transform duration-700 ${
                  flipStates.bottomRight ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* Front Side 
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
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
                
                {/* Back Side 
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Profit</span>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">$8.3K</h3>
                  <div className="flex items-center text-orange-600">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    <span className="text-xs">+15.4%</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-colors cursor-pointer">
          <span className="text-white font-bold text-sm">in</span>
        </div>
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-colors cursor-pointer">
          <span className="text-white font-bold text-sm">X</span>
        </div>
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-colors cursor-pointer">
          <span className="text-white font-bold text-sm">in</span>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;