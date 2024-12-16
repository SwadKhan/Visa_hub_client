import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-700 to-blue-900 text-white py-10">
      {/* Footer Header */}
      <div className="flex flex-col items-center justify-center gap-4 mb-10">
        <h4 className="text-4xl font-bold">Visa-Hub</h4>
        <p className="text-lg">
          Unlock the World with Us! Your Trusted Partner for Global Travel.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-1 bg-white mb-10"></div>

      {/* Footer Links */}
      <div className="w-10/12 footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 items-center mx-auto">
        <nav>
          <h6 className="footer-title text-xl font-semibold mb-3">Services</h6>
          <a className="link link-hover text-sm">Visa Consultation</a>
          <a className="link link-hover text-sm">Travel Insurance</a>
          <a className="link link-hover text-sm">Document Preparation</a>
          <a className="link link-hover text-sm">Immigration Guidance</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-semibold mb-3">Company</h6>
          <a className="link link-hover text-sm">About Us</a>
          <a className="link link-hover text-sm">Contact</a>
          <a className="link link-hover text-sm">Careers</a>
          <a className="link link-hover text-sm">Media Center</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-semibold mb-3">Legal</h6>
          <a className="link link-hover text-sm">Terms of Service</a>
          <a className="link link-hover text-sm">Privacy Policy</a>
          <a className="link link-hover text-sm">Refund Policy</a>
          <a className="link link-hover text-sm">Disclaimer</a>
        </nav>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-sm">
        <p>&copy; 2024 Visa-Hub. All rights reserved.</p>
        <p className="mt-2">
          Built with passion to help you explore the world.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
