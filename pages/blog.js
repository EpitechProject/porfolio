import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const BlogArticles = [
  {
    id: 1,
    title: "Apache Airflow : Orchestration de workflows de données",
    excerpt: "Découvrez comment utiliser Apache Airflow pour orchestrer vos pipelines de données complexes avec DAGs et automatisation.",
    date: "2025-11-15",
    readTime: "8 min",
    category: "Data",
    slug: "airflow-orchestration",
    image: "/images/airflow.jpg"
  },
  {
    id: 2,
    title: "Apache Kafka : Streaming de données en temps réel",
    excerpt: "Un guide complet pour mettre en place une architecture de streaming avec Apache Kafka pour traiter des millions d'événements.",
    date: "2025-11-20",
    readTime: "10 min",
    category: "Data",
    slug: "kafka-streaming",
    image: "/images/kafka.jpg"
  },
  {
    id: 3,
    title: "n8n : L'automatisation sans code pour tous",
    excerpt: "Comment j'ai construit Rescore à l'aide de n8n, combinant scraping, filtrage de données et propositions en temps réel.",
    date: "2025-12-01",
    readTime: "7 min",
    category: "Automatisation",
    slug: "n8n-automation",
    image: "/images/n8n.jpg"
  },
  {
    id: 4,
    title: "Next.js 14 : Construire des applications web modernes",
    excerpt: "Exploration des nouvelles fonctionnalités de Next.js 14, App Router, Server Components et optimisations de performance.",
    date: "2025-12-10",
    readTime: "12 min",
    category: "Web",
    slug: "nextjs-14",
    image: "/images/nextjs.jpg"
  },
  {
    id: 5,
    title: "Prolog : Programmation logique pour l'IA",
    excerpt: "Introduction à Prolog et comment l'utiliser pour développer des systèmes d'inférence logique et de représentation de connaissances.",
    date: "2025-12-15",
    readTime: "9 min",
    category: "IA",
    slug: "prolog-ai",
    image: "/images/prolog.jpg"
  },
  {
    id: 6,
    title: "Développement Full Stack en 2025 : les tendances",
    excerpt: "Les technologies et frameworks incontournables pour les développeurs full stack en 2025 et au-delà.",
    date: "2025-12-20",
    readTime: "6 min",
    category: "Web",
    slug: "fullstack-trends",
    image: "/images/fullstack.jpg"
  }
];

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog | Tikinas Oughlis - Articles sur IA, Data et Développement</title>
        <meta name="description" content="Articles et tutoriels sur Apache Airflow, Kafka, n8n, Next.js, Prolog et développement web full stack." />
        <meta name="keywords" content="blog, airflow, kafka, n8n, next.js, prolog, ia, data, développement" />
        <meta property="og:title" content="Blog | Tikinas Oughlis" />
        <meta property="og:description" content="Articles sur IA, Data et Développement Web" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center">Blog</h1>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Articles et tutoriels sur l'IA, la data, l'automatisation et le développement web
            </p>

            {/* Catégories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["Tous", "Web", "Data", "IA", "Automatisation"].map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 bg-white rounded-full border border-gray-300 hover:bg-blue-50 hover:border-blue-600 transition-colors"
                  aria-label={`Filtrer par catégorie ${cat}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BlogArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="text-sm font-semibold opacity-75">{article.category}</p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold mb-3 text-gray-800">{article.title}</h2>
                    <p className="text-gray-600 mb-4 flex-grow">{article.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                      <span aria-label="Temps de lecture">{article.readTime}</span>
                    </div>

                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      aria-label={`Lire l'article: ${article.title}`}
                    >
                      Lire l'article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Vous avez une thématique en tête ?</h2>
              <p className="text-gray-600 mb-6">
                Proposez-moi un sujet d'article ou une collaboration pour créer du contenu ensemble.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                aria-label="Contactez-moi pour proposer un article"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
