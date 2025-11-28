import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ArrowLeft, Home, Key, MapPin, Search, Star, Phone, Mail, Instagram, Facebook, Twitter, Globe, Filter, Bed, Bath, Move, CheckCircle, Calendar, Clock, ChevronDown } from 'lucide-react';

// --- DATA & TRANSLATIONS ---

const propertiesData = [
  {
    id: 1,
    title: "The Onyx Penthouse",
    location: "Downtown District",
    price: 2450000,
    priceStr: "$2,450,000",
    beds: 3,
    baths: 3.5,
    sqft: 2800,
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tag: "exclusive",
    description: "Experience the pinnacle of luxury living in the heart of the city. This penthouse features panoramic views, a private elevator, and bespoke interiors designed by world-renowned architects."
  },
  {
    id: 2,
    title: "Azure Coast Villa",
    location: "North Shore",
    price: 3800000,
    priceStr: "$3,800,000",
    beds: 5,
    baths: 4,
    sqft: 4200,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tag: "new",
    description: "A stunning coastal retreat offering direct beach access and infinity pool. The open-plan living area seamlessly blends indoor and outdoor living, perfect for entertaining."
  },
  {
    id: 3,
    title: "1256 Loft Series",
    location: "Arts District",
    price: 890000,
    priceStr: "$890,000",
    beds: 2,
    baths: 2,
    sqft: 1450,
    type: "Loft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tag: "urban",
    description: "Modern industrial design meets urban convenience. High ceilings, exposed brick walls, and smart home integration make this loft the ultimate city sanctuary."
  },
  {
    id: 4,
    title: "Maple Wood Estate",
    location: "Suburban Heights",
    price: 1200000,
    priceStr: "$1,200,000",
    beds: 4,
    baths: 3,
    sqft: 3200,
    type: "House",
    image: "https://images.unsplash.com/photo-1600596542815-2495db96d32f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tag: "new",
    description: "A perfect family home surrounded by lush greenery. Features a spacious backyard, gourmet kitchen, and a master suite with a spa-like bathroom."
  },
  {
    id: 5,
    title: "Skyline Apartment",
    location: "Financial District",
    price: 950000,
    priceStr: "$950,000",
    beds: 2,
    baths: 2,
    sqft: 1100,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tag: "urban",
    description: "Efficient luxury in the center of commerce. Floor-to-ceiling windows provide breathtaking skyline views, with amenities including a gym and 24/7 concierge."
  },
  {
    id: 6,
    title: "The Garden Villa",
    location: "Old Town",
    price: 1850000,
    priceStr: "$1,850,000",
    beds: 4,
    baths: 3.5,
    sqft: 2900,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tag: "exclusive",
    description: "A historic property fully renovated for modern living. Private courtyards and classic architecture create a serene atmosphere moments from the city center."
  }
];

