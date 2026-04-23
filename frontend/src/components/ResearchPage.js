import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  Calendar,
  Users,
  BarChart3,
  Globe,
  TrendingUp,
  Shield,
  BookOpen,
  ArrowRight,
  Eye,
  Star
} from 'lucide-react';
import { translations } from '../mock';
import api from '../services/api';

const ResearchPage = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const t = translations[language];

  // Filter reports based on search term and category
  const filteredReports = reports.filter(report => {
    const matchesSearch = !searchTerm || 
      (report.title_es && report.title_es.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (report.title_en && report.title_en.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (report.description_es && report.description_es.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (report.description_en && report.description_en.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || report.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        const params = {
          category: selectedCategory === 'all' ? undefined : selectedCategory,
          search: searchTerm || undefined,
          page: 1,
          per_page: 20
        };
        
        const response = await api.reports.getAll(params);
        setReports(response.items || response);
      } catch (err) {
        console.error('Error fetching reports:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [selectedCategory, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getIconForCategory = (category) => {
    const icons = {
      geopolitics: Globe,
      economy: TrendingUp,
      society: Users,
      technology: Shield
    };
    const IconComponent = icons[category] || FileText;
    return <IconComponent className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-600/20 text-amber-200 border-amber-500/30 px-4 py-2">
              {language === 'es' ? 'Investigación & Reportes' : 'Research & Reports'}
            </Badge>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-8">
              {language === 'es' 
                ? 'Investigación Rigurosa para Decisiones Informadas'
                : 'Rigorous Research for Informed Decisions'
              }
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              {language === 'es' 
                ? 'Accede a nuestra biblioteca de reportes especializados, estudios en profundidad y análisis cuantitativos que fundamentan nuestras perspectivas sobre el panorama global.'
                : 'Access our library of specialized reports, in-depth studies and quantitative analysis that support our perspectives on the global landscape.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={language === 'es' ? 'Buscar reportes...' : 'Search reports...'}
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-4 py-3"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">
                  {language === 'es' ? 'Categoría:' : 'Category:'}
                </span>
              </div>
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="all">{language === 'es' ? 'Todas' : 'All'}</option>
                <option value="geopolitics">{t.analysis.geopolitics}</option>
                <option value="economy">{t.analysis.economy}</option>
                <option value="society">{t.analysis.society}</option>
                <option value="technology">{t.analysis.technology}</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">150+</div>
              <div className="text-slate-600">
                {language === 'es' ? 'Reportes' : 'Reports'}
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">25K+</div>
              <div className="text-slate-600">
                {language === 'es' ? 'Descargas' : 'Downloads'}
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">500+</div>
              <div className="text-slate-600">
                {language === 'es' ? 'Citas' : 'Citations'}
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">4.8</div>
              <div className="text-slate-600">
                {language === 'es' ? 'Rating' : 'Rating'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              {language === 'es' ? 'Reportes Destacados' : 'Featured Reports'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Nuestras investigaciones más impactantes y citadas por la comunidad académica y política internacional.'
                : 'Our most impactful research cited by the international academic and political community.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {loading ? (
              // Loading skeleton
              [1, 2].map((i) => (
                <Card key={i} className="border-0 shadow-xl animate-pulse">
                  <div className="h-64 bg-slate-200 rounded-t-lg"></div>
                  <CardContent className="p-8">
                    <div className="h-6 bg-slate-200 rounded mb-4"></div>
                    <div className="h-4 bg-slate-200 rounded mb-4"></div>
                    <div className="h-20 bg-slate-200 rounded"></div>
                  </CardContent>
                </Card>
              ))
            ) : error ? (
              <div className="col-span-2 text-center py-12">
                <div className="text-red-600 mb-4">⚠️</div>
                <p className="text-slate-600">{error}</p>
              </div>
            ) : reports.length > 0 ? (
              reports.slice(0, 2).map((report) => (
              <Card key={report.id} className="border-0 shadow-xl card-hover overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-amber-500 to-amber-600 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {language === 'es' ? 'Destacado' : 'Featured'}
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 text-white mb-2">
                      {getIconForCategory(report.category)}
                      <span className="capitalize">{report.category}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(report.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{report.pages} {language === 'es' ? 'páginas' : 'pages'}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl text-slate-800 mb-4">
                    {language === 'es' ? report.title_es : report.title_en}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {language === 'es' ? report.description_es : report.description_en}
                  </p>
                  <div className="flex items-center justify-between">
                    <Button className="btn-primary">
                      <Download className="mr-2 w-4 h-4" />
                      {language === 'es' ? 'Descargar PDF' : 'Download PDF'}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 w-4 h-4" />
                      {language === 'es' ? 'Vista Previa' : 'Preview'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <FileText className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="font-bold text-xl text-slate-600 mb-2">
                {language === 'es' ? 'No hay reportes disponibles' : 'No reports available'}
              </h3>
              <p className="text-slate-500">
                {language === 'es' 
                  ? 'Pronto estarán disponibles nuevos reportes'
                  : 'New reports will be available soon'
                }
              </p>
            </div>
          )}
        </div>
        </div>
      </section>

      {/* All Reports */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800">
              {language === 'es' ? 'Todos los Reportes' : 'All Reports'}
            </h2>
            <Button variant="outline">
              {language === 'es' ? 'Suscripción Premium' : 'Premium Subscription'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              // Loading skeleton
              [1, 2, 3].map((i) => (
                <Card key={i} className="border-0 shadow-lg animate-pulse">
                  <div className="h-48 bg-slate-200 rounded-t-lg"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-slate-200 rounded mb-2"></div>
                    <div className="h-6 bg-slate-200 rounded mb-3"></div>
                    <div className="h-16 bg-slate-200 rounded mb-4"></div>
                    <div className="h-8 bg-slate-200 rounded"></div>
                  </CardContent>
                </Card>
              ))
            ) : filteredReports.map((report) => (
              <Card key={report.id} className="border-0 shadow-lg card-hover overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-slate-600 to-slate-700 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {report.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(report.published_date).getFullYear()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{report.pages} {language === 'es' ? 'pág.' : 'pp.'}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-slate-800 mb-3 line-clamp-2">
                    {language === 'es' ? report.title_es : report.title_en}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {language === 'es' ? report.description_es : report.description_en}
                  </p>
                  <div className="flex items-center gap-2">
                    <Button size="sm" className="flex-1">
                      <Download className="mr-2 w-4 h-4" />
                      {language === 'es' ? 'Descargar' : 'Download'}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {!loading && filteredReports.length === 0 && (
            <div className="col-span-3 text-center py-12">
              <Search className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="font-bold text-xl text-slate-600 mb-2">
                {language === 'es' ? 'No se encontraron reportes' : 'No reports found'}
              </h3>
              <p className="text-slate-500">
                {language === 'es' 
                  ? 'Intenta con diferentes términos de búsqueda o filtros'
                  : 'Try different search terms or filters'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              {language === 'es' ? 'Nuestra Metodología' : 'Our Methodology'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Utilizamos métodos rigurosos y estándares académicos internacionales para garantizar la calidad y confiabilidad de nuestras investigaciones.'
                : 'We use rigorous methods and international academic standards to ensure the quality and reliability of our research.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: language === 'es' ? 'Análisis Cuantitativo' : 'Quantitative Analysis',
                description: language === 'es' 
                  ? 'Utilizamos modelos estadísticos avanzados y análisis de big data para identificar patrones y tendencias.'
                  : 'We use advanced statistical models and big data analysis to identify patterns and trends.'
              },
              {
                icon: Users,
                title: language === 'es' ? 'Revisión por Pares' : 'Peer Review',
                description: language === 'es' 
                  ? 'Todos nuestros reportes pasan por un riguroso proceso de revisión por expertos independientes.'
                  : 'All our reports go through a rigorous review process by independent experts.'
              },
              {
                icon: Globe,
                title: language === 'es' ? 'Fuentes Primarias' : 'Primary Sources',
                description: language === 'es' 
                  ? 'Accedemos a fuentes primarias y datos oficiales de organismos internacionales reconocidos.'
                  : 'We access primary sources and official data from recognized international organizations.'
              }
            ].map((method, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-800 mb-4">{method.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-amber-600 to-amber-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-8">
              {language === 'es' 
                ? 'Acceso Premium a Investigación Exclusiva'
                : 'Premium Access to Exclusive Research'
              }
            </h2>
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              {language === 'es' 
                ? 'Obtén acceso completo a nuestra biblioteca de investigación, reportes exclusivos y análisis personalizados para tu organización.'
                : 'Get full access to our research library, exclusive reports and customized analysis for your organization.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg">
                {language === 'es' ? 'Suscripción Institucional' : 'Institutional Subscription'}
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg">
                {language === 'es' ? 'Solicitar Demo' : 'Request Demo'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;