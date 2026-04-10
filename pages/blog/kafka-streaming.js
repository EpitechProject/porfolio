import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function BlogKafka() {
  return (
    <Layout>
      <Head>
        <title>Apache Kafka : Streaming en temps réel | Blog</title>
        <meta name="description" content="Guide complet Apache Kafka : traitement de flux de données en temps réel, intégration avec Airflow et best practices." />
        <meta name="keywords" content="kafka, streaming, real-time, data" />
      </Head>

      <article className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center">
            ← Retour au blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Apache Kafka : Streaming en temps réel</h1>
            <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
              <span>20 novembre 2025</span>
              <span>•</span>
              <span>Temps de lecture : 10 min</span>
              <span>•</span>
              <span className="bg-blue-100 px-3 py-1 rounded text-blue-700">Data</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 mb-6">
              Apache Kafka est LA solution pour le streaming de données en temps réel. J'ai utilisé Kafka chez Enedis
              pour traiter des millions d'événements par jour. Voici mon guide complet.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Concepts Fondamentaux</h2>
            <h3 className="text-xl font-bold mt-6 mb-3">Topics et Partitions</h3>
            <p className="mb-4">
              Un Topic est une catégorie de messages. Chaque topic est divisé en partitions pour la scalabilité.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Producers et Consumers</h3>
            <p className="mb-4">
              Les producers envoient les données, les consumers les reçoivent et les traitent.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Cas d'usage Real-time</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Logs d'application centralisés</li>
              <li>Event streaming (user actions, transactions)</li>
              <li>Intégration avec Airflow pour pipelines</li>
              <li>Alertes en temps réel</li>
              <li>Analytics temps réel</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Avantages</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Très haute throughput (millions msg/sec)</li>
              <li>Faible latence</li>
              <li>Durabilité et réplication</li>
              <li>Excellente scalabilité horizontale</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              Kafka est complexe mais indispensable pour les applications real-time. Si vous n'avez pas besoin de vrai streaming,
              Airflow + polling suffit généralement.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
