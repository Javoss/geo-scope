import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Eye, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { translations } from '../mock';

const Footer = ({ language }) => {
  const t = translations[language];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-4 mb-6 group" style={{ padding: '20px' }}>
              <img 
                src="https://customer-assets.emergentagent.com/job_worldview-hub-3/artifacts/9p4wt3fc_GeoScope%201.png"
                alt="GeoScope Logo Oficial"
                className="w-24 md:w-32 lg:w-36 h-auto geoscope-logo group-hover:scale-105 transition-transform duration-300"
                style={{ 
                  filter: 'brightness(0) invert(1) drop-shadow(0 4px 8px rgba(255, 255, 255, 0.1))'
                }}
              />
            </Link>
            <p className="text-slate-300 leading-relaxed mb-6">
              {language === 'es' 
                ? 'Observamos el mundo, analizamos el futuro. Centro de investigación líder en análisis geopolítico global.'
                : language === 'en' 
                ? 'We observe the world, we analyze the future. Leading research center in global geopolitical analysis.'
                : 'Мы наблюдаем за миром, анализируем будущее. Ведущий исследовательский центр глобального геополитического анализа.'
              }
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">
              {language === 'es' ? 'Enlaces Rápidos' : language === 'en' ? 'Quick Links' : 'Быстрые ссылки'}
            </h3>
            <ul className="space-y-3">
              {Object.entries(t.nav).map(([key, label]) => (
                <li key={key}>
                  <Link 
                    to={key === 'home' ? '/' : `/${key}`}
                    className="text-slate-300 hover:text-white transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Analysis Areas */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">
              {t.analysis.title}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/analysis" className="text-slate-300 hover:text-white transition-colors duration-300">
                  {t.analysis.geopolitics}
                </Link>
              </li>
              <li>
                <Link to="/analysis" className="text-slate-300 hover:text-white transition-colors duration-300">
                  {t.analysis.economy}
                </Link>
              </li>
              <li>
                <Link to="/analysis" className="text-slate-300 hover:text-white transition-colors duration-300">
                  {t.analysis.society}
                </Link>
              </li>
              <li>
                <Link to="/analysis" className="text-slate-300 hover:text-white transition-colors duration-300">
                  {t.analysis.technology}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">
              {language === 'es' ? 'Contacto' : language === 'en' ? 'Contact' : 'Контакты'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">
                  {language === 'es' 
                    ? 'Ciudad de México, México' 
                    : language === 'en' 
                    ? 'Mexico City, Mexico'
                    : 'Мехико, Мексика'
                  }
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">info@geoscope.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">+52 55 1234 5678</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">
                {language === 'es' ? 'Newsletter' : 'Newsletter'}
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder={language === 'es' ? 'Tu email' : 'Your email'}
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white placeholder-slate-400"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 GeoScope Think Tank. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                {language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                {language === 'es' ? 'Términos de Uso' : 'Terms of Use'}
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                {language === 'es' ? 'Cookies' : 'Cookies'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;