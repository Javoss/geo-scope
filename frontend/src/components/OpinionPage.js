import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Calendar, 
  Clock, 
  User, 
  Search, 
  Filter, 
  ArrowRight, 
  MessageSquare, 
  ThumbsUp, 
  Share2,
  Bookmark,
  TrendingUp,
  Eye,
  ChevronRight
} from 'lucide-react';
import { translations } from '../mock';
import api from '../services/api';

const OpinionPage = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedTab, setSelectedTab] = useState('recent');
  const [articles, setArticles] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  
  const t = translations[language];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [articlesData, teamData] = await Promise.all([
          api.articles.getAll({ 
            category: selectedFilter === 'all' ? undefined : selectedFilter,
            search: searchTerm || undefined,
            per_page: 20
          }),
          api.team.getAll()
        ]);
        
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
  }, [selectedFilter, searchTerm]);

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

  const sortedArticles = () => {
    let sorted = [...articles];
    switch (selectedTab) {
      case 'popular':
        return sorted.sort((a, b) => (b.likes || 0) - (a.likes || 0));
      case 'trending':
        return sorted.sort((a, b) => (b.views || 0) - (a.views || 0));
      default:
        return sorted.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 px-4 py-2">
              {language === 'es' ? 'Opinión & Análisis' : 'Opinion & Analysis'}
            </Badge>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
              {language === 'es' 
                ? 'Perspectivas Expertas sobre el Mundo Actual'
                : 'Expert Perspectives on Today\'s World'
              }
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {language === 'es' 
                ? 'Artículos de opinión, columnas especializadas y debates de nuestros expertos sobre los acontecimientos que están moldeando el panorama global.'
                : 'Opinion articles, specialized columns and debates from our experts on the events shaping the global landscape.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder={language === 'es' ? 'Buscar artículos de opinión...' : 'Search opinion articles...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">
                  {language === 'es' ? 'Categoría:' : 'Category:'}
                </span>
              </div>
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
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

      {/* Content Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="recent" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {language === 'es' ? 'Recientes' : 'Recent'}
              </TabsTrigger>
              <TabsTrigger value="popular" className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" />
                {language === 'es' ? 'Populares' : 'Popular'}
              </TabsTrigger>
              <TabsTrigger value="trending" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                {language === 'es' ? 'Tendencia' : 'Trending'}
              </TabsTrigger>
            </TabsList>

            <TabsContent value={selectedTab} className="space-y-8">
              {/* Featured Articles */}
              {selectedTab === 'recent' && !loading && (
                <div className="mb-12">
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-slate-800 mb-8">
                    {language === 'es' ? 'Artículos Destacados' : 'Featured Articles'}
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {articles.filter(article => article.featured).slice(0, 2).map((article) => (
                      <Card key={article.id} className="border-0 shadow-lg card-hover overflow-hidden">
                        <div className="h-64 bg-gradient-to-br from-emerald-500 to-emerald-600 relative">
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-white/20 text-white border-white/30">
                              {language === 'es' ? 'Destacado' : 'Featured'}
                            </Badge>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <Badge className="bg-white/20 text-white border-white/30 mb-2">
                              {article.category}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(article.published_at).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{article.read_time} min</span>
                            </div>
                          </div>
                          <h3 className="font-bold text-xl text-slate-800 mb-3">
                            {language === 'es' ? article.title_es : article.title_en}
                          </h3>
                          <p className="text-slate-600 mb-6 leading-relaxed">
                            {language === 'es' ? article.excerpt_es : article.excerpt_en}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <ThumbsUp className="w-4 h-4" />
                                <span>{article.likes || 0}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                <span>{article.comments || 0}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                <span>{article.views || 0}</span>
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-400" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Article List */}
              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-slate-800 mb-8">
                  {selectedTab === 'recent' && (language === 'es' ? 'Últimos Artículos' : 'Latest Articles')}
                  {selectedTab === 'popular' && (language === 'es' ? 'Más Populares' : 'Most Popular')}
                  {selectedTab === 'trending' && (language === 'es' ? 'En Tendencia' : 'Trending Now')}
                </h2>

                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                      <Card key={i} className="border-0 shadow-lg animate-pulse">
                        <div className="h-48 bg-slate-200 rounded-t-lg"></div>
                        <CardContent className="p-6">
                          <div className="h-4 bg-slate-200 rounded mb-2"></div>
                          <div className="h-6 bg-slate-200 rounded mb-3"></div>
                          <div className="h-16 bg-slate-200 rounded mb-4"></div>
                          <div className="h-8 bg-slate-200 rounded"></div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : error ? (
                  <div className="text-center py-12">
                    <div className="text-red-600 mb-4">⚠️</div>
                    <h3 className="font-bold text-xl text-slate-600 mb-2">
                      {language === 'es' ? 'Error al cargar artículos' : 'Error loading articles'}
                    </h3>
                    <p className="text-slate-500">{error}</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedArticles().map((article) => (
                    <Card key={article.id} className="border-0 shadow-lg card-hover overflow-hidden">
                      <div className="h-48 bg-gradient-to-br from-slate-600 to-slate-700 relative">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/20 text-white border-white/30">
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                          <span>•</span>
                          <span>{new Date(article.published_at).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}</span>
                        </div>
                        <h3 className="font-bold text-lg text-slate-800 mb-3 line-clamp-2">
                          {language === 'es' ? article.title_es : article.title_en}
                        </h3>
                        <p className="text-slate-600 mb-4 line-clamp-3">
                          {language === 'es' ? article.excerpt_es : article.excerpt_en}
                        </p>
                        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="w-4 h-4" />
                              <span>{article.likes || 0}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              <span>{article.comments || 0}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{article.read_time} min</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Button variant="outline" size="sm">
                            {language === 'es' ? 'Leer Más' : 'Read More'}
                          </Button>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Share2 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  </div>
                )}

                {!loading && sortedArticles().length === 0 && (
                  <div className="text-center py-12">
                    <Search className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                    <h3 className="font-bold text-xl text-slate-600 mb-2">
                      {language === 'es' ? 'No se encontraron artículos' : 'No articles found'}
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Authors Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              {language === 'es' ? 'Nuestros Columnistas' : 'Our Columnists'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Expertos reconocidos que aportan su perspectiva única sobre los acontecimientos mundiales.'
                : 'Recognized experts who bring their unique perspective on world events.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="border-0 shadow-lg card-hover text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-emerald-100">
                    <img 
                      src={member.image_url} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-xl text-slate-800 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-4">
                    {language === 'es' ? member.position_es : member.position_en}
                  </p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {language === 'es' ? member.bio_es : member.bio_en}
                  </p>
                  <Button variant="outline" size="sm">
                    {language === 'es' ? 'Ver Artículos' : 'View Articles'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-8">
              {language === 'es' 
                ? 'Suscríbete a nuestro newsletter de opinión'
                : 'Subscribe to our opinion newsletter'
              }
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              {language === 'es' 
                ? 'Recibe semanalmente los mejores análisis y opiniones de nuestros expertos directamente en tu correo.'
                : 'Receive weekly the best analysis and opinions from our experts directly in your email.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === 'es' ? 'Tu correo electrónico' : 'Your email address'}
                  className="bg-white/10 border-white/20 text-white placeholder-emerald-200"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-white text-emerald-600 hover:bg-slate-100"
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
                  ? '¡Gracias por suscribirte! Recibirás nuestros análisis semanalmente.'
                  : 'Thank you for subscribing! You will receive our weekly analysis.'
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

export default OpinionPage;