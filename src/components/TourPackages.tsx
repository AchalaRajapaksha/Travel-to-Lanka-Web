import React, { useState } from "react";
import {
  Calendar,
  Users,
  MapPin,
  Star,
  ArrowRight,
  Car,
  MessageCircle,
} from "lucide-react";

// Type definition for a Tour Package
interface TourPackage {
  id: number;
  title: string;
  category: string;
  duration: number;
  basePricePerPerson: number;
  rating: number;
  image: string;
  itinerary: string[];
  description: string;
}

// Type definition for a Vehicle Option
interface Vehicle {
  id: string;
  name: string;
  capacity: number;
  pricePerDay: number;
}

const TourPackages: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Tours" },
    { id: "cultural", name: "Cultural" },
    { id: "adventure", name: "Adventure" },
    { id: "beach", name: "Beach" },
    { id: "wildlife", name: "Wildlife" },
  ];

  const vehicles: Vehicle[] = [
    { id: "car", name: "Car", capacity: 3, pricePerDay: 65 },
    { id: "mini-van", name: "Mini Van", capacity: 6, pricePerDay: 85 },
    { id: "van", name: "Van", capacity: 8, pricePerDay: 95 },
    { id: "bus", name: "Bus", capacity: 20, pricePerDay: 130 },
    { id: "suv", name: "SUV Vehicle", capacity: 4, pricePerDay: 85 },
  ];

  const packages: TourPackage[] = [
    {
      id: 1,
      title: "Cultural Triangle Explorer",
      category: "cultural",
      duration: 7,
      basePricePerPerson: 85,
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/1259789/pexels-photo-1259789.jpeg",

      itinerary: [
        "Arrive Colombo. Transfer to Anuradhapura or Polonnaruwa.",
        "Explore ancient city ruins.",
        "Visit Sigiriya Rock Fortress and Dambulla Cave Temple. Optional village or spice garden tour.",
        "Transfer to Kandy via spice gardens in Matale. Evening visit to Temple of the Tooth.",
        "Kandy city tour and cultural show. Optional train ride to Nuwara Eliya.",
        "Visit local village and tea plantation. Overnight in Kandy or Nuwara Eliya.",
        "Transfer to Colombo for departure or city tour.",
      ],
      description:
        "Discover Sri Lanka's ancient heritage with visits to UNESCO World Heritage sites.",
    },
    {
      id: 2,
      title: "Hill Country Adventure",
      category: "adventure",
      duration: 10,
      basePricePerPerson: 90,
      rating: 4.8,
      image: "https://images.pexels.com/photos/595196/pexels-photo-595196.jpeg",

      itinerary: [
        "Arrive Colombo. Transfer to Anuradhapura or Polonnaruwa.",
        "Explore ancient city ruins.",
        "Visit Sigiriya Rock Fortress and Dambulla Cave Temple.",
        "Transfer to Kandy via spice gardens in Matale. Evening visit to Temple of the Tooth.",
        "Kandy city tour and cultural show.",
        "Transfer to Nuwara Eliya or Ella. Visit tea plantation and factory.",
        "Take scenic train ride from Nanu Oya to Ella.",
        "Visit Diyaluma Waterfall. Optional short hikes or nature trails.",
        "Visit Ramboda Waterfall and surrounding nature spots.",
        "Transfer to Colombo for departure or city tour.",
      ],
      description:
        "Trek through misty mountains and lush tea plantations in Sri Lanka's hill country.",
    },
    {
      id: 3,
      title: "Southern Coast Paradise (December - April)",
      category: "beach",
      duration: 12,
      basePricePerPerson: 67,
      rating: 4.7,
      image:
        "https://images.pexels.com/photos/2274581/pexels-photo-2274581.jpeg",

      itinerary: [
        "Arrive Colombo. Transfer to Anuradhapura or Polonnaruwa.",
        "Explore ancient city ruins and visit Minneriya or Kaudulla safari.",
        "Visit Sigiriya Rock Fortress and Dambulla Cave Temple.",
        "Transfer to Kandy via spice gardens in Matale. Evening visit to Temple of the Tooth.",
        "Kandy city tour and cultural show.",
        "Transfer to highlands (Nuwara Eliya or Ella). Visit tea plantation and factory.",
        "Travel to southern coast beach (Mirissa or Unawatuna) for stay.",
        "Relax at the beach and enjoy whale watching or snorkeling.",
        "Visit Galle Fort and nearby beaches.",
        "Free day at the beach or optional water activities.",
        "Transfer back to Colombo.",
        "Colombo city tour and departure.",
      ],
      description:
        "Relax on pristine beaches and explore charming coastal towns.",
    },
    {
      id: 4,
      title: "Eastern Coast Paradise (May – September)",
      category: "beach",
      duration: 12,
      basePricePerPerson: 132,
      rating: 4.9,
      image: "https://images.pexels.com/photos/319892/pexels-photo-319892.jpeg",

      itinerary: [
        "Arrive Colombo. Transfer to Anuradhapura or Polonnaruwa.",
        "Explore ancient city ruins and visit Minneriya or Kaudulla safari.",
        "Visit Sigiriya Rock Fortress and Dambulla Cave Temple.",
        "Transfer to Kandy via spice gardens in Matale. Evening visit to Temple of the Tooth.",
        "Kandy city tour and cultural show.",
        "Transfer to highlands (Nuwara Eliya or Ella). Visit tea plantation and factory.",
        "Travel to Trincomalee or Passikudah for beach stay.",
        "Relax at the beach and enjoy snorkeling at Pigeon Island.",
        "Visit Nilaveli or Marble Beach.",
        "Free day at the beach or optional water activities.",
        "Transfer back to Colombo.",
        "Colombo city tour and departure.",
      ],
      description:
        "Relax on pristine beaches and explore charming coastal towns.",
    },
    {
      id: 5,
      title: "Wildlife Safari Expedition",
      category: "wildlife",
      duration: 12,
      basePricePerPerson: 83,
      rating: 5.0,
      image: "https://images.pexels.com/photos/322480/pexels-photo-322480.jpeg",

      itinerary: [
        "Arrive Colombo. Transfer to Anuradhapura or Polonnaruwa.",
        "Explore ancient city ruins.",
        "Visit Sigiriya Rock Fortress and Dambulla Cave Temple.",
        "Transfer to Minneriya or Kaudulla for wildlife safari.",
        "Transfer to Kandy via spice gardens in Matale. Evening visit to Temple of the Tooth.",
        "Kandy city tour and cultural show.",
        "Transfer to Nuwara Eliya or Ella. Visit tea plantation and factory.",
        "Local village visit and nature trails.",
        "Take scenic train ride from Nanu Oya to Ella.",
        "Transfer to Yala or Udawalawe National Park for safari.",
        "Morning safari at Yala or Udawalawe. Transfer to southern coast beach (Mirissa or Unawatuna).",
        "Relax at the beach. Transfer to Colombo for departure.",
      ],
      description:
        "Encounter Sri Lanka's incredible wildlife in their natural habitats.",
    },
    {
      id: 6,
      title: "Complete Island Experience",
      category: "adventure",
      duration: 15,
      basePricePerPerson: 87,
      rating: 4.8,
      image:
        "https://images.pexels.com/photos/1615766/pexels-photo-1615766.jpeg",

      itinerary: [
        "Arrive Colombo. Transfer to Anuradhapura.",
        "Explore Anuradhapura ruins.",
        "Visit Sigiriya Rock Fortress and Dambulla Cave Temple.",
        "Wildlife safari at Kaudulla or Minneriya.",
        "Transfer to Kandy via spice gardens. Evening visit to Temple of the Tooth.",
        "Kandy city tour and cultural show.",
        "Transfer to Nuwara Eliya. Visit tea plantation and factory.",
        "Explore Nuwara Eliya and surroundings.",
        "Take scenic train ride from Nanu Oya to Ella.",
        "Explore Ella and nearby hikes.",
        "Transfer to Yala or Udawalawe for safari.",
        "Morning safari. Transfer to southern or eastern coast beach.",
        "Relax at the beach.",
        "Visit Galle Fort and nearby attractions.",
        "Colombo city tour and departure.",
      ],
      description:
        "A comprehensive journey across the island, perfect for those who want to truly explore Sri Lanka.",
    },
  ];

  const filteredPackages =
    selectedCategory === "all"
      ? packages
      : packages.filter((pkg) => pkg.category === selectedCategory);

  const TourCard: React.FC<{ pkg: TourPackage }> = ({ pkg }) => {
    const [groupSize, setGroupSize] = useState<number>(2);
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(
      vehicles[0]
    );

    const calculateTotalPrice = (): number => {
      const vehicleCost = selectedVehicle.pricePerDay * pkg.duration;
      return vehicleCost;
    };

    const handleBookTour = () => {
      const totalPrice = calculateTotalPrice();
      const message = `Hi Travel to Lanka! I'm interested in booking the ${pkg.title}.

Tour Details:
- Duration: ${pkg.duration} days
- Group Size: ${groupSize} people
- Vehicle: ${selectedVehicle.name}
- Total Price: €${totalPrice}


Please provide more information and confirm availability.`;

      const whatsappUrl = `https://wa.me/94789222201?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    };

    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 border">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />
        <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
        <p className="text-gray-600 mb-4">{pkg.description}</p>

        <div className="flex justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{pkg.duration} days</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>Sri Lanka</span>
          </div>
        </div>

        {pkg.itinerary && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              Tour Itinerary:
            </h4>
            <ul className="list-decimal list-inside text-sm text-gray-700 space-y-1">
              {pkg.itinerary.map((item, index) => (
                <li key={index}>
                  Day {index + 1} – {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Group Size
          </label>
          <select
            value={groupSize}
            onChange={(e) => setGroupSize(parseInt(e.target.value))}
            className="w-full border px-3 py-2 rounded-lg"
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "person" : "people"}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle Type
          </label>
          <select
            value={selectedVehicle.id}
            onChange={(e) => {
              const v = vehicles.find((veh) => veh.id === e.target.value);
              if (v) setSelectedVehicle(v);
            }}
            className="w-full border px-3 py-2 rounded-lg"
          >
            {vehicles.map((v) => (
              <option key={v.id} value={v.id} disabled={groupSize > v.capacity}>
                {v.name} (up to {v.capacity} people) - €{v.pricePerDay}/day
              </option>
            ))}
          </select>

          {groupSize > selectedVehicle.capacity && (
            <p className="text-red-600 text-sm mt-2">
              ⚠️ {selectedVehicle.name} cannot accommodate {groupSize} people.
              Please choose a larger vehicle.
            </p>
          )}
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2">Price Breakdown</h4>
          <div className="text-sm space-y-1">
            <div className="flex justify-between"></div>
            <div className="flex justify-between">
              <span>
                Vehicle & driver ({groupSize} people for {pkg.duration} days )
              </span>
              <span>€{selectedVehicle.pricePerDay * pkg.duration}</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <span>Total for transport</span>
              <span>€{calculateTotalPrice()}</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleBookTour}
          className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Book This Tour</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    );
  };

  return (
    <section id="tours" className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Tour Packages
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted tour packages, each designed to
            showcase Sri Lanka's natural beauty, culture, and adventure.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {filteredPackages.map((pkg) => (
            <TourCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
      <div className="text-m text-[#068080] ml-6 ">
        <span className="text-sm ml-4">
          <br />
          ** Please note that the prices mentioned cover transport only.
          However, we are happy to assist you with additional services upon
          request, including:
          <ul className="list-disc ml-6">
            <li>Safari experiences and other activities</li>
            <li> Train ticket reservations</li>
            <li>Hotel bookings</li>
          </ul>
          Feel free to let us know your preferences, and we’ll tailor everything
          to your needs.
        </span>
      </div>
      <br />
      <br />
      <div className="flex justify-center bg-white ">
        <a
          href="https://wa.me/94789222201?text=Hi! I'm interested in customized tour packages"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-bounce inline-flex items-center space-x-2 bg-[#20c9b8] text-white px-10 py-5 rounded-full font-semibold hover:bg-teal-700 transition-colors"
        >
          <span>Get your Customized Itinerary →</span>
        </a>
      </div>
    </section>
  );
};

export default TourPackages;
