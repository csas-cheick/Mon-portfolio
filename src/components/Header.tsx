import { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import ReactCountryFlag from "react-country-flag";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.skills, path: "/competences" },
    { name: t.nav.projects, path: "/projets" },
    { name: t.nav.certifications, path: "/certifications" },
    { name: t.nav.resume, path: "/resume" },
    { name: t.nav.contact, path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
            csas_cheick
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path} className="relative group">
                  <Link
                    to={link.path}
                    className={`text-gray-700 hover:text-indigo-600 transition-colors font-medium pb-1 block ${
                      isActive(link.path) ? "text-indigo-600" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-indigo-600 transition-all duration-300 ${
                      isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center p-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
              aria-label="Change language"
            >
              <ReactCountryFlag
                countryCode={language === 'fr' ? 'FR' : 'GB'}
                svg
                style={{
                  width: '1.5em',
                  height: '1.5em',
                }}
                title={language === 'fr' ? 'Français' : 'English'}
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 px-4 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors ${
                      isActive(link.path) ? "bg-indigo-50 text-indigo-600 font-medium" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Language Switcher for Mobile */}
            <button
              onClick={toggleLanguage}
              className="w-full flex items-center justify-center px-4 py-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors mt-4"
              aria-label="Change language"
            >
              <ReactCountryFlag
                countryCode={language === 'fr' ? 'FR' : 'GB'}
                svg
                style={{
                  width: '2em',
                  height: '2em',
                }}
                title={language === 'fr' ? 'Français' : 'English'}
              />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
