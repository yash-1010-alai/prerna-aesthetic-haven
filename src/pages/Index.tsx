import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Languages, Mic, Briefcase, Heart, Sparkles, TrendingUp, Users, Globe, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, Language } from "@/types/language";
import heroCollaboration from "@/assets/hero-collaboration.jpg";
import successStory1 from "@/assets/success-story-1.jpg";
import successStory2 from "@/assets/success-story-2.jpg";
import successStory3 from "@/assets/success-story-3.jpg";
import unityIllustration from "@/assets/unity-illustration.jpg";
import featuresIllustration from "@/assets/features-illustration.jpg";

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
      location: "Mumbai",
      image: successStory1
    },
    {
      name: "Anjali Desai",
      role: "Web Developer",
      quote: "Found flexible remote work that fits my schedule. Being a mom and a professional is now possible!",
      location: "Bangalore",
      image: successStory2
    },
    {
      name: "Meera Patel",
      role: "Boutique Owner",
      quote: "From small tailoring jobs to my own boutique - Prerna connected me with opportunities I never imagined.",
      location: "Ahmedabad",
      image: successStory3
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
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8 animate-fade-in">
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
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Your digital companion for discovering flexible work, building confidence, and creating your own path to empowerment
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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

            <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <img 
                  src={heroCollaboration} 
                  alt="Diverse Indian women collaborating and working together in a modern workspace"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-primary/10 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-secondary/10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={featuresIllustration} 
                alt="Woman working remotely from home with laptop in a comfortable workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Why Choose Prerna?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We understand your journey and speak your language
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-muted/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-soft">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-1 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              className="p-8 hover-lift shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm border-2 border-border overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-elegant border-4 border-primary/10">
                  <img 
                    src={story.image} 
                    alt={`${story.name} - ${story.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">{story.name}</h3>
                <p className="text-sm text-primary font-medium">{story.role}</p>
              </div>
              <p className="text-muted-foreground italic mb-4 leading-relaxed text-center">"{story.quote}"</p>
              <p className="text-sm text-primary font-medium text-center">📍 {story.location}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <img 
                  src={unityIllustration} 
                  alt="Diverse hands joining together in unity representing women's empowerment"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <Card className="p-12 text-center lg:text-left gradient-primary shadow-elegant order-1 lg:order-2">
              <Users className="w-16 h-16 text-primary-foreground mx-auto lg:mx-0 mb-6 opacity-90" />
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Join thousands of empowered women who found flexible work opportunities that fit their lives and dreams
              </p>
              <Button 
                onClick={() => navigate('/auth')}
                size="lg"
                className="bg-card text-primary hover:bg-card/90 font-semibold text-lg h-14 px-10 rounded-xl shadow-elegant hover:shadow-glow transition-all hover-lift w-full sm:w-auto"
              >
                Get Started Now
              </Button>
            </Card>
          </div>
        </div>
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
