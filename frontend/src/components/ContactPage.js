import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Globe,
  Users,
  Building,
  FileText,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { translations } from '../mock';
import api from '../services/api';

const ContactPage = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    contact_type: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const t = translations[language];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await api.contact.submit(formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: '',
        contact_type: 'general'
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactTypes = [
    {
      id: 'general',
      title: language === 'es' ? 'Consulta General' : 'General Inquiry',
      icon: MessageSquare,
      description: language === 'es' ? 'Preguntas generales sobre nuestros servicios' : 'General questions about our services'
    },
    {
      id: 'research',
      title: language === 'es' ? 'Colaboración de Investigación' : 'Research Collaboration',
      icon: FileText,
      description: language === 'es' ? 'Propuestas de investigación conjunta' : 'Joint research proposals'
    },
    {
      id: 'media',
      title: language === 'es' ? 'Medios de Comunicación' : 'Media Inquiries',
      icon: Globe,
      description: language === 'es' ? 'Entrevistas y consultas de prensa' : 'Interviews and press inquiries'
    },
    {
      id: 'events',
      title: language === 'es' ? 'Eventos y Conferencias' : 'Events & Conferences',
      icon: Calendar,
      description: language === 'es' ? 'Invitaciones y colaboraciones en eventos' : 'Event invitations and collaborations'
    },
    {
      id: 'institutional',
      title: language === 'es' ? 'Consultoría Institucional' : 'Institutional Consulting',
      icon: Building,
      description: language === 'es' ? 'Servicios de consultoría especializada' : 'Specialized consulting services'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: language === 'es' ? 'Oficina Principal' : 'Main Office',
      content: language === 'es' ? 'Ciudad de México, México\nAv. Reforma 123, Col. Centro\nCP 06000' : 'Mexico City, Mexico\nReforma Ave. 123, Centro\nZip 06000',
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: language === 'es' ? 'Teléfono' : 'Phone',
      content: '+52 55 1234 5678',
      link: 'tel:+525512345678'
    },
    {
      icon: Mail,
      title: language === 'es' ? 'Correo Electrónico' : 'Email',
      content: 'info@geoscope.com',
      link: 'mailto:info@geoscope.com'
    },
    {
      icon: Clock,
      title: language === 'es' ? 'Horario de Atención' : 'Business Hours',
      content: language === 'es' ? 'Lun - Vie: 9:00 - 18:00\nSáb: 9:00 - 14:00' : 'Mon - Fri: 9:00 - 18:00\nSat: 9:00 - 14:00',
      link: null
    }
  ];

  const officesData = [
    {
      city: language === 'es' ? 'Ciudad de México' : 'Mexico City',
      country: language === 'es' ? 'México' : 'Mexico',
      address: 'Av. Reforma 123',
      phone: '+52 55 1234 5678',
      type: language === 'es' ? 'Sede Principal' : 'Headquarters'
    },
    {
      city: language === 'es' ? 'Buenos Aires' : 'Buenos Aires',
      country: language === 'es' ? 'Argentina' : 'Argentina',
      address: 'Av. Corrientes 456',
      phone: '+54 11 9876 5432',
      type: language === 'es' ? 'Oficina Regional' : 'Regional Office'
    },
    {
      city: language === 'es' ? 'Madrid' : 'Madrid',
      country: language === 'es' ? 'España' : 'Spain',
      address: 'Gran Vía 789',
      phone: '+34 91 234 5678',
      type: language === 'es' ? 'Oficina Europa' : 'Europe Office'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 px-4 py-2">
              {t.nav.contact}
            </Badge>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
              {language === 'es' 
                ? 'Conecta con Nuestro Equipo'
                : 'Connect with Our Team'
              }
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {language === 'es' 
                ? 'Estamos aquí para responder tus preguntas, explorar colaboraciones y discutir cómo nuestro análisis puede beneficiar a tu organización.'
                : 'We\'re here to answer your questions, explore collaborations and discuss how our analysis can benefit your organization.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
              {language === 'es' ? '¿Cómo podemos ayudarte?' : 'How can we help you?'}
            </h2>
            <p className="text-slate-600">
              {language === 'es' 
                ? 'Selecciona el tipo de consulta que mejor describe tu necesidad'
                : 'Select the type of inquiry that best describes your need'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactTypes.slice(0, 3).map((type) => (
              <Card 
                key={type.id} 
                className={`border-2 cursor-pointer transition-all duration-300 card-hover ${
                  formData.contact_type === type.id 
                    ? 'border-emerald-500 bg-emerald-50' 
                    : 'border-slate-200 hover:border-emerald-300'
                }`}
                onClick={() => setFormData(prev => ({ ...prev, contact_type: type.id }))}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    formData.contact_type === type.id 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    <type.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">{type.title}</h3>
                  <p className="text-slate-600 text-sm">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactTypes.slice(3).map((type) => (
              <Card 
                key={type.id} 
                className={`border-2 cursor-pointer transition-all duration-300 card-hover ${
                  formData.contact_type === type.id 
                    ? 'border-emerald-500 bg-emerald-50' 
                    : 'border-slate-200 hover:border-emerald-300'
                }`}
                onClick={() => setFormData(prev => ({ ...prev, contact_type: type.id }))}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    formData.contact_type === type.id 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    <type.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">{type.title}</h3>
                  <p className="text-slate-600 text-sm">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-800 mb-8">
                {language === 'es' ? 'Envíanos un Mensaje' : 'Send us a Message'}
              </h2>

              {isSubmitted ? (
                <Card className="border-0 shadow-lg bg-emerald-50 border-emerald-200">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-bold text-xl text-emerald-800 mb-2">
                      {language === 'es' ? '¡Mensaje Enviado!' : 'Message Sent!'}
                    </h3>
                    <p className="text-emerald-700">
                      {language === 'es' 
                        ? 'Gracias por contactarnos. Responderemos en las próximas 24 horas.'
                        : 'Thank you for contacting us. We will respond within the next 24 hours.'
                      }
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            {language === 'es' ? 'Nombre Completo' : 'Full Name'} *
                          </label>
                          <Input
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={language === 'es' ? 'Tu nombre completo' : 'Your full name'}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            {language === 'es' ? 'Correo Electrónico' : 'Email Address'} *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={language === 'es' ? 'tu@correo.com' : 'your@email.com'}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {language === 'es' ? 'Organización' : 'Organization'}
                        </label>
                        <Input
                          name="organization"
                          type="text"
                          value={formData.organization}
                          onChange={handleInputChange}
                          placeholder={language === 'es' ? 'Nombre de tu organización' : 'Your organization name'}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {language === 'es' ? 'Asunto' : 'Subject'} *
                        </label>
                        <Input
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder={language === 'es' ? 'Breve descripción del tema' : 'Brief description of the topic'}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {language === 'es' ? 'Mensaje' : 'Message'} *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={language === 'es' 
                            ? 'Describe tu consulta o solicitud en detalle...'
                            : 'Describe your inquiry or request in detail...'
                          }
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-vertical"
                        />
                      </div>

                      <Button type="submit" className="w-full btn-primary py-3" disabled={isSubmitting}>
                        <Send className="mr-2 w-5 h-5" />
                        {isSubmitting 
                          ? (language === 'es' ? 'Enviando...' : 'Sending...')
                          : (language === 'es' ? 'Enviar Mensaje' : 'Send Message')
                        }
                      </Button>
                      
                      {submitError && (
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-700 text-sm">{submitError}</p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-800 mb-8">
                {language === 'es' ? 'Información de Contacto' : 'Contact Information'}
              </h2>

              <div className="space-y-8 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-slate-800 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-slate-600 hover:text-emerald-600 transition-colors whitespace-pre-line"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-slate-600 whitespace-pre-line">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <Card className="border-0 shadow-lg bg-blue-50 border-blue-200 mb-8">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-blue-800">
                      {language === 'es' ? 'Tiempo de Respuesta' : 'Response Time'}
                    </h3>
                  </div>
                  <p className="text-blue-700 text-sm">
                    {language === 'es' 
                      ? 'Normalmente respondemos dentro de las primeras 24 horas. Para consultas urgentes, puedes llamarnos directamente.'
                      : 'We typically respond within the first 24 hours. For urgent inquiries, you can call us directly.'
                    }
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-lg text-slate-800 mb-4">
                  {language === 'es' ? 'Síguenos en' : 'Follow us on'}
                </h3>
                <div className="flex gap-3">
                  {['Twitter', 'LinkedIn', 'YouTube', 'Facebook'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="w-12 h-12 bg-slate-100 hover:bg-emerald-100 rounded-lg flex items-center justify-center transition-colors group"
                    >
                      <Globe className="w-5 h-5 text-slate-600 group-hover:text-emerald-600" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              {language === 'es' ? 'Nuestras Oficinas' : 'Our Offices'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Presencia global para servir mejor a nuestros clientes y colaboradores en diferentes regiones.'
                : 'Global presence to better serve our clients and collaborators in different regions.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officesData.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="mb-4 bg-emerald-100 text-emerald-800">
                    {office.type}
                  </Badge>
                  <h3 className="font-bold text-xl text-slate-800 mb-2">{office.city}</h3>
                  <p className="text-slate-600 mb-4">{office.country}</p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{office.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-slate-200 to-emerald-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-slate-700 mb-2">
                  {language === 'es' ? 'Mapa Interactivo' : 'Interactive Map'}
                </h3>
                <p className="text-slate-600">
                  {language === 'es' 
                    ? 'Próximamente: Ubicaciones de nuestras oficinas en mapa interactivo'
                    : 'Coming soon: Interactive map with our office locations'
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

export default ContactPage;