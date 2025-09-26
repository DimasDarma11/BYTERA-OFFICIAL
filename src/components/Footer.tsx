import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
              BYTERA
            </div>
            <p className="text-gray-400">Premium Digital Solutions & Services</p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and precision</span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-2">Services</h4>
              <ul className="space-y-1 text-gray-400">
                <li>VPS & RDP Solutions</li>
                <li>Custom Programming</li>
                <li>3D Design & Graphics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Support</h4>
              <ul className="space-y-1 text-gray-400">
                <li>24/7 Live Chat</li>
                <li>Email Support</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Company</h4>
              <ul className="space-y-1 text-gray-400">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              &copy; 2024 Bytera. All rights reserved. | Elevating digital experiences worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
