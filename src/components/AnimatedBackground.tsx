import { FC, memo } from "react";

// Composant mémoïsé pour éviter les re-renders inutiles
const AnimatedBackground: FC = memo(() => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient de base */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      
      {/* Cercles flottants avec CSS animations (plus performant que JS) */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 dark:from-indigo-600/10 dark:to-purple-600/10 rounded-full blur-3xl animate-float-slow"
      />
      
      <div
        className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-indigo-400/20 dark:from-pink-600/10 dark:to-indigo-600/10 rounded-full blur-3xl animate-float-medium"
      />
      
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 dark:from-cyan-600/10 dark:to-blue-600/10 rounded-full blur-3xl animate-float-fast"
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
});

AnimatedBackground.displayName = 'AnimatedBackground';

export default AnimatedBackground;
