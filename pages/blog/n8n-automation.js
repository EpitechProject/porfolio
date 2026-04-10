import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function BlogN8N() {
  return (
    <Layout>
      <Head>
        <title>n8n : L'automatisation sans code | Blog</title>
        <meta name="description" content="Comment utiliser n8n pour automatiser des workflows sans coder. Exemple de Rescore avec scraping et enrichissement données." />
        <meta name="keywords" content="n8n, automatisation, no-code, workflow" />
      </Head>

      <article className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center">
            ← Retour au blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">n8n : L'automatisation sans code</h1>
            <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
              <span>1er décembre 2025</span>
              <span>•</span>
              <span>Temps de lecture : 7 min</span>
              <span>•</span>
              <span className="bg-blue-100 px-3 py-1 rounded text-blue-700">Automatisation</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 mb-6">
              n8n est une plateforme puissante d'automatisation sans code qui m'a permis de créer Rescore en quelques semaines.
              Découvrez comment l'utiliser pour automatiser vos workflows.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Qu'est-ce que n8n ?</h2>
            <p className="mb-4">
              n8n est une plateforme open-source et auto-hébergée qui connecte des applications et automatise des workflows complexes
              sans écrire une seule ligne de code.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Cas d'usage : Rescore</h2>
            <p className="mb-4">
              Pour Rescore, j'ai utilisé n8n pour :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Scraper les données de liquidations judiciaires</li>
              <li>Filtrer et enrichir les données</li>
              <li>Proposer les opportunités en temps réel</li>
              <li>Envoyer des notifications</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Avantages</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Pas besoin de coder</li>
              <li>Interface visuelle intuitive</li>
              <li>Nombreuses intégrations (HTTP, APIs, webhooks, etc.)</li>
              <li>Open source et auto-hébergeable</li>
              <li>Parfait pour les prototypes rapides</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              n8n m'a permis de créer des workflows complexes sans backend custom. C'est l'outil parfait pour les entrepreneurs tech
              et les equipes agiles qui veulent aller vite.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h3 className="text-xl font-bold mb-3">À propos de l'auteur</h3>
            <p className="text-gray-700">
              Développeur IA et Full Stack. J'utilise n8n pour tous mes projets d'automatisation.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
