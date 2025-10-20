import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/types/language";
import { Briefcase, Scissors, Building2, Globe } from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.jpg";
import jobSeekerImg from "@/assets/job-seeker.jpg";
import jobProviderImg from "@/assets/job-provider.jpg";
import entrepreneurImg from "@/assets/entrepreneur.jpg";

type Role = 'jobSeeker' | 'jobProvider' | 'entrepreneur' | null;

const Dashboard = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const t = translations;

  const handleContinue = () => {
    if (selectedRole) {
      // Navigate based on selected role
      console.log('Selected role:', selectedRole);
    }
  };

  const roles = [
    {
      id: 'jobSeeker' as Role,
      icon: Briefcase,
      title: t.jobSeekerTitle[language],
      description: t.jobSeekerDesc[language],
      image: jobSeekerImg,
      color: 'rose',
    },
    {
      id: 'jobProvider' as Role,
      icon: Building2,
      title: t.jobProviderTitle[language],
      description: t.jobProviderDesc[language],
      image: jobProviderImg,
      color: 'teal',
    },
    {
      id: 'entrepreneur' as Role,
      icon: Scissors,
      title: t.entrepreneurTitle[language],
      description: t.entrepreneurDesc[language],
      image: entrepreneurImg,
      color: 'pink',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-rose-100 via-pink-50 to-teal-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-transparent">
        <h1 className="font-display text-2xl font-semibold text-rose-600">🌷 प्रेरणा</h1>
        <div className="flex gap-6 items-center text-gray-700">
          <a href="/" className="hover:text-rose-500 transition-smooth">{t.about[language]}</a>
          <a href="/" className="hover:text-rose-500 transition-smooth">{t.contact[language]}</a>
          <button 
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-2 hover:text-rose-500 transition-smooth"
          >
            <Globe className="w-4 h-4" />
            {language === 'en' ? 'हिंदी' : 'English'}
          </button>
        </div>
      </nav>

      {/* Main Section */}
      <main className="flex flex-col items-center text-center px-6 pb-12">
        {/* Hero Image */}
        <div className="w-full max-w-6xl mb-8 rounded-3xl overflow-hidden shadow-xl">
          <img 
            src={dashboardHero} 
            alt="Prerna Dashboard" 
            className="w-full h-64 object-cover"
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          {t.welcomeToPrena[language]}
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl">
          {t.empoweringOpportunities[language]}
        </p>
        <h3 className="text-lg text-gray-700 mb-6">
          {t.tellUsWhoYouAre[language]}
        </h3>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {roles.map((role) => (
            <Card
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`bg-white/70 shadow-md hover:shadow-lg rounded-2xl p-6 border-2 transition-smooth cursor-pointer ${
                selectedRole === role.id
                  ? `border-${role.color}-400 shadow-xl scale-105`
                  : 'border-transparent hover:border-' + role.color + '-300'
              }`}
            >
              {/* Role Image */}
              <div className="mb-4 rounded-xl overflow-hidden">
                <img 
                  src={role.image} 
                  alt={role.title}
                  className="w-full h-40 object-cover"
                />
              </div>
              
              <div className="text-4xl mb-2">
                <role.icon className="w-12 h-12 mx-auto text-gray-700" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                {role.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                {role.description}
              </p>
              <Button
                className={`w-full bg-${role.color}-500 hover:bg-${role.color}-600 text-white rounded-xl`}
                style={{
                  backgroundColor: role.color === 'rose' ? 'hsl(var(--primary))' : 
                                   role.color === 'teal' ? 'hsl(var(--secondary))' : 
                                   'hsl(var(--accent))'
                }}
              >
                {t.selectRole[language]}
              </Button>
            </Card>
          ))}
        </div>

        {/* Continue Button */}
        <div className="mt-10">
          <Button
            onClick={handleContinue}
            disabled={!selectedRole}
            className={`px-6 py-3 rounded-xl font-semibold transition-smooth ${
              selectedRole
                ? 'bg-rose-500 hover:bg-rose-600 text-white'
                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
            }`}
          >
            {t.continue[language]}
          </Button>
          <p className="text-sm text-gray-500 mt-3">
            {t.voiceChoice[language]}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-4">
        © 2025 प्रेरणा | {t.empoweringTagline[language]} 🌷
      </footer>
    </div>
  );
};

export default Dashboard;
