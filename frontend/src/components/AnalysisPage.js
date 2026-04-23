import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Globe, TrendingUp, Users, Shield, Search, Filter, Calendar, ArrowRight, BarChart3, FileText, Eye } from 'lucide-react';
import { translations, analysisAreas, articles } from '../mock';

const AnalysisPage = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArea, setSelectedArea] = useState('geopolitics');
  
  const t = translations[language];

  const getIcon = (iconName) => {
    const icons = {
      Globe: Globe,
      TrendingUp: TrendingUp,
      Users: Users,
      Shield: Shield
    };
    const IconComponent = icons[iconName] || Globe;
    return <IconComponent className="w-6 h-6" />;
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = searchTerm === '' || 
      (language === 'es' ? article.title : article.titleEn).toLowerCase().includes(searchTerm.toLowerCase()) ||
      (language === 'es' ? article.excerpt : article.excerptEn).toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categoryStats = {
    geopolitics: { count: 45, trend: '+12%' },
    economy: { count: 32, trend: '+8%' },
    society: { count: 28, trend: '+15%' },
    technology: { count: 21, trend: '+22%' }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600/20 text-blue-200 border-blue-500/30 px-4 py-2">
              {t.analysis.title}
            </Badge>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-8">
              {language === 'es' 
                ? 'Análisis del Panorama Global'
                : 'Deep Analysis of the Global Landscape'
              }
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Explora nuestras investigaciones especializadas en las cuatro áreas clave que están moldeando el mundo: geopolítica, economía, sociedad y tecnología.'
                : 'Explore our specialized research in the four key areas shaping the world: geopolitics, economy, society and technology.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder={language === 'es' ? 'Buscar análisis...' : 'Search analysis...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">
                  {language === 'es' ? 'Filtrar por:' : 'Filter by:'}
                </span>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">{language === 'es' ? 'Todas las áreas' : 'All areas'}</option>
                <option value="geopolitics">{t.analysis.geopolitics}</option>
                <option value="economy">{t.analysis.economy}</option>
                <option value="society">{t.analysis.society}</option>
                <option value="technology">{t.analysis.technology}</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Areas Tabs */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs defaultValue="geopolitics" value={selectedArea} onValueChange={setSelectedArea}>
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              {analysisAreas.map((area) => (
                <TabsTrigger
                  key={area.id}
                  value={area.title.toLowerCase().replace(/[^a-z0-9]/g, '')}
                  className="flex items-center gap-2 py-3"
                >
                  <div className="w-5 h-5">
                    {getIcon(area.icon)}
                  </div>
                  <span className="hidden sm:inline">
                    {language === 'es' ? area.title : area.titleEn}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {analysisAreas.map((area) => (
              <TabsContent
                key={area.id}
                value={area.title.toLowerCase().replace(/[^a-z0-9]/g, '')}
                className="space-y-12"
              >
                {/* Area Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                        <div className="text-white">
                          {getIcon(area.icon)}
                        </div>
                      </div>
                      <div>
                        <h2 className="font-display text-3xl font-bold text-slate-800">
                          {language === 'es' ? area.title : area.titleEn}
                        </h2>
                        <Badge className="mt-2 bg-blue-100 text-blue-800">
                          {area.articles} {language === 'es' ? 'publicaciones' : 'publications'}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {language === 'es' ? area.description : area.descriptionEn}
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      {language === 'es' 
                        ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                        : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                      }
                    </p>
                  </div>

                  {/* Stats Panel */}
                  <div className="space-y-6">
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <BarChart3 className="w-5 h-5 text-blue-600" />
                          {language === 'es' ? 'Estadísticas' : 'Statistics'}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">
                            {language === 'es' ? 'Análisis totales' : 'Total analysis'}
                          </span>
                          <span className="font-bold text-2xl text-slate-800">
                            {categoryStats[area.title.toLowerCase().replace(/[^a-z]/g, '')]?.count || area.articles}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">
                            {language === 'es' ? 'Crecimiento mensual' : 'Monthly growth'}
                          </span>
                          <span className="font-bold text-emerald-600">
                            {categoryStats[area.title.toLowerCase().replace(/[^a-z]/g, '')]?.trend || '+10%'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600">
                            {language === 'es' ? 'Tiempo promedio' : 'Average time'}
                          </span>
                          <span className="font-bold text-slate-800">12 min</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-center">
                          <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                          <h3 className="font-bold text-lg text-slate-800 mb-2">
                            {language === 'es' ? 'Análisis Premium' : 'Premium Analysis'}
                          </h3>
                          <p className="text-slate-600 text-sm mb-4">
                            {language === 'es' 
                              ? 'Accede a reportes exclusivos y análisis en profundidad'
                              : 'Access exclusive reports and in-depth analysis'
                            }
                          </p>
                          <Button className="w-full btn-primary">
                            {language === 'es' ? 'Suscribirse' : 'Subscribe'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800">
              {language === 'es' ? 'Análisis Destacados' : 'Featured Analysis'}
            </h2>
            <Button variant="outline" className="btn-secondary">
              {language === 'es' ? 'Ver Todos' : 'View All'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(0, 6).map((article) => (
              <Card key={article.id} className="border-0 shadow-lg card-hover overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {article.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.readTime} min</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-3 line-clamp-2">
                    {language === 'es' ? article.title : article.titleEn}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {language === 'es' ? article.excerpt : article.excerptEn}
                  </p>
                  <Button variant="outline" className="w-full">
                    {language === 'es' ? 'Leer Análisis' : 'Read Analysis'}
                    <FileText className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="font-bold text-xl text-slate-600 mb-2">
                {language === 'es' ? 'No se encontraron resultados' : 'No results found'}
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

      {/* Interactive Map Section (Placeholder) */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              {language === 'es' ? 'Mapa Interactivo Global' : 'Interactive Global Map'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Explora nuestros análisis organizados por región geográfica y descubre las tendencias globales en tiempo real.'
                : 'Explore our analysis organized by geographic region and discover global trends in real time.'
              }
            </p>
          </div>

          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-slate-700 mb-2">
                  {language === 'es' ? 'Mapa Interactivo' : 'Interactive Map'}
                </h3>
                <p className="text-slate-600">
                  {language === 'es' 
                    ? 'Próximamente: Visualización interactiva de datos geopolíticos globales'
                    : 'Coming soon: Interactive visualization of global geopolitical data'
                  }
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AnalysisPage;