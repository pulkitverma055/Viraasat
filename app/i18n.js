// app/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

// ✅ Define translations
const resources = {
  en: {
    translation: {
      // Shared
      error: "Error",
      success: "Success",
      action_required: "Action Required",

      // Welcome / Login
      welcome_title: "Welcome to Viraasat",
      welcome_description:
        "A journey into India's glorious past awaits you. From magnificent monuments to hidden tales, experience the legacy of our culture reimagined with AR, anytime and anywhere.",
      login: "Login",
      signup: "Sign Up",
      login_title: "Login",
      login_subtitle: "Access your journey into India’s heritage",
      username: "Username",
      password: "Password",
      forgot_password: "Forgot Password?",
      or_sign_in: "or sign in with",
      no_account: "Don’t have an account?",
      signup_link: "Sign up",
      login_required: "Both username and password are required.",
      login_success: "Login successful ✅",

      // SignUp specific
      "Sign Up": "Sign Up",
      "Create New Account": "Create New Account",
      confirm_password: "Confirm Password",
      password_mismatch: "Passwords do not match.",
      signup_success: "Sign up successful ✅",
      signup_failed: "Sign up failed. Please try again.",
      "Or Sign Up With": "Or Sign Up With",
      "Already have an account?": "Already have an account?",
      Login: "Login",

      // ----- Home Page -----
        greeting_small: "Hi, Naman",
        greeting_large: "Good Morning",
        explore_text: "Let’s explore our heritage",
        search_placeholder: "Search monuments",
        popular_sites: "Popular Sites",
        recommended: "Recommended",
        bottom_home: "Home",
        bottom_explore: "Explore",
        bottom_travel: "Travel",
        bottom_profile: "Profile",

        // ✅ Common
        explore_title: "Explore",
        search_placeholder: "Search monuments",

        // ✅ Monuments
        taj_mahal: "Taj Mahal",
        ellora_caves: "Ellora Caves",
        hawa_mahal: "Hawa Mahal",
        gadisar_lake: "Gadisar Lake",
        hampi_temple: "Hampi Temple",
        charminar: "Charminar",
        jantar_mantar: "Jantar Mantar",
        elephanta_caves: "Elephanta Caves",
        qutub_minar: "Qutub Minar",
        sun_temple: "Sun Temple",
        buland_darwaza: "Buland Darwaza",
        pavagadh: "Pavagadh",
        khajuraho_temple: "Khajuraho Temple",
        humayuns_tomb: "Humayun’s Tomb",
        rani_ki_vav: "Rani ki Vav",
        amber_fort: "Amber Fort",

        // ✅ Bottom Tabs
        home: "Home",
        explore: "Explore",
        travel: "Travel",
        profile: "Profile"
    },
  },

  hi: {
    translation: {
      // Shared
      error: "त्रुटि",
      success: "सफलता",
      action_required: "अगला कदम आवश्यक",

      // Welcome / Login
      welcome_title: "विरासत में आपका स्वागत है",
      welcome_description:
        "भारत के गौरवशाली अतीत की यात्रा आपका इंतजार कर रही है। भव्य स्मारकों से लेकर छिपी कहानियों तक, हमारी संस्कृति की विरासत का अनुभव कहीं भी, कभी भी AR के साथ करें।",
      login: "लॉगिन",
      signup: "साइन अप",
      login_title: "लॉगिन",
      login_subtitle: "भारत की धरोहर की यात्रा शुरू करें",
      username: "उपयोगकर्ता नाम",
      password: "पासवर्ड",
      forgot_password: "पासवर्ड भूल गए?",
      or_sign_in: "या अन्य माध्यम से साइन इन करें",
      no_account: "क्या आपका खाता नहीं है?",
      signup_link: "साइन अप",
      login_required: "उपयोगकर्ता नाम और पासवर्ड दोनों आवश्यक हैं।",
      login_success: "लॉगिन सफल ✅",

      // SignUp specific
      "Sign Up": "साइन अप",
      "Create New Account": "नया खाता बनाएँ",
      confirm_password: "पासवर्ड की पुष्टि करें",
      password_mismatch: "पासवर्ड मेल नहीं खा रहे हैं।",
      signup_success: "साइन अप सफल ✅",
      signup_failed: "साइन अप असफल। कृपया पुनः प्रयास करें।",
      "Or Sign Up With": "या साइन अप करें",
      "Already have an account?": "क्या आपके पास पहले से खाता है?",
      Login: "लॉगिन",

      // ----- Home Page -----
        greeting_small: "हाय, नमन",
        greeting_large: "सुप्रभात",
        explore_text: "आइए अपनी विरासत का अन्वेषण करें",
        search_placeholder: "स्मारक खोजें",
        popular_sites: "लोकप्रिय स्थल",
        recommended: "अनुशंसित",
        bottom_home: "होम",
        bottom_explore: "एक्सप्लोर",
        bottom_travel: "यात्रा",
        bottom_profile: "प्रोफ़ाइल",

        // ✅ Common
        explore_title: "अन्वेषण करें",
        search_placeholder: "स्मारक खोजें",

        // ✅ Monuments
        taj_mahal: "ताज महल",
        ellora_caves: "एलोरा गुफाएँ",
        hawa_mahal: "हवा महल",
        gadisar_lake: "गडीसर झील",
        hampi_temple: "हम्पी मंदिर",
        charminar: "चारमीनार",
        jantar_mantar: "जंतर मंतर",
        elephanta_caves: "एलीफेंटा गुफाएँ",
        qutub_minar: "कुतुब मीनार",
        sun_temple: "सूर्य मंदिर",
        buland_darwaza: "बुलंद दरवाज़ा",
        pavagadh: "पावागढ़",
        khajuraho_temple: "खजुराहो मंदिर",
        humayuns_tomb: "हुमायूँ का मकबरा",
        rani_ki_vav: "रानी की वाव",
        amber_fort: "आमेर किला",

        // ✅ Bottom Tabs
        home: "होम",
        explore: "अन्वेषण",
        travel: "यात्रा",
        profile: "प्रोफ़ाइल"
    },
  },

  or: {
    translation: {
      // Shared
      error: "ତ୍ରୁଟି",
      success: "ସଫଳତା",
      action_required: "ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ଆବଶ୍ୟକ",

      // Welcome / Login
      welcome_title: "ବିରାସତରେ ସ୍ୱାଗତ",
      welcome_description:
        "ଭାରତର ଗୌରବମୟ ଅତୀତରେ ଏକ ଯାତ୍ରା ଆପଣଙ୍କୁ ଅପେକ୍ଷା କରୁଛି। ବିଶାଳ ସ୍ମାରକରୁ ଆରମ୍ଭ କରି ଲୁଚିଥିବା କାହାଣୀ ପର୍ଯ୍ୟନ୍ତ, AR ସହିତ ସେଥିରେ କୋଥାଉ, କେବେବି ସଂସ୍କୃତିର ଏହି ପରମ୍ପରାକୁ ଅନୁଭବ କରନ୍ତୁ।",
      login: "ଲଗଇନ୍",
      signup: "ସାଇନ୍ ଅପ୍",
      login_title: "ଲଗଇନ୍",
      login_subtitle: "ଭାରତର ଐତିହ୍ୟରେ ଆପଣଙ୍କ ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ",
      username: "ବ୍ୟବହାରକାରୀ ନାମ",
      password: "ପାସୱାର୍ଡ",
      forgot_password: "ପାସୱାର୍ଡ ଭୁଲିଗଲେ?",
      or_sign_in: "ନାହିଲେ ଅନ୍ୟ ମାଧ୍ୟମରେ ସାଇନ୍ ଇନ୍ କରନ୍ତୁ",
      no_account: "ଖାତା ନାହିଁ?",
      signup_link: "ସାଇନ୍ ଅପ୍",
      login_required: "ବ୍ୟବହାରକାରୀ ନାମ ଏବଂ ପାସୱାର୍ଡ ଦୁଇଟି ଆବଶ୍ୟକ।",
      login_success: "ଲଗଇନ୍ ସଫଳ ✅",

      // SignUp specific
      "Sign Up": "ସାଇନ୍ ଅପ୍",
      "Create New Account": "ନୂଆ ଖାତା ସୃଷ୍ଟି କରନ୍ତୁ",
      confirm_password: "ପାସୱାର୍ଡ ସନ୍ଦ୍ରଭ",
      password_mismatch: "ପାସୱାର୍ଡ ସମାନ ନୁହେଁ।",
      signup_success: "ସାଇନ୍ ଅପ୍ ସଫଳ ✅",
      signup_failed: "ସାଇନ୍ ଅପ୍ ବିଫଳ। ଦୟାକରି ପୁଣିଚାଲନ୍ତୁ।",
      "Or Sign Up With": "ନାହିଲେ ସାଇନ୍ ଅପ୍ କରନ୍ତୁ",
      "Already have an account?": "ଆଗରୁ ଖାତା ଅଛି?",
      Login: "ଲଗଇନ୍",

      // ----- Home Page -----
        greeting_small: "ହାଇ, ନମନ",
        greeting_large: "ଶୁଭ ସକାଳ",
        explore_text: "ଆସନ୍ତୁ ଆମର ଐତିହ୍ୟକୁ ଅନୁସନ୍ଧାନ କରିବା",
        search_placeholder: "ସ୍ମାରକଗୁଡିକୁ ଖୋଜନ୍ତୁ",
        popular_sites: "ଲୋକପ୍ରିୟ ସ୍ଥଳଗୁଡିକ",
        recommended: "ସୁପାରିଶୀ",
        bottom_home: "ହୋମ୍",
        bottom_explore: "ଅନ୍ବେଷଣ",
        bottom_travel: "ଭ୍ରମଣ",
        bottom_profile: "ପ୍ରୋଫାଇଲ୍",
        

        // ✅ Common
        explore_title: "ଅନ୍ବେଷଣ କରନ୍ତୁ",
        search_placeholder: "ସ୍ମାରକ ସନ୍ଧାନ କରନ୍ତୁ",

        // ✅ Monuments
        taj_mahal: "ତାଜ୍‌ମହଲ୍",
        ellora_caves: "ଏଲୋରା ଗୁହା",
        hawa_mahal: "ହାୱା ମହଲ୍",
        gadisar_lake: "ଗଡିସର ଝିଲ୍",
        hampi_temple: "ହମ୍ପି ମନ୍ଦିର",
        charminar: "ଚାରମିନାର",
        jantar_mantar: "ଜନ୍ତର ମନ୍ତର",
        elephanta_caves: "ଏଲିଫାଣ୍ଟା ଗୁହା",
        qutub_minar: "କୁତୁବ୍ ମିନାର୍",
        sun_temple: "ସୂର୍ଯ୍ୟ ମନ୍ଦିର",
        buland_darwaza: "ବୁଲନ୍ଦ ଦରୱାଜା",
        pavagadh: "ପାବାଗଡ",
        khajuraho_temple: "ଖଜୁରାହୋ ମନ୍ଦିର",
        humayuns_tomb: "ହୁମାୟୁନ୍‌ର ସମାଧି",
        rani_ki_vav: "ରାଣୀ କି ୱାଵ",
        amber_fort: "ଆମ୍ବେର କୋଟ",

        // ✅ Bottom Tabs
        home: "ହୋମ୍",
        explore: "ଅନ୍ବେଷଣ",
        travel: "ଭ୍ରମଣ",
        profile: "ପ୍ରୋଫାଇଲ୍"
    },
  },
};

// ✅ Detect device locale and pick base language
const locale = Localization.locale || "en";
const languageCode = locale.split("-")[0] || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: languageCode,
  fallbackLng: "en",
  compatibilityJSON: "v3",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
