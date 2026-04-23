import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  Globe,
  Plus,
  Search,
  Filter,
  ArrowRight,
  ExternalLink,
  Bell,
  Share2
} from 'lucide-react';
import { translations } from '../mock';
import api from '../services/api';

const EventsPage = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [viewMode, setViewMode] = useState('upcoming');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const t = translations[language];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const params = {
          event_type: selectedType === 'all' ? undefined : selectedType,
          search: searchTerm || undefined,
          upcoming: viewMode === 'upcoming' ? true : undefined,
          page: 1,
          per_page: 20
        };
        
        const response = await api.events.getAll(params);
        setEvents(response.items || response);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [selectedType, searchTerm, viewMode]);

  const handleEventRegistration = async (eventId) => {
    try {
      await api.events.register(eventId);
      // Update the registered count in local state
      setEvents(prev => prev.map(event => 
        event.id === eventId 
          ? { ...event, registered_count: (event.registered_count || 0) + 1 }
          : event
      ));
    } catch (err) {
      console.error('Registration failed:', err);
      // Handle error (could show toast notification)
    }
  };

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());
  const pastEvents = events.filter(event => new Date(event.date) < new Date());

  const getEventIcon = (type) => {
    const typeKey = language === 'es' ? type : type.toLowerCase();
    if (typeKey.includes('virtual') || typeKey.includes('online')) return Video;
    if (typeKey.includes('híbrido') || typeKey.includes('hybrid')) return Globe;
    return MapPin;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2">
              {language === 'es' ? 'Eventos & Webinars' : 'Events & Webinars'}
            </Badge>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
              {language === 'es' 
                ? 'Conecta con Expertos Globales'
                : 'Connect with Global Experts'
              }
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {language === 'es' 
                ? 'Participa en nuestras conferencias, talleres y webinars donde líderes de pensamiento comparten insights sobre los desarrollos más importantes del mundo.'
                : 'Participate in our conferences, workshops and webinars where thought leaders share insights on the world\'s most important developments.'
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
                placeholder={language === 'es' ? 'Buscar eventos...' : 'Search events...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">
                  {language === 'es' ? 'Tipo:' : 'Type:'}
                </span>
              </div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">{language === 'es' ? 'Todos' : 'All'}</option>
                <option value="virtual">{language === 'es' ? 'Virtual' : 'Virtual'}</option>
                <option value="presencial">{language === 'es' ? 'Presencial' : 'In-person'}</option>
                <option value="híbrido">{language === 'es' ? 'Híbrido' : 'Hybrid'}</option>
              </select>

              <div className="flex bg-slate-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('upcoming')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'upcoming' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {language === 'es' ? 'Próximos' : 'Upcoming'}
                </button>
                <button
                  onClick={() => setViewMode('past')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'past' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {language === 'es' ? 'Pasados' : 'Past'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {upcomingEvents.length > 0 && viewMode === 'upcoming' && !loading && (
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-white/20 text-white border-white/30 px-4 py-2">
                  {language === 'es' ? 'Próximo Evento Destacado' : 'Featured Upcoming Event'}
                </Badge>
              </div>
              
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="lg:flex">
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <Badge className="bg-blue-100 text-blue-800">
                        {language === 'es' ? upcomingEvents[0].type : upcomingEvents[0].typeEn}
                      </Badge>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(upcomingEvents[0].date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span>{upcomingEvents[0].time}</span>
                      </div>
                    </div>
                    
                    <h2 className="font-display text-3xl font-bold text-slate-800 mb-4">
                      {language === 'es' ? upcomingEvents[0].title_es : upcomingEvents[0].title_en}
                    </h2>
                    
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                      {upcomingEvents[0].description_es || upcomingEvents[0].description_en || 
                        (language === 'es' 
                          ? 'Un evento imprescindible para profesionales interesados en el análisis geopolítico contemporáneo.'
                          : 'An essential event for professionals interested in contemporary geopolitical analysis.'
                        )
                      }
                    </p>
                    
                    <div className="flex items-center gap-6 mb-8">
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <span>{language === 'es' ? upcomingEvents[0].location_es : upcomingEvents[0].location_en}</span>
                      </div>
                      {upcomingEvents[0].capacity && (
                        <div className="flex items-center gap-2 text-slate-600">
                          <Users className="w-4 h-4" />
                          <span>
                            {upcomingEvents[0].registered_count || 0}/{upcomingEvents[0].capacity} 
                            {language === 'es' ? ' registrados' : ' registered'}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button className="btn-primary px-8 py-3">
                        {language === 'es' ? 'Registrarse Ahora' : 'Register Now'}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button variant="outline">
                        <Bell className="mr-2 w-4 h-4" />
                        {language === 'es' ? 'Recordatorio' : 'Set Reminder'}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3 bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        {React.createElement(getEventIcon(upcomingEvents[0].type), { className: "w-12 h-12" })}
                      </div>
                      <div className="text-4xl font-bold mb-2">
                        {new Date(upcomingEvents[0].date).getDate()}
                      </div>
                      <div className="text-emerald-100">
                        {new Date(upcomingEvents[0].date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { month: 'long', year: 'numeric' })}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Events Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800">
              {viewMode === 'upcoming' 
                ? (language === 'es' ? 'Próximos Eventos' : 'Upcoming Events')
                : (language === 'es' ? 'Eventos Pasados' : 'Past Events')
              }
            </h2>
            <Button variant="outline">
              <Plus className="mr-2 w-4 h-4" />
              {language === 'es' ? 'Proponer Evento' : 'Propose Event'}
            </Button>
          </div>

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
                {language === 'es' ? 'Error al cargar eventos' : 'Error loading events'}
              </h3>
              <p className="text-slate-500">{error}</p>
            </div>
          ) : events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.slice(viewMode === 'upcoming' ? 1 : 0).map((event) => (
                <Card key={event.id} className="border-0 shadow-lg card-hover overflow-hidden">
                  <div className={`h-48 relative ${
                    viewMode === 'past' ? 'bg-gradient-to-br from-slate-400 to-slate-500' : 'bg-gradient-to-br from-blue-500 to-blue-600'
                  }`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        {language === 'es' ? event.type : event.typeEn}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white">
                        <div className="text-2xl font-bold">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-sm opacity-90">
                          {new Date(event.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { month: 'short' })}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      {React.createElement(getEventIcon(event.type), { className: "w-6 h-6 text-white" })}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      {event.capacity && (
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{event.registered_count || 0}/{event.capacity}</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-lg text-slate-800 mb-3 line-clamp-2">
                      {language === 'es' ? event.title_es : event.title_en}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm truncate">
                        {language === 'es' ? event.location_es : event.location_en}
                      </span>
                    </div>
                    
                    {event.speakers && (
                      <div className="mb-4">
                        <div className="text-xs text-slate-500 mb-1">
                          {language === 'es' ? 'Ponentes:' : 'Speakers:'}
                        </div>
                        <div className="text-sm text-slate-700">
                          {event.speakers.join(', ')}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2">
                      {viewMode === 'upcoming' ? (
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleEventRegistration(event.id)}
                        >
                          {language === 'es' ? 'Registrarse' : 'Register'}
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="mr-2 w-4 h-4" />
                          {language === 'es' ? 'Ver Grabación' : 'View Recording'}
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="font-bold text-xl text-slate-600 mb-2">
                {language === 'es' ? 'No se encontraron eventos' : 'No events found'}
              </h3>
              <p className="text-slate-500">
                {language === 'es' 
                  ? 'Intenta con diferentes filtros de búsqueda'
                  : 'Try different search filters'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Calendar Integration */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              {language === 'es' ? 'Calendario de Eventos' : 'Events Calendar'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Mantente al día con todos nuestros eventos y sincroniza con tu calendario personal.'
                : 'Stay up to date with all our events and sync with your personal calendar.'
              }
            </p>
          </div>

          <Card className="border-0 shadow-lg max-w-2xl mx-auto">
            <div className="h-64 bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center">
              <div className="text-center">
                <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-slate-700 mb-2">
                  {language === 'es' ? 'Calendario Interactivo' : 'Interactive Calendar'}
                </h3>
                <p className="text-slate-600 mb-4">
                  {language === 'es' 
                    ? 'Próximamente: Vista de calendario completa con sincronización'
                    : 'Coming soon: Full calendar view with synchronization'
                  }
                </p>
                <div className="flex gap-2 justify-center">
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 w-4 h-4" />
                    Google Calendar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 w-4 h-4" />
                    Outlook
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-8">
              {language === 'es' 
                ? 'No te pierdas ningún evento'
                : 'Don\'t miss any event'
              }
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {language === 'es' 
                ? 'Suscríbete para recibir notificaciones sobre próximos eventos, cambios de horario y contenido exclusivo.'
                : 'Subscribe to receive notifications about upcoming events, schedule changes and exclusive content.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={language === 'es' ? 'Tu correo electrónico' : 'Your email address'}
                className="bg-white/10 border-white/20 text-white placeholder-blue-200"
              />
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                <Bell className="mr-2 w-4 h-4" />
                {language === 'es' ? 'Suscribirse' : 'Subscribe'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;