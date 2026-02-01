import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, BookOpen, Award } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToCourses = () => {
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Computer Institute"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-royal/95 via-royal-dark/90 to-royal/95" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,215,0,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,215,0,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Golden Orbs */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-golden/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-golden/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-golden/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Rotating Rings */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-golden/20 rounded-full animate-rotate opacity-30" />
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-golden/15 rounded-full animate-rotate opacity-20" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-golden/30 mb-6">
              <Sparkles className="w-4 h-4 text-golden" />
              <span className="text-golden text-sm font-semibold">राजस्थान का बेहतरीन कंप्यूटर इंस्टिट्यूट</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              <span className="block">श्री सांवरिया</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-golden via-golden-light to-golden">
                कंप्यूटर इंस्टिट्यूट
              </span>
            </h1>

            {/* Admission Badge */}
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-golden rounded-2xl blur-lg opacity-50 animate-pulse" />
                <div className="relative px-8 py-3 bg-gradient-to-r from-golden to-golden-dark rounded-2xl">
                  <span className="text-royal-dark text-xl sm:text-2xl font-black">
                    एडमिशन ओपन
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/90 text-lg sm:text-xl mb-4 font-medium">
              परीक्षा और नौकरी के लिए प्रैक्टिकल कंप्यूटर स्किल सीखें
            </p>
            
            <p className="text-white/70 text-base mb-8">
              फोकस्ड ट्रेनिंग | साफ मार्गदर्शन | पूरी प्रैक्टिकल प्रैक्टिस
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToCourses}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-golden to-golden-dark text-royal-dark font-bold rounded-full hover:shadow-2xl hover:shadow-golden/40 transition-all duration-300 hover:-translate-y-1"
              >
                <BookOpen className="w-5 h-5" />
                <span>कोर्स देखें</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="https://wa.me/917425805337"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-xl">💬</span>
                <span>व्हाट्सएप करें</span>
              </a>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className={`hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-golden/30">
                <img
                  src="/classroom.jpg"
                  alt="Computer Lab"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/80 to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-golden rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-royal-dark" />
                    </div>
                    <div>
                      <p className="text-golden font-bold text-lg">सरकारी मान्यता प्राप्त</p>
                      <p className="text-white/80 text-sm">RS-CIT कोर्स उपलब्ध</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="text-center">
                  <p className="text-3xl font-black text-royal">500+</p>
                  <p className="text-sm text-gray-600">छात्र</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-golden to-golden-dark rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-center">
                  <p className="text-3xl font-black text-royal-dark">3+</p>
                  <p className="text-sm text-royal-dark/80">साल का अनुभव</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '🎓', value: '500+', label: 'छात्र प्रशिक्षित' },
                { icon: '✅', value: '100%', label: 'पासिंग रेट' },
                { icon: '🏆', value: '2', label: 'प्रीमियम कोर्स' },
                { icon: '⭐', value: '4.9', label: 'रेटिंग' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <p className="text-2xl sm:text-3xl font-black text-golden">{stat.value}</p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-golden rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
