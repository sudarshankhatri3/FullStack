import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-3">
            Sovereign Curator Market
          </h2>
          <p className="text-gray-600 text-sm">
            Exploring curated modern living products and
            accessories with premium quality.
          </p>
        </div>

        {/* Get to Know Us */}
        <div>
          <h3 className="font-semibold mb-3">GET TO KNOW US</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>About</li>
            <li>Careers</li>
            <li>News</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        {/* Make Money */}
        <div>
          <h3 className="font-semibold mb-3">MAKE MONEY</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Sell Products</li>
            <li>Affiliate Program</li>
            <li>Advertise</li>
          </ul>
        </div>

        {/* Payment */}
        <div>
          <h3 className="font-semibold mb-3">PAY & SUPPORT</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Help</li>
            <li>Security</li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-sm text-gray-500">
        © 2026 Sovereign Curator Market. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;