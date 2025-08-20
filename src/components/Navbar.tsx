import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

/**
 * Light/blurred on top, stronger after scroll.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isLoggedIn = !!localStorage.getItem("token");
  const userName = localStorage.getItem("userName") || "User";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navWrap =
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b " +
    (scrolled
      ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-slate-200"
      : "bg-white/70 backdrop-blur-md border-transparent");

  const linkBase =
    "font-medium transition-colors " +
    (scrolled ? "text-slate-800 hover:text-purple-600" : "text-slate-800 hover:text-slate-900");

  const iconText =
    "text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent";

  const burgerBtn =
    "md:hidden p-2 rounded-lg transition-colors " +
    (scrolled ? "text-slate-700 hover:bg-slate-100" : "text-slate-800 hover:bg-slate-100/60");

  const profileName =
    "flex items-center space-x-2 " +
    (scrolled ? "text-slate-800 hover:text-purple-600" : "text-slate-800 hover:text-slate-900");

  // Always white dropdown for readability
  const dropdownBox =
    "absolute right-0 mt-2 w-48 rounded-lg border border-slate-200 bg-white py-2 shadow-lg";

  const mobileWrap = "md:hidden py-4 border-t border-slate-200";

  return (
    <nav className={navWrap}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg grid place-items-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className={iconText}>Souqnests</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkBase}>Home</Link>

            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className={linkBase}>Dashboard</Link>
                <Link to="/rfqs" className={linkBase}>RFQs</Link>
                <Link to="/offers" className={linkBase}>Offers</Link>
                <Link to="/reports" className={linkBase}>Reports</Link>

                {/* Profile dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen((v) => !v)}
                    className={profileName}
                  >
                    <div className="w-8 h-8 bg-purple-600 rounded-full grid place-items-center">
                      <span className="text-white text-sm font-medium">
                        {userName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="font-medium">{userName}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isProfileOpen && (
                    <div className={dropdownBox}>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-slate-700 hover:bg紫-50 hover:text-purple-600"
                      >
                        Settings
                      </Link>
                      <hr className="my-2 border-slate-200/60" />
                      <button
                        onClick={() => {
                          localStorage.clear();
                          window.location.href = "/";
                        }}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to="/pricing" className={linkBase}>Pricing</Link>
                <Link to="/login" className={linkBase}>Login</Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile button */}
          <button onClick={() => setIsMenuOpen((v) => !v)} className={burgerBtn} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className={mobileWrap}>
            <div className="flex flex-col space-y-3">
              <Link to="/" className={`${linkBase} px-2 py-1`}>Home</Link>

              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" className={`${linkBase} px-2 py-1`}>Dashboard</Link>
                  <Link to="/rfqs" className={`${linkBase} px-2 py-1`}>RFQs</Link>
                  <Link to="/offers" className={`${linkBase} px-2 py-1`}>Offers</Link>
                  <Link to="/reports" className={`${linkBase} px-2 py-1`}>Reports</Link>
                  <Link to="/settings" className={`${linkBase} px-2 py-1`}>Settings</Link>
                  <button
                    onClick={() => {
                      localStorage.clear();
                      window.location.href = "/";
                    }}
                    className="text-left text-red-600 hover:text-red-700 font-medium px-2 py-1"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/pricing" className={`${linkBase} px-2 py-1`}>Pricing</Link>
                  <Link to="/login" className={`${linkBase} px-2 py-1`}>Login</Link>
                  <Link
                    to="/register"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium text-center"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
