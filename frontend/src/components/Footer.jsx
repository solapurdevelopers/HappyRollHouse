import React from "react";
import LogoutButton from "./LogoutButton";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-5 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* App Info */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-lg font-semibold">🌯 Happy Roll House</h2>
          <p className="text-sm text-orange-100">
            Fresh, delicious rolls made with love. Taste the happiness in every bite!
          </p>
        </div>

        {/* Logout Button - always at right */}
        <div className="flex justify-end w-full md:w-auto">
          <LogoutButton />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-4 text-center text-xs text-orange-200 border-t border-orange-400 pt-3">
        © {new Date().getFullYear()} Happy Roll House. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;