export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Mon Portfolio</h3>
            <p className="mt-2 text-gray-300">Développeur Web Full Stack</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              GitHub
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              LinkedIn
            </a>
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              Twitter
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Tikinas Oughlis. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
