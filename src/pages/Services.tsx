import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Settings, Database, BarChart3, Briefcase, CheckCircle } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Settings,
      titleKey: "servicesPage.it.full",
      descKey: "servicesPage.it.desc",
      features: ["Strategic IT Planning", "Process Optimization", "Technology Assessment", "Change Management"],
      featuresEl: ["Στρατηγικός Σχεδιασμός IT", "Βελτιστοποίηση Διαδικασιών", "Αξιολόγηση Τεχνολογίας", "Διαχείριση Αλλαγών"],
    },
    {
      icon: Database,
      titleKey: "servicesPage.analysis.full",
      descKey: "servicesPage.analysis.desc",
      features: ["System Evaluation", "Requirements Analysis", "Architecture Design", "Integration Solutions"],
      featuresEl: ["Αξιολόγηση Συστημάτων", "Ανάλυση Απαιτήσεων", "Σχεδιασμός Αρχιτεκτονικής", "Λύσεις Ενοποίησης"],
    },
    {
      icon: BarChart3,
      titleKey: "servicesPage.data.full",
      descKey: "servicesPage.data.desc",
      features: ["Business Intelligence", "Dashboard Development", "Reporting Solutions", "Predictive Analytics"],
      featuresEl: ["Επιχειρηματική Ευφυΐα", "Ανάπτυξη Dashboards", "Λύσεις Αναφορών", "Προβλεπτική Ανάλυση"],
    },
    {
      icon: Briefcase,
      titleKey: "servicesPage.project.full",
      descKey: "servicesPage.project.desc",
      features: ["Agile Methodology", "Risk Management", "Resource Planning", "Quality Assurance"],
      featuresEl: ["Μεθοδολογία Agile", "Διαχείριση Κινδύνων", "Σχεδιασμός Πόρων", "Διασφάλιση Ποιότητας"],
    },
  ];

  const { language } = useLanguage();

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-4 md:text-4xl">{t("servicesPage.title")}</h1>
          <p className="text-lg text-muted-foreground">{t("servicesPage.subtitle")}</p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{t(service.titleKey)}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{t(service.descKey)}</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {(language === "el" ? service.featuresEl : service.features).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
