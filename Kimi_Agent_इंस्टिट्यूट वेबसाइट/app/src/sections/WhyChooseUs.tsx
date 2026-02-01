import { useEffect, useRef, useState } from 'react';
import { Users, Award, BookOpen, Clock, Target, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'अनुभवी शिक्षक',
    description: 'वर्षों के अनुभव वाले प्रशिक्षक जो व्यावहारिक ज्ञान प्रदान करते हैं',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'प्रैक्टिकल ट्रेनिंग',
    description: '100% हाथों-पर प्रशिक्षण जो वास्तविक दुनिया के कौशल सिखाता है',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'सर्टिफिकेट',
    description: 'सरकारी मान्यता प्राप्त प्रमाण पत्र जो नौकरी में मदद करता है',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'लचीला समय',
    description: 'सुबह और शाम के बैच उपलब्ध, अपनी सुविधा के अनुसार',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'फोकस्ड लर्निंग',
    description: 'छोटे बैच साइज़ जो व्यक्तिगत ध्यान सुनिश्चित करते हैं',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'करियर सपोर्ट',
    description: 'नौकरी और इंटरव्यू की तैयारी में पूरी मदद',
    color: 'from-cyan-500 to-cyan-600',
  },
];

const stats = [
  { value: '500+', label: 'संतुष्ट छात्र', suffix: '' },
  { value: '100', label: 'पासिंग रेट', suffix: '%' },
  { value: '3+', label: 'वर्षों का अनुभव', suffix: '' },
  { value: '2', label: 'प्रीमियम कोर्स', suffix: '' },
];

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated.current) {
            hasAnimated.current = true;
            animateCounts();
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounts = () => {
    stats.forEach((stat, index) => {
      const target = parseInt(stat.value.replace(/\D/g, ''));
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, duration / steps);
    });
  };

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal via-royal-dark to-royal" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-golden/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-golden/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-golden/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-golden/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-golden/30">
            <span className="text-golden text-sm font-bold">⭐ क्यों चुनें हमें</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            हमारी विशेषताएं
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            हम छात्रों को सर्वोत्तम शिक्षा और प्रशिक्षण प्रदान करने के लिए प्रतिबद्ध हैं
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-golden to-golden-dark rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:border-golden/50 transition-all duration-300 hover:-translate-y-2">
                <p className="text-4xl sm:text-5xl font-black text-golden mb-2">
                  {counts[index]}{stat.suffix}
                </p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative h-full bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-golden/50 transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-golden transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-golden/0 via-golden/10 to-golden/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="tel:7425805337"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-golden to-golden-dark text-royal-dark font-bold rounded-full hover:shadow-2xl hover:shadow-golden/30 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="text-xl">📞</span>
            <span>अभी संपर्क करें - 7425805337</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
