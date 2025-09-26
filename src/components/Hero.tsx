import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent)] animate-pulse"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-yellow-400/10 rounded-full blur-xl animate-bounce delay-2000"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-400 animate-spin-slow" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-gradient">
              BYTERA
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in-up delay-300">
            Premium Digital Solutions & Services
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-500">
            Transforming ideas into reality with cutting-edge VPS/RDP solutions, 
            custom programming services, and stunning 3D designs
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-700">
          <button 
            onClick={scrollToServices}
            className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-semibold rounded-full hover:from-yellow-300 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center">
              Explore Services
              <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
            </span>
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
