import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917425805337"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-gray-800 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          व्हाट्सएप करें
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:7425805337"
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Call"
      >
        <Phone className="w-6 h-6 text-white" />
        
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-gray-800 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          कॉल करें
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
