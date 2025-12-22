import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">S</span>
              </div>
              <span className="font-heading text-lg font-semibold">Synapse Consulting</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              IT Consulting & Business Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("nav.services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("services.it.title")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("services.analysis.title")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("services.data.title")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t("services.project.title")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t("nav.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {t("contact.address")}
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                {t("contact.phone")}
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                {t("contact.emailAddress")}
              </li>
            </ul>
          </div>
        </div>

        {/* Educational Disclaimer */}
        <div className="mt-10 pt-6 border-t border-border">
          <div className="bg-primary/5 rounded-lg p-4 mb-4">
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              ⚠️ {t("footer.disclaimer")}
            </p>
            <div className="flex justify-center mt-3">
              <a
                href="https://www.uom.gr/dai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                {t("footer.department")}
              </a>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
