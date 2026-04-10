import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function BlogProlog() {
  return (
    <Layout>
      <Head>
        <title>Prolog : Programmation Logique pour l'IA | Blog</title>
        <meta name="description" content="Guide Prolog : programmation logique, systèmes d'inférence, représentation de connaissances pour l'IA." />
        <meta name="keywords" content="prolog, logique, ia, inference" />
      </Head>

      <article className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center">
            ← Retour au blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Prolog : Programmation logique pour l'IA</h1>
            <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
              <span>15 décembre 2025</span>
              <span>•</span>
              <span>Temps de lecture : 9 min</span>
              <span>•</span>
              <span className="bg-blue-100 px-3 py-1 rounded text-blue-700">IA</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 mb-6">
              Prolog est un langage de programmation logique qui m'a fasciné lors de mon expérience chez Enedis.
              Découvrez comment l'utiliser pour construire des systèmes intelligents simples mais puissants.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Paradigme Logique</h2>
            <p className="mb-4">
              Prolog fonctionne par déclaration de faits et règles, puis requête. Le moteur d'inférence trouvera les solutions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Exemple Simple</h2>
            <pre className="bg-gray-800 text-white p-4 rounded mb-4">
{`% Faits
parent(tom, bob).
parent(tom, liz).

% Règles
grandparent(X, Z) :- parent(X, Y), parent(Y, Z).

% Requête
?- grandparent(tom, X).
`}
            </pre>

            <h2 className="text-2xl font-bold mt-8 mb-4">Cas d'usage</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Systèmes d'experts</li>
              <li>Représentation de connaissances</li>
              <li>Planification automatique</li>
              <li>Chatbots simples</li>
              <li>Résolution de problèmes logiques</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              Prolog est moins populaire que Python pour l'IA moderne, mais c'est un outil extraordinaire
              pour comprendre comment fonctionne l'inférence logique.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
