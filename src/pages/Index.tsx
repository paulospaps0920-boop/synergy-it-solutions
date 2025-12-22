import { Link } from "react-router-dom";
import { ArrowRight, Settings, BarChart3, Database, Briefcase, Users, Zap, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Settings, titleKey: "services.it.title", descKey: "services.it.desc" },
    { icon: Database, titleKey: "services.analysis.title", descKey: "services.analysis.desc" },
    { icon: BarChart3, titleKey: "services.data.title", descKey: "services.data.desc" },
    { icon: Briefcase, titleKey: "services.project.title", descKey: "services.project.desc" },
  ];

  const whyUs = [
    { icon: Users, titleKey: "why.teamwork", descKey: "why.teamwork.desc" },
    { icon: Zap, titleKey: "why.tech", descKey: "why.tech.desc" },
    { icon: Shield, titleKey: "why.quality", descKey: "why.quality.desc" },
    { icon: Target, titleKey: "why.custom", descKey: "why.custom.desc" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-corporate py-20 md:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl animate-fade-in">
              {t("hero.title")}
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/services">{t("hero.learnMore")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t("services.title")}</h2>
            <p className="text-muted-foreground">{t("services.subtitle")}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-border">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{t(service.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(service.descKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/services">
                {t("hero.learnMore")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t("why.title")}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">{t(item.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-primary-foreground mb-4 md:text-3xl">
              {t("hero.cta")}
            </h2>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                {t("nav.contact")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
