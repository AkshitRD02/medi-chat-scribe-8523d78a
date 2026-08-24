import { useKiosk, type SocratesKey } from "./kiosk-store";

export const LANGUAGES = ["English", "हिंदी", "मराठी", "தமிழ்"] as const;
export type Language = (typeof LANGUAGES)[number];

export type Dict = {
  stationActive: string;
  welcomeTitle: string;
  welcomeSubtitle: string;
  preferredLanguage: string;
  consent: string;
  scanTitle: string;
  scanning: string;
  verified: string;
  scanHelpConsented: string;
  scanHelpNoConsent: string;
  or: string;
  manualEntry: string;

  assistantName: string;
  assistantSubtitle: string;
  greeting: string;
  typing: string;
  extracted: string;
  inputPlaceholder: string;
  uploadLabel: string;
  sendLabel: string;
  markers: (n: number) => string;
  viewSummary: string;
  genericError: string;

  summaryTitle: string;
  patientId: string;
  notVerified: string;
  filed: string;
  draft: string;
  chiefComplaint: string;
  hpi: string;
  pmh: string;
  extractedData: string;
  notRecorded: string;
  noDocuments: string;
  edit: string;
  doneEditing: string;
  defer: string;
  confirm: string;
  confirmed: string;
  awaitingComplaint: string;
  awaitingHpi: string;
  socrates: Record<SocratesKey, string>;
};

const en: Dict = {
  stationActive: "Station 04 • Active",
  welcomeTitle: "Welcome to MediKiosk",
  welcomeSubtitle:
    "Please prepare your ABHA ID or scan the QR code to begin your digital intake process.",
  preferredLanguage: "Preferred Language",
  consent:
    "I consent to MediKiosk collecting my symptoms and health records for this consultation and sharing them with my treating physician.",
  scanTitle: "Scan ABHA QR Code",
  scanning: "Scanning…",
  verified: "Verified",
  scanHelpConsented: "Position your ID card within the frame",
  scanHelpNoConsent: "Please accept the consent above to continue",
  or: "or",
  manualEntry: "Enter ABHA Number Manually",

  assistantName: "Clinical Intake Assistant",
  assistantSubtitle: "Powered by SOCRATES framework",
  greeting:
    "Hello, I'm here to help prepare your summary for the doctor. What is bothering you today? Please describe your main symptom.",
  typing: "Assistant is typing…",
  extracted: "extracted",
  inputPlaceholder: "Describe your symptoms...",
  uploadLabel: "Upload a medical document",
  sendLabel: "Send",
  markers: (n) => `${n} of 8 SOCRATES markers captured`,
  viewSummary: "View clinical summary",
  genericError: "Something went wrong. Please try again.",

  summaryTitle: "Clinical Summary",
  patientId: "Patient ID",
  notVerified: "Not verified",
  filed: "Filed",
  draft: "Draft Record",
  chiefComplaint: "Chief Complaint",
  hpi: "History of Present Illness",
  pmh: "Past Medical History",
  extractedData: "Extracted Document Data",
  notRecorded: "Not yet recorded.",
  noDocuments: "No documents uploaded.",
  edit: "Edit Details",
  doneEditing: "Done Editing",
  defer: "Defer",
  confirm: "Confirm Entry",
  confirmed: "Entry Confirmed",
  awaitingComplaint: "Awaiting completion of the symptom interview.",
  awaitingHpi:
    "The patient interview is still in progress. Return to the intake chat so the assistant can complete the SOCRATES assessment.",
  socrates: {
    site: "Site",
    onset: "Onset",
    character: "Character",
    radiation: "Radiation",
    associations: "Associated symptoms",
    time: "Timing",
    exacerbating: "Exacerbating / relieving",
    severity: "Severity",
  },
};

