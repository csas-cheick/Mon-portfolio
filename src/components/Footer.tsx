import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const socialLinks = [
    { href: "https://github.com/csas-cheick", icon: FaGithub, label: "GitHub" },
    { href: "https://twitter.com/csas_cheick", icon: FaTwitter, label: "Twitter" },
    { href: "https://www.linkedin.com/in/csas-cheick", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/csas_cheick", icon: FaInstagram, label: "Instagram" },
  ];

  const quickLinks = [
    { name: language === 'fr' ? "Accueil" : "Home", path: "/" },
    { name: language === 'fr' ? "Projets" : "Projects", path: "/projets" },
    { name: language === 'fr' ? "Compétences" : "Skills", path: "/competences" },
    { name: language === 'fr' ? "Contact" : "Contact", path: "/contact" },
  ];
  
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      
      <div className="relative container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                csas_cheick
              </span>
            </Link>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {language === 'fr' 
                ? "Développeur Full Stack passionné par la création de solutions innovantes et performantes."
                : "Full Stack Developer passionate about creating innovative and performant solutions."}
            </p>
            <a 
              href="mailto:csas.cheick@gmail.com"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <FaEnvelope />
              csas.cheick@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'fr' ? "Liens rapides" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'fr' ? "Me suivre" : "Follow Me"}
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  whileHover={{ y: -3 }}
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg transition-colors duration-300"
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="flex items-center gap-1">
              {t.footer.designed}
              <span className="text-white font-medium">csas_cheick</span>
              <FaHeart className="text-red-500 mx-1 animate-pulse" />
            </p>
            <p>© {currentYear} CSAS. {t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
