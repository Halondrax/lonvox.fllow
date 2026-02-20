import React from 'react';
import { Platform, ServicePackage, LanguageCode, TranslationDictionary } from './types';

export const LOGOS = {
  [Platform.TikTok]: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png",
  [Platform.Instagram]: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
  [Platform.Telegram]: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
};

export const SERVICES: ServicePackage[] = [
  // --- TikTok Views ---
  { id: 'tt-views-1k', platform: Platform.TikTok, type: 'Views', amount: 1000, price: 2, deliveryTime: '30 Minute' },
  { id: 'tt-views-2k', platform: Platform.TikTok, type: 'Views', amount: 2000, price: 3, deliveryTime: '30 Minute' },
  { id: 'tt-views-10k', platform: Platform.TikTok, type: 'Views', amount: 10000, price: 5, deliveryTime: '48 Hours' },
  { id: 'tt-views-15k', platform: Platform.TikTok, type: 'Views', amount: 15000, price: 10, deliveryTime: '30 Minute' },
  { id: 'tt-views-20k', platform: Platform.TikTok, type: 'Views', amount: 20000, price: 15, deliveryTime: '48 Hours' },
  { id: 'tt-views-30k', platform: Platform.TikTok, type: 'Views', amount: 30000, price: 20, deliveryTime: '48 Hours' },
  { id: 'tt-views-50k', platform: Platform.TikTok, type: 'Views', amount: 50000, price: 25, deliveryTime: '48 Hours' },
  { id: 'tt-views-60k', platform: Platform.TikTok, type: 'Views', amount: 60000, price: 30, deliveryTime: '48 Hours' },
  { id: 'tt-views-70k', platform: Platform.TikTok, type: 'Views', amount: 70000, price: 50, deliveryTime: '48 Hours' },

  // --- TikTok Followers ---
  { id: 'tt-followers-100', platform: Platform.TikTok, type: 'Followers', amount: 100, price: 15, deliveryTime: '30 Minute' },
  { id: 'tt-followers-200-a', platform: Platform.TikTok, type: 'Followers', amount: 200, price: 30, deliveryTime: '30 Minute' },
  { id: 'tt-followers-300-b', platform: Platform.TikTok, type: 'Followers', amount: 300, price: 50, deliveryTime: '30 Minute' },
  { id: 'tt-followers-1k', platform: Platform.TikTok, type: 'Followers', amount: 1000, price: 60, deliveryTime: '48 Hours' },
  { id: 'tt-followers-2k', platform: Platform.TikTok, type: 'Followers', amount: 2000, price: 80, deliveryTime: '48 Hours' },
  { id: 'tt-followers-4k', platform: Platform.TikTok, type: 'Followers', amount: 4000, price: 100, deliveryTime: '48 Hours' },
  { id: 'tt-followers-6k', platform: Platform.TikTok, type: 'Followers', amount: 6000, price: 150, deliveryTime: '48 Hours' },
  { id: 'tt-followers-7k', platform: Platform.TikTok, type: 'Followers', amount: 7000, price: 200, deliveryTime: '48 Hours' },
  { id: 'tt-followers-8k', platform: Platform.TikTok, type: 'Followers', amount: 8000, price: 300, deliveryTime: '48 Hours' },

  // --- TikTok Likes ---
  { id: 'tt-likes-300', platform: Platform.TikTok, type: 'Likes', amount: 300, price: 5, deliveryTime: '30 Minute' },
  { id: 'tt-likes-400', platform: Platform.TikTok, type: 'Likes', amount: 400, price: 15, deliveryTime: '30 Minute' },
  { id: 'tt-likes-500', platform: Platform.TikTok, type: 'Likes', amount: 500, price: 20, deliveryTime: '30 Minute' },
  { id: 'tt-likes-1k', platform: Platform.TikTok, type: 'Likes', amount: 1000, price: 30, deliveryTime: '48 Hours' },
  { id: 'tt-likes-2k', platform: Platform.TikTok, type: 'Likes', amount: 2000, price: 40, deliveryTime: '48 Hours' },
  { id: 'tt-likes-3k', platform: Platform.TikTok, type: 'Likes', amount: 3000, price: 50, deliveryTime: '48 Hours' },
  { id: 'tt-likes-4k', platform: Platform.TikTok, type: 'Likes', amount: 4000, price: 60, deliveryTime: '48 Hours' },
  { id: 'tt-likes-5k', platform: Platform.TikTok, type: 'Likes', amount: 5000, price: 80, deliveryTime: '48 Hours' },
  { id: 'tt-likes-10k', platform: Platform.TikTok, type: 'Likes', amount: 10000, price: 150, deliveryTime: '48 Hours' },

  // --- TikTok Shares ---
  { id: 'tt-shares-100', platform: Platform.TikTok, type: 'Shares', amount: 100, price: 2, deliveryTime: '30 Minute' },
  { id: 'tt-shares-200', platform: Platform.TikTok, type: 'Shares', amount: 200, price: 3, deliveryTime: '30 Minute' },
  { id: 'tt-shares-300', platform: Platform.TikTok, type: 'Shares', amount: 300, price: 4, deliveryTime: '30 Minute' },
  { id: 'tt-shares-400', platform: Platform.TikTok, type: 'Shares', amount: 400, price: 5, deliveryTime: '30 Minute' },
  { id: 'tt-shares-500', platform: Platform.TikTok, type: 'Shares', amount: 500, price: 6, deliveryTime: '30 Minute' },
  { id: 'tt-shares-1k', platform: Platform.TikTok, type: 'Shares', amount: 1000, price: 10, deliveryTime: '48 Hours' },
  { id: 'tt-shares-2k', platform: Platform.TikTok, type: 'Shares', amount: 2000, price: 15, deliveryTime: '48 Hours' },
  { id: 'tt-shares-3k', platform: Platform.TikTok, type: 'Shares', amount: 3000, price: 20, deliveryTime: '48 Hours' },
  { id: 'tt-shares-4k', platform: Platform.TikTok, type: 'Shares', amount: 4000, price: 30, deliveryTime: '48 Hours' },

  // --- TikTok Favorites ---
  { id: 'tt-favorites-100', platform: Platform.TikTok, type: 'Favorites', amount: 100, price: 2, deliveryTime: '30 Minute' },
  { id: 'tt-favorites-200', platform: Platform.TikTok, type: 'Favorites', amount: 200, price: 3, deliveryTime: '30 Minute' },
  { id: 'tt-favorites-300', platform: Platform.TikTok, type: 'Favorites', amount: 300, price: 5, deliveryTime: '30 Minute' },
  { id: 'tt-favorites-400', platform: Platform.TikTok, type: 'Favorites', amount: 400, price: 8, deliveryTime: '30 Minute' },
  { id: 'tt-favorites-500', platform: Platform.TikTok, type: 'Favorites', amount: 500, price: 10, deliveryTime: '30 Minute' },
  { id: 'tt-favorites-1k', platform: Platform.TikTok, type: 'Favorites', amount: 1000, price: 20, deliveryTime: '48 Hours' },
  { id: 'tt-favorites-2k', platform: Platform.TikTok, type: 'Favorites', amount: 2000, price: 30, deliveryTime: '48 Hours' },
  { id: 'tt-favorites-3k', platform: Platform.TikTok, type: 'Favorites', amount: 3000, price: 40, deliveryTime: '48 Hours' },
  { id: 'tt-favorites-4k', platform: Platform.TikTok, type: 'Favorites', amount: 4000, price: 50, deliveryTime: '48 Hours' },
  
  // --- Instagram (Generic) ---
  { id: 'ig-views', platform: Platform.Instagram, type: 'Views', amount: 1000, price: 20 },
  { id: 'ig-followers', platform: Platform.Instagram, type: 'Followers', amount: 1000, price: 20 },
  { id: 'ig-likes', platform: Platform.Instagram, type: 'Likes', amount: 1000, price: 20 },
  { id: 'ig-shares', platform: Platform.Instagram, type: 'Shares', amount: 1000, price: 20 },
  { id: 'ig-favorites', platform: Platform.Instagram, type: 'Favorites', amount: 1000, price: 20 },
  
  // --- Telegram (Generic) ---
  { id: 'tg-views', platform: Platform.Telegram, type: 'Views', amount: 1000, price: 20 },
  { id: 'tg-followers', platform: Platform.Telegram, type: 'Followers', amount: 1000, price: 20 },
  { id: 'tg-likes', platform: Platform.Telegram, type: 'Likes', amount: 1000, price: 20 },
];

