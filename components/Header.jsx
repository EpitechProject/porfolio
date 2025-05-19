import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: 'Accueil', path: '/' },
    { title: 'À propos', path: '/about' },
    { title: 'Projets', path: '/projects' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600"
            >
              Mon Portfolio
            </Link>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.title}
                className={`font-medium ${
                  router.pathname === item.path
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Bouton menu mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center p-2 rounded border border-gray-300"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  href={item.path}
                  key={item.title}
                  className={`font-medium px-2 py-1 ${
                    router.pathname === item.path
                      ? 'text-blue-600 bg-blue-50 rounded'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
