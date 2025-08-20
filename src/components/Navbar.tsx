import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const isLoggedIn = !!localStorage.getItem("token");
  const userName = localStorage.getItem("userName") || "User";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dark, glassy navbar to complement the black logo; a bit stronger after scroll
  const navWrap =
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b " +
    (scrolled
      ? "bg-slate-900/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,.35)] border-slate-800"
      : "bg-slate-900/70 backdrop-blur-md border-transparent");

  // Link styling: pill highlight + active state
  const linkBase =
    "px-3 py-2 rounded-full font-medium transition-colors " +
    "text-slate-300 hover:text-white hover:bg-white/10 focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-violet-500";

  const linkActive =
    "text-white bg-white/10 ring-1 ring-white/10";

  const burgerBtn =
    "md:hidden p-2 rounded-lg transition-colors text-slate-200 hover:bg-white/10";

  const profileBtn =
    "flex items-center gap-2 text-slate-200 hover:text-white hover:bg-white/10 px-2 py-1 rounded-full";

  // Dark dropdown for contrast against the dark bar
  const dropdownBox =
    "absolute right-0 mt-2 w-52 rounded-xl border border-slate-700 bg-slate-900 py-2 shadow-xl";

  const mobileWrap = "md:hidden py-4 border-t border-slate-800";

  // Helper to check active path quickly
  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <nav className={navWrap}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand (image logo) */}
          <Link to="/" aria-label="Souqnests home" className="flex items-center gap-3">
            {/* Put file at public/brand/sou1.png (Netlify-safe). Or import from src and use that variable. */}
            <span className="rounded-lg px-2 py-1">
              <img
                src="/assets/sou1.png"
                alt="SOUQNESTS"
                className="h-20 w-auto object-contain select-none"
                decoding="async"
                loading="eager"
                draggable={false}
              />
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/" className={`${linkBase} ${isActive("/") ? linkActive : ""}`}>Home</Link>

            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className={`${linkBase} ${isActive("/dashboard") ? linkActive : ""}`}>Dashboard</Link>
                <Link to="/rfqs" className={`${linkBase} ${isActive("/rfqs") ? linkActive : ""}`}>RFQs</Link>
                <Link to="/offers" className={`${linkBase} ${isActive("/offers") ? linkActive : ""}`}>Offers</Link>
                <Link to="/reports" className={`${linkBase} ${isActive("/reports") ? linkActive : ""}`}>Reports</Link>

                {/* Profile dropdown */}
                <div className="relative ml-2">
                  <button onClick={() => setIsProfileOpen(v => !v)} className={profileBtn}>
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-amber-400 rounded-full grid place-items-center">
                      <span className="text-slate-900 text-sm font-bold">
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
                        className="block px-4 py-2 text-slate-200 hover:bg-white/10"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-slate-200 hover:bg-white/10"
                      >
                        Settings
                      </Link>
                      <hr className="my-2 border-slate-800" />
                      <button
                        onClick={() => {
                          localStorage.clear();
                          window.location.href = "/";
                        }}
                        className="block w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/10"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to="/pricing" className={`${linkBase} ${isActive("/pricing") ? linkActive : ""}`}>Pricing</Link>
                <Link to="/login" className={`${linkBase} ${isActive("/login") ? linkActive : ""}`}>Login</Link>
                <Link
                  to="/register"
                  className="ml-2 inline-flex items-center rounded-full px-5 py-2 font-semibold text-slate-900
                             bg-gradient-to-r from-sky-400 to-orange-400 hover:brightness-105
                             shadow-[0_8px_24px_rgba(0,0,0,.25)] transition-all"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile button */}
          <button onClick={() => setIsMenuOpen(v => !v)} className={burgerBtn} aria-label="Toggle menu">
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
            <div className="flex flex-col space-y-2">
              <Link to="/" className={`${linkBase} ${isActive("/") ? linkActive : ""} px-3 py-2`}>Home</Link>

              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" className={`${linkBase} ${isActive("/dashboard") ? linkActive : ""} px-3 py-2`}>Dashboard</Link>
                  <Link to="/rfqs" className={`${linkBase} ${isActive("/rfqs") ? linkActive : ""} px-3 py-2`}>RFQs</Link>
                  <Link to="/offers" className={`${linkBase} ${isActive("/offers") ? linkActive : ""} px-3 py-2`}>Offers</Link>
                  <Link to="/reports" className={`${linkBase} ${isActive("/reports") ? linkActive : ""} px-3 py-2`}>Reports</Link>
                  <Link to="/settings" className={`${linkBase} ${isActive("/settings") ? linkActive : ""} px-3 py-2`}>Settings</Link>
                  <button
                    onClick={() => {
                      localStorage.clear();
                      window.location.href = "/";
                    }}
                    className="text-left text-red-400 hover:text-red-300 font-medium px-3 py-2 rounded-full hover:bg-red-500/10"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/pricing" className={`${linkBase} ${isActive("/pricing") ? linkActive : ""} px-3 py-2`}>Pricing</Link>
                  <Link to="/login" className={`${linkBase} ${isActive("/login") ? linkActive : ""} px-3 py-2`}>Login</Link>
                  <Link
                    to="/register"
                    className="inline-flex items-center rounded-full px-4 py-2 font-semibold text-slate-900
                               bg-gradient-to-r from-cyan-300 via-amber-300 to-orange-300 text-center"
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
