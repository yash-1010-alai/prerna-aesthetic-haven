import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Languages, Mic, Briefcase, Heart, Sparkles, TrendingUp, Users, Globe, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, Language } from "@/types/language";

const Index = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const [selectedLang, setSelectedLang] = useState<Language>(language);
  const [showLanguageSelection, setShowLanguageSelection] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('prerna-language');
    if (saved && saved !== 'en') {
      setShowLanguageSelection(false);
    }
  }, []);

  const handleContinue = () => {
    setLanguage(selectedLang);
    setShowLanguageSelection(false);
  };

  const languages = [
    { code: 'en' as Language, name: 'English', nativeName: 'English' },
    { code: 'hi' as Language, name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'mr' as Language, name: 'Marathi', nativeName: 'मराठी' },
    { code: 'ta' as Language, name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'te' as Language, name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'bn' as Language, name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'gu' as Language, name: 'Gujarati', nativeName: 'ગુજરાતી' },
  ];

  const features = [
    {
      icon: Mic,
      title: "Voice & Local Language Input",
      description: "Speak in your comfort language - we understand you"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Matching",
      description: "Smart recommendations personalized just for you"
    },
    {
      icon: Heart,
      title: "Inclusive Opportunities",
      description: "From tailoring to coding - all skills valued equally"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Navigate in 7+ Indian languages effortlessly"
    }
  ];

  const jobCategories = [
    { name: "Tailoring & Fashion", emoji: "✂️", color: "from-primary to-primary-glow" },
    { name: "Cooking & Catering", emoji: "🍳", color: "from-secondary to-accent" },
    { name: "Tech & Development", emoji: "💻", color: "from-accent to-primary" },
    { name: "Teaching & Training", emoji: "📚", color: "from-primary-glow to-secondary" },
    { name: "Handicrafts & Art", emoji: "🎨", color: "from-secondary to-primary" },
    { name: "Healthcare & Wellness", emoji: "🌿", color: "from-accent to-secondary" }
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      role: "Home Baker",
      quote: "Prerna helped me turn my hobby into a thriving business. Now I support my family doing what I love!",
      location: "Mumbai"
    },
    {
      name: "Anjali Desai",
      role: "Web Developer",
      quote: "Found flexible remote work that fits my schedule. Being a mom and a professional is now possible!",
      location: "Bangalore"
    },
    {
      name: "Meera Patel",
      role: "Boutique Owner",
      quote: "From small tailoring jobs to my own boutique - Prerna connected me with opportunities I never imagined.",
      location: "Ahmedabad"
    }
  ];

  if (showLanguageSelection) {
    return (
      <div className="min-h-screen gradient-hero">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <Card className="max-w-2xl mx-auto p-8 md:p-12 shadow-elegant animate-fade-in backdrop-blur-sm bg-card/80">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary mb-6 shadow-glow">
                <Languages className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {translations.selectLanguage[language]}
              </h2>
              <p className="text-muted-foreground">Choose your preferred language to continue</p>
            </div>
            
            <div className="grid gap-3 mb-8">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLang(lang.code)}
                  className={`
                    p-5 rounded-2xl border-2 transition-all duration-300 text-left hover-lift
                    ${selectedLang === lang.code 
                      ? 'border-primary bg-primary/10 shadow-soft' 
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
                      <div className="w-7 h-7 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                        <CheckCircle className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
            
            <Button 
              onClick={handleContinue}
              size="lg"
              className="w-full gradient-primary text-primary-foreground font-semibold text-lg h-14 rounded-xl shadow-elegant hover:shadow-glow transition-all"
            >
              {translations.continueButton[selectedLang]}
            </Button>
          </Card>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Empowering Women, One Opportunity at a Time</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Find Opportunities
              </span>
              <br />
              <span className="text-foreground">That Fit You</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your digital companion for discovering flexible work, building confidence, and creating your own path to empowerment
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                onClick={() => navigate('/auth')}
                size="lg"
                className="gradient-primary text-primary-foreground font-semibold text-lg h-14 px-8 rounded-xl shadow-elegant hover:shadow-glow transition-all hover-lift"
              >
                Join the Movement
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => setShowLanguageSelection(true)}
                className="h-14 px-8 rounded-xl border-2 border-primary/30 hover:bg-primary/5"
              >
                <Languages className="w-5 h-5 mr-2" />
                Change Language
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Prerna?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We understand your journey and speak your language
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover-lift shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4 shadow-soft">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Job Categories Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Explore Diverse Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every skill matters, every talent is valued
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {jobCategories.map((category, index) => (
            <Card 
              key={index}
              className="group p-8 hover-lift shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/30"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="text-center">
                <div className={`text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {category.emoji}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm mb-6">
            <TrendingUp className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Real Stories, Real Success</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Women Who Found Their Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of women who transformed their lives through Prerna
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {successStories.map((story, index) => (
            <Card 
              key={index}
              className="p-8 hover-lift shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm border-2 border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-2xl shadow-soft">
                  👩
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground">{story.name}</h3>
                  <p className="text-sm text-muted-foreground">{story.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic mb-4 leading-relaxed">"{story.quote}"</p>
              <p className="text-sm text-primary font-medium">📍 {story.location}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <Card className="max-w-4xl mx-auto p-12 md:p-16 text-center gradient-primary shadow-elegant">
          <Users className="w-16 h-16 text-primary-foreground mx-auto mb-6 opacity-90" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of empowered women who found flexible work opportunities that fit their lives and dreams
          </p>
          <Button 
            onClick={() => navigate('/auth')}
            size="lg"
            className="bg-card text-primary hover:bg-card/90 font-semibold text-lg h-14 px-10 rounded-xl shadow-elegant hover:shadow-glow transition-all hover-lift"
          >
            Get Started Now
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <p className="text-muted-foreground">Prerna - Empowering women everywhere</p>
            </div>
            <button
              onClick={() => setShowLanguageSelection(true)}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Languages className="w-4 h-4" />
              <span>Change Language</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
