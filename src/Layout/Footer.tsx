import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+919599106813" className="hover:text-gray-300">
                  +91 9599106813
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:ckumawatdr@gmail.com" className="hover:text-gray-300">
                   ckumawatdr@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <p className="leading-relaxed">
                  Room No  G-5, Sir Ganga Ram Hospital
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-300">About</a></li>
              <li><a href="/conditions" className="hover:text-gray-300">Conditions</a></li>
              <li><a href="/treatments" className="hover:text-gray-300">Treatments</a></li>
              <li><a href="/blogs" className="hover:text-gray-300">Blogs</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          {/* Practice Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Practice Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Private OPD:</span>
                <span>Mon - Sat 6:00 PM - 8:00 PM, Room No. G-5</span>
              </li>
              <li className="flex justify-between">
                <span>General OPD:</span>
                <span>Mon, Thur 9:00 AM - 11:00 AM, F - 33</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Dr. Chetan Ram. All rights reserved.
            <br />
            Website by <a href="https://rnahealthtech.com" className="text-blue-500 hover:underline">RNA HealthTech</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