const hi: Dict = {
  stationActive: "स्टेशन 04 • सक्रिय",
  welcomeTitle: "मेडीकियोस्क में आपका स्वागत है",
  welcomeSubtitle:
    "कृपया अपना ABHA आईडी तैयार रखें या डिजिटल पंजीकरण शुरू करने के लिए QR कोड स्कैन करें।",
  preferredLanguage: "पसंदीदा भाषा",
  consent:
    "मैं सहमति देता/देती हूँ कि मेडीकियोस्क इस परामर्श हेतु मेरे लक्षण और स्वास्थ्य रिकॉर्ड एकत्र करे और मेरे चिकित्सक के साथ साझा करे।",
  scanTitle: "ABHA QR कोड स्कैन करें",
  scanning: "स्कैन हो रहा है…",
  verified: "सत्यापित",
  scanHelpConsented: "अपना आईडी कार्ड फ्रेम के भीतर रखें",
  scanHelpNoConsent: "जारी रखने के लिए कृपया ऊपर सहमति स्वीकार करें",
  or: "अथवा",
  manualEntry: "ABHA नंबर मैन्युअल रूप से दर्ज करें",

  assistantName: "क्लिनिकल इनटेक सहायक",
  assistantSubtitle: "SOCRATES ढांचे पर आधारित",
  greeting:
    "नमस्ते, मैं डॉक्टर के लिए आपका सारांश तैयार करने में मदद करने के लिए यहाँ हूँ। आज आपको क्या तकलीफ है? कृपया अपना मुख्य लक्षण बताइए।",
  typing: "सहायक लिख रहा है…",
  extracted: "से जानकारी निकाली गई",
  inputPlaceholder: "अपने लक्षण बताइए...",
  uploadLabel: "मेडिकल दस्तावेज़ अपलोड करें",
  sendLabel: "भेजें",
  markers: (n) => `8 में से ${n} SOCRATES बिंदु दर्ज`,
  viewSummary: "क्लिनिकल सारांश देखें",
  genericError: "कुछ गड़बड़ हो गई। कृपया पुनः प्रयास करें।",

  summaryTitle: "क्लिनिकल सारांश",
  patientId: "रोगी आईडी",
  notVerified: "सत्यापित नहीं",
  filed: "दर्ज",
  draft: "प्रारूप रिकॉर्ड",
  chiefComplaint: "मुख्य शिकायत",
  hpi: "वर्तमान बीमारी का इतिहास",
  pmh: "पूर्व चिकित्सा इतिहास",
  extractedData: "दस्तावेज़ से प्राप्त डेटा",
  notRecorded: "अभी दर्ज नहीं।",
  noDocuments: "कोई दस्तावेज़ अपलोड नहीं किया गया।",
  edit: "विवरण संपादित करें",
  doneEditing: "संपादन पूर्ण",
  defer: "स्थगित करें",
  confirm: "प्रविष्टि पुष्टि करें",
  confirmed: "प्रविष्टि पुष्ट",
  awaitingComplaint: "लक्षण साक्षात्कार पूरा होने की प्रतीक्षा है।",
  awaitingHpi:
    "रोगी का साक्षात्कार अभी जारी है। कृपया चैट पर लौटें ताकि सहायक SOCRATES मूल्यांकन पूरा कर सके।",
  socrates: {
    site: "स्थान",
    onset: "शुरुआत",
    character: "प्रकृति",
    radiation: "फैलाव",
    associations: "संबंधित लक्षण",
    time: "समय",
    exacerbating: "बढ़ाने / घटाने वाले कारक",
    severity: "तीव्रता",
  },
};

