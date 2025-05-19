import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Form submission data:', formData);
      setSubmitMessage('Merci pour votre message ! Je vous répondrai dès que possible.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
    
    // Dans un vrai projet, vous utiliseriez quelque chose comme:
    // fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
  };

  return (
    <Layout>
      <Head>
        <title>Contact | Mon Portfolio</title>
        <meta name="description" content="Contactez-moi pour discuter de vos projets" />
      </Head>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-center">Me Contacter</h1>
          
          <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-6">
            {submitMessage ? (
              <div className="text-center py-8">
                <p className="text-green-600 mb-4">{submitMessage}</p>
                <button
                  onClick={() => setSubmitMessage('')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Envoyer un nouveau message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="max-w-lg mx-auto mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Autres moyens de me contacter</h2>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="mailto:tikinas.oughlis@epitech.eu" className="text-blue-600 hover:text-blue-800">
                tikinas.oughlis@epitech.eu
              </a>
              <a href="tel:+33664527071" className="text-blue-600 hover:text-blue-800">
                +33 6 64 52 70 71
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Tikinasss" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/tikinas-oughlis-20803b337/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                LinkedIn
              </a>
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
