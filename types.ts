import React from 'react';

export enum Platform {
  TikTok = 'TikTok',
  Instagram = 'Instagram',
  Telegram = 'Telegram',
}

export interface ServicePackage {
  id: string;
  platform: Platform;
  type: string;
  amount: number;
  price: number;
  deliveryTime?: string;
  icon?: React.ReactNode;
}

export type OrderStatus = 'idle' | 'processing' | 'completed';

export type LanguageCode = 'en' | 'fr' | 'de' | 'pt' | 'ar' | 'es';

export interface TranslationDictionary {
  nav: {
    features: string;
    useCases: string;
    pricing: string;
    influencers: string;
    resources: string;
    company: string;
    login: string;
    getStarted: string;
    blogToVideo: string;
    textToVideo: string;
    avatarGen: string;
    sceneGen: string;
    autoEdit: string;
    voiceClone: string;
    marketing: string;
    education: string;
    business: string;
    videoAds: string;
    influencersByCountry: string;
  };
  hero: {
    systemOp: string;
    title1: string;
    title2: string;
    subtitle: string;
  };
  pricing: {
    freeTrial: string;
    initiate: string;
    totalCost: string;
    all: string;
  };
  performance: {
    marketAnalysis: string;
    title: string;
    subtitle: string;
    credibilityTitle: string;
    credibilityDesc: string;
    engagementTitle: string;
    engagementDesc: string;
    resultsTitle: string;
    resultsDesc: string;
    resultsNote: string;
    subRateTitle: string;
    subRateDesc: string;
    subRateNote: string;
    verified: string;
  };
  community: {
    title: string;
    subtitle: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderSubject: string;
    placeholderMessage: string;
  };
  footer: {
    company: string;
    programs: string;
    resources: string;
    legal: string;
  };
  modal: {
    configure: string;
    cryptoTitle: string;
    secure: string;
    target: string;
    placeholder: string;
    required: string;
    tooShort: string;
    engage: string;
    back: string;
    selectPayment: string;
    sendOnly: string;
    copied: string;
    sentBtn: string;
    verifying: string;
    transferDetected: string;
    sentSuccess: string;
    wait: string;
    close: string;
    encrypted: string;
    verified: string;
  };
}