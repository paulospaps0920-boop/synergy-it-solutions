import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { User, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Παύλος Παπαδόπουλος",
    nameEn: "Pavlos Papadopoulos",
    role: "Managing Partner",
    roleEl: "Διευθύνων Εταίρος",
    bio: "Experienced IT consultant with a focus on digital transformation and strategic planning.",
    bioEl: "Έμπειρος σύμβουλος IT με εξειδίκευση στον ψηφιακό μετασχηματισμό και τον στρατηγικό σχεδιασμό.",
  },
  {
    name: "Χριστόδουλος Κατσούλης",
    nameEn: "Christodoulos Katsoulis",
    role: "Senior Systems Analyst",
    roleEl: "Ανώτερος Αναλυτής Συστημάτων",
    bio: "Specialist in information systems analysis and enterprise architecture.",
    bioEl: "Ειδικός στην ανάλυση πληροφοριακών συστημάτων και την επιχειρησιακή αρχιτεκτονική.",
  },
  {
    name: "Παύλος Δημητριάδης",
    nameEn: "Pavlos Dimitriadis",
    role: "Data Analytics Lead",
    roleEl: "Επικεφαλής Ανάλυσης Δεδομένων",
    bio: "Expert in data visualization and business intelligence solutions.",
    bioEl: "Ειδικός στην οπτικοποίηση δεδομένων και λύσεις επιχειρηματικής ευφυΐας.",
  },
  {
    name: "Δημήτρης Παπαδόπουλος",
    nameEn: "Dimitris Papadopoulos",
    role: "Project Manager",
    roleEl: "Διαχειριστής Έργων",
    bio: "Certified project manager with extensive experience in IT project delivery.",
    bioEl: "Πιστοποιημένος διαχειριστής έργων με εκτεταμένη εμπειρία στην υλοποίηση IT projects.",
  },
  {
    name: "Απόστολος Κουρτίδης",
    nameEn: "Apostolos Kourtidis",
    role: "IT Consultant",
    roleEl: "Σύμβουλος IT",
    bio: "Specializes in process optimization and technology implementation.",
    bioEl: "Εξειδικεύεται στη βελτιστοποίηση διαδικασιών και την υλοποίηση τεχνολογιών.",
  },
];

const Team = () => {
  const { t, language } = useLanguage();

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-4 md:text-4xl">{t("team.title")}</h1>
          <p className="text-lg text-muted-foreground">{t("team.subtitle")}</p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <CardContent className="p-0">
                {/* Avatar Placeholder */}
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                </div>
                
                {/* Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1">
                    {language === "el" ? member.name : member.nameEn}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {language === "el" ? member.roleEl : member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === "el" ? member.bioEl : member.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex gap-2">
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
