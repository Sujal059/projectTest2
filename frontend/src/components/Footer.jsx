import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg mb-6">
		Create or restart your membership
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Help Centre</a>
          <a href="#" className="hover:underline">Account</a>
          <a href="#" className="hover:underline">Media Centre</a>
          <a href="#" className="hover:underline">Investor Relations</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Ways to Watch</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookie Preferences</a>
          <a href="#" className="hover:underline">Corporate Information</a>
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Speed Test</a>
          <a href="#" className="hover:underline">Legal Notices</a>
          <a href="#" className="hover:underline">Only on Netflix</a>
        </div>
        <div className="mt-6">
          <button className="bg-gray-800 text-gray-300 py-2 px-4 rounded">
            <span className="mr-2">🌐</span> English
          </button>
        </div>
        <p className="mt-4 text-sm">Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;
