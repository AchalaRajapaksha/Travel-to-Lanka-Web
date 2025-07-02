import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Denise Nardan",
      country: "Singapore",
      rating: 5,
      text: "Sudarshana was our lovely driver on our visit to Sri Lanka. Not only did he keep us safe, he went above and beyond to make our experiences memorable. He was fantastic with my teen boys.Sudarshana is passionate about his country and is eager to show visitors just how beautiful Sri Lanka is.We can’t wait to go back and no doubt Sudarshana will be our guide once again.",
      tour: "Cultural Triangle Explorer",
      image: "/images/Denise.png",
    },
    {
      id: 2,
      name: "Javier Díez Alvaro",
      country: "Spain",
      rating: 5,
      text: "Suda is the best guide you can choose to visit Sri Lanka! We were a group of 6 friends and we had a great time with him. Very detailed and attentive, apart from suggesting visits and things to see outside the initial itinerary.We also spent a few days with Rashmika, and as it could not be otherwise, we also ended up delighted with him.The best guides for Sri Lanka! We will miss you!",
      tour: "Southern Coast Paradise",
      image: "/images/Javier.png",
    },
    {
      id: 3,
      name: "Mónica Díaz",
      country: "Spain",
      rating: 5,
      text: "We were 6 friends on a trip to Sri Lanka. We contacted Suda through a family member and it couldn't have been better. Suda guided us through Sri Lanka, planning everything in detail. It has been a wonderful experience and largely thanks to him, who organized everything perfectly. The last few days we were also with Rashmika, a colleague of hers who made the end of the trip a perfect closure. Without a doubt, I recommend it.Thank you!!🥰We miss you!!",
      tour: "Wildlife Safari Expedition",
      image: "/images/Monica.png",
    },
    {
      id: 4,
      name: "Raveena Rawat",
      country: "India",
      rating: 5,
      text: "I fell in love with the beauty and calmness of the country. People here are super friendly. Our tour guide Sudharshan helped us to explore the hidden gem of srilanka. He is very passionate and extremely knowledgeable about the entire region. The itinerary was very well thought out. He really took good care of us.",
      tour: "Hill Country Adventure",
      image: "/images/Raveena.png",
    },
    {
      id: 5,
      name: "Claire and Bronte Forbes",
      country: "United States",
      rating: 5,
      text: "Rashmika was an awesome driver. He was careful and safe -always. He was super polite, offered us extra places to stop if we wanted and was happy to flex and change plans when we needed or wanted to. He looked after us really well, making sure we knew where to buy tickets for attractions, where to get our washing done, places to eat. We had a really great trip and were grateful for Rashmika’s kindness and great driving!",
      tour: "Complete Island Experience",
      image: "images/Forbes.jpg",
    },
    {
      id: 6,
      name: "Roberto Silva",
      country: "Brazil",
      rating: 5,
      text: "Amazing adventure sports package! White water rafting, rock climbing, and zip lining - all in the most beautiful settings. The adrenaline rush combined with stunning nature was perfect!",
      tour: "Adventure Sports Package",
      image:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Travelers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our happy travelers
            from around the world have to say about their Sri Lankan adventures.
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
                  <h3 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.country}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
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
              <div className="text-4xl font-bold text-yellow-300 mb-2">
                5000+
              </div>
              <div className="text-emerald-100">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">
                4.9/5
              </div>
              <div className="text-emerald-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">20+</div>
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
