import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isScrolled = scrollY > 50;

  const navLinks = [
    { id: 'home', label: 'होम', href: '#home' },
    { id: 'courses', label: 'कोर्स', href: '#courses' },
    { id: 'why-us', label: 'क्यों चुनें', href: '#why-us' },
    { id: 'contact', label: 'संपर्क', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'courses', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-3 group"
          >
            <div className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-br from-royal to-royal-dark' 
                : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <GraduationCap className={`w-7 h-7 transition-colors ${isScrolled ? 'text-golden' : 'text-white'}`} />
              <div className="absolute inset-0 rounded-full border-2 border-golden/50 animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold text-lg leading-tight transition-colors ${
                isScrolled ? 'text-royal' : 'text-white'
              }`}>
                श्री सांवरिया
              </h1>
              <p className={`text-xs font-medium transition-colors ${
                isScrolled ? 'text-royal/70' : 'text-white/80'
              }`}>
                कंप्यूटर इंस्टिट्यूट
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-royal to-royal-dark text-white shadow-lg'
                    : isScrolled
                    ? 'text-royal hover:bg-royal/10'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute inset-0 rounded-full border-2 border-golden animate-pulse" />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="tel:7425805337"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-golden to-golden-dark text-royal-dark font-bold rounded-full hover:shadow-xl hover:shadow-golden/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="text-lg">📞</span>
              <span>7425805337</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-3 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-royal/10 text-royal' 
                : 'bg-white/20 text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-4 shadow-2xl border border-golden/20">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`block px-5 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-royal to-royal-dark text-white'
                    : 'text-royal hover:bg-royal/10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:7425805337"
              className="flex items-center justify-center gap-2 mt-3 px-6 py-3 bg-gradient-to-r from-golden to-golden-dark text-royal-dark font-bold rounded-xl"
            >
              <span className="text-lg">📞</span>
              <span>7425805337</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
