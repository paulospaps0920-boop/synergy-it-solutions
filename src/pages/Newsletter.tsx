import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, CheckCircle2 } from "lucide-react";

const Newsletter = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: [] as string[],
  });

  const interests = [
    { id: "it", labelKey: "newsletter.interests.it" },
    { id: "data", labelKey: "newsletter.interests.data" },
    { id: "project", labelKey: "newsletter.interests.project" },
    { id: "digital", labelKey: "newsletter.interests.digital" },
  ];

  const handleInterestChange = (interestId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, interestId]
        : prev.interests.filter((id) => id !== interestId),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - just show success message
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-md">
            <Card className="text-center">
              <CardContent className="pt-10 pb-10">
                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{t("newsletter.success")}</h2>
                <p className="text-muted-foreground">{t("newsletter.successDesc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-4 md:text-4xl">{t("newsletter.title")}</h1>
          <p className="text-lg text-muted-foreground">{t("newsletter.subtitle")}</p>
        </div>

        {/* Form */}
        <div className="mx-auto max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>{t("newsletter.title")}</CardTitle>
              <CardDescription>{t("newsletter.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("newsletter.name")}</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t("newsletter.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-3">
                  <Label>{t("newsletter.interests")}</Label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {interests.map((interest) => (
                      <div key={interest.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest.id}
                          checked={formData.interests.includes(interest.id)}
                          onCheckedChange={(checked) =>
                            handleInterestChange(interest.id, checked as boolean)
                          }
                        />
                        <Label htmlFor={interest.id} className="text-sm font-normal cursor-pointer">
                          {t(interest.labelKey)}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  {t("newsletter.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
