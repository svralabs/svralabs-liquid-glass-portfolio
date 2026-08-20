import { Link } from 'react-router-dom';

/**
 * Footer component with navigation links and copyright
 */
export default function Footer() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">SVRALABS</h2>
            <p className="mt-2 text-gray-400">Creating innovative solutions for the digital world</p>
          </div>
          <nav>
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-blue-400 transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SVRALABS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
