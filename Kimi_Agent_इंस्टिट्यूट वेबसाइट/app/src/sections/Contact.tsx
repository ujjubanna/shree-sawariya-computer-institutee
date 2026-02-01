import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Instagram, MessageCircle, Clock, ExternalLink } from 'lucide-react';

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'फोन नंबर',
    values: ['7425805337', '7851988875'],
    href: 'tel:7425805337',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'व्हाट्सएप',
    values: ['7425805337'],
    href: 'https://wa.me/917425805337',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    external: true,
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'ईमेल',
    values: ['ujjubanna123@gmail.com'],
    href: 'mailto:ujjubanna123@gmail.com',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    title: 'इंस्टाग्राम',
    values: ['sawariya_computerhub'],
    href: 'https://instagram.com/sawariya_computerhub',
    color: 'from-pink-500 to-purple-600',
    bgColor: 'bg-pink-50',
    external: true,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'पता',
    values: ['लक्ष्मणपुरा, नाथ जी महाराज मंदिर के पास, नाणा'],
    href: 'https://maps.google.com/?q=लक्ष्मणपुरा, नाथ जी महाराज मंदिर के पास, नाणा',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    external: true,
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'समय',
    values: ['सुबह 8:00 - शाम 8:00', 'सोमवार - शनिवार'],
    href: '#',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
  },
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-royal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-golden/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-royal/10 rounded-full mb-4">
            <span className="text-royal text-sm font-bold">📞 संपर्क करें</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-royal mb-4">
            हमसे जुड़ें
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            किसी भी जानकारी के लिए नीचे दिए गए तरीकों से हमसे संपर्क करें
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.external ? '_blank' : undefined}
              rel={method.external ? 'noopener noreferrer' : undefined}
              className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className={`relative h-full ${method.bgColor} rounded-2xl p-6 border-2 border-transparent hover:border-royal/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-royal transition-colors">
                  {method.title}
                </h3>
                <div className="space-y-1">
                  {method.values.map((value, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {value}
                    </p>
                  ))}
                </div>

                {/* External Link Indicator */}
                {method.external && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-royal" />
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Quick Actions */}
        <div className={`mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-royal to-royal-dark rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-golden/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-golden/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                आज ही एडमिशन लें!
              </h3>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                अपने करियर की शुरुआत करें। अभी कॉल करें या व्हाट्सएप पर मैसेज करें।
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7425805337"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-royal-dark font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                  <span>7425805337 पर कॉल करें</span>
                </a>
                <a
                  href="https://wa.me/917425805337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>व्हाट्सएप करें</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tip */}
        <div className={`text-center mt-8 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-500 text-sm inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <span>💡</span>
            <span>टिप: हमारा नंबर सेव करें और व्हाट्सएप पर मैसेज करें</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
