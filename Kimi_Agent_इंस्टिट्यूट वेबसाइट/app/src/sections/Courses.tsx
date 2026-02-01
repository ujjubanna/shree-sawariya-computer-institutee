import { useEffect, useRef, useState } from 'react';
import { Clock, IndianRupee, CheckCircle, ArrowRight, FileText, Calculator, Presentation } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Course {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  fee: string;
  description: string;
  features: string[];
  topics: { name: string; items: string[]; icon: React.ReactNode }[];
  benefits: string[];
}

const courses: Course[] = [
  {
    id: 'rscit',
    title: 'RS-CIT कोर्स',
    subtitle: 'कंप्यूटर सीखने का सही विकल्प',
    image: '/rscit-course.jpg',
    duration: '3 महीने',
    fee: '₹4200',
    description: 'RS-CIT (Rajasthan State Certificate in Information Technology) राजस्थान सरकार द्वारा संचालित एक प्रमाणित कंप्यूटर कोर्स है।',
    features: [
      'राजस्थान सरकार मान्यता प्राप्त सर्टिफिकेट',
      'सरकारी नौकरी के लिए अनिवार्य',
      'प्रैक्टिकल + थ्योरी ट्रेनिंग',
      'नौकरी और इंटरव्यू की तैयारी',
    ],
    topics: [
      {
        name: 'MS Word',
        icon: <FileText className="w-5 h-5" />,
        items: ['रिज्यूमे / बायोडाटा बनाना', 'मैगजीन पेज डिजाइन', 'पेम्फलेट और टेम्पलेट', 'बिल, इनवॉइस, लेटर', 'हिंदी और अंग्रेजी टाइपिंग'],
      },
      {
        name: 'MS Excel',
        icon: <Calculator className="w-5 h-5" />,
        items: ['बिल और रिजल्ट शीट', 'डेटा एंट्री और डेटाबेस', 'फॉर्मूला और प्रैक्टिकल'],
      },
      {
        name: 'MS PowerPoint',
        icon: <Presentation className="w-5 h-5" />,
        items: ['प्रोफेशनल प्रेजेंटेशन', 'ऑफिस और इंटरव्यू स्लाइड्स', 'पूरी प्रैक्टिकल ट्रेनिंग'],
      },
    ],
    benefits: [
      'सरकारी और निजी नौकरी में RS-CIT सर्टिफिकेट से चयन आसान होता है',
      'ऑफिस का काम, डेटा एंट्री, रिपोर्ट, प्रेजेंटेशन और ई-मेल लिखना सीखते हैं',
      'बैंकिंग, बीमा और ऑफिस जॉब में लाभकारी',
    ],
  },
  {
    id: 'tally',
    title: 'Tally कोर्स',
    subtitle: 'अकाउंटिंग में करियर बनाने का सुनहरा मौका',
    image: '/tally-course.jpg',
    duration: '3 महीने',
    fee: '₹6000',
    description: 'Tally आज सबसे ज्यादा इस्तेमाल होने वाला अकाउंटिंग सॉफ्टवेयर है। छोटी दुकान से लेकर बड़ी कंपनी तक हर जगह Tally की जरूरत होती है।',
    features: [
      'GST, बिलिंग और रिपोर्टिंग',
      'जल्दी नौकरी के अवसर',
      'कम पढ़ाई में अच्छा करियर',
      'रियल ऑफिस प्रैक्टिकल',
    ],
    topics: [
      {
        name: 'बेसिक अकाउंटिंग',
        icon: <Calculator className="w-5 h-5" />,
        items: ['कंपनी बनाना', 'लेजर बनाना', 'डेबिट और क्रेडिट कॉन्सेप्ट', 'खरीद और बिक्री एंट्री', 'कैश / बैंक एंट्री'],
      },
      {
        name: 'एडवांस्ड फीचर्स',
        icon: <FileText className="w-5 h-5" />,
        items: ['GST सेटअप और इनवॉइस', 'प्रॉफिट एंड लॉस', 'बैलेंस शीट', 'TDS जानकारी', 'स्टॉक और इन्वेंट्री'],
      },
    ],
    benefits: [
      'Tally ऑपरेटर, अकाउंटेंट, बिलिंग एग्जीक्यूटिव जैसे करियर विकल्प',
      'हर दुकान और ऑफिस में अकाउंटिंग की जरूरत',
      'सर्टिफिकेट के साथ नौकरी में आसानी',
    ],
  },
];

