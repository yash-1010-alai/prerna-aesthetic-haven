import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/types/language";
import { LogOut, Briefcase, User } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleLogout = () => {
    localStorage.removeItem('prerna-language');
    navigate('/');
  };

  const t = translations;

  return (
    <div className="min-h-screen gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="font-display text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            प्रेरणा
          </h1>
          <Button 
            onClick={handleLogout} 
            variant="outline"
            className="gap-2"
          >
            <LogOut className="w-4 h-4" />
            {t.logout[language]}
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {t.dashboardWelcome[language]}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.dashboardSubtitle[language]}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-8 hover:shadow-elegant transition-smooth cursor-pointer group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <User className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {t.myProfile[language]}
                </h3>
                <p className="text-muted-foreground">
                  {t.profileDescription[language]}
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-elegant transition-smooth cursor-pointer group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-full gradient-secondary flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <Briefcase className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {t.findJobs[language]}
                </h3>
                <p className="text-muted-foreground">
                  {t.jobsDescription[language]}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
