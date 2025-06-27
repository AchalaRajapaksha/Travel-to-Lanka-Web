import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      country: 'United Kingdom',
      rating: 5,
      text: 'Travel to Lanka exceeded all our expectations! The cultural triangle tour was absolutely magnificent. Our guide Kasun was incredibly knowledgeable and friendly. The accommodation was perfect and every detail was taken care of. Sri Lanka is truly a gem!',
      tour: 'Cultural Triangle Explorer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      country: 'Australia',
      rating: 5,
      text: 'What an incredible adventure! The hill country trek was challenging but so rewarding. The tea plantation visits were fascinating, and the train journey through the mountains was breathtaking. Thank you for an unforgettable experience!',
      tour: 'Hill Country Adventure',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg'
    },
    {
      id: 3,
      name: 'Emma & David Wilson',
      country: 'Canada',
      rating: 5,
      text: 'Our honeymoon in Sri Lanka was perfect! The southern coast beaches were paradise, and whale watching in Mirissa was a dream come true. The team arranged everything beautifully. We\'ll definitely be back!',
      tour: 'Southern Coast Paradise',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    },
    {
      id: 4,
      name: 'Hans Mueller',
      country: 'Germany',
      rating: 5,
      text: 'The wildlife safari was extraordinary! We saw leopards, elephants, and so many birds. The Yala National Park experience was world-class. Professional guides and excellent organization throughout.',
      tour: 'Wildlife Safari Expedition',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      country: 'United States',
      rating: 5,
      text: 'Solo travel in Sri Lanka felt completely safe and comfortable thanks to Travel to Lanka. The complete island experience showed me everything from ancient temples to modern cities. Highly recommended!',
      tour: 'Complete Island Experience',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
    },
    {
      id: 6,
      name: 'Roberto Silva',
      country: 'Brazil',
      rating: 5,
      text: 'Amazing adventure sports package! White water rafting, rock climbing, and zip lining - all in the most beautiful settings. The adrenaline rush combined with stunning nature was perfect!',
      tour: 'Adventure Sports Package',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Travelers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our happy travelers from around 
            the world have to say about their Sri Lankan adventures.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-emerald-200" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.country}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>

              <div className="bg-emerald-50 px-4 py-2 rounded-full inline-block">
                <span className="text-sm font-medium text-emerald-700">
                  {testimonial.tour}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Thousands
            </h3>
            <p className="text-xl text-emerald-100">
              Join our community of satisfied travelers from around the world
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">5000+</div>
              <div className="text-emerald-100">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">4.9/5</div>
              <div className="text-emerald-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-emerald-100">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">98%</div>
              <div className="text-emerald-100">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;