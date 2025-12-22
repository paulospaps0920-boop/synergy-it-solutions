import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "el" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  el: {
    // Navigation
    "nav.home": "Αρχική",
    "nav.services": "Υπηρεσίες",
    "nav.team": "Ομάδα",
    "nav.newsletter": "Newsletter",
    "nav.contact": "Επικοινωνία",

    // Hero
    "hero.title": "Synapse Consulting",
    "hero.subtitle": "Ολοκληρωμένες υπηρεσίες IT Consulting για τον ψηφιακό μετασχηματισμό της επιχείρησής σας",
    "hero.cta": "Επικοινωνήστε μαζί μας",
    "hero.learnMore": "Μάθετε περισσότερα",

    // Services
    "services.title": "Οι Υπηρεσίες μας",
    "services.subtitle": "Παρέχουμε ολοκληρωμένες υπηρεσίες IT Consulting",
    "services.it.title": "Συμβουλευτική IT",
    "services.it.desc": "Στρατηγική καθοδήγηση για τη βελτιστοποίηση της τεχνολογικής υποδομής σας",
    "services.analysis.title": "Ανάλυση Συστημάτων",
    "services.analysis.desc": "Αξιολόγηση και βελτίωση πληροφοριακών συστημάτων",
    "services.data.title": "Ανάλυση Δεδομένων",
    "services.data.desc": "Οπτικοποίηση και αξιοποίηση επιχειρηματικών δεδομένων",
    "services.project.title": "Διαχείριση Έργων",
    "services.project.desc": "Ψηφιακή στρατηγική και διαχείριση IT projects",

    // Why Us
    "why.title": "Γιατί Synapse Consulting",
    "why.teamwork": "Ομαδική Εργασία",
    "why.teamwork.desc": "Μεθοδική και συντονισμένη προσέγγιση",
    "why.tech": "Σύγχρονη Τεχνολογία",
    "why.tech.desc": "Χρήση κορυφαίων εργαλείων και τεχνολογιών",
    "why.quality": "Ποιότητα",
    "why.quality.desc": "Έμφαση στην ποιότητα και τεκμηρίωση",
    "why.custom": "Προσαρμογή",
    "why.custom.desc": "Λύσεις σύμφωνα με τις ανάγκες σας",

    // Team
    "team.title": "Η Ομάδα μας",
    "team.subtitle": "Γνωρίστε τους ανθρώπους πίσω από τη Synapse Consulting",

    // Services Page
    "servicesPage.title": "Υπηρεσίες",
    "servicesPage.subtitle": "Ολοκληρωμένες λύσεις για κάθε επιχειρηματική ανάγκη",
    "servicesPage.it.full": "Συμβουλευτική IT & Επιχειρησιακών Διαδικασιών",
    "servicesPage.it.desc": "Παρέχουμε στρατηγική καθοδήγηση για τη βελτιστοποίηση της τεχνολογικής σας υποδομής και των επιχειρησιακών διαδικασιών. Αναλύουμε τις ανάγκες σας και προτείνουμε λύσεις που ενισχύουν την αποτελεσματικότητα και μειώνουν το κόστος.",
    "servicesPage.analysis.full": "Ανάλυση Πληροφοριακών Συστημάτων",
    "servicesPage.analysis.desc": "Αξιολογούμε τα υφιστάμενα πληροφοριακά συστήματά σας και εντοπίζουμε ευκαιρίες βελτίωσης. Σχεδιάζουμε και υλοποιούμε λύσεις που ανταποκρίνονται στις σύγχρονες απαιτήσεις της αγοράς.",
    "servicesPage.data.full": "Ανάλυση και Οπτικοποίηση Δεδομένων",
    "servicesPage.data.desc": "Μετατρέπουμε τα δεδομένα σας σε χρήσιμες πληροφορίες μέσω προηγμένων τεχνικών ανάλυσης και οπτικοποίησης. Δημιουργούμε dashboards και αναφορές που υποστηρίζουν τη λήψη αποφάσεων.",
    "servicesPage.project.full": "Διαχείριση Έργων και Ψηφιακή Στρατηγική",
    "servicesPage.project.desc": "Διαχειριζόμαστε IT projects από την αρχή μέχρι το τέλος, διασφαλίζοντας την έγκαιρη και επιτυχή ολοκλήρωσή τους. Αναπτύσσουμε ψηφιακές στρατηγικές που ευθυγραμμίζονται με τους επιχειρηματικούς σας στόχους.",

    // Newsletter
    "newsletter.title": "Newsletter",
    "newsletter.subtitle": "Εγγραφείτε για να λαμβάνετε νέα και ενημερώσεις",
    "newsletter.name": "Όνομα",
    "newsletter.email": "Email",
    "newsletter.interests": "Ενδιαφέροντα",
    "newsletter.interests.it": "IT Consulting",
    "newsletter.interests.data": "Data Analytics",
    "newsletter.interests.project": "Project Management",
    "newsletter.interests.digital": "Digital Strategy",
    "newsletter.submit": "Εγγραφή",
    "newsletter.success": "Ευχαριστούμε για την εγγραφή σας!",
    "newsletter.successDesc": "Θα λαμβάνετε σύντομα τα νέα μας.",

    // Contact
    "contact.title": "Επικοινωνία",
    "contact.subtitle": "Είμαστε εδώ για να σας βοηθήσουμε",
    "contact.name": "Όνομα",
    "contact.email": "Email",
    "contact.message": "Μήνυμα",
    "contact.send": "Αποστολή",
    "contact.info": "Στοιχεία Επικοινωνίας",
    "contact.address": "Θεσσαλονίκη, Ελλάδα",
    "contact.phone": "+30 2310 123456",
    "contact.emailAddress": "info@synapse-consulting.gr",
    "contact.success": "Το μήνυμά σας εστάλη!",
    "contact.successDesc": "Θα επικοινωνήσουμε μαζί σας σύντομα.",

    // Footer
    "footer.disclaimer": "Εκπαιδευτικός ιστότοπος που δημιουργήθηκε από φοιτητές του τμήματος Εφαρμοσμένης Πληροφορικής του Πανεπιστημίου Μακεδονίας στα πλαίσια του μαθήματος Πληροφοριακά Συστήματα.",
    "footer.department": "Τμήμα Εφαρμοσμένης Πληροφορικής - ΠαΜακ",
    "footer.rights": "© 2024 Synapse Consulting. Εκπαιδευτικό project.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.team": "Team",
    "nav.newsletter": "Newsletter",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Synapse Consulting",
    "hero.subtitle": "Comprehensive IT Consulting services for your business digital transformation",
    "hero.cta": "Contact Us",
    "hero.learnMore": "Learn More",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "We provide comprehensive IT Consulting services",
    "services.it.title": "IT Consulting",
    "services.it.desc": "Strategic guidance for optimizing your technology infrastructure",
    "services.analysis.title": "Systems Analysis",
    "services.analysis.desc": "Evaluation and improvement of information systems",
    "services.data.title": "Data Analytics",
    "services.data.desc": "Visualization and utilization of business data",
    "services.project.title": "Project Management",
    "services.project.desc": "Digital strategy and IT project management",

    // Why Us
    "why.title": "Why Synapse Consulting",
    "why.teamwork": "Teamwork",
    "why.teamwork.desc": "Methodical and coordinated approach",
    "why.tech": "Modern Technology",
    "why.tech.desc": "Using cutting-edge tools and technologies",
    "why.quality": "Quality",
    "why.quality.desc": "Focus on quality and documentation",
    "why.custom": "Customization",
    "why.custom.desc": "Solutions tailored to your needs",

    // Team
    "team.title": "Our Team",
    "team.subtitle": "Meet the people behind Synapse Consulting",

    // Services Page
    "servicesPage.title": "Services",
    "servicesPage.subtitle": "Complete solutions for every business need",
    "servicesPage.it.full": "IT & Business Process Consulting",
    "servicesPage.it.desc": "We provide strategic guidance for optimizing your technology infrastructure and business processes. We analyze your needs and propose solutions that enhance efficiency and reduce costs.",
    "servicesPage.analysis.full": "Information Systems Analysis",
    "servicesPage.analysis.desc": "We evaluate your existing information systems and identify improvement opportunities. We design and implement solutions that meet modern market requirements.",
    "servicesPage.data.full": "Data Analysis and Visualization",
    "servicesPage.data.desc": "We transform your data into useful insights through advanced analysis and visualization techniques. We create dashboards and reports that support decision making.",
    "servicesPage.project.full": "Project Management and Digital Strategy",
    "servicesPage.project.desc": "We manage IT projects from start to finish, ensuring timely and successful completion. We develop digital strategies aligned with your business objectives.",

    // Newsletter
    "newsletter.title": "Newsletter",
    "newsletter.subtitle": "Subscribe to receive news and updates",
    "newsletter.name": "Name",
    "newsletter.email": "Email",
    "newsletter.interests": "Interests",
    "newsletter.interests.it": "IT Consulting",
    "newsletter.interests.data": "Data Analytics",
    "newsletter.interests.project": "Project Management",
    "newsletter.interests.digital": "Digital Strategy",
    "newsletter.submit": "Subscribe",
    "newsletter.success": "Thank you for subscribing!",
    "newsletter.successDesc": "You will receive our news soon.",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "We are here to help you",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.info": "Contact Information",
    "contact.address": "Thessaloniki, Greece",
    "contact.phone": "+30 2310 123456",
    "contact.emailAddress": "info@synapse-consulting.gr",
    "contact.success": "Your message has been sent!",
    "contact.successDesc": "We will contact you soon.",

    // Footer
    "footer.disclaimer": "Educational website created by students of the Department of Applied Informatics at the University of Macedonia as part of the Information Systems course.",
    "footer.department": "Department of Applied Informatics - UoM",
    "footer.rights": "© 2024 Synapse Consulting. Educational project.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("el");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
