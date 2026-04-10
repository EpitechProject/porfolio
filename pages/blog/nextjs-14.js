import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function BlogNextJS() {
  return (
    <Layout>
      <Head>
        <title>Next.js 14 : Applications Web Modernes | Blog</title>
        <meta name="description" content="Guide Next.js 14 : App Router, Server Components, optimisations de performance et best practices." />
        <meta name="keywords" content="nextjs, react, web, performance" />
      </Head>

      <article className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center">
            ← Retour au blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Next.js 14 : Construire des applications web modernes</h1>
            <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
              <span>10 décembre 2025</span>
              <span>•</span>
              <span>Temps de lecture : 12 min</span>
              <span>•</span>
              <span className="bg-blue-100 px-3 py-1 rounded text-blue-700">Web</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 mb-6">
              Next.js 14 révolutionne la façon de construire des applications React. Voici les features qui changent vraiment la donne.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">App Router</h2>
            <p className="mb-4">
              Le nouvel App Router remplace Pages Router. C'est plus flexible et plus performant.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Server Components</h2>
            <p className="mb-4">
              Les Server Components vous permettent d'avoir du code côté serveur dans vos composants React.
              Cela réduit le JavaScript côté client et améliore les performances.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Performance</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Image Optimization automatique</li>
              <li>Code splitting intelligent</li>
              <li>Streaming SSR pour temps de réponse plus rapides</li>
              <li>Font optimization</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              Next.js 14 est la version la plus mature et performante. Si vous build des apps React, il n'y a vraiment aucune raison
              de ne pas l'utiliser.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
