import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-gray-300">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand + About */}
        <div>
         <img 
  src="/src/assets/sou1.png" 
  alt="Souqnests Logo" 
  className="h-20 w-auto"
/>

          <p className="mt-3 text-sm">
            Empowering businesses with smart SaaS solutions to manage RFQs,
            vendors, and offers in one platform.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <p className="flex items-center gap-2"><Mail size={16}/> contact@souqnests.com</p>
            <p className="flex items-center gap-2"><Phone size={16}/> +1 (555) 123-4567</p>
            <p className="flex items-center gap-2"><MapPin size={16}/> 123 Business Street, Tech City, TC 98765</p>
          </div>
        </div>

        {/* Learning Hub (you can rename to "Solutions") */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3 border-b border-purple-400 pb-1">
            Solutions
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/rfqs" className="hover:text-purple-400">RFQ Management</a></li>
            <li><a href="/vendors" className="hover:text-purple-400">Vendor Portal</a></li>
            <li><a href="/offers" className="hover:text-purple-400">Offer Comparison</a></li>
            <li><a href="/reports" className="hover:text-purple-400">Reports & Analytics</a></li>
            <li><a href="/support" className="hover:text-purple-400">Support System</a></li>
            <li><a href="/pricing" className="hover:text-purple-400">Pricing Plans</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3 border-b border-purple-400 pb-1">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-purple-400">About Us</a></li>
            <li><a href="/how-it-works" className="hover:text-purple-400">How It Works</a></li>
            <li><a href="/help" className="hover:text-purple-400">Help Center</a></li>
            <li><a href="/contact" className="hover:text-purple-400">Contact Support</a></li>
            <li><a href="/faq" className="hover:text-purple-400">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3 border-b border-purple-400 pb-1">
            Stay Connected
          </h3>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for updates and tips.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-400"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
              Subscribe Now
            </button>
          </div>
          <div className="flex gap-4 mt-4 text-gray-400">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0a1522] text-center py-4 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center px-6">
        <p>© {new Date().getFullYear()} Souqnests. All rights reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="/privacy" className="hover:text-purple-400">Privacy Policy</a>
          <a href="/terms" className="hover:text-purple-400">Terms of Service</a>
          <a href="/security" className="hover:text-purple-400">Security</a>
        </div>
      </div>
    </footer>
  );
}