const content = {
  en: {
    nav: { properties: "Properties", services: "Services", about: "About", book: "Book Consultation" },
    hero: {
      est: "Est. 2025", title_suffix: "56", subtitle: "Bridging the gap between architectural masterpiece and the place you call home.",
      placeholder: "City, Neighborhood, or ZIP", search: "Search"
    },
    featured: {
      heading: "Featured Collections", subheading: "Explore our hand-picked selection of premium properties.", viewAll: "View All Listings",
      tags: { exclusive: "Exclusive", new: "New Listing", urban: "Urban" }
    },
    services: {
      why: "Why Choose 1256", heading: "Reimagining the \nArt of Living.",
      desc: "We don't just sell houses; we curate lifestyles. The 1256 approach combines data-driven market insights with a concierge-level service.",
      exclusive_title: "Exclusive Access", exclusive_desc: "Get priority access to off-market listings.",
      turnkey_title: "Turnkey Experience", turnkey_desc: "We handle the details so you can enjoy the journey.",
      testimonial: "\"1256 transformed how we view real estate. Simply exceptional service.\""
    },
    cta: {
      heading: "Ready to find your sanctuary?", subheading: "Whether you're buying, selling, or investing, the 1256 team is ready to guide you home.",
      btn_view: "View Available Properties", btn_contact: "Contact an Agent"
    },
    footer: {
      desc: "Redefining modern real estate with integrity, style, and exclusive market access.",
      cols: { prop: "Properties", comp: "Company", contact: "Contact" },
      links: {
        buy: "Buy a Home", sell: "Sell a Home", comm: "Commercial", new: "New Developments",
        about: "About Us", agents: "Agents", careers: "Careers", press: "Press", privacy: "Privacy Policy", terms: "Terms of Service"
      },
      address: "No.8 , Main Road , South Zaing Ga naing Quarters. Bago", rights: "© 2025 1256 Real Estate Group. All rights reserved."
    },
    listings: {
      title: "Property Listings",
      filters: "Filters",
      price: "Max Price",
      type: "Property Type",
      search: "Search location...",
      no_results: "No properties found matching your criteria.",
      back: "Back to Home"
    },
    details: {
      back: "Back to Listings",
      features: "Features",
      desc: "Description",
      agent: "Contact Agent",
      form_name: "Full Name",
      form_email: "Email Address",
      form_phone: "Phone Number",
      form_msg: "Message",
      form_send: "Send Request",
      success: "Message Sent Successfully!"
    },
    contact_page: {
      title: "Book a Consultation",
      subtitle: "Schedule a private viewing or speak with one of our luxury real estate specialists.",
      office: "Our Office",
      connect: "Connect With Us",
      schedule: "Schedule Now",
      form_interest: "I am interested in...",
      opt_buy: "Buying",
      opt_sell: "Selling",
      opt_invest: "Investing"
    }
  },
  mm: {
    nav: { properties: "အိမ်ခြံမြေများ", services: "ဝန်ဆောင်မှုများ", about: "အကြောင်း", book: "ဆွေးနွေးရန်" },
    hero: {
      est: "စတင်တည်ထောင် ၂၀၂၅", title_suffix: "၅၆", subtitle: "ခေတ်မီ ဗိသုကာလက်ရာများနှင့် သင့်အိမ်မက်များကို ပေါင်းကူးပေးမည့် နေရာတစ်ခု။",
      placeholder: "မြို့နယ်၊ ရပ်ကွက် သို့မဟုတ် လိပ်စာ", search: "ရှာဖွေရန်"
    },
    featured: {
      heading: "ထူးခြားသော စုစည်းမှုများ", subheading: "လူကြီးမင်းတို့အတွက် သီးသန့်ရွေးချယ်ထားသော အဆင့်မြင့် အိမ်ခြံမြေများကို လေ့လာကြည့်ရှုလိုက်ပါ။", viewAll: "အိမ်ခြံမြေများအားလုံးကြည့်ရန်",
      tags: { exclusive: "သီးသန့်", new: "စာရင်းအသစ်", urban: "မြို့ပြပုံစံ" }
    },
    services: {
      why: "၁၂၅၆ ကို ဘာကြောင့် ရွေးချယ်သင့်သလဲ", heading: "လူနေမှုဘဝ အနုပညာကို \nပုံဖော်ခြင်း။",
      desc: "ကျွန်ုပ်တို့သည် အိမ်များကို ရောင်းချရုံသာမက သင့်ဘဝနေထိုင်မှုပုံစံကိုပါ ဖန်တီးပေးပါသည်။ ၁၂၅၆ ၏ ဝန်ဆောင်မှုသည် ဈေးကွက်အချက်အလက်များနှင့် လူကြီးမင်းတို့၏ လိုအပ်ချက်များကို ကြိုတင်သိရှိနားလည်သော ဝန်ဆောင်မှုတို့ ပေါင်းစပ်ထားပါသည်။",
      exclusive_title: "သီးသန့် အခွင့်အရေး", exclusive_desc: "အများပြည်သူမသိရှိမီ လာမည့်စီမံကိန်းများနှင့် အိမ်ခြံမြေစာရင်းများကို ဦးစားပေး လေ့လာခွင့်ရရှိပါမည်။",
      turnkey_title: "ပြီးပြည့်စုံသော ဝန်ဆောင်မှု", turnkey_desc: "အသေးစိတ်ကိစ္စရပ်အားလုံးကို ကျွန်ုပ်တို့ တာဝန်ယူဆောင်ရွက်ပေးပါသည်။",
      testimonial: "\"၁၂၅၆ က အိမ်ခြံမြေအပေါ် ကျွန်တော်တို့ရဲ့ အမြင်ကို ပြောင်းလဲပေးခဲ့ပါတယ်။ တကယ်ကို ထူးခြားကောင်းမွန်တဲ့ ဝန်ဆောင်မှုပါ။\""
    },
    cta: {
      heading: "သင့်စိတ်တိုင်းကျ နေအိမ်ကို ရှာဖွေဖို့ အဆင်သင့်ဖြစ်ပြီလား?", subheading: "ဝယ်ယူရန်၊ ရောင်းချရန် သို့မဟုတ် ရင်းနှီးမြှုပ်နှံရန်ဖြစ်စေ၊ ၁၂၅၆ အဖွဲ့သားများက သင့်ကို ကူညီလမ်းပြပေးရန် အဆင်သင့်ရှိပါသည်။",
      btn_view: "ရရှိနိုင်သော အိမ်ခြံမြေများ", btn_contact: "ကိုယ်စားလှယ်နှင့် ဆက်သွယ်ရန်"
    },
    footer: {
      desc: "ရိုးသားမှု၊ စတိုင်လ်နှင့် သီးသန့်ဈေးကွက်ဝင်ရောက်ခွင့်တို့ဖြင့် ခေတ်သစ်အိမ်ခြံမြေလုပ်ငန်းကို အဓိပ္ပါယ်ဖွင့်ဆိုခြင်း။",
      cols: { prop: "အိမ်ခြံမြေ", comp: "ကုမ္ပဏီ", contact: "ဆက်သွယ်ရန်" },
      links: {
        buy: "အိမ်ဝယ်ရန်", sell: "အိမ်ရောင်းရန်", comm: "စီးပွားရေးဆိုင်ရာ", new: "စီမံကိန်းသစ်များ",
        about: "ကျွန်ုပ်တို့အကြောင်း", agents: "ကိုယ်စားလှယ်များ", careers: "အလုပ်အကိုင်", press: "သတင်းများ", privacy: "ကိုယ်ရေးအချက်အလက် မူဝါဒ", terms: "ဝန်ဆောင်မှု စည်းကမ်းချက်များ"
      },
      address: "အမှတ်(၈)၊ လမ်းမတော်၊ တောင်ဇိုင်းဂနိုင်းရပ်ကွက်၊ ပဲခူးမြို့။", rights: "© 2025 ၁၂၅၆ အိမ်ခြံမြေအုပ်စု။ မူပိုင်ခွင့်များ ရယူထားပြီးဖြစ်သည်။"
    },
    listings: {
      title: "အိမ်ခြံမြေ စာရင်းများ",
      filters: "စစ်ထုတ်ရန်",
      price: "အမြင့်ဆုံး ဈေးနှုန်း",
      type: "အိမ်ခြံမြေ အမျိုးအစား",
      search: "နေရာဒေသ ရှာဖွေရန်...",
      no_results: "ရှာဖွေမှုနှင့် ကိုက်ညီသော အိမ်ခြံမြေ မရှိပါ။",
      back: "ပင်မစာမျက်နှာသို့"
    },
    details: {
      back: "စာရင်းများသို့ ပြန်သွားရန်",
      features: "ထူးခြားချက်များ",
      desc: "ဖော်ပြချက်",
      agent: "ကိုယ်စားလှယ်နှင့် ဆက်သွယ်ရန်",
      form_name: "အမည်",
      form_email: "အီးမေးလ်",
      form_phone: "ဖုန်းနံပါတ်",
      form_msg: "မက်ဆေ့ခ်ျ",
      form_send: "ပေးပို့ရန်",
      success: "ပေးပို့မှု အောင်မြင်ပါသည်။"
    },
    contact_page: {
      title: "ဆွေးနွေးမှုပြုလုပ်ရန်",
      subtitle: "အိမ်ခြံမြေများကို သီးသန့်ကြည့်ရှုရန် သို့မဟုတ် ကျွန်ုပ်တို့၏ ကျွမ်းကျင်သူများနှင့် ဆွေးနွေးရန် ရက်ချိန်းယူပါ။",
      office: "ရုံးလိပ်စာ",
      connect: "ဆက်သွယ်ရန်",
      schedule: "ရက်ချိန်းရယူရန်",
      form_interest: "သိရှိလိုသော အကြောင်းအရာ...",
      opt_buy: "ဝယ်ယူရန်",
      opt_sell: "ရောင်းချရန်",
      opt_invest: "ရင်းနှီးမြှုပ်နှံရန်"
    }
  }
};

