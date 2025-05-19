import Head from 'next/head';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Mes Projets | Mon Portfolio</title>
        <meta name="description" content="Découvrez mes projets de développement web" />
      </Head>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-center">Mes Projets</h1>
          <p className="text-center max-w-2xl mx-auto mb-12">
            Voici une sélection de mes projets récents. Chaque projet représente
            un défi unique que j'ai eu à relever et les solutions que j'ai développées.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}