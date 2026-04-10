import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function BlogAirflow() {
  return (
    <Layout>
      <Head>
        <title>Apache Airflow : Orchestration de workflows | Blog</title>
        <meta name="description" content="Guide complet Apache Airflow : orchestration de pipelines de données, DAGs, scheduling et best practices." />
        <meta name="keywords" content="airflow, orchestration, pipelines, data, tutorial" />
        <meta property="og:title" content="Apache Airflow : Orchestration de workflows" />
        <meta property="og:type" content="article" />
      </Head>

      <article className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center">
            ← Retour au blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Apache Airflow : Orchestration de workflows de données</h1>
            <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
              <span>15 novembre 2025</span>
              <span>•</span>
              <span>Temps de lecture : 8 min</span>
              <span>•</span>
              <span className="bg-blue-100 px-3 py-1 rounded text-blue-700">Data Engineering</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 mb-6">
              Apache Airflow est devenu l'outil de référence pour orchestrer les workflows de données complexes. 
              Dans cet article, je vous partage mon expérience d'utilisation chez Enedis et les meilleures pratiques.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Pourquoi Apache Airflow ?</h2>
            <p className="mb-4">
              Lors de mon expérience chez Enedis, j'ai compris l'importance d'une orchestration robuste et scalable. Airflow offre :
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Une approche "Infrastructure as Code" avec les DAGs</li>
              <li>Un monitoring avancé et des alertes</li>
              <li>Une excellente scalabilité</li>
              <li>Une grande flexibilité avec les opérateurs</li>
              <li>Une communauté active et mature</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Les concepts clés</h2>
            <h3 className="text-xl font-bold mt-6 mb-3">1. Les DAGs (Directed Acyclic Graphs)</h3>
            <p className="mb-4">
              Un DAG est une représentation de votre workflow. Il définit l'ordre d'exécution des tâches et leurs dépendances.
            </p>
            <pre className="bg-gray-800 text-white p-4 rounded mb-4 overflow-x-auto">
{`from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime

def task_a():
    return "Task A executed"

def task_b():
    return "Task B executed"

default_args = {
    'start_date': datetime(2025, 1, 1),
    'retries': 2,
}

with DAG('my_dag', default_args=default_args) as dag:
    task1 = PythonOperator(task_id='task_a', python_callable=task_a)
    task2 = PythonOperator(task_id='task_b', python_callable=task_b)
    
    task1 >> task2`}
            </pre>

            <h3 className="text-xl font-bold mt-6 mb-3">2. Les Opérateurs</h3>
            <p className="mb-4">
              Airflow propose une multitude d'opérateurs pour différentes tâches :
              PythonOperator, BashOperator, KubernetesPodOperator, etc.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">3. Le Scheduling</h3>
            <p className="mb-4">
              Vous pouvez planifier l'exécution de vos DAGs selon une cadence (hourly, daily, etc.)
              ou déclencher l'exécution d'autres DAGs.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Best practices</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Garder les tâches idempotentes</li>
              <li>Utiliser les variables et connexions Airflow</li>
              <li>Monitorer les logs et les alertes</li>
              <li>Versioner vos DAGs avec git</li>
              <li>Tester vos DAGs avant de les déployer</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              Apache Airflow m'a permis chez Enedis de gérer des pipelines complexes de manière fiable et scalable.
              Si vous travaillez avec de la data engineering, c'est un outil que je vous recommande vivement.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h3 className="text-xl font-bold mb-3">À propos de l'auteur</h3>
            <p className="text-gray-700">
              Développeur IA et Full Stack à Epitech Marseille. J'ai travaillé chez Enedis sur des pipelines Airflow 
              et partage mon expertise à travers mes articles.
            </p>
          </div>

          {/* Autres articles */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-2xl font-bold mb-6">Articles similaires</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/blog/kafka-streaming"
                className="p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-blue-600 mb-2">Apache Kafka : Streaming en temps réel</h4>
                <p className="text-sm text-gray-600">Découvrez Kafka et comment l'intégrer avec Airflow.</p>
              </Link>
              <Link
                href="/blog/n8n-automation"
                className="p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-blue-600 mb-2">n8n : L'automatisation sans code</h4>
                <p className="text-sm text-gray-600">Comment automatiser vos workflows avec n8n.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