const mr: Dict = {
  stationActive: "स्टेशन 04 • सक्रिय",
  welcomeTitle: "मेडीकिओस्कमध्ये आपले स्वागत आहे",
  welcomeSubtitle:
    "कृपया आपले ABHA ओळखपत्र तयार ठेवा किंवा डिजिटल नोंदणी सुरू करण्यासाठी QR कोड स्कॅन करा.",
  preferredLanguage: "पसंतीची भाषा",
  consent:
    "या सल्ल्यासाठी मेडीकिओस्कने माझी लक्षणे व आरोग्य नोंदी गोळा करून माझ्या डॉक्टरांसोबत सामायिक करण्यास मी संमती देतो/देते.",
  scanTitle: "ABHA QR कोड स्कॅन करा",
  scanning: "स्कॅन होत आहे…",
  verified: "पडताळले",
  scanHelpConsented: "आपले ओळखपत्र चौकटीत ठेवा",
  scanHelpNoConsent: "पुढे जाण्यासाठी कृपया वरील संमती स्वीकारा",
  or: "किंवा",
  manualEntry: "ABHA क्रमांक स्वतः प्रविष्ट करा",

  assistantName: "क्लिनिकल इनटेक सहाय्यक",
  assistantSubtitle: "SOCRATES चौकटीवर आधारित",
  greeting:
    "नमस्कार, डॉक्टरांसाठी आपला सारांश तयार करण्यात मी मदत करतो. आज आपल्याला काय त्रास होत आहे? कृपया आपले मुख्य लक्षण सांगा.",
  typing: "सहाय्यक लिहित आहे…",
  extracted: "मधून माहिती काढली",
  inputPlaceholder: "आपली लक्षणे सांगा...",
  uploadLabel: "वैद्यकीय कागदपत्र अपलोड करा",
  sendLabel: "पाठवा",
  markers: (n) => `8 पैकी ${n} SOCRATES नोंदी`,
  viewSummary: "क्लिनिकल सारांश पहा",
  genericError: "काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.",

  summaryTitle: "क्लिनिकल सारांश",
  patientId: "रुग्ण आयडी",
  notVerified: "पडताळलेले नाही",
  filed: "नोंदवले",
  draft: "मसुदा नोंद",
  chiefComplaint: "मुख्य तक्रार",
  hpi: "सद्य आजाराचा इतिहास",
  pmh: "पूर्वीचा वैद्यकीय इतिहास",
  extractedData: "कागदपत्रातून मिळालेली माहिती",
  notRecorded: "अद्याप नोंद नाही.",
  noDocuments: "कोणतेही कागदपत्र अपलोड केलेले नाही.",
  edit: "तपशील संपादित करा",
  doneEditing: "संपादन पूर्ण",
  defer: "पुढे ढकला",
  confirm: "नोंद निश्चित करा",
  confirmed: "नोंद निश्चित झाली",
  awaitingComplaint: "लक्षण मुलाखत पूर्ण होण्याची प्रतीक्षा आहे.",
  awaitingHpi:
    "रुग्णाची मुलाखत सुरू आहे. सहाय्यक SOCRATES मूल्यांकन पूर्ण करू शकेल यासाठी चॅटवर परत जा.",
  socrates: {
    site: "ठिकाण",
    onset: "सुरुवात",
    character: "स्वरूप",
    radiation: "प्रसार",
    associations: "संबंधित लक्षणे",
    time: "वेळ",
    exacerbating: "वाढवणारे / कमी करणारे घटक",
    severity: "तीव्रता",
  },
};

