import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Initialize EmailJS with environment variable
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Vérifier que les variables d'environnement sont présentes
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
      setSubmitStatus('error-config');
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }
    
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "tikinas.oughlis@epitech.eu"
        }
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
    
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <Head>
        <title>Contact | Tikinas Oughlis - Développeur IA et Full Stack</title>
        <meta name="description" content="Contactez-moi pour discuter de projets en développement web, IA, automatisation ou collaboration. Réponse rapide garantie." />
        <meta name="keywords" content="contact, développeur, IA, Next.js, automatisation, n8n" />
        <meta property="og:title" content="Contact | Tikinas Oughlis" />
        <meta property="og:description" content="Discutons de vos projets innovation et IA" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center">Contactez-moi</h1>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Vous avez un projet intéressant ou vous souhaitez collaborer ? Je serais ravi de discuter avec vous !
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a 
                  href="mailto:tikinas.oughlis@epitech.eu"
                  className="text-blue-600 hover:text-blue-700 break-all transition-colors"
                  aria-label="Envoyer un email à tikinas.oughlis@epitech.eu"
                >
                  tikinas.oughlis@epitech.eu
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-lg mb-2">Localisation</h3>
                <p className="text-gray-600">Marseille, France</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-lg mb-2">Calendrier</h3>
                <a 
                  href="https://calendly.com/your-calendly-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  aria-label="Prendre un rendez-vous sur Calendly"
                >
                  Prendre RDV →
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Formulaire */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded" role="alert">
                    Message envoyé avec succès ! Je vous répondrai très bientôt.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded" role="alert">
                    Erreur lors de l'envoi. Veuillez réessayer ou m'envoyer un email directement.
                  </div>
                )}

                {submitStatus === 'error-config' && (
                  <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded" role="alert">
                    ⚠️ Configuration EmailJS manquante. Veuillez configurer les variables d'environnement sur Vercel.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                      Nom <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="votre.email@example.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="De quoi s'agit-il ?"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
                    aria-label="Envoyer le formulaire de contact"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                </form>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Me trouver en ligne</h2>
                
                <div className="space-y-4">
                  <a
                    href="https://github.com/Tikinasss"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Profil GitHub"
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="font-medium">GitHub</span>
                    <span className="text-blue-600">→</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/tikinas-oughlis-20803b337/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Profil LinkedIn"
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="font-medium">LinkedIn</span>
                    <span className="text-blue-600">→</span>
                  </a>

                  <a
                    href="https://www.instagram.com/tikinasoughlis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Profil Instagram"
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="font-medium">Instagram</span>
                    <span className="text-blue-600">→</span>
                  </a>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600">
                      Vous pouvez aussi me trouver sur des communautés de développeurs et lors d'événements tech à Marseille.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