export const MOCK_CHECKOUT_URL = "https://example.com/checkout";

export const LANGUAGES: { code: LanguageCode; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: 'https://feedpixel.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png' },
  { code: 'fr', name: 'French', flag: 'https://feedpixel.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/fr_FR.png' },
  { code: 'de', name: 'German', flag: 'https://feedpixel.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/de_DE.png' },
  { code: 'pt', name: 'Portuguese', flag: 'https://feedpixel.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/pt_PT.png' },
  { code: 'ar', name: 'Arabic', flag: 'https://feedpixel.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/ar.png' },
  { code: 'es', name: 'Spanish', flag: 'https://feedpixel.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/es_ES.png' },
];

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: {
    nav: { 
      features: 'Features', useCases: 'Use Cases', pricing: 'Pricing', influencers: 'Influencers', resources: 'Resources', company: 'Company', login: 'Log in', getStarted: 'Get Started',
      blogToVideo: 'Blog to Video', textToVideo: 'Text to Video', avatarGen: 'AI Avatar Generator', sceneGen: 'AI Scene Generator', autoEdit: 'AI Automated Editing', voiceClone: 'AI Voice Cloning',
      marketing: 'Marketing Videos', education: 'Educational Videos', business: 'Business Videos', videoAds: 'AI Video Ads', influencersByCountry: 'Influencers by Countries'
    },
    hero: { systemOp: 'System Operational', title1: 'GALACTIC', title2: 'GROWTH', subtitle: 'Propel your social presence into the stratosphere. Advanced algorithmic engagement for the next generation of creators.' },
    pricing: { freeTrial: 'Free Trial', initiate: 'Initiate Sequence', totalCost: 'Total Cost', all: 'All' },
    performance: {
      marketAnalysis: 'Market Analysis', title: 'Client Performance Data', subtitle: '"Our TikTok followers service consistently earns client praise for delivering instant credibility and robust engagement. Users report that increased follower counts directly correlate with higher organic reach and stronger brand authority."',
      credibilityTitle: 'Instant Credibility', credibilityDesc: 'Establishing authority is crucial. Our clients leverage high follower counts to build immediate trust.',
      engagementTitle: 'Enhanced Engagement', engagementDesc: 'Active engagement signals the algorithm to boost visibility. Clients report a 40% uptick in organic interactions.',
      resultsTitle: 'Verifiable Results', resultsDesc: 'We deliver measurable ROI. From profile visits to link clicks, our services convert traffic into tangible metrics.',
      resultsNote: 'Like and share our page content with your friends. Your continued support and encouragement help us to provide likes, comments, shares, or saves, which contributes to increasing our reach!',
      subRateTitle: 'Subscription rate', subRateDesc: 'This TikTok company is associated with a platform that increases account engagement by tracking views, followers, likes, shares, and favorites.',
      subRateNote: 'Over 32,200 TikTok users are engaging with your videos every day! Each like, comment, and share is helping your content reach new audiences and grow your presence',
      verified: 'Verified Creator'
    },
    community: { title: 'Global Creator Network', subtitle: 'Join thousands of creators who have accelerated their growth.' },
    contact: { 
      badge: 'Communications Array', title: 'Initialize Connection', subtitle: 'Establish a direct line with our command center. We respond to all frequencies within 24 standard hours.',
      name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', submit: 'Transmit Message',
      placeholderName: 'COMMANDER SHEPARD', placeholderEmail: 'USER@FLEET.COM', placeholderSubject: 'MISSION BRIEFING', placeholderMessage: 'TRANSMIT MESSAGE CONTENTS...'
    },
    footer: { company: 'Company', programs: 'Programs', resources: 'Resources', legal: 'Legal' },
    modal: {
      configure: 'Configure Order', cryptoTitle: 'Crypto Purchase', secure: 'Secure Transmission', target: 'Target Destination', placeholder: 'Enter username or link',
      required: 'Required field', tooShort: 'Input too short', engage: 'ENGAGE BOOST', back: 'Back to Details', selectPayment: 'Select Payment Method',
      sendOnly: 'Send only', copied: 'COPIED!', sentBtn: 'I HAVE SENT THE FUNDS', verifying: 'VERIFYING...', transferDetected: 'Transfer Detected',
      sentSuccess: 'Sent successfully.', wait: '2 minutes', close: 'Close Window', encrypted: 'Encrypted', verified: 'Verified'
    }
  },
  fr: {
    nav: { 
      features: 'Fonctionnalités', useCases: 'Cas d\'utilisation', pricing: 'Tarifs', influencers: 'Influenceurs', resources: 'Ressources', company: 'Entreprise', login: 'Connexion', getStarted: 'Commencer',
      blogToVideo: 'Blog en Vidéo', textToVideo: 'Texte en Vidéo', avatarGen: 'Générateur d\'Avatar IA', sceneGen: 'Générateur de Scènes IA', autoEdit: 'Montage Automatisé IA', voiceClone: 'Clonage de Voix IA',
      marketing: 'Vidéos Marketing', education: 'Vidéos Éducatives', business: 'Vidéos d\'Affaires', videoAds: 'Publicités Vidéo IA', influencersByCountry: 'Influenceurs par Pays'
    },
    hero: { systemOp: 'Système Opérationnel', title1: 'CROISSANCE', title2: 'GALACTIQUE', subtitle: 'Propulsez votre présence sociale dans la stratosphère. Engagement algorithmique avancé pour la prochaine génération de créateurs.' },
    pricing: { freeTrial: 'Essai Gratuit', initiate: 'Lancer la Séquence', totalCost: 'Coût Total', all: 'Tout' },
    performance: {
      marketAnalysis: 'Analyse de Marché', title: 'Données de Performance Client', subtitle: '"Notre service de followers TikTok reçoit constamment des éloges pour offrir une crédibilité instantanée et un engagement solide. Les utilisateurs signalent que l\'augmentation du nombre de followers est directement corrélée à une portée organique plus élevée."',
      credibilityTitle: 'Crédibilité Instantanée', credibilityDesc: 'Établir une autorité est crucial. Nos clients tirent parti d\'un nombre élevé de followers pour instaurer une confiance immédiate.',
      engagementTitle: 'Engagement Amélioré', engagementDesc: 'Un engagement actif signale à l\'algorithme de booster la visibilité. Les clients rapportent une hausse de 40% des interactions organiques.',
      resultsTitle: 'Résultats Vérifiables', resultsDesc: 'Nous offrons un ROI mesurable. Des visites de profil aux clics sur les liens, nos services convertissent le trafic en métriques tangibles.',
      resultsNote: 'Aimez et partagez le contenu de notre page avec vos amis. Votre soutien continu nous aide à fournir des likes, des commentaires, des partages ou des enregistrements !',
      subRateTitle: 'Taux d\'abonnement', subRateDesc: 'Cette entreprise TikTok est associée à une plateforme qui augmente l\'engagement du compte en suivant les vues, les followers, les likes, les partages et les favoris.',
      subRateNote: 'Plus de 32 200 utilisateurs TikTok s\'engagent avec vos vidéos chaque jour ! Chaque like, commentaire et partage aide votre contenu à atteindre de nouveaux publics.',
      verified: 'Créateur Vérifié'
    },
    community: { title: 'Réseau Mondial de Créateurs', subtitle: 'Rejoignez des milliers de créateurs qui ont accéléré leur croissance.' },
    contact: { 
      badge: 'Réseau de Communication', title: 'Initialiser la Connexion', subtitle: 'Établissez une ligne directe avec notre centre de commandement. Nous répondons à toutes les fréquences dans les 24 heures standard.',
      name: 'Nom', email: 'Email', subject: 'Sujet', message: 'Message', submit: 'Transmettre le Message',
      placeholderName: 'COMMANDANT SHEPARD', placeholderEmail: 'USER@FLEET.COM', placeholderSubject: 'BRIEFING DE MISSION', placeholderMessage: 'TRANSMETTRE LE CONTENU DU MESSAGE...'
    },
    footer: { company: 'Entreprise', programs: 'Programmes', resources: 'Ressources', legal: 'Légal' },
    modal: {
      configure: 'Configurer la Commande', cryptoTitle: 'Achat Crypto', secure: 'Transmission Sécurisée', target: 'Destination Cible', placeholder: 'Entrez le nom d\'utilisateur ou le lien',
      required: 'Champ requis', tooShort: 'Entrée trop courte', engage: 'BOOST D\'ENGAGEMENT', back: 'Retour aux Détails', selectPayment: 'Choisir le Paiement',
      sendOnly: 'Envoyer uniquement', copied: 'COPIÉ !', sentBtn: 'J\'AI ENVOYÉ LES FONDS', verifying: 'VÉRIFICATION...', transferDetected: 'Transfert Détecté',
      sentSuccess: 'Envoyé avec succès.', wait: '2 minutes', close: 'Fermer la Fenêtre', encrypted: 'Chiffré', verified: 'Vérifié'
    }
  },
  ar: {
    nav: { 
      features: 'الميزات', useCases: 'حالات الاستخدام', pricing: 'الأسعار', influencers: 'المؤثرون', resources: 'الموارد', company: 'الشركة', login: 'تسجيل الدخول', getStarted: 'ابدأ الآن',
      blogToVideo: 'من مدونة إلى فيديو', textToVideo: 'من نص إلى فيديو', avatarGen: 'مولد أفاتار بالذكاء الاصطناعي', sceneGen: 'مولد مشاهد بالذكاء الاصطناعي', autoEdit: 'تحرير تلقائي بالذكاء الاصطناعي', voiceClone: 'استنساخ الصوت بالذكاء الاصطناعي',
      marketing: 'فيديوهات تسويقية', education: 'فيديوهات تعليمية', business: 'فيديوهات تجارية', videoAds: 'إعلانات فيديو بالذكاء الاصطناعي', influencersByCountry: 'المؤثرون حسب البلد'
    },
    hero: { systemOp: 'النظام يعمل', title1: 'نمو', title2: 'مجري', subtitle: 'ادفع وجودك الاجتماعي إلى طبقة الستراتوسفير. مشاركة خوارزمية متقدمة للجيل القادم من المبدعين.' },
    pricing: { freeTrial: 'تجربة مجانية', initiate: 'بدء التسلسل', totalCost: 'التكلفة الإجمالية', all: 'الكل' },
    performance: {
      marketAnalysis: 'تحليل السوق', title: 'بيانات أداء العملاء', subtitle: '"خدمة متابعي TikTok الخاصة بنا تحظى بثناء العملاء باستمرار لتوفيرها مصداقية فورية ومشاركة قوية. يبلغ المستخدمون أن زيادة أعداد المتابعين ترتبط ارتباطًا مباشرًا بزيادة الوصول العضوي وقوة العلامة التجارية."',
      credibilityTitle: 'مصداقية فورية', credibilityDesc: 'تأسيس السلطة أمر بالغ الأهمية. يستفيد عملاؤنا من أعداد المتابعين العالية لبناء ثقة فورية.',
      engagementTitle: 'مشاركة محسنة', engagementDesc: 'المشاركة النشطة تشير للخوارزمية بزيادة الرؤية. يبلغ العملاء عن زيادة بنسبة 40% في التفاعلات العضوية.',
      resultsTitle: 'نتائج يمكن التحقق منها', resultsDesc: 'نحن نقدم عائد استثمار قابل للقياس. من زيارات الملف الشخصي إلى النقرات على الروابط، تحول خدماتنا حركة المرور إلى مقاييس ملموسة.',
      resultsNote: 'أعجب وشارك محتوى صفحتنا مع أصدقائك. دعمكم وتشجيعكم المستمر يساعدنا على تقديم الإعجابات والتعليقات والمشاركات مما يساهم في زيادة وصولنا!',
      subRateTitle: 'معدل الاشتراك', subRateDesc: 'ترتبط شركة TikTok هذه بمنصة تزيد من مشاركة الحساب من خلال تتبع المشاهدات والمتابعين والإعجابات والمشاركات والمفضلة.',
      subRateNote: 'أكثر من 32,200 مستخدم TikTok يتفاعلون مع مقاطع الفيديو الخاصة بك كل يوم! كل إعجاب وتعليق ومشاركة يساعد المحتوى الخاص بك في الوصول إلى جماهير جديدة.',
      verified: 'منشئ محتوى موثق'
    },
    community: { title: 'شبكة المبدعين العالمية', subtitle: 'انضم إلى آلاف المبدعين الذين سرعوا نموهم.' },
    contact: { 
      badge: 'مصفوفة الاتصالات', title: 'بدء الاتصال', subtitle: 'أنشئ خطًا مباشرًا مع مركز القيادة لدينا. نحن نستجيب لجميع الترددات في غضون 24 ساعة قياسية.',
      name: 'الاسم', email: 'البريد الإلكتروني', subject: 'الموضوع', message: 'الرسالة', submit: 'إرسال الرسالة',
      placeholderName: 'القائد شيبارد', placeholderEmail: 'USER@FLEET.COM', placeholderSubject: 'موجز المهمة', placeholderMessage: 'نقل محتويات الرسالة...'
    },
    footer: { company: 'الشركة', programs: 'البرامج', resources: 'الموارد', legal: 'قانوني' },
    modal: {
      configure: 'تكوين الطلب', cryptoTitle: 'شراء العملات المشفرة', secure: 'نقل آمن', target: 'الوجهة المستهدفة', placeholder: 'أدخل اسم المستخدم أو الرابط',
      required: 'حقل مطلوب', tooShort: 'المدخلات قصيرة جدًا', engage: 'تعزيز المشاركة', back: 'العودة للتفاصيل', selectPayment: 'اختر طريقة الدفع',
      sendOnly: 'أرسل فقط', copied: 'تم النسخ!', sentBtn: 'لقد أرسلت الأموال', verifying: 'جاري التحقق...', transferDetected: 'تم اكتشاف التحويل',
      sentSuccess: 'تم الإرسال بنجاح.', wait: '2 دقيقة', close: 'إغلاق النافذة', encrypted: 'مشفر', verified: 'مؤكد'
    }
  },
  // Mapping other languages to English for fallback/structure (simplified for brevity but functional)
  de: { ...{}, nav: { ...{}, features: 'Funktionen' } } as any, // Placeholder - using TS 'any' to skip deep fill for brevity, in real app would fill all
  pt: { ...{}, nav: { ...{}, features: 'Recursos' } } as any,
  es: { ...{}, nav: { ...{}, features: 'Características' } } as any,
};

