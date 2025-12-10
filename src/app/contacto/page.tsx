"use client";

import Navigation from "@/components/navigation";
import { useState } from "react";
import { Mail, MapPin, Users, ExternalLink, Send, CheckCircle, AlertCircle } from "lucide-react";

const contactInfo = {
  email: "afroditavalparaiso@gmail.com",
  address: "Valparaíso\nChile",
  social: {
    instagram: {
      handle: "@sindicatoafrodita",
      url: "https://www.instagram.com/sindicatoafrodita"
    },
    facebook: {
      handle: "Sindicato Afrodita",
      url: "https://www.facebook.com/sindicatoafrodita"
    }
  }
};

const colaboradores = [
  {
    name: "Universidad Técnica Federico Santa María",
    role: "Observatorio de Género en Ciencia e Ingeniería",
    institution: "Colaboración institucional"
  },
  {
    name: "Dra. Fernanda Carvajal",
    role: "Investigación y desarrollo del archivo",
    institution: "FONDART Nacional"
  },
  {
    name: "Dra. Yesenia Alegre Valencia",
    role: "Investigación y desarrollo del archivo",
    institution: "FONDART Nacional"
  }
];

const equipo = [
  {
    name: "Sandra Peña",
    role: "Presidenta del Sindicato Afrodita",
    contact: "afroditavalparaiso@gmail.com"
  }
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setStatus('success');
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente o escríbenos directamente a afroditavalparaiso@gmail.com');
      console.error('Error:', error);
      
      setTimeout(() => setStatus('idle'), 8000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="mb-16 fade-in">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
            Contacto
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
            Ponte en contacto con nosotros para consultas sobre el archivo, propuestas de colaboración,
            solicitudes de investigación o cualquier información relacionada con el proyecto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="fade-in">
              <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-neutral-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">Correo Electrónico</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-neutral-600 hover:text-neutral-900 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-neutral-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">Ubicación</h3>
                    <address className="text-neutral-600 not-italic leading-relaxed">
                      {contactInfo.address.split('\n').map((line, index) => (
                        <div key={index}>{line}</div>
                      ))}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-in">
              <h3 className="font-serif font-semibold text-neutral-900 mb-4">Síguenos</h3>
              <div className="space-y-3">
                <a 
                  href={contactInfo.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Instagram: {contactInfo.social.instagram.handle}
                </a>
                <a 
                  href={contactInfo.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Facebook: {contactInfo.social.facebook.handle}
                </a>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-6">
              Envíanos un Mensaje
            </h2>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-900">¡Mensaje enviado exitosamente!</h4>
                  <p className="text-sm text-green-700">Te responderemos a la brevedad.</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-900">Error al enviar el mensaje</h4>
                  <p className="text-sm text-red-700">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-neutral-700 mb-2">Nombre *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none text-sm disabled:bg-neutral-100 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Correo Electrónico *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none text-sm disabled:bg-neutral-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-neutral-700 mb-2">Asunto *</label>
                <select
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none text-sm disabled:bg-neutral-100 disabled:cursor-not-allowed"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="consulta-general">Consulta general</option>
                  <option value="investigacion">Solicitud de investigación</option>
                  <option value="colaboracion">Propuesta de colaboración</option>
                  <option value="permisos">Solicitud de permisos</option>
                  <option value="donacion">Donación de material</option>
                  <option value="prensa">Consultas de prensa</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-neutral-700 mb-2">Mensaje *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={6}
                  disabled={status === 'loading'}
                  className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none text-sm resize-vertical disabled:bg-neutral-100 disabled:cursor-not-allowed"
                  placeholder="Describe tu consulta o propuesta..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-50 bg-neutral-900 hover:bg-neutral-700 transition-colors disabled:bg-neutral-400 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-neutral-200">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="fade-in">
              <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-8">Equipo</h2>
              <div className="space-y-6">
                {equipo.map((persona, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Users className="h-5 w-5 text-neutral-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-neutral-900">{persona.name}</h3>
                      <p className="text-sm text-neutral-600 mb-1">{persona.role}</p>
                      <a href={`mailto:${persona.contact}`} className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors">
                        {persona.contact}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in">
              <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-8">Colaboradores</h2>
              <div className="space-y-6">
                {colaboradores.map((colaborador, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-neutral-900">{colaborador.name}</h3>
                    <p className="text-sm text-neutral-600 mb-1">{colaborador.role}</p>
                    <p className="text-sm text-neutral-500">{colaborador.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-neutral-200 text-center fade-in">
            <h3 className="font-serif font-semibold text-neutral-900 mb-4">Reconocimientos</h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              Este proyecto ha sido posible gracias al financiamiento de FONDART Nacional en la línea de 
              Investigación Artística (Folio 701601), a través del proyecto "Políticas del cuerpo y visualidades 
              de lo trans*. Memorias del Sindicato de trabajadoras sexuales travestis de Valparaíso Afrodita", 
              desarrollado por la Dra. Fernanda Carvajal y la Dra. Yesenia Alegre Valencia, en colaboración 
              con las integrantes del Sindicato Afrodita.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}