const ta: Dict = {
  stationActive: "நிலையம் 04 • செயலில்",
  welcomeTitle: "மெடிகியாஸ்க்-க்கு வரவேற்கிறோம்",
  welcomeSubtitle:
    "உங்கள் ABHA அடையாள அட்டையை தயார் செய்யவும் அல்லது பதிவைத் தொடங்க QR குறியீட்டை ஸ்கேன் செய்யவும்.",
  preferredLanguage: "விருப்ப மொழி",
  consent:
    "இந்த ஆலோசனைக்காக என் அறிகுறிகளையும் மருத்துவப் பதிவுகளையும் மெடிகியாஸ்க் சேகரித்து என் மருத்துவருடன் பகிர்ந்து கொள்ள ஒப்புக்கொள்கிறேன்.",
  scanTitle: "ABHA QR குறியீட்டை ஸ்கேன் செய்யவும்",
  scanning: "ஸ்கேன் செய்யப்படுகிறது…",
  verified: "சரிபார்க்கப்பட்டது",
  scanHelpConsented: "உங்கள் அட்டையை சட்டகத்திற்குள் வைக்கவும்",
  scanHelpNoConsent: "தொடர மேலே உள்ள ஒப்புதலை ஏற்கவும்",
  or: "அல்லது",
  manualEntry: "ABHA எண்ணை கைமுறையாக உள்ளிடவும்",

  assistantName: "மருத்துவ பதிவு உதவியாளர்",
  assistantSubtitle: "SOCRATES கட்டமைப்பின் அடிப்படையில்",
  greeting:
    "வணக்கம், மருத்துவருக்கான உங்கள் சுருக்கத்தை தயாரிக்க நான் உதவுகிறேன். இன்று உங்களுக்கு என்ன தொந்தரவு? உங்கள் முக்கிய அறிகுறியை விவரிக்கவும்.",
  typing: "உதவியாளர் தட்டச்சு செய்கிறார்…",
  extracted: "இலிருந்து தரவு எடுக்கப்பட்டது",
  inputPlaceholder: "உங்கள் அறிகுறிகளை விவரிக்கவும்...",
  uploadLabel: "மருத்துவ ஆவணத்தை பதிவேற்றவும்",
  sendLabel: "அனுப்பு",
  markers: (n) => `8-ல் ${n} SOCRATES குறிப்புகள் பதிவு`,
  viewSummary: "மருத்துவ சுருக்கத்தைப் பார்க்க",
  genericError: "ஏதோ தவறு நடந்தது. மீண்டும் முயற்சிக்கவும்.",

  summaryTitle: "மருத்துவ சுருக்கம்",
  patientId: "நோயாளி அடையாளம்",
  notVerified: "சரிபார்க்கப்படவில்லை",
  filed: "பதிவு செய்யப்பட்டது",
  draft: "வரைவு பதிவு",
  chiefComplaint: "முதன்மை புகார்",
  hpi: "தற்போதைய நோயின் வரலாறு",
  pmh: "முந்தைய மருத்துவ வரலாறு",
  extractedData: "ஆவணத்திலிருந்து பெறப்பட்ட தரவு",
  notRecorded: "இன்னும் பதிவு செய்யப்படவில்லை.",
  noDocuments: "ஆவணங்கள் எதுவும் பதிவேற்றப்படவில்லை.",
  edit: "விவரங்களை திருத்து",
  doneEditing: "திருத்தம் முடிந்தது",
  defer: "ஒத்திவை",
  confirm: "பதிவை உறுதிப்படுத்து",
  confirmed: "பதிவு உறுதி செய்யப்பட்டது",
  awaitingComplaint: "அறிகுறி நேர்காணல் முடிவடையக் காத்திருக்கிறது.",
  awaitingHpi:
    "நோயாளியின் நேர்காணல் தொடர்கிறது. உதவியாளர் SOCRATES மதிப்பீட்டை முடிக்க அரட்டைக்குத் திரும்பவும்.",
  socrates: {
    site: "இடம்",
    onset: "தொடக்கம்",
    character: "தன்மை",
    radiation: "பரவல்",
    associations: "தொடர்புடைய அறிகுறிகள்",
    time: "நேரம்",
    exacerbating: "அதிகரிக்கும் / குறைக்கும் காரணிகள்",
    severity: "தீவிரம்",
  },
};

export const DICTS: Record<string, Dict> = {
  English: en,
  "हिंदी": hi,
  "मराठी": mr,
  "தமிழ்": ta,
};

export function getDict(language: string): Dict {
  return DICTS[language] ?? en;
}

export function useT(): Dict {
  const { language } = useKiosk();
  return getDict(language);
}
