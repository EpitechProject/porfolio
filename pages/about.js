import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>À propos | Mon Portfolio</title>
        <meta name="description" content="En savoir plus sur mon parcours et mes compétences" />
      </Head>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-center">À propos de moi</h1>
          
          <div className="max-w-3xl mx-auto">
            <p className="mb-6 text-lg">
              Étudiant en informatique à Epitech Marseille, passionné par l'Intelligence Artificielle et l'innovation technologique.
              <br /><br />
              Actuellement en 2ème année à Epitech, je développe des compétences solides en développement logiciel, algorithmique et gestion de projet. Ce qui me passionne particulièrement, c’est la capacité de l’IA à transformer des idées complexes en solutions concrètes et utiles au quotidien.
              <br /><br />
              Je m'intéresse aux domaines du machine learning, du traitement du langage naturel (NLP) et à l'impact éthique de l'IA. Je consacre une partie de mon temps libre à l'expérimentation sur des projets personnels mêlant automatisation, analyse de données et création d'agents intelligents.
              <br /><br />
              Toujours à la recherche de nouveaux défis et de collaborations enrichissantes, je suis ouvert à toute opportunité de stage ou de projet autour de l'IA, de la data science ou du développement innovant.
              <br /><br />
              N'hésitez pas à me contacter pour échanger ou collaborer !
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Mon parcours</h2>
            <p className="mb-6">
              Actuellement étudiant en 2ème année à Epitech Marseille (2024 - présent).
              <br />
              J'ai effectué 3 années d'études en informatique à Aix-Marseille Université de 2021 à 2024.
              <br />
              J'ai obtenu mon baccalauréat en 2020 (filière Mathématiques) au sein de l'école privée Les Iris.
            </p>            
            <h2 className="text-2xl font-bold mt-12 mb-4">Mes expériences professionnelles</h2>
            <div className="mb-8 border-l-4 border-blue-600 pl-6">
              <h3 className="font-bold text-lg mb-2">Développeur IA - Enedis</h3>
              <p className="text-gray-600 mb-3">Septembre 2025 - Décembre 2025</p>
              <p className="mb-2">
                Développement et optimisation de pipelines de données et d'orchestration de workflows :
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Apache Airflow : conception et maintenance de DAGs pour l'orchestration de tâches</li>
                <li>Apache Kafka : traitement en temps réel et gestion de flux de données</li>
                <li>Prolog : développement de logiques d'inférence pour l'IA</li>
              </ul>
            </div>            
            <h2 className="text-2xl font-bold mt-12 mb-4">Mes compétences techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div>
                <h3 className="font-bold mb-2">Front-end</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>React.js, Next.js</li>
                  <li>Tailwind CSS, Styled Components</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Back-end</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Node.js, Express</li>
                  <li>MongoDB, PostgreSQL</li>
                  <li>API RESTful</li>
                  <li>Authentication & Authorization</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Ingénierie IA & Data</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Apache Airflow</li>
                  <li>Apache Kafka</li>
                  <li>Prolog</li>
                  <li>Machine Learning, Python</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Projets Annexes</h2>
            <div className="space-y-6 mb-12">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-bold text-lg mb-2">Rescore</h3>
                <p className="text-gray-600 mb-2">Mai 2025</p>
                <p className="text-sm">Site web d'opportunités restaurants: automatisation n8n + front Next.js pour scraper les liquidations judiciaires, filtrer/enrichir les données et proposer en temps réel des locaux ou franchises clés aux restaurateurs.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-bold text-lg mb-2">Hackathon AIM - Enedtek</h3>
                <p className="text-gray-600 mb-2">Novembre 2025</p>
                <p className="text-sm">Développement d'une plateforme de gestion de rendez-vous destinée à différents professionnels comme des médecins intégrant une automatisation complète des workflows via n8n pour la gestion des réservations des disponibilités et des mises à jour en temps réel.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-bold text-lg mb-2">Hackathon Toulouse - Arena Sales</h3>
                <p className="text-gray-600 mb-2">Novembre 2025</p>
                <p className="text-sm">Développement d'une solution automatisée de prospection B2B basée sur le scraping de données et des personas clients avec enrichissement par IA et prise de contact automatisée par messages et appels vocaux via ElevenLabs.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-bold text-lg mb-2">Casaplan - Planificateur 3D d'intérieur</h3>
                <p className="text-gray-600 mb-2">Février 2026</p>
                <p className="text-sm">Développement d'une application web permettant de créer, meubler et visualiser des pièces en 3D temps réel, avec sauvegarde cloud et assistant IA intégré.</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Centres d'intérêt</h2>
            <p className="mb-6">
              En dehors de mes études et projets, je consacre beaucoup de temps au développement web et à l'automatisation de processus, notamment en utilisant la plateforme N8N.
              <br /><br />
              Pour équilibrer ma vie professionnelle et personnelle, je pratique régulièrement le basket et la musculation. Ces activités me permettent de garder un bon équilibre physique et mental tout en favorisant l'esprit d'équipe et la persévérance.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
