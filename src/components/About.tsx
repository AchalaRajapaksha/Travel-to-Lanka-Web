import React from "react";
import { Mountain, Waves, Camera, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Mountain,
      title: "Ancient Heritage",
      description:
        "Explore 2,500 years of rich history through magnificent temples, ancient cities, and UNESCO World Heritage sites.",
      image: "images/pexels-photo-1259789.jpeg",
    },
    {
      icon: Waves,
      title: "Pristine Beaches",
      description:
        "Relax on golden sandy beaches along the Indian Ocean with crystal-clear waters and perfect surfing conditions.",
      image: "images/pexels-photo-319898.jpeg",
    },
    {
      icon: Camera,
      title: "Wildlife Safari",
      description:
        "Encounter elephants, leopards, and exotic birds in our national parks and nature reserves.",
      image: "images/pexels-photo-8126089.jpeg",
    },
    {
      icon: Heart,
      title: "Warm Hospitality",
      description:
        "Experience the genuine warmth and friendliness of Sri Lankan people and their vibrant culture.",
      image: "images/pexels-photo-5858998.jpeg",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Sri Lanka?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sri Lanka, the Pearl of the Indian Ocean, offers an incredible
            diversity of experiences in a compact island paradise. From misty
            mountains to golden beaches, ancient temples to modern cities, every
            corner tells a story.
          </p>
        </div>

        {/* Photo showcase section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <img
              src="images/pexels-photo-2403209.jpeg"
              alt="Train"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="images/pexels-photo-1998438.jpeg"
                alt="Beach"
                className="w-full h-40 object-cover rounded-xl shadow-md"
              />
              <img
                src="images/pexels-photo-13391116.jpeg"
                alt="Sigiriya"
                className="w-full h-40 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="images/pexels-photo-18161079.jpeg"
                alt="Dancer"
                className="w-full h-40 object-cover rounded-xl shadow-md"
              />
              <img
                src="images/pexels-photo-17081253.jpeg"
                alt="Tiger"
                className="w-full h-40 object-cover rounded-xl shadow-md"
              />
            </div>
            <img
              src="images/pexels-photo-31184355.jpeg"
              alt="Elephant"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="mb-6 relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 absolute -bottom-2 right-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="images/pexels-photo-8126089.jpeg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Your Sri Lankan Adventure Awaits
            </h3>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              With over 14 years of experience, Travel to Lanka has been
              crafting unforgettable journeys that showcase the very best of our
              beautiful island. Let us take you on an adventure that will create
              memories to last a lifetime.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  14+
                </div>
                <div className="text-emerald-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  5000+
                </div>
                <div className="text-emerald-100">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">
                  50+
                </div>
                <div className="text-emerald-100">Tour Packages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
