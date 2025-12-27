import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const GlassCard: FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  hover = true,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={`
        relative overflow-hidden
        bg-white/70 dark:bg-gray-800/70
        backdrop-blur-xl
        border border-white/20 dark:border-gray-700/50
        rounded-2xl
        shadow-lg shadow-gray-900/5 dark:shadow-black/20
        transition-shadow duration-300
        hover:shadow-xl hover:shadow-indigo-500/10
        ${className}
      `}
    >
      {/* Effet de brillance */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Contenu */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