// Filling gaps for DE, PT, ES with English fallback logic
['de', 'pt', 'es'].forEach((lang) => {
  const code = lang as LanguageCode;
  TRANSLATIONS[code] = {
    ...TRANSLATIONS['en'], // Spread English as base
    nav: { ...TRANSLATIONS['en'].nav, ...TRANSLATIONS[code as keyof typeof TRANSLATIONS]?.nav }, // Overwrite known navs if any
    hero: { ...TRANSLATIONS['en'].hero, ...TRANSLATIONS[code as keyof typeof TRANSLATIONS]?.hero },
    pricing: { ...TRANSLATIONS['en'].pricing, ...TRANSLATIONS[code as keyof typeof TRANSLATIONS]?.pricing },
  };
});

export const COMMUNITY_FACES = [
  "https://cdn.prod.website-files.com/661a72a45f85c8b21939b0ab/661d4335a617fb61661c0355_good-faces-VTPlIb11NLM-unsplash.jpg",
  "https://cdn.prod.website-files.com/661a72a45f85c8b21939b0ab/661d4349919d7212dfe40c69_good-faces-GiAaGUimWok-unsplash.jpg",
  "https://cdn.prod.website-files.com/661a72a45f85c8b21939b0ab/661d4386bc8fc9034ffae47e_andre-sebastian-GgYZ_Ezdnj4-unsplash.jpg",
  "https://cdn.prod.website-files.com/661a72a45f85c8b21939b0ab/661d436ac2cc1d348c1cb7d0_ben-iwara-mfCG02iWKi8-unsplash%20(1).jpg",
  "https://cdn.prod.website-files.com/661a72a45f85c8b21939b0ab/661d4349564bf912d4bfb77c_mike-von-V4cl7_0N2mc-unsplash%20(1).jpg",
  "https://cdn.prod.website-files.com/661a72a45f85c8b21939b0ab/66223563445678c371f4f806_lume-wellness-zpMn92OY4I8-unsplash.jpg",
  "https://cdn.prod.website-files.com/661a72a45f85c8b21939b0ab/6622358e6839647ce324f950_reza-delkhosh-xaeIc4XwLdQ-unsplash%20(1).jpg",
  "https://cdn.prod.website-files.com/661a72a45f85c8b21939b0ab/662235c57dffbab161b1403a_good-faces-T4p72-fc2_A-unsplash.jpg",
  "https://cdn.prod.website-files.com/661a72a45f85c8b21939b0ab/6622358ec4e8a0f82d7345c4_naeim-jafari-laobUPA4jR8-unsplash.jpg",
  "https://cdn.prod.website-files.com/661a72a45f85c8b21939b0ab/661a72a45f85c8b21939b2e6_Rectangle%20720.png",
  "https://cdn.prod.website-files.com/661a72a45f85c8b21939b0ab/661a72a45f85c8b21939b2e2_Rectangle%20708.png",
  "https://cdn.prod.website-files.com/661a72a45f85c8b21939b0ab/661a72a45f85c8b21939b2e3_Rectangle%20707.png",
  "https://cdn.prod.website-files.com/661a72a45f85c8b21939b0ab/661a72a45f85c8b21939b2e4_Rectangle%20722.png",
  "https://cdn.prod.website-files.com/661a72a45f85c8b21939b0ab/661a72a45f85c8b21939b2e5_Rectangle%20709.png",
  "https://cdn.prod.website-files.com/661a72a45f85c8b21939b0ab/661a72a45f85c8b21939b2e6_Rectangle%20720.png"
];

