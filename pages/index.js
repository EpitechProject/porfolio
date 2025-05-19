import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Mon Portfolio | Développeur Web</title>
        <meta name="description" content="Portfolio professionnel de [Tikinas Oughlis] - Développeur web" />
      </Head>

      <section className="hero">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center py-20">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="text-4xl font-bold leading-tight mt-4 mb-2">
              Bonjour, je suis <span className="text-blue-600">Tikinas Oughlis</span>
            </h1>
            <h2 className="text-2xl mb-6">Développeur Web Full Stack</h2>
            <p className="leading-normal mb-8">
              Etudiant en 1ère année à l'ecole d'excellence <strong>EPITECH</strong> au programme PGE.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Voir mes projets
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-blue-700 text-blue-600 hover:text-white font-bold py-3 px-6 rounded-lg border border-blue-600 hover:border-transparent transition duration-300"
              >
                Me contacter
              </Link>
            </div>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            <div className="relative h-64 w-64 md:h-96 md:w-96 mx-auto">
              <div className="h-full w-full rounded-full bg-blue-200 flex items-center justify-center text-xl">
                Photo de profil
              </div>
              { <Image
                src="/images/tikinas.jpg"
                alt="Photo de profil"
                layout="fill"
                className="rounded-full"
                objectFit="cover"
              /> }
            </div>
          </div>
        </div>
      </section>

      <section className="skills py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Mes compétences</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS', 'Java', 'Python', 'C', 'n8n', 'SQL'].map((skill) => (
              <div key={skill} className="bg-white rounded-lg shadow-md px-6 py-3">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
