import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>À propos | Mon Portfolio</title>
        <meta name="description" content="En savoir plus sur mon parcours et mes compétences" />
      </Head>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-center">À propos de moi</h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="mb-6 text-lg">
              Je suis à la recherche d’un stage d’une durée de 4 à 6 mois, entre juillet et décembre. Sérieux, motivé et désireux de développer mes compétences, je souhaite intégrer une entreprise dynamique où 
              je pourrai contribuer activement à ses projets tout en enrichissant mon expérience professionnelle.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Mon parcours</h2>
            <p className="mb-6">
              [Décrivez votre parcours académique et professionnel ici. Mentionnez vos études, formations,
              et expériences professionnelles pertinentes.]
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Mes compétences techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div>
                <h3 className="font-bold mb-2">Front-end</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>React.js, Next.js</li>
                  <li>Tailwind CSS, Styled Components</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Back-end</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Node.js, Express</li>
                  <li>MongoDB, PostgreSQL</li>
                  <li>API RESTful</li>
                  <li>Authentication & Authorization</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Centres d'intérêt</h2>
            <p className="mb-6">
              En dehors du développement web, je m'intéresse à [mentionnez vos hobbies et centres d'intérêt].
              Je suis toujours à la recherche de nouvelles connaissances et compétences à acquérir.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
