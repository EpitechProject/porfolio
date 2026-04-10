import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tikinas Oughlis | Développeur IA, Full Stack & Automatisation</title>
        <meta name="description" content="Développeur Full Stack et spécialiste IA à Epitech Marseille. Expertise en Next.js, Node.js, Airflow, Kafka, n8n et automatisation. Ouvert aux collaborations et projets innovants." />
        <meta name="keywords" content="développeur, IA, full stack, Next.js, Airflow, Kafka, n8n, automatisation, Marseille" />
        <meta name="author" content="Tikinas Oughlis" />
        <meta property="og:title" content="Tikinas Oughlis | Développeur IA et Full Stack" />
        <meta property="og:description" content="Portfolio professionnel - développement web, IA et automatisation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://votre-domaine.com" />
      </Head>

      <section className="hero">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center py-20">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left animate-fade-in">
            <h1 className="text-5xl font-bold leading-tight mt-4 mb-2">
              Bonjour, je suis <span className="text-blue-600">Tikinas Oughlis</span>
            </h1>
            <h2 className="text-2xl mb-6 text-gray-700">Développeur Web Full Stack & Spécialiste IA</h2>
            <p className="leading-normal mb-8 text-gray-600">
              Étudiant en 2ème année à <strong>EPITECH</strong> Marseille. Passionné par l'IA, l'automatisation et le développement de solutions innovantes. Expérience en Airflow, Kafka, n8n et développement full stack moderne.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                aria-label="Voir mes projets"
              >
                Voir mes projets
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-blue-700 text-blue-600 hover:text-white font-bold py-3 px-6 rounded-lg border border-blue-600 hover:border-transparent transition duration-300 transform hover:scale-105"
                aria-label="Me contacter"
              >
                Me contacter
              </Link>
            </div>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center animate-fade-in-delay">
            <div className="relative h-64 w-64 md:h-96 md:w-96 mx-auto">
              <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-xl text-white shadow-lg">
                <Image
                  src="/images/tikinas.jpg"
                  alt="Photo de profil professionnelle de Tikinas Oughlis"
                  layout="fill"
                  className="rounded-full"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills py-16 bg-gray-100" aria-labelledby="skills-heading">
        <div className="container mx-auto px-6">
          <h2 id="skills-heading" className="text-3xl font-bold text-center mb-8">Mes compétences</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS', 'Java', 'Python', 'C', 'n8n', 'SQL', 'Airflow', 'Kafka', 'Prolog'].map((skill, index) => (
              <div 
                key={skill} 
                className="bg-white rounded-lg shadow-md px-6 py-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
                aria-label={`Compétence: ${skill}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta py-16" aria-labelledby="cta-heading">
        <div className="container mx-auto px-6 bg-blue-600 rounded-lg text-white p-12 text-center">
          <h2 id="cta-heading" className="text-3xl font-bold mb-4">Prêt à collaborer ?</h2>
          <p className="text-lg mb-8 opacity-90">
            Je suis à la recherche de nouvelles opportunités et collaborations autour de l'IA, la data et le développement web.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300"
            aria-label="Contactez-moi pour discuter d'une collaboration"
          >
            Commençons une conversation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
