import React, { useState, useRef, useEffect } from "react";

// --- SVG Icons for Amenities ---
const AirConditioningIcon = () => (
  <svg
    className="w-12 h-12 mx-auto mb-4 text-amber-400 group-hover:text-white transition-colors duration-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 15H19M5 9H19M3 12H21M6 6H18M6 18H18"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M4 11h16v2H4z"
    />
  </svg>
);
const CarParkingIcon = () => (
  <svg
    className="w-12 h-12 mx-auto mb-4 text-amber-400 group-hover:text-white transition-colors duration-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 11V3"
    />
  </svg>
);
const CctvCameraIcon = () => (
  <svg
    className="w-12 h-12 mx-auto mb-4 text-amber-400 group-hover:text-white transition-colors duration-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);
const CommonWashroomIcon = () => (
  <svg
    className="w-12 h-12 mx-auto mb-4 text-amber-400 group-hover:text-white transition-colors duration-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 016-6h6M21 3h-6a2 2 0 00-2 2v11a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2z"
    />
  </svg>
);
const ElectricityIcon = () => (
  <svg
    className="w-12 h-12 mx-auto mb-4 text-amber-400 group-hover:text-white transition-colors duration-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);
const FireSprinklersIcon = () => (
  <svg
    className="w-12 h-12 mx-auto mb-4 text-amber-400 group-hover:text-white transition-colors duration-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 22a10 10 0 110-20 10 10 0 010 20z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 12l-4 4m4-4l4 4m-4-4V4m0 8l-4-4m4 4l4-4"
    />
  </svg>
);

// Main App Component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // SVG for the hamburger menu icon
  const MenuIcon = () => (
    <svg
      className="w-8 h-8 text-slate-800"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  );

  // SVG for the close menu icon
  const CloseIcon = () => (
    <svg
      className="w-8 h-8 text-slate-800"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );

  // Data for the featured content section
  const featuredContentData = [
    {
      preTitle: "DELHI’S TRUSTED NAME IN RENTALS & PROPERTY DEALS",
      title: "Built on Trust. Driven by Vision",
      description:
        "With over 15 years of real estate expertise, Musarraf—founder of Taj Property—has built a trusted name in Okhla & Shaheen Bagh. Whether you're looking to rent, buy, or invest, our local knowledge and professional guidance are at your service.",
      imageUrl:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
      altText: "A modern and luxurious living room",
    },
    {
      preTitle: "GET TO KNOW US",
      title: "Your Local Property Partner in South Delhi",
      description:
        "Taj Property brings you insights, updates, and listings in Delhi’s fast-moving rental and property market. From cozy apartments to commercial spaces, we serve both clients and investors with clarity, care, and deep market knowledge.",
      imageUrl:
        "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?q=80&w=1974&auto=format&fit=crop",
      altText: "A person reading a magazine in a stylish setting",
    },
    {
      preTitle: "OUR STORY",
      title: "A Vision 15 Years in the Making",
      description:
        "Founded by Musarraf, a hardworking and visionary professional, Taj Property has grown from local roots to become a trusted name in Delhi real estate. Our mission is simple: honest dealing, community focus, and long-term client satisfaction.",
      imageUrl:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
      altText: "A stunning modern farmhouse exterior",
    },
  ];

  // Data for the "Our Values" section
  const valuesData = [
    {
      title: "Local Expertise You Can Trust",
      description:
        "With over 15 years in the Okhla and Shaheen Bagh property market, Musarraf brings deep insight, trust, and experience to every deal.",
      imageUrl:
        "https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg",
      altText: "Local real estate agent discussing property with client",
    },
    {
      title: "Transparent Rental & Sale Deals",
      description:
        "We ensure honest and smooth property transactions, whether you're renting a flat or buying your next investment.",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      altText: "Handshake over a rental agreement",
    },
    {
      title: "Client-Centric Service",
      description:
        "We value long-term relationships with our clients by providing clear communication, fair pricing, and personalized service.",
      imageUrl:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2070&auto=format&fit=crop",
      altText: "Real estate agent smiling and guiding clients",
    },
    {
      title: "Prime Properties in South Delhi",
      description:
        "From family apartments to commercial spaces, our listings cover the best rental and purchase options in South Delhi’s growing neighborhoods.",
      imageUrl:
        "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg",
      altText: "Modern homes in South Delhi neighborhood",
    },
  ];

  // Component for the featured content section
  const FeaturedContent = () => (
    <section id="about" className="py-16 lg:py-24 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 lg:space-y-24">
          {featuredContentData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <p className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
                  {item.preTitle}
                </p>
                <h3 className="mt-2 text-3xl lg:text-4xl font-serif font-bold text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
              {/* Image Content */}
              <div className="lg:w-1/2 group overflow-hidden rounded-lg">
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  className="w-full h-auto object-cover aspect-video rounded-lg shadow-xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/e2e8f0/334155?text=Image+Not+Found";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Component for the "Our Values" section
  const OurValues = () => (
    <section id="value" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold text-amber-600 uppercase tracking-widest">
            Our Values
          </h3>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto mt-2"></div>
          <h2 className="mt-6 text-3xl lg:text-4xl font-serif font-bold text-slate-800">
            Building Sustainable Futures
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {valuesData.map((value, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg overflow-hidden group"
            >
              <img
                src={value.imageUrl}
                alt={value.altText}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                <h4 className="text-lg sm:text-xl font-bold font-serif">
                  {value.title}
                </h4>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-200">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Component for the "Our Locations" section
  const OurLocations = () => (
    <section
      id="location"
      className="py-16 lg:py-20 text-white"
      style={{ backgroundColor: "#1e293b" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-10">
          <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400 flex items-center justify-center">
            <span className="inline-block w-12 h-px bg-amber-400/50 mr-4"></span>
            Our Locations
            <span className="inline-block w-12 h-px bg-amber-400/50 ml-4"></span>
          </h3>
          <h2 className="mt-6 text-2xl lg:text-3xl font-serif text-white">
            Situated in multiple locations across India.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-4 text-lg lg:text-xl font-serif text-stone-300">
          <span>Okhla</span>
          <span className="text-stone-500 hidden sm:inline">|</span>
          <span>Shaheen Bagh</span>
          <span className="text-stone-500 hidden sm:inline">|</span>
          <span>Jamia Nagar</span>
          <span className="text-stone-500 hidden sm:inline">|</span>
          <span>Zakir Nagar</span>
          <span className="text-stone-500 hidden sm:inline">|</span>
          <span>Abul Fazal Enclave</span>
          <span className="text-stone-500 hidden sm:inline">|</span>
          <span>New Friends Colony</span>
          <span className="text-stone-500 hidden sm:inline">|</span>
          <span>Sarita Vihar</span>
          <span className="text-stone-500 hidden sm:inline">|</span>
          <span>Jasola</span>
        </div>
      </div>
    </section>
  );

  // Component for the "Luxurious Amenities" section
  const LuxuriousAmenities = () => {
    const originalAmenities = [
      { name: "Air Conditioning", icon: <AirConditioningIcon /> },
      { name: "Car Parking", icon: <CarParkingIcon /> },
      { name: "CCTV Camera", icon: <CctvCameraIcon /> },
      { name: "Common Washroom", icon: <CommonWashroomIcon /> },
      { name: "Electricity", icon: <ElectricityIcon /> },
      { name: "Fire Sprinklers", icon: <FireSprinklersIcon /> },
    ];

    const [amenities, setAmenities] = useState(originalAmenities);

    const handleNext = () => {
      setAmenities((prevAmenities) => {
        const newAmenities = [...prevAmenities];
        const firstItem = newAmenities.shift();
        newAmenities.push(firstItem);
        return newAmenities;
      });
    };

    const handlePrev = () => {
      setAmenities((prevAmenities) => {
        const newAmenities = [...prevAmenities];
        const lastItem = newAmenities.pop();
        newAmenities.unshift(lastItem);
        return newAmenities;
      });
    };

    return (
      <section id="amenities" className="py-16 lg:py-24 bg-stone-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif text-slate-800">
              Luxurious Amenities
            </h2>
          </div>
          <div className="relative flex items-center">
            <button
              onClick={handlePrev}
              className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-200 transition-colors z-10 mx-2 lg:mx-4"
              aria-label="Previous amenity"
            >
              <svg
                className="w-6 h-6 text-slate-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex-1 overflow-hidden">
              <div className="flex">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/3 lg:w-1/5 flex-shrink-0 px-2 transition-all duration-500 ease-in-out"
                  >
                    <div className="bg-white text-slate-800 p-8 rounded-lg text-center h-48 border-2 border-stone-200 flex flex-col justify-center items-center group hover:bg-slate-800 hover:text-white transition-colors duration-300">
                      {amenity.icon}
                      <h4 className="font-semibold mt-2">{amenity.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-200 transition-colors z-10 mx-2 lg:mx-4"
              aria-label="Next amenity"
            >
              <svg
                className="w-6 h-6 text-slate-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    );
  };

  // Component for the "Connectivity" section
  const Connectivity = () => {
    const connectivityData = [
      {
        title: "Okhla & Metro Access",
        description:
          "Located close to multiple metro stations (Magenta & Violet Line), our properties ensure seamless travel across Delhi and NCR.",
        imageUrl:
          "https://images.pexels.com/photos/1888883/pexels-photo-1888883.jpeg",
        altText: "Modern high-speed train",
      },
      {
        title: "Shaheen Bagh's Vibrant Locality",
        description:
          "A cultural and residential hub, Shaheen Bagh offers everything from schools to shopping—perfect for families and professionals.",
        imageUrl:
          "https://images.pexels.com/photos/33153424/pexels-photo-33153424.jpeg",
        altText: "Train on an elevated railway track",
      },
      {
        title: "Connected to Jamia Nagar & Abul Fazal",
        description:
          "Properties near Jamia Millia Islamia University and Abul Fazal Enclave provide great rental value and strong investment potential.",
        imageUrl:
          "https://images.unsplash.com/photo-1532105956626-9569c03602f6?q=80&w=1974&auto=format&fit=crop",
        altText: "Train moving through a station",
      },
    ];

    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-800">
              Easy Access, Prime Location
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed">
              Taj Property offers properties in some of Delhi’s most
              well-connected neighborhoods, making commuting, renting, or
              investing smart and stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {connectivityData.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={item.imageUrl}
                    alt={item.altText}
                    className="rounded-lg w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold font-serif text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Component for the "Glimpse of Luxury" section
  const GlimpseOfLuxury = () => {
    const images = [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
      "https://images.pexels.com/photos/8431368/pexels-photo-8431368.jpeg",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };

    useEffect(() => {
      const timer = setTimeout(handleNext, 5000); // Auto-rotate every 5 seconds
      return () => clearTimeout(timer);
    }, [currentIndex]);

    const getSlideClass = (index) => {
      const total = images.length;
      const prevIndex = (currentIndex - 1 + total) % total;
      const nextIndex = (currentIndex + 1) % total;

      if (index === currentIndex) {
        return "translate-x-0 scale-100 opacity-100 z-10";
      } else if (index === prevIndex) {
        return "-translate-x-full scale-75 opacity-50 z-0";
      } else if (index === nextIndex) {
        return "translate-x-full scale-75 opacity-50 z-0";
      } else {
        return "translate-x-full scale-75 opacity-0 -z-10";
      }
    };

    return (
      <section className="py-16 lg:py-24 bg-slate-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif">
              A Glimpse of the Luxury
            </h2>
          </div>
          <div className="relative h-64 lg:h-96 flex items-center justify-center">
            <div className="relative w-full h-full">
              {images.map((src, index) => (
                <div
                  key={src}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${getSlideClass(
                    index
                  )}`}
                >
                  <img
                    src={src}
                    alt={`Luxury glimpse ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-0 lg:left-12 z-20 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6 text-slate-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 lg:right-12 z-20 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6 text-slate-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    );
  };

  // Component for the "Contact Us" section
  const ContactUs = () => (
    <section
      id="contact"
      className="py-16 lg:py-20 text-white"
      style={{ backgroundColor: "#1e293b" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400 flex items-center justify-center">
            <span className="inline-block w-12 h-px bg-amber-400/50 mr-4"></span>
            Contact Us
            <span className="inline-block w-12 h-px bg-amber-400/50 ml-4"></span>
          </h3>
          <h2 className="mt-6 text-2xl lg:text-3xl font-serif text-white">
            Interested to know more? Reach out.
          </h2>
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <a
            href="tel:+919891937794"
            className="bg-amber-400 text-slate-900 font-bold py-3 px-6 sm:px-8 rounded-lg hover:bg-amber-300 transition-colors text-sm sm:text-base"
          >
            Give us a Call
          </a>
          <a
            href="mailto:asadtajproperty@gmail.com"
            className="border-2 border-amber-400/50 text-amber-50 font-bold py-3 px-6 sm:px-8 rounded-lg hover:bg-amber-400/10 transition-colors text-sm sm:text-base"
          >
            Write an Email
          </a>
        </div>
      </div>
    </section>
  );

  // Component for the full-width image section
  const ImageSection = () => (
    <div>
      <img
        src="https://images.pexels.com/photos/681368/pexels-photo-681368.jpeg"
        alt="Modern luxurious farmhouse exterior"
        className="w-full h-auto object-cover"
      />
    </div>
  );

  // Component for the Footer
  const Footer = () => (
    <footer className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-center">
          <div className="space-y-6 text-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-wider">
                TAJ PROPERTY
              </h1>
              <p className="text-sm text-amber-600 -mt-1">
                Reliable Rentals & Property Deals in South Delhi
              </p>
            </div>
            <p className="text-slate-600 max-w-md mx-auto">
              Led by Musarraf, a seasoned professional with over 15 years in
              real estate, Taj Property is trusted across Okhla, Shaheen Bagh,
              and nearby areas for transparent rentals, property sales, and
              investment guidance. We combine local expertise with a
              hardworking, client-first approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919891937794"
                className="bg-amber-400 text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-amber-300 transition-colors"
              >
                Give us a Call
              </a>
              <a
                href="mailto:asadtajproperty@gmail.com"
                className="border-2 border-slate-300 text-slate-700 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Write an Email
              </a>
            </div>
            <p className="text-slate-600">
              Taj Property, Shaheen Bagh, Okhla, Delhi – 110025
            </p>
          </div>
        </div>
      </div>
      <div className="bg-stone-100 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-600">
          <p>&copy; Taj Property 2025. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-amber-600">
              Terms and Conditions
            </a>
            <a href="#" className="hover:text-amber-600">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="bg-stone-50 font-sans overflow-x-hidden">
      {/* --- Top Bar --- */}
      <div className="bg-white border-b border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-2 text-xs text-slate-600">
            <div className="flex items-center space-x-4">
              <a
                href="tel:+919891937794"
                className="flex items-center space-x-2 hover:text-amber-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+91 9891937794</span>
              </a>
              <span className="hidden sm:inline">|</span>
              <a
                href="tel:+919891937794"
                className="font-bold text-amber-600 hover:text-amber-500 transition-colors"
              >
                CALL US NOW
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN HEADER (Sticky) --- */}
      <header className="sticky top-0 bg-white z-50 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold text-slate-800 tracking-wider">
                    TAJ PROPERTY
                  </h1>
                  <p className="text-xs lg:text-sm text-amber-600 -mt-1">
                    Helping You Find Homes & Properties in Pan India
                  </p>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#about"
                className="text-slate-600 hover:text-amber-600 font-semibold tracking-wide transition-colors"
              >
                About Us
              </a>
              <a
                href="#value"
                className="text-slate-600 hover:text-amber-600 font-semibold tracking-wide transition-colors"
              >
                Our Values
              </a>
              <a
                href="#location"
                className="text-slate-600 hover:text-amber-600 font-semibold tracking-wide transition-colors"
              >
                Locations
              </a>
              <a
                href="#amenities"
                className="text-slate-600 hover:text-amber-600 font-semibold tracking-wide transition-colors"
              >
                Amenities
              </a>
            </nav>

            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                className="ml-8 inline-flex items-center justify-center px-5 py-2 border-2 border-slate-300 rounded-lg shadow-sm text-base font-medium text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (collapsible) */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-amber-600 hover:bg-stone-50"
              >
                About Us
              </a>
              <a
                href="#value"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-amber-600 hover:bg-stone-50"
              >
                Our Values
              </a>
              <a
                href="#location"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-amber-600 hover:bg-stone-50"
              >
                Locations
              </a>
              <a
                href="#amenities"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-amber-600 hover:bg-stone-50"
              >
                Amenities
              </a>
              <a
                href="#contact"
                className="block w-full text-left px-3 py-2 mt-2 rounded-md text-base font-medium text-slate-700 border border-slate-300 bg-stone-50 hover:bg-stone-100"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <div className="relative h-[70vh] md:h-[90vh] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/7578909/pexels-photo-7578909.jpeg')",
            }}
          >
            <div className="absolute inset-0 bg-slate-900/40"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight tracking-tight">
              Where Trust Meets Property Excellence
            </h1>
            <p className="mt-6 max-w-3xl text-lg md:text-xl text-stone-200">
              Taj Property provides personalized rental and property services
              built on trust, transparency, and local expertise.
            </p>
          </div>
        </div>

        <FeaturedContent />
        <OurValues />
        <OurLocations />
        <LuxuriousAmenities />
        <Connectivity />
        <GlimpseOfLuxury />
        <ContactUs />
        <ImageSection />
      </main>

      <Footer />
    </div>
  );
}
