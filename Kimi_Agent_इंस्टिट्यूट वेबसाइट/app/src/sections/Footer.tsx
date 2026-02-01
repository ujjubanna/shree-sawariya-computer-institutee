import { GraduationCap, Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'होम', href: '#home' },
    { label: 'कोर्स', href: '#courses' },
    { label: 'क्यों चुनें', href: '#why-us' },
    { label: 'संपर्क', href: '#contact' },
  ];

  const courses = [
    { label: 'RS-CIT कोर्स', href: '#courses' },
    { label: 'Tally कोर्स', href: '#courses' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-royal-dark overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-royal/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-golden/10 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-golden to-golden-dark rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-royal-dark" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">श्री सांवरिया</h3>
                <p className="text-white/60 text-sm">कंप्यूटर इंस्टिट्यूट</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              परीक्षा और नौकरी के लिए प्रैक्टिकल कंप्यूटर स्किल सीखें। राजस्थान का बेहतरीन कंप्यूटर इंस्टिट्यूट।
            </p>
            <div className="flex items-center gap-2 text-golden">
              <Heart className="w-4 h-4 fill-golden" />
              <span className="text-sm">शिक्षा से सशक्ति</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-golden transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-golden rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">हमारे कोर्स</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(course.href);
                    }}
                    className="text-white/70 hover:text-golden transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-golden rounded-full" />
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">संपर्क जानकारी</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:7425805337"
                  className="flex items-start gap-3 text-white/70 hover:text-golden transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm">7425805337</p>
                    <p className="text-sm">7851988875</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ujjubanna123@gmail.com"
                  className="flex items-center gap-3 text-white/70 hover:text-golden transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">ujjubanna123@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=लक्ष्मणपुरा, नाथ जी महाराज मंदिर के पास, नाणा"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-golden transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">लक्ष्मणपुरा, नाथ जी महाराज मंदिर के पास, नाणा</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} श्री सांवरिया कंप्यूटर इंस्टिट्यूट. सभी अधिकार सुरक्षित.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>in Rajasthan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