// Custom Logo Component
const Logo = ({ className, isDark, lang }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className={`relative w-10 h-10 flex items-center justify-center rounded-tr-xl rounded-bl-xl border-2 transition-all duration-300 ${
      isDark ? 'border-amber-600 text-amber-600 bg-amber-50' : 'border-amber-400 text-amber-400 bg-black/30 backdrop-blur-sm'
    }`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M9 21v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
      </svg>
    </div>
    <span className={`text-2xl font-bold tracking-tighter transition-colors duration-300 ${isDark ? 'text-slate-900' : 'text-white'}`}>
      {lang === 'en' ? '12' : '၁၂'}<span className={`${isDark ? 'text-amber-600' : 'text-amber-400'}`}>{lang === 'en' ? '56' : '၅၆'}</span>
    </span>
  </div>
);

// --- MAIN APP COMPONENT ---
const RealEstateLanding = () => {
  const [view, setView] = useState('home'); // 'home', 'listings', 'detail', 'contact'
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('en');
  
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState(5000000);
  const [typeFilter, setTypeFilter] = useState("All");

  const t = content[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, selectedProperty]);
  
  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
    setView('detail');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setView('listings');
  };

  const filteredProperties = propertiesData.filter(p => {
    const matchesSearch = p.location.toLowerCase().includes(searchQuery.toLowerCase()) || p.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = p.price <= priceFilter;
    const matchesType = typeFilter === "All" || p.type === typeFilter;
    return matchesSearch && matchesPrice && matchesType;
  });

  // --- SUB-COMPONENTS ---

  const Navbar = ({ forceDark }) => (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || forceDark ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4 border-b border-gray-100' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div onClick={() => setView('home')} className="cursor-pointer">
          <Logo isDark={scrolled || forceDark} lang={lang} />
        </div>

        <div className={`hidden md:flex items-center gap-8 ${scrolled || forceDark ? 'text-slate-600' : 'text-white/90'}`}>
          <button onClick={() => setView('listings')} className="hover:text-amber-500 transition-colors">{t.nav.properties}</button>
          <button onClick={() => setView('home')} className="hover:text-amber-500 transition-colors">{t.nav.services}</button>
          
          {/* DESKTOP LANGUAGE DROPDOWN */}
          <div className="relative">
            <button 
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} 
              className={`flex items-center gap-1 font-medium px-3 py-1 rounded-full border ${scrolled || forceDark ? 'border-slate-300 hover:bg-slate-100' : 'border-white/30 hover:bg-white/10'} transition-all`}
            >
              <Globe size={16} />
              <span className="text-sm">{lang === 'en' ? 'EN' : 'မြန်မာ'}</span>
              <ChevronDown size={14} />
            </button>
            
            {isLangDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsLangDropdownOpen(false)}></div>
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden z-50">
                  <button onClick={() => { setLang('en'); setIsLangDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 text-slate-700 flex justify-between items-center">
                    English {lang === 'en' && <CheckCircle size={14} className="text-amber-500"/>}
                  </button>
                  <button onClick={() => { setLang('mm'); setIsLangDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 text-slate-700 font-burmese flex justify-between items-center">
                    မြန်မာ {lang === 'mm' && <CheckCircle size={14} className="text-amber-500"/>}
                  </button>
                </div>
              </>
            )}
          </div>

          <button onClick={() => setView('contact')} className={`px-5 py-2 rounded-full font-medium transition-all ${scrolled || forceDark ? 'bg-black text-white hover:bg-slate-800' : 'bg-white text-black hover:bg-slate-200'}`}>
            {t.nav.book}
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          {/* MOBILE LANGUAGE SELECTOR */}
          <div className={`relative flex items-center gap-1 font-medium px-2 py-1 rounded-full border ${scrolled || forceDark ? 'border-slate-300 text-slate-900' : 'border-white/30 text-white'} transition-all`}>
            <Globe size={14} />
            <span className="text-xs font-bold">{lang === 'en' ? 'EN' : 'မြန်မာ'}</span>
            <ChevronDown size={12} />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)} 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            >
              <option value="en">English</option>
              <option value="mm">Myanmar (မြန်မာ)</option>
            </select>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={` ${scrolled || forceDark ? 'text-black' : 'text-white'}`}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-4 md:hidden border-t">
          <button onClick={() => { setView('listings'); setIsMenuOpen(false); }} className="text-lg font-medium text-slate-800 text-left">{t.nav.properties}</button>
          <button onClick={() => { setView('home'); setIsMenuOpen(false); }} className="text-lg font-medium text-slate-800 text-left">{t.nav.services}</button>
          <button onClick={() => { setView('contact'); setIsMenuOpen(false); }} className="bg-black text-white text-center py-3 rounded-lg font-medium mt-2">{t.nav.book}</button>
        </div>
      )}
    </nav>
  );

  const Footer = () => (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div onClick={() => setView('home')} className="cursor-pointer inline-block mb-6"><Logo isDark={true} lang={lang} /></div>
            <p className="text-slate-500 mb-6">{t.footer.desc}</p>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-black transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-black transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-black transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          <div><h4 className="font-bold text-lg mb-6">{t.footer.cols.prop}</h4><ul className="space-y-4 text-slate-500"><li><a href="#" className="hover:text-amber-600">{t.footer.links.buy}</a></li><li><a href="#" className="hover:text-amber-600">{t.footer.links.sell}</a></li><li><a href="#" className="hover:text-amber-600">{t.footer.links.new}</a></li></ul></div>
          <div><h4 className="font-bold text-lg mb-6">{t.footer.cols.comp}</h4><ul className="space-y-4 text-slate-500"><li><a href="#" className="hover:text-amber-600">{t.footer.links.about}</a></li><li><a href="#" className="hover:text-amber-600">{t.footer.links.agents}</a></li></ul></div>
          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.cols.contact}</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-center gap-2"><MapPin size={18} className="text-amber-600 min-w-[18px]" /> {t.footer.address}</li>
              <li className="flex items-center gap-2"><Phone size={18} className="text-amber-600" /> 09-256996265</li>
              <li className="flex items-center gap-2"><Mail size={18} className="text-amber-600" /> 1256realestate@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );

  // --- VIEWS ---

  const HomeView = () => (
    <>
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Modern Architecture" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-black/40"></div></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white mt-16">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-amber-400 font-medium">{t.hero.est}</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 leading-tight">{lang === 'en' ? '12' : '၁၂'}<span className="text-amber-400">{t.hero.title_suffix}</span></h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">{t.hero.subtitle}</p>
          <form onSubmit={handleSearch} className="bg-white/10 backdrop-blur-md p-2 rounded-2xl md:rounded-full max-w-2xl mx-auto flex flex-col md:flex-row gap-2 border border-white/20">
            <div className="flex-1 flex items-center px-4 h-12 md:h-auto rounded-xl md:rounded-l-full md:rounded-r-none transition-all">
              <MapPin size={18} className="text-gray-300 mr-2" />
              <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder={t.hero.placeholder} className="bg-transparent w-full outline-none text-white placeholder:text-gray-300 h-full" />
            </div>
            <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 h-12 md:h-auto md:py-2 rounded-xl md:rounded-full transition-all flex items-center justify-center gap-2">
              <Search size={18} /><span>{t.hero.search}</span>
            </button>
          </form>
        </div>
      </header>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div><h2 className="text-4xl font-bold mb-4 text-slate-900">{t.featured.heading}</h2><p className="text-slate-500 max-w-md">{t.featured.subheading}</p></div>
            <button onClick={() => setView('listings')} className="hidden md:flex items-center gap-2 text-slate-900 font-medium hover:text-amber-600 transition-colors mt-4 md:mt-0">{t.featured.viewAll} <ArrowRight size={20} /></button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertiesData.slice(0, 3).map((prop) => (
              <div key={prop.id} onClick={() => handlePropertyClick(prop)} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">{(t.featured.tags[prop.tag] || prop.tag)}</div>
                  <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2"><h3 className="text-xl font-bold text-slate-900">{prop.title}</h3><span className="text-amber-600 font-bold">{prop.priceStr}</span></div>
                  <p className="text-slate-500 mb-4 flex items-center gap-1"><MapPin size={14} /> {prop.location}</p>
                  <div className="flex items-center justify-between py-4 border-t border-slate-100 text-slate-600 text-sm">
                    <div className="flex items-center gap-1"><span className="font-semibold text-slate-900">{prop.beds}</span> <Bed size={16} /></div>
                    <div className="flex items-center gap-1"><span className="font-semibold text-slate-900">{prop.baths}</span> <Bath size={16} /></div>
                    <div className="flex items-center gap-1"><span className="font-semibold text-slate-900">{prop.sqft}</span> <Move size={16} /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setView('listings')} className="md:hidden w-full mt-8 py-4 border border-slate-300 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition-colors">{t.featured.viewAll}</button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full -z-10"></div>
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Interior" className="rounded-2xl shadow-2xl w-full" />
              <div className="absolute -bottom-10 -right-10 bg-black text-white p-8 rounded-xl hidden md:block max-w-xs shadow-xl"><p className="font-light italic">{t.services.testimonial}</p></div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-amber-600 font-bold tracking-wider uppercase text-sm mb-2 block">{t.services.why}</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 whitespace-pre-line">{t.services.heading}</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">{t.services.desc}</p>
              <div className="space-y-6">
                <div className="flex gap-4"><div className="bg-slate-100 p-3 rounded-lg h-fit text-amber-600"><Home size={24} /></div><div><h3 className="text-xl font-bold mb-2">{t.services.exclusive_title}</h3><p className="text-slate-500">{t.services.exclusive_desc}</p></div></div>
                <div className="flex gap-4"><div className="bg-slate-100 p-3 rounded-lg h-fit text-amber-600"><Key size={24} /></div><div><h3 className="text-xl font-bold mb-2">{t.services.turnkey_title}</h3><p className="text-slate-500">{t.services.turnkey_desc}</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/50 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.cta.heading}</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">{t.cta.subheading}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setView('listings')} className="bg-amber-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-amber-400 transition-colors">{t.cta.btn_view}</button>
            <button onClick={() => setView('contact')} className="border border-slate-600 px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-colors">{t.cta.btn_contact}</button>
          </div>
        </div>
      </section>
    </>
  );

  const ListingsView = () => (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 text-slate-500 mb-8 cursor-pointer hover:text-amber-600" onClick={() => setView('home')}>
          <ArrowLeft size={16} /> <span>{t.listings.back}</span>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-32">
              <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold text-lg"><Filter size={20} /> {t.listings.filters}</div>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t.listings.search}</label>
                <div className="flex items-center bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                  <Search size={16} className="text-slate-400" />
                  <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" className="bg-transparent w-full ml-2 outline-none text-sm" placeholder="..." />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t.listings.price}</label>
                
                {/* IMPROVED SLIDER: Added appearance-none, height, and background color for better dragging */}
                <input 
                  type="range" 
                  min="500000" 
                  max="5000000" 
                  step="100000" 
                  value={priceFilter} 
                  onChange={(e) => setPriceFilter(Number(e.target.value))} 
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500" 
                />
                
                <div className="text-right text-sm text-amber-600 font-bold mt-1">${priceFilter.toLocaleString()}</div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">{t.listings.type}</label>
                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm outline-none">
                  <option value="All">All Types</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Villa">Villa</option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Loft">Loft</option>
                </select>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="lg:w-3/4">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">{t.listings.title}</h1>
            
            {filteredProperties.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredProperties.map((prop) => (
                  <div key={prop.id} onClick={() => handlePropertyClick(prop)} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="relative h-64 overflow-hidden">
                      <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2"><h3 className="text-xl font-bold text-slate-900">{prop.title}</h3><span className="text-amber-600 font-bold">{prop.priceStr}</span></div>
                      <p className="text-slate-500 mb-4 flex items-center gap-1 text-sm"><MapPin size={14} /> {prop.location}</p>
                      <div className="flex items-center gap-4 text-slate-600 text-sm">
                        <div className="flex items-center gap-1"><Bed size={16} /> {prop.beds}</div>
                        <div className="flex items-center gap-1"><Bath size={16} /> {prop.baths}</div>
                        <div className="flex items-center gap-1"><Move size={16} /> {prop.sqft} sqft</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                <p className="text-slate-500">{t.listings.no_results}</p>
                <button onClick={() => { setSearchQuery(""); setPriceFilter(5000000); setTypeFilter("All"); }} className="text-amber-600 font-bold mt-2 hover:underline">Clear Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const ContactView = () => {
    const [formStatus, setFormStatus] = useState("idle");

    const handleContactSubmit = (e) => {
      e.preventDefault();
      setFormStatus("sending");
      setTimeout(() => setFormStatus("success"), 1500);
    };

    return (
      <div className="pt-32 pb-24 min-h-screen bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-slate-500 mb-8 cursor-pointer hover:text-amber-600" onClick={() => setView('home')}>
            <ArrowLeft size={16} /> <span>{t.listings.back}</span>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t.contact_page.title}</h1>
            <p className="text-xl text-slate-600 leading-relaxed">{t.contact_page.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl">
            {/* Left Column: Info & Map Placeholder */}
            <div className="bg-slate-900 text-white p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              
              <div className="relative z-10">
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-amber-500 mb-6">{t.contact_page.office}</h3>
                  <div className="space-y-6 text-lg">
                    <p className="flex items-start gap-4">
                      <MapPin className="text-amber-500 mt-1 shrink-0" />
                      <span className="opacity-90 leading-relaxed">{t.footer.address}</span>
                    </p>
                    <p className="flex items-center gap-4">
                      <Phone className="text-amber-500 shrink-0" />
                      <span className="opacity-90">09-256996265</span>
                    </p>
                    <p className="flex items-center gap-4">
                      <Mail className="text-amber-500 shrink-0" />
                      <span className="opacity-90">1256realestate@gmail.com</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-amber-500 mb-6">{t.contact_page.connect}</h3>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all cursor-pointer">
                      <Instagram size={24} />
                    </div>
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all cursor-pointer">
                      <Facebook size={24} />
                    </div>
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all cursor-pointer">
                      <Twitter size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.contact_page.schedule}</h3>
                <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
              </div>

              {formStatus === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-50 rounded-2xl border border-green-100">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Request Received!</h3>
                  <p className="text-green-700">An agent will contact you shortly to confirm your appointment.</p>
                  <button onClick={() => setFormStatus("idle")} className="mt-8 text-slate-500 underline hover:text-slate-800">Send another request</button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{t.details.form_name}</label>
                      <input required type="text" className="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{t.details.form_phone}</label>
                      <input required type="tel" className="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all" placeholder="+95 ..." />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.details.form_email}</label>
                    <input required type="email" className="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.contact_page.form_interest}</label>
                    <select className="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                      <option>{t.contact_page.opt_buy}</option>
                      <option>{t.contact_page.opt_sell}</option>
                      <option>{t.contact_page.opt_invest}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.details.form_msg}</label>
                    <textarea required rows="4" className="w-full p-4 bg-slate-50 rounded-xl border-2 border-transparent focus:border-amber-500 focus:bg-white outline-none transition-all resize-none" placeholder="I'm interested in viewing..."></textarea>
                  </div>

                  <button type="submit" disabled={formStatus === "sending"} className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {formStatus === "sending" ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <span>{t.details.form_send}</span>
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const DetailView = () => {
    const [formStatus, setFormStatus] = useState("idle");

    const handleContactSubmit = (e) => {
      e.preventDefault();
      setFormStatus("sending");
      setTimeout(() => setFormStatus("success"), 1500);
    };

    if (!selectedProperty) return null;

    return (
      <div className="pt-32 pb-24 min-h-screen bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-slate-500 mb-8 cursor-pointer hover:text-amber-600" onClick={() => setView('listings')}>
            <ArrowLeft size={16} /> <span>{t.details.back}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="rounded-3xl overflow-hidden h-[500px] shadow-lg mb-6">
                <img src={selectedProperty.image} alt={selectedProperty.title} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <img src={selectedProperty.image} className="rounded-xl h-32 w-full object-cover opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="rounded-xl h-32 w-full object-cover hover:opacity-100 transition-opacity cursor-pointer" />
                <div className="bg-slate-100 rounded-xl h-32 flex items-center justify-center text-slate-400 font-bold cursor-pointer hover:bg-slate-200">+3 More</div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-4xl font-bold text-slate-900">{selectedProperty.title}</h1>
                <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full font-bold">{selectedProperty.priceStr}</span>
              </div>
              <p className="flex items-center gap-2 text-lg text-slate-500 mb-8"><MapPin size={20} /> {selectedProperty.location}</p>

              <div className="flex gap-8 border-y border-slate-100 py-6 mb-8">
                <div className="text-center"><span className="block text-2xl font-bold text-slate-900">{selectedProperty.beds}</span><span className="text-sm text-slate-500">Bedrooms</span></div>
                <div className="text-center"><span className="block text-2xl font-bold text-slate-900">{selectedProperty.baths}</span><span className="text-sm text-slate-500">Bathrooms</span></div>
                <div className="text-center"><span className="block text-2xl font-bold text-slate-900">{selectedProperty.sqft}</span><span className="text-sm text-slate-500">Sq Ft</span></div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t.details.desc}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{selectedProperty.description}</p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{t.details.agent}</h3>
                {formStatus === "success" ? (
                  <div className="bg-green-100 text-green-700 p-4 rounded-lg flex items-center gap-2">
                    <CheckCircle size={20} /> {t.details.success}
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input required type="text" placeholder={t.details.form_name} className="w-full p-3 rounded-lg border border-slate-200 outline-none focus:border-amber-500" />
                      <input required type="email" placeholder={t.details.form_email} className="w-full p-3 rounded-lg border border-slate-200 outline-none focus:border-amber-500" />
                    </div>
                    <textarea required placeholder={t.details.form_msg} rows="4" className="w-full p-3 rounded-lg border border-slate-200 outline-none focus:border-amber-500"></textarea>
                    <button type="submit" disabled={formStatus === "sending"} className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50">
                      {formStatus === "sending" ? "..." : t.details.form_send}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`font-sans text-slate-900 bg-white min-h-screen selection:bg-black selection:text-white ${lang === 'mm' ? 'font-burmese' : ''}`}>
      <Navbar forceDark={view !== 'home'} />
      {view === 'home' && <HomeView />}
      {view === 'listings' && <ListingsView />}
      {view === 'detail' && <DetailView />}
      {view === 'contact' && <ContactView />}
      <Footer />
    </div>
  );
};

export default RealEstateLanding;