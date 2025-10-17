export type Language = 'en' | 'hi' | 'mr';

export interface Translation {
  [key: string]: {
    en: string;
    hi: string;
    mr: string;
  };
}

export const translations: Translation = {
  // Landing page
  welcomeTitle: {
    en: "Welcome to Prerna",
    hi: "प्रेरणा में आपका स्वागत है",
    mr: "प्रेरणा मध्ये आपले स्वागत आहे"
  },
  welcomeSubtitle: {
    en: "Empowering women through AI-driven job recommendations",
    hi: "एआई-संचालित नौकरी सिफारिशों के माध्यम से महिलाओं को सशक्त बनाना",
    mr: "एआय-चालित नोकरी शिफारसींद्वारे महिलांना सक्षम करणे"
  },
  selectLanguage: {
    en: "Select Your Preferred Language",
    hi: "अपनी पसंदीदा भाषा चुनें",
    mr: "आपली पसंतीची भाषा निवडा"
  },
  continueButton: {
    en: "Continue",
    hi: "जारी रखें",
    mr: "सुरू ठेवा"
  },
  // Auth page
  signIn: {
    en: "Sign In",
    hi: "साइन इन करें",
    mr: "साइन इन करा"
  },
  signUp: {
    en: "Sign Up",
    hi: "साइन अप करें",
    mr: "साइन अप करा"
  },
  name: {
    en: "Full Name",
    hi: "पूरा नाम",
    mr: "पूर्ण नाव"
  },
  email: {
    en: "Email",
    hi: "ईमेल",
    mr: "ईमेल"
  },
  whatsapp: {
    en: "WhatsApp Number",
    hi: "व्हाट्सएप नंबर",
    mr: "व्हॉट्सअॅप क्रमांक"
  },
  password: {
    en: "Password",
    hi: "पासवर्ड",
    mr: "पासवर्ड"
  },
  address: {
    en: "Address",
    hi: "पता",
    mr: "पत्ता"
  },
  age: {
    en: "Age",
    hi: "उम्र",
    mr: "वय"
  },
  maritalStatus: {
    en: "Marital Status",
    hi: "वैवाहिक स्थिति",
    mr: "वैवाहिक स्थिती"
  },
  single: {
    en: "Single",
    hi: "अविवाहित",
    mr: "अविवाहित"
  },
  married: {
    en: "Married",
    hi: "विवाहित",
    mr: "विवाहित"
  },
  divorced: {
    en: "Divorced",
    hi: "तलाकशुदा",
    mr: "घटस्फोटित"
  },
  widowed: {
    en: "Widowed",
    hi: "विधवा",
    mr: "विधवा"
  },
  alreadyHaveAccount: {
    en: "Already have an account?",
    hi: "पहले से खाता है?",
    mr: "आधीच खाते आहे?"
  },
  dontHaveAccount: {
    en: "Don't have an account?",
    hi: "खाता नहीं है?",
    mr: "खाते नाही?"
  },
  ageRequirement: {
    en: "Must be 18 or older",
    hi: "18 वर्ष या उससे अधिक होना चाहिए",
    mr: "18 वर्षे किंवा त्यापेक्षा जास्त असणे आवश्यक"
  }
};