const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/80 via-transparent to-transparent" />
          
          {/* Duration Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
            <Clock className="w-4 h-4 text-royal" />
            <span className="text-sm font-bold text-royal">{course.duration}</span>
          </div>

          {/* Fee Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-golden to-golden-dark rounded-full shadow-lg">
            <IndianRupee className="w-4 h-4 text-royal-dark" />
            <span className="text-sm font-black text-royal-dark">{course.fee}</span>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-2xl font-black text-white mb-1">{course.title}</h3>
            <p className="text-golden text-sm font-medium">{course.subtitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 text-sm mb-5 leading-relaxed">{course.description}</p>

          {/* Features */}
          <div className="space-y-2 mb-5">
            {course.features.slice(0, 3).map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-royal to-royal-dark text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300">
                  <span>पूरी जानकारी</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-black text-royal">
                    {course.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="mt-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-2xl mb-6"
                  />
                  
                  <div className="flex gap-4 mb-6">
                    <div className="flex-1 bg-royal/10 rounded-xl p-4 text-center">
                      <Clock className="w-6 h-6 text-royal mx-auto mb-2" />
                      <p className="text-sm text-gray-600">अवधि</p>
                      <p className="text-lg font-bold text-royal">{course.duration}</p>
                    </div>
                    <div className="flex-1 bg-golden/20 rounded-xl p-4 text-center">
                      <IndianRupee className="w-6 h-6 text-royal-dark mx-auto mb-2" />
                      <p className="text-sm text-gray-600">फीस</p>
                      <p className="text-lg font-bold text-royal-dark">{course.fee}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-royal mb-3">🎯 कोर्स की विशेषताएं</h4>
                      <div className="grid gap-2">
                        {course.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-royal mb-3">📚 सीखने की विषय सूची</h4>
                      <div className="space-y-4">
                        {course.topics.map((topic, i) => (
                          <div key={i} className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-8 h-8 bg-royal rounded-lg flex items-center justify-center text-white">
                                {topic.icon}
                              </div>
                              <h5 className="font-bold text-royal">{topic.name}</h5>
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {topic.items.map((item, j) => (
                                <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                                  <span className="w-1.5 h-1.5 bg-golden rounded-full" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-royal mb-3">✨ कोर्स के लाभ</h4>
                      <div className="space-y-2">
                        {course.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 bg-golden/10 rounded-xl">
                            <span className="text-golden text-lg">⭐</span>
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <a
                      href="tel:7425805337"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-royal to-royal-dark text-white font-bold rounded-xl"
                    >
                      <span>📞</span>
                      <span>कॉल करें</span>
                    </a>
                    <a
                      href="https://wa.me/917425805337"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl"
                    >
                      <span>💬</span>
                      <span>व्हाट्सएप</span>
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <a
              href="https://wa.me/917425805337"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-5 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
            >
              <span className="text-xl">💬</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
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
      id="courses"
      ref={sectionRef}
      className="py-24 relative"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden/10 rounded-full blur-3xl translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-royal/10 rounded-full mb-4">
            <span className="text-royal text-sm font-bold">🎓 हमारे कोर्स</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-royal mb-4">
            प्रोफेशनल कंप्यूटर कोर्स
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            अपने करियर को नई दिशा दें हमारे विशेषज्ञ-डिज़ाइन किए गए कोर्स के साथ
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