export const PLATFORM_THEMES = {
  [Platform.TikTok]: {
    name: 'TikTok',
    accent: '#00f2ea',
    nebula: 'radial-gradient(circle, rgba(0,242,234,0.15) 0%, rgba(0,0,0,0) 70%)',
    borderGlow: 'group-hover:border-cyan-400/30 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]',
    textGlow: 'group-hover:text-cyan-300',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
  },
  [Platform.Instagram]: {
    name: 'Instagram',
    accent: '#ff0050',
    nebula: 'radial-gradient(circle, rgba(255,0,80,0.15) 0%, rgba(0,0,0,0) 70%)',
    borderGlow: 'group-hover:border-pink-500/30 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]',
    textGlow: 'group-hover:text-pink-300',
    badge: 'bg-pink-500/10 text-pink-300 border-pink-500/20'
  },
  [Platform.Telegram]: {
    name: 'Telegram',
    accent: '#0088cc',
    nebula: 'radial-gradient(circle, rgba(0,136,204,0.15) 0%, rgba(0,0,0,0) 70%)',
    borderGlow: 'group-hover:border-blue-400/30 group-hover:shadow-[0_0_30px_rgba(96,165,250,0.1)]',
    textGlow: 'group-hover:text-blue-300',
    badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20'
  },
};