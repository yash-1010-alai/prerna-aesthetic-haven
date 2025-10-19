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
      <footer className="bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
            {/* About Column */}
            <div>
              <h3 className="font-display text-lg font-bold mb-4 text-foreground">About</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Prerna is your digital companion for discovering flexible work opportunities that fit your life and dreams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission: Empowering women through accessible, inclusive job opportunities.
              </p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="font-display text-lg font-bold mb-4 text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
                </li>
                <li>
                  <a href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Find Jobs</a>
                </li>
                <li>
                  <a href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Post Job</a>
                </li>
                <li>
                  <button 
                    onClick={() => setShowLanguageSelection(true)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    Change Language
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-display text-lg font-bold mb-4 text-foreground">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">
                  <a href="mailto:hello@prerna.com" className="hover:text-primary transition-colors">
                    hello@prerna.com
                  </a>
                </li>
                <li>
                  <div className="flex gap-3 mt-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-display text-lg font-bold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Motivational Quote */}
          <div className="border-t border-primary/10 pt-8 text-center">
            <p className="text-muted-foreground italic text-lg mb-2">
              "Empowered women empower communities."
            </p>
            <p className="text-sm text-muted-foreground/70">
              © 2024 Prerna. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
