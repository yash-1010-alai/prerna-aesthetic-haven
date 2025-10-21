import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/types/language";
import { 
  User, 
  Phone, 
  MapPin, 
  Cake, 
  Heart, 
  Mic, 
  MicOff, 
  Save,
  Upload,
  Sparkles,
  Settings
} from "lucide-react";
import { toast } from "sonner";

const JobSeekerProfile = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations;

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    address: "",
    age: "",
    maritalStatus: "single",
    interests: "",
    photo: ""
  });

  const [isRecording, setIsRecording] = useState(false);
  const [detectedSkills, setDetectedSkills] = useState<string[]>([]);
  const [constraints, setConstraints] = useState<string[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, photo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        // Here you would typically send this to a speech-to-text API
        // For now, we'll simulate it
        const simulatedText = "I know stitching, babysitting, cooking. I prefer morning work near my locality.";
        setFormData(prev => ({ ...prev, interests: prev.interests + " " + simulatedText }));
        
        // Simulate skill detection
        setDetectedSkills(["Stitching", "Babysitting", "Cooking"]);
        setConstraints(["Morning Shift", "Nearby Work"]);
        
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      toast.success("Recording started");
    } catch (error) {
      console.error("Error accessing microphone:", error);
      toast.error("Could not access microphone");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      toast.success("Recording stopped");
    }
  };

  const handleSave = () => {
    if (!formData.name || !formData.whatsapp) {
      toast.error("Please fill in required fields");
      return;
    }
    
    toast.success("Profile saved successfully!");
    // Here you would typically save to a database
    console.log("Saving profile:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen gradient-hero py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-elegant rounded-2xl border-0 overflow-hidden animate-slide-up">
          <CardHeader className="bg-gradient-to-r from-accent/30 to-primary/20 border-b border-border/50">
            <CardTitle className="text-3xl font-display text-center text-foreground flex items-center justify-center gap-2">
              <Sparkles className="w-8 h-8 text-primary" />
              {t.jobSeekerProfile?.[language] || "PRERNA – Job Seeker Profile"}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-8 space-y-6">
            {/* Photo Upload */}
            <div className="flex flex-col items-center space-y-3">
              <Avatar className="w-32 h-32 border-4 border-primary/20 shadow-soft hover-lift cursor-pointer">
                <AvatarImage src={formData.photo} alt="Profile" />
                <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-4xl">
                  <User className="w-16 h-16 text-primary" />
                </AvatarFallback>
              </Avatar>
              <Label 
                htmlFor="photo-upload" 
                className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-accent hover:bg-accent/80 text-accent-foreground transition-smooth shadow-soft"
              >
                <Upload className="w-4 h-4" />
                {t.uploadPhoto?.[language] || "Upload Your Photo"}
              </Label>
              <Input
                id="photo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-base font-medium text-foreground">
                <User className="w-4 h-4 text-primary" />
                {t.name?.[language] || "Name"}
              </Label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your name"
                className="rounded-xl border-border/50 focus:border-primary shadow-soft"
              />
            </div>

            {/* WhatsApp */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-base font-medium text-foreground">
                <Phone className="w-4 h-4 text-primary" />
                {t.whatsapp?.[language] || "WhatsApp"}
              </Label>
              <Input
                value={formData.whatsapp}
                onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                placeholder="+91 9876543210"
                className="rounded-xl border-border/50 focus:border-primary shadow-soft"
              />
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-base font-medium text-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                {t.address?.[language] || "Address"}
              </Label>
              <Input
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Enter your address"
                className="rounded-xl border-border/50 focus:border-primary shadow-soft"
              />
            </div>

            {/* Age and Marital Status */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-base font-medium text-foreground">
                  <Cake className="w-4 h-4 text-primary" />
                  {t.age?.[language] || "Age"}
                </Label>
                <Input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  placeholder="28"
                  className="rounded-xl border-border/50 focus:border-primary shadow-soft"
                />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-base font-medium text-foreground">
                  <Heart className="w-4 h-4 text-primary" />
                  {t.maritalStatus?.[language] || "Status"}
                </Label>
                <select
                  value={formData.maritalStatus}
                  onChange={(e) => handleInputChange("maritalStatus", e.target.value)}
                  className="w-full h-10 px-3 rounded-xl border border-border/50 focus:border-primary bg-background shadow-soft transition-smooth"
                >
                  <option value="single">{t.single?.[language] || "Single"}</option>
                  <option value="married">{t.married?.[language] || "Married"}</option>
                </select>
              </div>
            </div>

            {/* Interests with Voice Input */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-base font-medium text-foreground">
                <Sparkles className="w-4 h-4 text-primary" />
                {t.interestsWorkPreferences?.[language] || "My Interests & Work Preferences"}
              </Label>
              <div className="relative">
                <Textarea
                  value={formData.interests}
                  onChange={(e) => handleInputChange("interests", e.target.value)}
                  placeholder="Tell us about your skills and preferences..."
                  className="rounded-xl border-border/50 focus:border-primary shadow-soft min-h-[120px] pr-14"
                />
                <Button
                  type="button"
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`absolute bottom-3 right-3 rounded-full w-10 h-10 p-0 shadow-soft ${
                    isRecording 
                      ? "bg-destructive hover:bg-destructive/90 animate-pulse" 
                      : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  {isRecording ? (
                    <MicOff className="w-5 h-5" />
                  ) : (
                    <Mic className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>

            {/* Detected Skills */}
            {detectedSkills.length > 0 && (
              <div className="space-y-2 p-4 rounded-xl bg-accent/20 border border-accent/30">
                <Label className="flex items-center gap-2 text-base font-medium text-foreground">
                  <Sparkles className="w-4 h-4 text-primary" />
                  {t.detectedSkills?.[language] || "Detected Skills"}
                </Label>
                <div className="flex flex-wrap gap-2">
                  {detectedSkills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-primary/20 text-primary-foreground border-primary/30 px-3 py-1 rounded-full shadow-soft"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Constraints */}
            {constraints.length > 0 && (
              <div className="space-y-2 p-4 rounded-xl bg-secondary/20 border border-secondary/30">
                <Label className="flex items-center gap-2 text-base font-medium text-foreground">
                  <Settings className="w-4 h-4 text-secondary" />
                  {t.constraints?.[language] || "Constraints"}
                </Label>
                <div className="flex flex-wrap gap-2">
                  {constraints.map((constraint, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-secondary/20 text-secondary-foreground border-secondary/30 px-3 py-1 rounded-full shadow-soft"
                    >
                      {constraint}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Save Button */}
            <Button
              onClick={handleSave}
              className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover-lift transition-smooth text-lg font-medium"
            >
              <Save className="w-5 h-5 mr-2" />
              {t.saveProfile?.[language] || "Save My Profile"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobSeekerProfile;
