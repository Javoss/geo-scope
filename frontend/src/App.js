import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Globe, Languages, ChevronDown } from 'lucide-react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import AnalysisPage from './components/AnalysisPage';
import OpinionPage from './components/OpinionPage';
import ResearchPage from './components/ResearchPage';
import EventsPage from './components/EventsPage';
import ContactPage from './components/ContactPage';

function App() {
  const [language, setLanguage] = useState('es');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ];

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setShowLanguageDropdown(false);
    localStorage.setItem('geoscope-language', langCode);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('geoscope-language');
    if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showLanguageDropdown && !event.target.closest('.language-toggle')) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLanguageDropdown]);

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="App min-h-screen bg-slate-50">
      <Router>
        <div className="language-toggle fixed top-4 right-4 z-50">
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm font-medium flex items-center gap-1">
                <span>{currentLanguage?.flag}</span>
                <span>{currentLanguage?.code.toUpperCase()}</span>
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showLanguageDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showLanguageDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-slate-200 min-w-[140px] py-2 animate-fade-in-up">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-2 transition-colors ${
                      language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-slate-700'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <Header language={language} />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage language={language} />} />
            <Route path="/about" element={<AboutPage language={language} />} />
            <Route path="/analysis" element={<AnalysisPage language={language} />} />
            <Route path="/opinion" element={<OpinionPage language={language} />} />
            <Route path="/research" element={<ResearchPage language={language} />} />
            <Route path="/events" element={<EventsPage language={language} />} />
            <Route path="/contact" element={<ContactPage language={language} />} />
          </Routes>
        </main>

        <Footer language={language} />
      </Router>
    </div>
  );
}

export default App;