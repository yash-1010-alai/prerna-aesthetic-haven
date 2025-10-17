import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/types/language";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { toast } = useToast();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    password: "",
    address: "",
    age: "",
    maritalStatus: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Age validation
    if (isSignUp && parseInt(formData.age) < 18) {
      toast({
        title: "Age Requirement",
        description: translations.ageRequirement[language],
        variant: "destructive"
      });
      return;
    }

    // For now, just show success and navigate
    // TODO: Integrate with MongoDB backend
    toast({
      title: isSignUp ? "Account Created!" : "Welcome Back!",
      description: isSignUp 
        ? "Your account has been created successfully." 
        : "You have been signed in successfully.",
    });

    // Navigate to dashboard (to be created)
    navigate('/dashboard');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen gradient-subtle flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-elegant animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4 animate-glow">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            {isSignUp ? translations.signUp[language] : translations.signIn[language]}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name">{translations.name[language]}</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="transition-smooth"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">{translations.address[language]}</Label>
                <Input
                  id="address"
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="transition-smooth"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">{translations.age[language]}</Label>
                  <Input
                    id="age"
                    type="number"
                    required
                    min="18"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="transition-smooth"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maritalStatus">{translations.maritalStatus[language]}</Label>
                  <Select 
                    value={formData.maritalStatus}
                    onValueChange={(value) => handleInputChange('maritalStatus', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      <SelectItem value="single">{translations.single[language]}</SelectItem>
                      <SelectItem value="married">{translations.married[language]}</SelectItem>
                      <SelectItem value="divorced">{translations.divorced[language]}</SelectItem>
                      <SelectItem value="widowed">{translations.widowed[language]}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">{translations.email[language]}</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="transition-smooth"
            />
          </div>

          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="whatsapp">{translations.whatsapp[language]}</Label>
              <Input
                id="whatsapp"
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                className="transition-smooth"
                placeholder="+91"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="password">{translations.password[language]}</Label>
            <Input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="transition-smooth"
            />
          </div>

          <Button 
            type="submit" 
            variant="gradient" 
            size="lg" 
            className="w-full mt-6"
          >
            {isSignUp ? translations.signUp[language] : translations.signIn[language]}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm text-muted-foreground hover:text-primary transition-smooth"
          >
            {isSignUp 
              ? translations.alreadyHaveAccount[language] 
              : translations.dontHaveAccount[language]
            }
            <span className="text-primary font-semibold ml-1">
              {isSignUp ? translations.signIn[language] : translations.signUp[language]}
            </span>
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Auth;
