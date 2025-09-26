import React from 'react';
import { Server, Code, Palette, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Server,
      title: 'VPS & RDP Solutions',
      description: 'High-performance virtual private servers and remote desktop solutions with 99.9% uptime guarantee.',
      features: ['24/7 Support', 'SSD Storage', 'Global Locations', 'Scalable Resources']
    },
    {
      icon: Code,
      title: 'Custom Programming',
      description: 'Bespoke software development, automation scripts, and custom bot development tailored to your needs.',
      features: ['Web Applications', 'API Development', 'Automation Bots', 'Database Solutions']
    },
    {
      icon: Palette,
      title: '3D Design & Graphics',
      description: 'Professional 3D modeling, logo design, and comprehensive branding solutions for your business.',
      features: ['3D Modeling', 'Logo Design', 'Brand Identity', 'Visual Assets']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your business and streamline your operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 text-yellow-400 border border-yellow-400/30 rounded-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-gray-900 transition-all duration-300 font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
