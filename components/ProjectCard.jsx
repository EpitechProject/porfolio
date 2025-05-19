import Link from 'next/link';

export default function ProjectCard({ project }) {
  const { id, title, description, image, tags, demoUrl, githubUrl } = project;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="h-48 bg-gray-200 relative">
        {/* Placeholder pour l'image */}
        <div className="h-full w-full flex items-center justify-center text-gray-500">
          {image ? <img src={image} alt={title} className="h-full w-full object-cover" /> : 'Image du projet'}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-blue-100 text-blue-800 text-xs font-medium py-1 px-2 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between mt-auto">
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition duration-300"
            >
              Voir démo
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium py-2 px-4 rounded transition duration-300"
            >
              Code source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
