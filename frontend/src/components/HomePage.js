import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, TrendingUp, Users, Shield, BarChart3, Newspaper, Calendar, FileText, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { translations } from '../mock';
import api from '../services/api';

const HomePage = ({ language }) => {
  const [analysisAreas, setAnalysisAreas] = useState([]);
  const [articles, setArticles] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  
  const t = translations[language];
  const heroRef = useRef(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    try {
      await api.newsletter.subscribe(email);
      setSubscriptionStatus('success');
      setEmail('');
      setTimeout(() => setSubscriptionStatus(''), 3000);
    } catch (err) {
      setSubscriptionStatus('error');
      setTimeout(() => setSubscriptionStatus(''), 3000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [areasData, articlesData, teamData] = await Promise.all([
          api.analysisAreas.getAll(),
          api.articles.getAll({ per_page: 3, featured: true }),
          api.team.getAll()
        ]);
        
        setAnalysisAreas(areasData);
        setArticles(articlesData.items || articlesData);
        setTeamMembers(teamData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      Globe: Globe,
      TrendingUp: TrendingUp,
      Users: Users,
      Shield: Shield
    };
    const IconComponent = icons[iconName] || Globe;
    return <IconComponent className="w-8 h-8" />;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">{language === 'es' ? 'Cargando...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            {language === 'es' ? 'Error al cargar los datos' : 'Error loading data'}
          </h2>
          <p className="text-slate-600">{error}</p>
          <Button onClick={() => window.location.reload()} className="mt-4">
            {language === 'es' ? 'Intentar de nuevo' : 'Try again'}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-0.5 lg:py-1 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* World Map Background */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1713098965471-d324f294a71d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBtYXB8ZW58MHx8fHwxNzU4NjQyMDIyfDA&ixlib=rb-4.1.0&q=85"
            alt="World Map Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div ref={heroRef} className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center opacity-0" style={{ animationDelay: '0.2s' }}>
            {/* Hero Logo */}
            <div className="mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_worldview-hub-3/artifacts/9p4wt3fc_GeoScope%201.png"
                alt="GeoScope Logo Oficial"
                className="w-24 md:w-36 lg:w-40 h-auto mx-auto geoscope-logo-hero animate-logo-float"
                style={{ padding: '20px' }}
              />
            </div>
            
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-500/30 px-4 py-2">
              Think Tank Global
            </Badge>
            
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-8 text-shadow leading-tight">
              {t.hero.title}
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/analysis">
                <Button className="btn-primary group px-6 py-3 text-base">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="btn-secondary px-6 py-3 text-base border-white/30 text-white hover:bg-white hover:text-slate-900">
                  {language === 'es' ? 'Conócenos' : language === 'en' ? 'About Us' : 'О нас'}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { 
                  number: '150+', 
                  label: language === 'es' ? 'Análisis' : language === 'en' ? 'Analysis' : 'Анализы'
                },
                { 
                  number: '25+', 
                  label: language === 'es' ? 'Expertos' : language === 'en' ? 'Experts' : 'Эксперты'
                },
                { 
                  number: '40+', 
                  label: language === 'es' ? 'Países' : language === 'en' ? 'Countries' : 'Страны'
                },
                { 
                  number: '5+', 
                  label: language === 'es' ? 'Años' : language === 'en' ? 'Years' : 'Лет'
                }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-xs lg:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Areas Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              {t.analysis.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'es' 
                ? 'Nuestros expertos analizan los principales desafíos globales con rigor académico y perspectiva estratégica.'
                : language === 'en' 
                ? 'Our experts analyze major global challenges with academic rigor and strategic perspective.'
                : 'Наши эксперты анализируют основные глобальные вызовы с академической строгостью и стратегической перспективой.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analysisAreas.map((area, index) => (
              <Card key={area.id} className="card-hover border-0 shadow-lg group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {getIcon(area.icon)}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {language === 'es' ? area.title_es : language === 'en' ? area.title_en : area.title_ru}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {language === 'es' ? area.description_es : language === 'en' ? area.description_en : area.description_ru}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      {area.article_count} {language === 'es' ? 'artículos' : 'articles'}
                    </Badge>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/analysis">
              <Button className="btn-primary px-8 py-3">
                {language === 'es' ? 'Ver Todas las Áreas' : 'View All Areas'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                {language === 'es' ? 'Últimos Análisis' : 'Latest Analysis'}
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl">
                {language === 'es' 
                  ? 'Mantente informado con nuestros análisis más recientes sobre los eventos que están moldeando el mundo.'
                  : 'Stay informed with our latest analysis on the events shaping the world.'
                }
              </p>
            </div>
            <Link to="/opinion">
              <Button variant="outline" className="btn-secondary mt-6 lg:mt-0">
                {language === 'es' ? 'Ver Todos' : 'View All'}
                <Newspaper className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <Card key={article.id} className="card-hover border-0 shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/20 text-white border-white/30 mb-2">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}</span>
                    <span>•</span>
                    <span>{article.readTime} min</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-3 line-clamp-2">
                    {language === 'es' ? article.title_es : language === 'en' ? article.title_en : article.title_ru}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {language === 'es' ? article.excerpt_es : language === 'en' ? article.excerpt_en : article.excerpt_ru}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">{article.author}</span>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              {language === 'es' ? 'Nuestro Equipo' : 'Our Team'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Expertos reconocidos internacionalmente que aportan décadas de experiencia en análisis geopolítico.'
                : 'Internationally recognized experts bringing decades of experience in geopolitical analysis.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member) => (
              <Card key={member.id} className="card-hover border-0 shadow-lg text-center overflow-hidden">
                <div className="p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-blue-100">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-xl text-slate-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {language === 'es' ? member.position_es : language === 'en' ? member.position_en : member.position_ru}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {language === 'es' ? member.bio_es : language === 'en' ? member.bio_en : member.bio_ru}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/about">
              <Button className="btn-primary px-8 py-3">
                {language === 'es' ? 'Conocer al Equipo Completo' : 'Meet the Full Team'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-8">
              {language === 'es' 
                ? 'Únete a nuestra comunidad global de análisis'
                : 'Join our global analysis community'
              }
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto">
              {language === 'es' 
                ? 'Recibe insights exclusivos, reportes especializados y análisis profundos directamente en tu bandeja de entrada.'
                : 'Receive exclusive insights, specialized reports and in-depth analysis directly in your inbox.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === 'es' ? 'Tu correo electrónico' : 'Your email address'}
                  className="flex-1 px-6 py-4 rounded-lg border-0 bg-white/10 backdrop-blur text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4"
                  disabled={subscriptionStatus === 'success'}
                >
                  {subscriptionStatus === 'success' 
                    ? (language === 'es' ? '✓ Suscrito' : '✓ Subscribed')
                    : (language === 'es' ? 'Suscribirse' : 'Subscribe')
                  }
                </Button>
              </form>
            </div>
            {subscriptionStatus === 'success' && (
              <p className="text-emerald-200 text-center mt-4">
                {language === 'es' 
                  ? '¡Gracias por suscribirte! Recibirás nuestros análisis exclusivos.'
                  : 'Thank you for subscribing! You will receive our exclusive analysis.'
                }
              </p>
            )}
            {subscriptionStatus === 'error' && (
              <p className="text-red-200 text-center mt-4">
                {language === 'es' 
                  ? 'Error al suscribirse. Inténtalo de nuevo.'
                  : 'Error subscribing. Please try again.'
                }
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;