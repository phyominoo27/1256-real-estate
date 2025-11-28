import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Home, Key, MapPin, Search, Star, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

// Custom Modern Logo Component with Color Design
const Logo = ({ className, isDark }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    {/* Icon with colored styling */}
    <div className={`relative w-10 h-10 flex items-center justify-center rounded-tr-xl rounded-bl-xl border-2 transition-all duration-300 ${
      isDark 
        ? 'border-amber-600 text-amber-600 bg-amber-50' 
        : 'border-amber-400 text-amber-400 bg-black/30 backdrop-blur-sm'
    }`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4 8 4v14" />
        <path d="M9 21v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
      </svg>
    </div>
    
    {/* Text with two-tone design */}
    <span className={`text-2xl font-bold tracking-tighter transition-colors duration-300 ${
      isDark ? 'text-slate-900' : 'text-white'
    }`}>
      12<span className={`${isDark ? 'text-amber-600' : 'text-amber-400'}`}>56</span>
    </span>
  </div>
);

const RealEstateLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const properties = [
    {
      id: 1,
      title: "The Onyx Penthouse",
      location: "Downtown District",
      price: "$2,450,000",
      beds: 3,
      baths: 3.5,
      sqft: 2800,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tag: "Exclusive"
    },
    {
      id: 2,
      title: "Azure Coast Villa",
      location: "North Shore",
      price: "$3,800,000",
      beds: 5,
      baths: 4,
      sqft: 4200,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tag: "New Listing"
    },
    {
      id: 3,
      title: "1256 Loft Series",
      location: "Arts District",
      price: "$890,000",
      beds: 2,
      baths: 2,
      sqft: 1450,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tag: "Urban"
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen selection:bg-black selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <Logo isDark={scrolled} />

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-8 ${scrolled ? 'text-slate-600' : 'text-white/90'}`}>
            <a href="#properties" className="hover:text-amber-500 transition-colors">Properties</a>
            <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
            <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
            <a href="#contact" className={`px-5 py-2 rounded-full font-medium transition-all ${scrolled ? 'bg-black text-white hover:bg-slate-800' : 'bg-white text-black hover:bg-slate-200'}`}>
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className={`md:hidden ${scrolled ? 'text-black' : 'text-white'}`}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-4 md:hidden border-t">
            <a href="#properties" onClick={toggleMenu} className="text-lg font-medium text-slate-800">Properties</a>
            <a href="#services" onClick={toggleMenu} className="text-lg font-medium text-slate-800">Services</a>
            <a href="#about" onClick={toggleMenu} className="text-lg font-medium text-slate-800">About</a>
            <a href="#contact" onClick={toggleMenu} className="bg-black text-white text-center py-3 rounded-lg font-medium mt-2">
              Book Consultation
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white mt-16">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-amber-400 font-medium">Est. 2025</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 leading-tight">
            12<span className="text-amber-400">56</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Bridging the gap between architectural masterpiece and the place you call home.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-full max-w-2xl mx-auto flex flex-col md:flex-row gap-2 border border-white/20">
            <div className="flex-1 flex items-center px-4 h-12 md:h-auto bg-white/90 rounded-full md:rounded-l-full md:rounded-r-none">
              <MapPin size={18} className="text-slate-500 mr-2" />
              <input 
                type="text" 
                placeholder="City, Neighborhood, or ZIP" 
                className="bg-transparent w-full outline-none text-slate-800 placeholder:text-slate-500"
              />
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-full transition-all flex items-center justify-center gap-2">
              <Search size={18} />
              <span>Search</span>
            </button>
          </div>
        </div>
      </header>

      {/* Featured Properties */}
      <section id="properties" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Featured Collections</h2>
              <p className="text-slate-500 max-w-md">Explore our hand-picked selection of premium properties designed for the discerning individual.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-slate-900 font-medium hover:text-amber-600 transition-colors mt-4 md:mt-0">
              View All Listings <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((prop) => (
              <div key={prop.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                    {prop.tag}
                  </div>
                  <img 
                    src={prop.image} 
                    alt={prop.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{prop.title}</h3>
                    <span className="text-amber-600 font-bold">{prop.price}</span>
                  </div>
                  <p className="text-slate-500 mb-4 flex items-center gap-1"><MapPin size={14} /> {prop.location}</p>
                  
                  <div className="flex items-center justify-between py-4 border-t border-slate-100 text-slate-600 text-sm">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-slate-900">{prop.beds}</span> Beds
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-slate-900">{prop.baths}</span> Baths
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-slate-900">{prop.sqft}</span> Sq Ft
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="md:hidden w-full mt-8 py-4 border border-slate-300 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            View All Listings
          </button>
        </div>
      </section>

      {/* Value Prop / Services */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Interior Design" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-10 -right-10 bg-black text-white p-8 rounded-xl hidden md:block max-w-xs shadow-xl">
                <div className="flex items-center gap-2 mb-2 text-amber-500">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                </div>
                <p className="font-light italic">"1256 transformed how we view real estate. Simply exceptional service."</p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <span className="text-amber-600 font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose 1256</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Reimagining the <br/> Art of Living.</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                We don't just sell houses; we curate lifestyles. The 1256 approach combines data-driven market insights with a concierge-level service that anticipates your needs before you do.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg h-fit text-amber-600">
                    <Home size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Exclusive Access</h3>
                    <p className="text-slate-500">Get priority access to off-market listings and upcoming developments before they hit the public.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg h-fit text-amber-600">
                    <Key size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Turnkey Experience</h3>
                    <p className="text-slate-500">From legal paperwork to interior design consultation, we handle the details so you can enjoy the journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/50 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to find your sanctuary?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Whether you're buying, selling, or investing, the 1256 team is ready to guide you home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-amber-400 transition-colors">
              View Available Properties
            </button>
            <button className="border border-slate-600 px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-colors">
              Contact an Agent
            </button>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-white pt-24 pb-12 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <Logo isDark={true} className="mb-6" />
              <p className="text-slate-500 mb-6">
                Redefining modern real estate with integrity, style, and exclusive market access.
              </p>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-black transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-black transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-black transition-colors"><Twitter size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Properties</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-amber-600">Buy a Home</a></li>
                <li><a href="#" className="hover:text-amber-600">Sell a Home</a></li>
                <li><a href="#" className="hover:text-amber-600">Commercial</a></li>
                <li><a href="#" className="hover:text-amber-600">New Developments</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-amber-600">About Us</a></li>
                <li><a href="#" className="hover:text-amber-600">Agents</a></li>
                <li><a href="#" className="hover:text-amber-600">Careers</a></li>
                <li><a href="#" className="hover:text-amber-600">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-500">
                <li className="flex items-center gap-2"><MapPin size={18} className="text-amber-600" /> No.8 , Main Road , South Zaing Ga naing Quarters. Bago</li>
                <li className="flex items-center gap-2"><Phone size={18} className="text-amber-600" /> 09-256996265</li>
                <li className="flex items-center gap-2"><Mail size={18} className="text-amber-600" /> 1256realestate@gmail.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>&copy; 2025 1256 Real Estate Group. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-600">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RealEstateLanding;