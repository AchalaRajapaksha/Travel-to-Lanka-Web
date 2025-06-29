import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Heart,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Tour Packages", href: "#tours" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Book Now", href: "#contact" },
  ];

  const tourTypes = [
    { name: "Cultural Heritage Tours", href: "#tours" },
    { name: "Adventure & Trekking", href: "#tours" },
    { name: "Beach Holidays", href: "#tours" },
    { name: "Wildlife Safaris", href: "#tours" },
    { name: "Honeymoon Packages", href: "#tours" },
    { name: "Custom Tours", href: "#tours" },
  ];

  const destinations = [
    "Sigiriya & Dambulla",
    "Kandy & Nuwara Eliya",
    "Ella & Badulla",
    "Galle & Mirissa",
    "Yala & Udawalawe",
    "Anuradhapura & Polonnaruwa",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <a href="#home">
                <img
                  src="/logo.svg"
                  alt="Travel to Lanka"
                  className="h-20 w-20"
                />
              </a>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Travel to Lanka
              </h3>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for exploring the magnificent island of Sri
              Lanka. We create unforgettable experiences that showcase the best
              of our beautiful country.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span>Seeduwa, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span>+94 78 922 2201</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span>contact@traveltolanka.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Types */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">
              Tour Types
            </h4>
            <ul className="space-y-3">
              {tourTypes.map((tour) => (
                <li key={tour.name}>
                  <a
                    href={tour.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {tour.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">
              Popular Destinations
            </h4>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination}>
                  <span className="text-gray-300">{destination}</span>
                </li>
              ))}
            </ul>

            {/* WhatsApp Contact */}
            <div className="mt-8">
              <a
                href="https://wa.me/94789222201?text=Hi! I'm interested in Sri Lankan tour packages"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Travel to Lanka. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          <div className="text-center mt-4 text-gray-500 text-sm">
            Made with{" "}
            <Heart className="inline h-4 w-4 text-red-500 fill-current" /> for
            travelers who love Sri Lanka --Achala Rajapaksha--
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
