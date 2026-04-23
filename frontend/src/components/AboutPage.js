import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Target, Eye, Award, Globe, Users, TrendingUp, Shield, Lightbulb } from 'lucide-react';
import { translations } from '../mock';
import api from '../services/api';

const AboutPage = ({ language }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const t = translations[language];

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setLoading(true);
        const teamData = await api.team.getAll();
        setTeamMembers(teamData);
      } catch (err) {
        console.error('Error fetching team data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  const values = [
    {
      icon: Target,
      title: language === 'es' ? 'Precisión' : 'Precision',
      description: language === 'es' 
        ? 'Análisis rigurosos basados en datos verificados y metodologías probadas.'
        : 'Rigorous analysis based on verified data and proven methodologies.'
    },
    {
      icon: Globe,
      title: language === 'es' ? 'Perspectiva Global' : 'Global Perspective',
      description: language === 'es' 
        ? 'Visión integral que conecta eventos locales con tendencias globales.'
        : 'Comprehensive vision connecting local events with global trends.'
    },
    {
      icon: Lightbulb,
      title: language === 'es' ? 'Innovación' : 'Innovation',
      description: language === 'es' 
        ? 'Aplicamos nuevas metodologías y tecnologías para el análisis geopolítico.'
        : 'We apply new methodologies and technologies for geopolitical analysis.'
    },
    {
      icon: Award,
      title: language === 'es' ? 'Excelencia' : 'Excellence',
      description: language === 'es' 
        ? 'Compromiso inquebrantable con la calidad y profundidad de nuestros análisis.'
        : 'Unwavering commitment to the quality and depth of our analysis.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2">
              {t.about.title}
            </Badge>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
              {language === 'es' 
                ? 'Observamos el mundo con claridad estratégica'
                : 'We observe the world with strategic clarity'
              }
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {language === 'es' 
                ? 'GeoScope es un think tank independiente dedicado al análisis riguroso de los desarrollos geopolíticos, económicos y sociales que moldean nuestro mundo. Combinamos experiencia académica con perspectiva práctica para ofrecer insights accionables.'
                : 'GeoScope is an independent think tank dedicated to rigorous analysis of geopolitical, economic and social developments shaping our world. We combine academic expertise with practical perspective to offer actionable insights.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Mission */}
            <Card className="border-0 shadow-lg card-hover">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  {t.about.mission}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  {language === 'es' 
                    ? 'Proporcionar análisis geopolíticos de alta calidad que informen la toma de decisiones estratégicas en gobiernos, empresas y organizaciones internacionales, contribuyendo a un mundo más informado y estable.'
                    : 'Provide high-quality geopolitical analysis that informs strategic decision-making in governments, businesses and international organizations, contributing to a more informed and stable world.'
                  }
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-0 shadow-lg card-hover">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  {t.about.vision}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  {language === 'es' 
                    ? 'Ser el think tank de referencia global en análisis geopolítico, reconocido por la precisión de nuestros pronósticos y la relevancia de nuestras recomendaciones para los desafíos del siglo XXI.'
                    : 'Be the global reference think tank in geopolitical analysis, recognized for the accuracy of our forecasts and the relevance of our recommendations for 21st century challenges.'
                  }
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="border-0 shadow-lg card-hover">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  {t.about.values}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  {language === 'es' 
                    ? 'Integridad intelectual, independencia política, rigor metodológico y compromiso con la excelencia académica guían todas nuestras investigaciones y publicaciones.'
                    : 'Intellectual integrity, political independence, methodological rigor and commitment to academic excellence guide all our research and publications.'
                  }
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                {language === 'es' ? 'Nuestros Valores Fundamentales' : 'Our Core Values'}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {language === 'es' 
                  ? 'Los principios que definen nuestra aproximación al análisis geopolítico y nuestra responsabilidad con la sociedad global.'
                  : 'The principles that define our approach to geopolitical analysis and our responsibility to global society.'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg card-hover text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-800 mb-4">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              {language === 'es' ? 'Equipo de Expertos' : 'Expert Team'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Nuestro equipo multidisciplinario combina experiencia académica, gubernamental y del sector privado para ofrecer análisis integral.'
                : 'Our multidisciplinary team combines academic, government and private sector experience to offer comprehensive analysis.'
              }
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-0 shadow-lg animate-pulse">
                  <div className="h-64 bg-slate-200 rounded-t-lg"></div>
                  <CardContent className="p-8">
                    <div className="h-6 bg-slate-200 rounded mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded mb-4"></div>
                    <div className="h-20 bg-slate-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="text-red-600 mb-4">⚠️</div>
              <p className="text-slate-600">{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {teamMembers.map((member) => (
                <Card key={member.id} className="border-0 shadow-lg card-hover overflow-hidden">
                  <div className="aspect-w-16 aspect-h-12">
                    <img 
                      src={member.image_url} 
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="font-bold text-2xl text-slate-800 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">
                      {language === 'es' ? member.position_es : member.position_en}
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      {language === 'es' ? member.bio_es : member.bio_en}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Additional Team Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-2xl text-slate-800 mb-2">25+</h3>
              <p className="text-slate-600">
                {language === 'es' ? 'Investigadores y Analistas' : 'Researchers and Analysts'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-2xl text-slate-800 mb-2">150+</h3>
              <p className="text-slate-600">
                {language === 'es' ? 'Análisis Publicados' : 'Published Analysis'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-2xl text-slate-800 mb-2">40+</h3>
              <p className="text-slate-600">
                {language === 'es' ? 'Países Analizados' : 'Countries Analyzed'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History/Timeline */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              {language === 'es' ? 'Nuestra Historia' : 'Our History'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Desde nuestra fundación, hemos evolucionado para convertirnos en una voz respetada en el análisis geopolítico global.'
                : 'Since our founding, we have evolved to become a respected voice in global geopolitical analysis.'
              }
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  year: '2019',
                  title: language === 'es' ? 'Fundación de GeoScope' : 'GeoScope Foundation',
                  description: language === 'es' 
                    ? 'Inicio de operaciones con un equipo de 5 investigadores especializados en análisis geopolítico.'
                    : 'Start of operations with a team of 5 researchers specialized in geopolitical analysis.'
                },
                {
                  year: '2021',
                  title: language === 'es' ? 'Expansión Internacional' : 'International Expansion',
                  description: language === 'es' 
                    ? 'Apertura de oficinas regionales y establecimiento de red de corresponsales globales.'
                    : 'Opening of regional offices and establishment of global correspondent network.'
                },
                {
                  year: '2023',
                  title: language === 'es' ? 'Reconocimiento Global' : 'Global Recognition',
                  description: language === 'es' 
                    ? 'Premio internacional por excelencia en análisis geopolítico y predicción de tendencias.'
                    : 'International award for excellence in geopolitical analysis and trend prediction.'
                },
                {
                  year: '2024',
                  title: language === 'es' ? 'Innovación Digital' : 'Digital Innovation',
                  description: language === 'es' 
                    ? 'Lanzamiento de plataforma digital avanzada para análisis interactivo y visualización de datos.'
                    : 'Launch of advanced digital platform for interactive analysis and data visualization.'
                }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-bold text-xl text-slate-800 mb-2">{milestone.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;