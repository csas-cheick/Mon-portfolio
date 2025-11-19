import { createContext, useContext, useState, ReactNode, FC } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.fr;
}

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      skills: "Compétences",
      projects: "Projets",
      certifications: "Certifications",
      resume: "CV",
      contact: "Contact"
    },
    home: {
      greeting: "Salut !",
      intro: "JE SUIS",
      name: "CHEICK SALIHOU AHMED CHEICK CHAIBOU",
      description: "Etudiant, passionné par la technologie, la robotique et l'IA, avec un intérêt marqué pour les environnements innovants et les systèmes intelligents.",
      viewProjects: "Voir mes projets",
      myResume: "Mon CV",
      aboutTitle: "PERMETTEZ-MOI DE ME",
      aboutTitleHighlight: "PRÉSENTER",
      aboutText1: "Étudiant en Licence 3 Sciences Informatiques, je suis passionné par les technologies modernes, la robotique et l'intelligence artificielle. J'aime analyser, comprendre et améliorer les systèmes pour créer des solutions efficaces et intuitives.",
      aboutText2: "Je possède des compétences en développement web, mobile et logiciel, ainsi qu'en Linux, réseaux et bases de données. Je m'intéresse particulièrement aux systèmes intelligents et aux technologies émergentes.",
      socialTitle: "RETROUVEZ-MOI SUR",
      socialSubtitle: "N'hésitez pas à me contacter"
    },
    skills: {
      title: "Mes",
      titleHighlight: "Compétences",
      subtitle: "Un aperçu de mes compétences techniques et outils maîtrisés.",
      description: "Voici les technologies et outils que j'utilise régulièrement dans mes projets.",
      sectionTitle: "Technologies & Outils",
      categories: {
        languages: "Langages",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Bases de données",
        tools: "Outils & Autres"
      }
    },
    projects: {
      title: "Mes",
      titleHighlight: "Projets",
      subtitle: "Une sélection de projets sur lesquels j'ai travaillé, démontrant mes compétences en développement web, analyse de données et ingénierie logicielle.",
      description: "Chaque projet représente une solution concrète à des problématiques réelles, développées avec des technologies modernes.",
      sectionTitle: "Réalisations",
      allCategories: "Tous",
      code: "Code",
      demo: "Demo",
      categories: {
        fullstack: "Full Stack & IA",
        web: "Web Development",
        mobile: "Mobile"
      },
      fadakcare: {
        title: "FadakCare",
        description: "Plateforme intelligente de dépistage cardiovasculaire.",
        longDescription: "FadakCare est une plateforme médicale complète intégrant un dépistage intelligent basé sur des modèles d'IA, une gestion des patients, un système de rendez-vous, une téléconsultation WebRTC, ainsi que des tableaux de bord avancés pour médecins et administrateurs. Le projet combine backend .NET, frontend React, WebRTC, notifications et analyses prédictives."
      },
      capitalpetroleum: {
        title: "CapitalPetroleum",
        description: "Système de gestion complet pour entreprise pétrolière.",
        longDescription: "CapitalPetroleum est une solution de gestion d'entreprise destinée aux stations-service : gestion des ventes, stocks, fournisseurs, employés, paiements, et tableaux de bord en temps réel. L'application inclut une architecture modulaire, une authentification sécurisée, et des rapports automatiques."
      },
      collections: {
        title: "Collections",
        description: "Plateforme de gestion pour une boutique de couture.",
        longDescription: "Une application web permettant la gestion des produits, commandes, clients et paiements pour une boutique de couture. L'interface est simple, moderne et optimisée pour offrir une expérience fluide. Le projet inclut également un tableau de bord, un espace administrateur et un module statistique."
      },
      abs: {
        title: "ABS",
        description: "Application mobile de communication multimédia (annonces, vidéos, podcasts…).",
        longDescription: "ABS est une application mobile permettant le partage d'annonces, de vidéos et de podcasts, incluant un système d'authentification Firebase, une gestion en temps réel des publications, et une interface moderne conçue avec Flutter. Le backend assure une gestion sécurisée des utilisateurs, rôles et contenus."
      },
      capitalanalysis: {
        title: "Capital Analysis",
        description: "Site web corporatif pour entreprise Capital Analysis.",
        longDescription: "Un site vitrine professionnel présentant les services, activités et engagements de l'entreprise Capital Analysis. Développé avec une architecture moderne, une interface responsive et une mise en avant soignée du contenu pour renforcer l'identité numérique de l'entreprise."
      }
    },
    certifications: {
      title: "Mes",
      titleHighlight: "Certifications",
      subtitle: "Certifications et formations que j'ai obtenues pour développer mes compétences.",
      sectionTitle: "Certifications Obtenues",
      viewCertificate: "Voir le certificat"
    },
    resume: {
      title: "Mon",
      titleHighlight: "CV",
      subtitle: "Consultez mon parcours professionnel et académique.",
      download: "Télécharger le CV",
      view: "Voir le CV"
    },
    contact: {
      title: "Contact",
      titleHighlight: "Moi",
      subtitle: "N'hésitez pas à me contacter pour toute question ou opportunité de collaboration.",
      formTitle: "Envoyez-moi un message",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès !",
      error: "Erreur lors de l'envoi du message.",
      contactInfo: "Informations de contact",
      socialConnect: "Ou rejoignez-moi sur les réseaux sociaux"
    },
    footer: {
      designed: "Conçu et développé par",
      rights: "Tous droits réservés"
    }
  },
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      certifications: "Certifications",
      resume: "Resume",
      contact: "Contact"
    },
    home: {
      greeting: "Hi there!",
      intro: "I AM",
      name: "CHEICK SALIHOU AHMED CHEICK CHAIBOU",
      description: "Student, passionate about technology, robotics and AI, with a strong interest in innovative environments and intelligent systems.",
      viewProjects: "View my projects",
      myResume: "My Resume",
      aboutTitle: "LET ME",
      aboutTitleHighlight: "INTRODUCE MYSELF",
      aboutText1: "Student in Bachelor's degree in Computer Science, I am passionate about modern technologies, robotics and artificial intelligence. I love analyzing, understanding and improving systems to create efficient and intuitive solutions.",
      aboutText2: "I have skills in web, mobile and software development, as well as Linux, networks and databases. I am particularly interested in intelligent systems and emerging technologies.",
      socialTitle: "FIND ME ON",
      socialSubtitle: "Feel free to contact me"
    },
    skills: {
      title: "My",
      titleHighlight: "Skills",
      subtitle: "An overview of my technical skills and mastered tools.",
      description: "Here are the technologies and tools I regularly use in my projects.",
      sectionTitle: "Technologies & Tools",
      categories: {
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Databases",
        tools: "Tools & Others"
      }
    },
    projects: {
      title: "My",
      titleHighlight: "Projects",
      subtitle: "A selection of projects I've worked on, demonstrating my skills in web development, data analysis and software engineering.",
      description: "Each project represents a concrete solution to real problems, developed with modern technologies.",
      sectionTitle: "Achievements",
      allCategories: "All",
      code: "Code",
      demo: "Demo",
      categories: {
        fullstack: "Full Stack & AI",
        web: "Web Development",
        mobile: "Mobile"
      },
      fadakcare: {
        title: "FadakCare",
        description: "Smart cardiovascular screening platform.",
        longDescription: "FadakCare is a comprehensive medical platform integrating intelligent screening based on AI models, patient management, appointment system, WebRTC teleconsultation, as well as advanced dashboards for doctors and administrators. The project combines .NET backend, React frontend, WebRTC, notifications and predictive analytics."
      },
      capitalpetroleum: {
        title: "CapitalPetroleum",
        description: "Complete management system for petroleum company.",
        longDescription: "CapitalPetroleum is a business management solution for gas stations: sales management, inventory, suppliers, employees, payments, and real-time dashboards. The application includes a modular architecture, secure authentication, and automatic reports."
      },
      collections: {
        title: "Collections",
        description: "Management platform for a sewing shop.",
        longDescription: "A web application for managing products, orders, customers and payments for a sewing shop. The interface is simple, modern and optimized to offer a smooth experience. The project also includes a dashboard, an admin space and a statistics module."
      },
      abs: {
        title: "ABS",
        description: "Multimedia communication mobile app (announcements, videos, podcasts...).",
        longDescription: "ABS is a mobile application allowing the sharing of announcements, videos and podcasts, including a Firebase authentication system, real-time publication management, and a modern interface designed with Flutter. The backend ensures secure management of users, roles and content."
      },
      capitalanalysis: {
        title: "Capital Analysis",
        description: "Corporate website for Capital Analysis company.",
        longDescription: "A professional showcase site presenting the services, activities and commitments of the Capital Analysis company. Developed with a modern architecture, a responsive interface and a careful presentation of content to strengthen the company's digital identity."
      }
    },
    certifications: {
      title: "My",
      titleHighlight: "Certifications",
      subtitle: "Certifications and training I obtained to develop my skills.",
      sectionTitle: "Obtained Certifications",
      viewCertificate: "View certificate"
    },
    resume: {
      title: "My",
      titleHighlight: "Resume",
      subtitle: "View my professional and academic background.",
      download: "Download Resume",
      view: "View Resume"
    },
    contact: {
      title: "Contact",
      titleHighlight: "Me",
      subtitle: "Feel free to contact me for any questions or opportunities.",
      formTitle: "Send me a message",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending message.",
      contactInfo: "Contact Information",
      socialConnect: "Or connect with me on social media"
    },
    footer: {
      designed: "Designed and developed by",
      rights: "All rights reserved"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
