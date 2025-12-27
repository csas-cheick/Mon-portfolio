import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaRocket } from "react-icons/fa";

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Calculer le pourcentage de scroll
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calculer le stroke-dashoffset pour le cercle de progression
  const circumference = 2 * Math.PI * 22; // rayon = 22
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50"
        >
          {/* Cercle de progression */}
          <svg 
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
            viewBox="0 0 56 56"
          >
            {/* Cercle de fond */}
            <circle
              cx="28"
              cy="28"
              r="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-gray-200 dark:text-gray-700"
            />
            {/* Cercle de progression */}
            <motion.circle
              cx="28"
              cy="28"
              r="22"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            {/* Gradient pour le cercle */}
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Bouton principal */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={scrollToTop}
            className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-shadow duration-300 flex items-center justify-center overflow-hidden group"
            aria-label="Scroll to top"
          >
            {/* Effet de brillance au hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              animate={isHovered ? { x: "100%" } : { x: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* Particules animées */}
            <AnimatePresence>
              {isHovered && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 0, x: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        y: -30 - Math.random() * 20,
                        x: (Math.random() - 0.5) * 30,
                        scale: [0, 1, 0.5]
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: i * 0.08,
                        ease: "easeOut"
                      }}
                      className="absolute w-1.5 h-1.5 bg-white rounded-full"
                      style={{ bottom: "50%" }}
                    />
                  ))}
                </>
              )}
            </AnimatePresence>

            {/* Icône avec animation */}
            <motion.div
              animate={isHovered ? { y: [0, -3, 0] } : { y: 0 }}
              transition={{ 
                repeat: isHovered ? Infinity : 0, 
                duration: 0.4,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <AnimatePresence mode="wait">
                {isHovered ? (
                  <motion.div
                    key="rocket"
                    initial={{ opacity: 0, y: 10, rotate: -45 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaRocket className="w-5 h-5 transform -rotate-45" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="arrow"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaArrowUp className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Effet de pulse subtil */}
            <motion.span 
              className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>

          {/* Tooltip au hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium rounded-lg whitespace-nowrap shadow-lg"
              >
                <span className="flex items-center gap-2">
                  Retour en haut
                  <span className="text-xs opacity-70">{Math.round(scrollProgress)}%</span>
                </span>
                {/* Triangle */}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900 dark:border-l-gray-100" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
