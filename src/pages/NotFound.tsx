import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";

const NotFound: FC = () => {
  const { language } = useLanguage();

  return (
    <>
      <SEO 
        title={language === 'fr' ? "Page non trouvée" : "Page not found"}
        description={language === 'fr' ? "La page que vous recherchez n'existe pas." : "The page you are looking for does not exist."}
      />
      
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          {/* 404 animé */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.h1
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(99, 102, 241, 0.5)",
                  "0 0 60px rgba(99, 102, 241, 0.3)",
                  "0 0 20px rgba(99, 102, 241, 0.5)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 leading-none"
            >
              404
            </motion.h1>
            
            {/* Particules décoratives */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 right-0 w-8 h-8 bg-indigo-500/30 rounded-full blur-sm"
            />
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [360, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-10 left-10 w-6 h-6 bg-purple-500/30 rounded-full blur-sm"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {language === 'fr' ? "Oups ! Page non trouvée" : "Oops! Page not found"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              {language === 'fr' 
                ? "La page que vous recherchez semble avoir disparu dans le cyberespace."
                : "The page you are looking for seems to have disappeared into cyberspace."}
            </p>
          </motion.div>

          {/* Boutons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FaHome />
              {language === 'fr' ? "Retour à l'accueil" : "Back to home"}
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 hover:scale-105"
            >
              <FaArrowLeft />
              {language === 'fr' ? "Page précédente" : "Previous page"}
            </button>
          </motion.div>

          {/* Animation de robot/astronaute perdu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl"
            >
              🚀
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
