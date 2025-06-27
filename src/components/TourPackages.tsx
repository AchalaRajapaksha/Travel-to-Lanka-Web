import React, { useState } from 'react';
import { Calendar, Users, MapPin, Star, ArrowRight, Camera } from 'lucide-react';

const TourPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Tours' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'beach', name: 'Beach' },
    { id: 'wildlife', name: 'Wildlife' },
  ];

  const packages = [
    {
      id: 1,
      title: 'Cultural Triangle Explorer',
      category: 'cultural',
      duration: '7 Days',
      groupSize: '2-15',
      price: '$599',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg',
      gallery: [
        'https://images.pexels.com/photos/3566114/pexels-photo-3566114.jpeg',
        'https://images.pexels.com/photos/7740161/pexels-photo-7740161.jpeg',
        'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
      ],
      highlights: ['Sigiriya Rock Fortress', 'Dambulla Cave Temple', 'Kandy Temple', 'Traditional Village Tour'],
      description: 'Discover Sri Lanka\'s ancient heritage with visits to UNESCO World Heritage sites.',
    },
    {
      id: 2,
      title: 'Hill Country Adventure',
      category: 'adventure',
      duration: '5 Days',
      groupSize: '2-12',
      price: '$449',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/12935073/pexels-photo-12935073.jpeg',
      gallery: [
        'https://images.pexels.com/photos/28631113/pexels-photo-28631113.jpeg',
        'https://images.pexels.com/photos/12935074/pexels-photo-12935074.jpeg',
        'https://images.pexels.com/photos/28631114/pexels-photo-28631114.jpeg'
      ],
      highlights: ['Ella Rock Hike', 'Tea Plantation Tours', 'Train Journey', 'Little Adam\'s Peak'],
      description: 'Trek through misty mountains and lush tea plantations in Sri Lanka\'s hill country.',
    },
    {
      id: 3,
      title: 'Southern Coast Paradise',
      category: 'beach',
      duration: '6 Days',
      groupSize: '2-20',
      price: '$399',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg',
      gallery: [
        'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
        'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg'
      ],
      highlights: ['Mirissa Beach', 'Whale Watching', 'Galle Fort', 'Surfing Lessons'],
      description: 'Relax on pristine beaches and explore charming coastal towns.',
    },
    {
      id: 4,
      title: 'Wildlife Safari Expedition',
      category: 'wildlife',
      duration: '4 Days',
      groupSize: '2-8',
      price: '$529',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg',
      gallery: [
        'https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg',
        'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
        'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg'
      ],
      highlights: ['Yala National Park', 'Elephant Orphanage', 'Leopard Spotting', 'Bird Watching'],
      description: 'Encounter Sri Lanka\'s incredible wildlife in their natural habitats.',
    },
    {
      id: 5,
      title: 'Complete Island Experience',
      category: 'cultural',
      duration: '12 Days',
      groupSize: '2-16',
      price: '$999',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/3566114/pexels-photo-3566114.jpeg',
      gallery: [
        'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg',
        'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg',
        'https://images.pexels.com/photos/12935073/pexels-photo-12935073.jpeg'
      ],
      highlights: ['All Major Attractions', 'Cultural Shows', 'Cooking Classes', 'Ayurveda Spa'],
      description: 'The ultimate Sri Lankan adventure covering all highlights of the island.',
    },
    {
      id: 6,
      title: 'Adventure Sports Package',
      category: 'adventure',
      duration: '8 Days',
      groupSize: '2-10',
      price: '$699',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/28631113/pexels-photo-28631113.jpeg',
      gallery: [
        'https://images.pexels.com/photos/12935073/pexels-photo-12935073.jpeg',
        'https://images.pexels.com/photos/28631113/pexels-photo-28631113.jpeg',
        'https://images.pexels.com/photos/12935074/pexels-photo-12935074.jpeg'
      ],
      highlights: ['White Water Rafting', 'Rock Climbing', 'Zip Lining', 'Mountain Biking'],
      description: 'Thrilling adventures for adrenaline seekers in Sri Lanka\'s diverse landscapes.',
    },
  ];

  const filteredPackages = selectedCategory === 'all' 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedCategory);

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Tour Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully crafted tour packages, each designed to showcase 
            the best of Sri Lanka's natural beauty, culture, and adventure.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tour Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Image gallery preview */}
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {pkg.gallery.slice(0, 3).map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-12 h-12 object-cover rounded-lg border-2 border-white shadow-md opacity-80 hover:opacity-100 transition-opacity"
                    />
                  ))}
                  <div className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-lg border-2 border-white flex items-center justify-center">
                    <Camera className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{pkg.rating}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {pkg.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{pkg.description}</p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{pkg.groupSize} people</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        +{pkg.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Book This Tour</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't find the perfect tour?
            </h3>
            <p className="text-gray-600 mb-6">
              We create custom packages tailored to your preferences, interests, and budget.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Request Custom Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;