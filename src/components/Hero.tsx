import React from 'react';
import { ArrowRight, Star, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 via-blue-600/80 to-purple-700/80 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg")',
          }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 animate-pulse"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg")',
            animationDelay: "5s",
            animationDuration: "20s",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <br /> Welcome to <br />
            <span className="text-5xl md:text-7xl font-bold text-[#1a4d2d] mb-6 leading-tight">
              Travel to Lanka
            </span>
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Your Trusted Partner in Exploring Sri Lanka
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            As a passionate local team, we specialize in personalized adventures
            across Sri Lanka’s stunning landscapes, guided with care, comfort,
            and true island hospitality.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center space-x-2 text-white">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
              <span className="text-lg font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Award className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-semibold">Award Winning</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Users className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-semibold">
                5000+ Happy Travelers
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#tours"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore Our Tours</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://wa.me/94789222201?text=Hi! I'm interested in Sri Lankan tour packages"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;