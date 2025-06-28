import React, { useState } from 'react';
import { X, MapPin, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg',
      title: 'Sigiriya Rock Fortress',
      location: 'Central Province',
      category: 'Heritage'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/12935073/pexels-photo-12935073.jpeg',
      title: 'Ella Rock',
      location: 'Uva Province',
      category: 'Nature'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg',
      title: 'Mirissa Beach',
      location: 'Southern Province',
      category: 'Beach'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg',
      title: 'Wild Elephant',
      location: 'Yala National Park',
      category: 'Wildlife'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3566114/pexels-photo-3566114.jpeg',
      title: 'Temple of the Tooth',
      location: 'Kandy',
      category: 'Heritage'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/28631113/pexels-photo-28631113.jpeg',
      title: 'Tea Plantations',
      location: 'Nuwara Eliya',
      category: 'Nature'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg',
      title: 'Coconut Palms',
      location: 'Western Coast',
      category: 'Beach'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/12935074/pexels-photo-12935074.jpeg',
      title: 'Nine Arch Bridge',
      location: 'Ella',
      category: 'Heritage'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/7740161/pexels-photo-7740161.jpeg',
      title: 'Traditional Dancer',
      location: 'Kandy',
      category: 'Culture'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/28631114/pexels-photo-28631114.jpeg',
      title: 'Tea Picker',
      location: 'Hill Country',
      category: 'Culture'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      title: 'Buddhist Temple',
      location: 'Colombo',
      category: 'Heritage'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      title: 'Sunset Beach',
      location: 'West Coast',
      category: 'Beach'
    }
  ];

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
         
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Photo
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Gallery
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the breathtaking beauty of Sri Lanka through our
            collection of stunning photographs from across the island.
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4 text-gray-500">
            <Camera className="h-5 w-5" />
            <span>Click any image to view in full size</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-500 hover:shadow-2xl ${
                index % 8 === 0 || index % 8 === 3
                  ? "lg:col-span-2 lg:row-span-2"
                  : ""
              } ${index % 8 === 1 || index % 8 === 6 ? "md:col-span-2" : ""}`}
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover min-h-[250px] group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{image.location}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover effect indicator */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="h-5 w-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <div className="relative max-w-6xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {images.find((img) => img.id === selectedImage) && (
                <div className="relative">
                  <img
                    src={images.find((img) => img.id === selectedImage)!.src}
                    alt={images.find((img) => img.id === selectedImage)!.title}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white rounded-b-lg">
                    <h3 className="text-3xl font-bold mb-3">
                      {images.find((img) => img.id === selectedImage)!.title}
                    </h3>
                    <div className="flex items-center space-x-3 text-lg">
                      <MapPin className="h-6 w-6" />
                      <span>
                        {
                          images.find((img) => img.id === selectedImage)!
                            .location
                        }
                      </span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {
                          images.find((img) => img.id === selectedImage)!
                            .category
                        }
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to see more stunning Sri Lankan destinations?
            </h3>
            <p className="text-gray-600 mb-6">
              Follow us on social media for daily Sri Lankan beauty and travel
              inspiration.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <span>Facebook</span>
              </button>
              <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors flex items-center space-x-2">
                <span>Instagram</span>
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;