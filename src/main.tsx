import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { HelmetProvider } from "react-helmet-async";
import LoadingSpinner from "./components/LoadingSpinner.tsx";

const App = lazy(() => import("./App.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <ThemeProvider>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
              <LoadingSpinner size="lg" text="Chargement..." />
            </div>
          }>
            <App />
          </Suspense>
        </ThemeProvider>
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>,
);
