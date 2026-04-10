import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function BlogFullStackTrends() {
  return (
    <Layout>
      <Head>
        <title>Développement Full Stack 2025 : Les Tendances | Blog</title>
        <meta name="description" content="Les technologies et frameworks incontournables pour les developers full stack en 2025 et beyond." />
        <meta name="keywords" content="fullstack, trends, technologies, 2025" />
      </Head>

      <article className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center">
            ← Retour au blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Full Stack 2025 : Les tendances à connaître</h1>
            <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
              <span>20 décembre 2025</span>
              <span>•</span>
              <span>Temps de lecture : 6 min</span>
              <span>•</span>
              <span className="bg-blue-100 px-3 py-1 rounded text-blue-700">Web</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 mb-6">
              L'écosystème full stack évolue rapidement. Voici les tendances qui vont dominer en 2025.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Server Components et Edge Computing</h2>
            <p className="mb-4">
              Next.js et autres frameworks déplacent le code côté serveur pour réduire le JavaScript et améliorer la performance.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. TypeScript par Défaut</h2>
            <p className="mb-4">
              TypeScript n'est plus optionnel. C'est le standard dans les nouvelles applications.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. IA Intégrée Partout</h2>
            <p className="mb-4">
              Les LLMs et l'IA générative deviennent des features standard, pas des expériences.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Monorepos et Microservices</h2>
            <p className="mb-4">
              Les monorepos (Turborepo, Nx) permettent de gérer des projets complexes plus facilement.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Database à Proximité des Users</h2>
            <p className="mb-4">
              Distributed databases et edge databases (Supabase Edge, Planetscale) pour moins de latence.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">À Retenir</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Next.js reste le choix #1</li>
              <li>TypeScript = must-have</li>
              <li>L'IA n'est pas optional</li>
              <li>Performance, performance, performance</li>
              <li>Tooling becomes JavaScript + Python</li>
            </ul>
          </div>
        </div>
      </article>
    </Layout>
  );
}
