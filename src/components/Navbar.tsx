
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Smooth scroll for anchor links
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to different pages
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#benefits" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-black/80 backdrop-blur-xl border-b border-white/10" 
        : "bg-transparent"
    }`}>
      {/* iPhone 16 Dynamic Island inspired container */}
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative transition-all duration-700 ease-out ${
          isScrolled 
            ? "py-3" 
            : "py-6"
        }`}>
          {/* Dynamic Island Background */}
          <div className={`absolute inset-0 transition-all duration-700 ease-out ${
            isScrolled
              ? "bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl"
              : "bg-transparent"
          }`} />
          
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 group cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="relative">
                <Sparkles className="w-8 h-8 text-blue-400 animate-pulse group-hover:animate-spin transition-all duration-300" />
                <div className="absolute inset-0 w-8 h-8 bg-blue-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
              </div>
              <span className="text-xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors duration-300">
                MAKEPRD.AI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                Sign In
              </Button>
              <Button 
                onClick={() => navigate('/get-started')}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-out ${
        isMobileMenuOpen 
          ? "max-h-80 opacity-100" 
          : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className="block w-full text-left text-white/80 hover:text-white transition-colors duration-300 py-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-4 space-y-3">
            <Button 
              variant="ghost" 
              className="w-full text-white/80 hover:text-white hover:bg-white/10"
            >
              Sign In
            </Button>
            <Button 
              onClick={() => navigate('/get-started')}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
