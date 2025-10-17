import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, Language } from "@/types/language";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const [selectedLang, setSelectedLang] = useState<Language>(language);

  useEffect(() => {
    // Check if language is already set
    const saved = localStorage.getItem('prerna-language');
    if (saved && saved !== 'en') {
      // User has already selected a language, redirect to auth
      navigate('/auth');
    }
  }, [navigate]);

  const handleContinue = () => {
    setLanguage(selectedLang);
    navigate('/auth');
  };

  const languages = [
    { code: 'en' as Language, name: 'English', nativeName: 'English' },
    { code: 'hi' as Language, name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'mr' as Language, name: 'Marathi', nativeName: 'मराठी' },
  ];

  return (
    <div className="min-h-screen gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Empowering women through AI" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary mb-4 animate-glow">
              <Languages className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {translations.welcomeTitle[language]}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              {translations.welcomeSubtitle[language]}
            </p>
          </div>
        </div>
      </section>

      {/* Language Selection */}
      <section className="container mx-auto px-4 pb-24">
        <Card className="max-w-2xl mx-auto p-8 md:p-12 shadow-elegant animate-slide-up">
          <h2 className="font-display text-3xl font-semibold text-center mb-8 text-foreground">
            {translations.selectLanguage[language]}
          </h2>
          
          <div className="grid gap-4 mb-8">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLang(lang.code)}
                className={`
                  p-6 rounded-xl border-2 transition-smooth text-left
                  ${selectedLang === lang.code 
                    ? 'border-primary bg-primary/5 shadow-soft' 
                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-xl font-semibold text-foreground">
                      {lang.nativeName}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {lang.name}
                    </p>
                  </div>
                  {selectedLang === lang.code && (
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
          
          <Button 
            onClick={handleContinue}
            variant="gradient"
            size="xl"
            className="w-full"
          >
            {translations.continueButton[selectedLang]}
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default Index;
