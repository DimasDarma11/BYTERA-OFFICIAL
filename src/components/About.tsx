import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Target, value: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                About Bytera
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Kami adalah penyedia solusi digital premium, yang berdedikasi untuk memberikan layanan 
              luar biasa yang mendorong inovasi dan kesuksesan bagi klien kami di seluruh dunia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Di Bytera, kami percaya pada transformasi lanskap digital melalui teknologi mutakhir
                dan keunggulan kreatif. Misi kami adalah menyediakan solusi VPS/RDP kelas dunia, layanan pemrograman khusus, 
                dan karya desain memukau yang melampaui ekspektasi.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Kami menggabungkan keahlian teknis dengan visi kreatif untuk memberikan solusi
                yang tidak hanya fungsional tetapi juga menarik secara visual dan ramah pengguna.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400/20 to-blue-400/20 p-8 rounded-2xl border border-gray-700">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Why Choose Us?</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Layanan berkualitas premium dengan memperhatikan detail
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    24/7 dukungan dan pemeliharaan pelanggan
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Harga kompetitif dengan biaya transparan
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Penerapan cepat dan waktu penyelesaian cepat
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-yellow-400/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-gray-900" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
