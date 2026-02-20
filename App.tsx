import React, { useState, useEffect } from 'react';
import { SERVICES, LOGOS, LANGUAGES, COMMUNITY_FACES, PLATFORM_THEMES, TRANSLATIONS } from './constants';
import { Platform, ServicePackage, LanguageCode, TranslationDictionary } from './types';
import OrderModal from './components/OrderModal';
import { ArrowRight, Sparkles, ChevronDown, Menu, X as XIcon, Star, Globe, Clock, Send } from 'lucide-react';
import * as Icons from './components/Icons';
import { YouTubeIcon } from './components/BrandIcons';

// --- Sub-Components ---

const MegaMenuItem = ({ title, children }: { title: string, children?: React.ReactNode }) => {
  return (
    <div className="group relative px-5 py-2">
       <button className="text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors flex items-center gap-1 hover:text-mercury">
         {title}
         <ChevronDown size={12} className="opacity-50 group-hover:rotate-180 transition-transform duration-300" />
       </button>
       <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 ease-out z-50">
         {children}
       </div>
    </div>
  );
};

const LanguageSwitcher = ({ currentLang, setLang }: { currentLang: LanguageCode, setLang: (code: LanguageCode) => void }) => {
  const selected = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  return (
    <div className="group relative px-3 py-2">
       <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors">
         <img src={selected.flag} alt={selected.name} className="w-5 h-auto rounded-[2px] shadow-sm" />
         <ChevronDown size={10} className="opacity-50 group-hover:rotate-180 transition-transform duration-300" />
       </button>
       <div className="absolute top-full right-0 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 ease-out z-50">
         <div className="super-prism rounded-xl p-2 w-32 grid gap-1">
           {LANGUAGES.map(lang => (
             <button
               key={lang.code}
               onClick={() => setLang(lang.code)}
               className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left ${selected.code === lang.code ? 'bg-white/10 text-white' : 'hover:bg-white/5 text-slate-400 hover:text-white'}`}
             >
               <img src={lang.flag} alt={lang.name} className="w-4 h-auto rounded-[1px]" />
               <span className="text-[10px] font-bold uppercase tracking-wider">{lang.name}</span>
             </button>
           ))}
         </div>
       </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, desc, href = "#" }: { icon: React.ReactNode, title: string, desc: string, href?: string }) => (
  <a 
    href={href} 
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group/item border border-transparent hover:border-white/5"
  >
     <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover/item:text-white group-hover/item:bg-white/10 transition-all shadow-inner">
       {icon}
     </div>
     <div>
       <h4 className="text-xs font-bold text-white mb-1 uppercase tracking-wider group-hover/item:text-mercury">{title}</h4>
       <p className="text-[10px] text-slate-500 leading-relaxed font-light group-hover/item:text-slate-400">{desc}</p>
     </div>
  </a>
);

const ResourceLink = ({ title }: { title: string }) => (
  <a href="#" className="block px-4 py-3 rounded-lg text-xs font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between group/link">
    {title}
    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-white" />
  </a>
);

// --- Section Components ---

const Navigation = ({ scrolled, currentLang, setLang }: { scrolled: boolean, currentLang: LanguageCode, setLang: (c: LanguageCode) => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang].nav;
  
  return (
    <div className={`fixed top-6 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4`}>
      <div className={`
         flex items-center justify-between px-8 py-4 rounded-full border transition-all duration-500
         bg-[#050505]/80 backdrop-blur-xl border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] w-full max-w-7xl
      `}>
          {/* Logo */}
          <div className="font-display font-bold text-xl tracking-widest text-white hidden md:block">
            FAYNAR
          </div>
          
          <nav className="hidden lg:flex items-center gap-4">
             <MegaMenuItem title={t.useCases}>
                <div className="super-prism rounded-2xl p-6 grid grid-cols-2 gap-8 w-[600px] mt-4">
                  <div className="space-y-2">
                     <FeatureItem 
                       icon={<Icons.Marketing />} 
                       title={t.marketing} 
                       desc="Create compelling marketing content." 
                       href="https://www.topview.ai/?utm_source=googleads&utm_medium=&utm_term=topwiew&utm_content=785523516414&utm_matchtype=b&utm_placement=&utm_campaign=PromotionGlobalBrand&gclid=Cj0KCQiAosrJBhD0ARIsAHebCNrd5B8Gkx1cdjpw8WRXsQ0e5ERzUaGVClubBQIwD76ns3atjYGUjP0aAkZxEALw_wcB&gad_source=1&gad_campaignid=22973308076&gbraid=0AAAAA-B5pVrIpmGNhi_-Vu48OxUt5QVhs&gclid=Cj0KCQiAosrJBhD0ARIsAHebCNrd5B8Gkx1cdjpw8WRXsQ0e5ERzUaGVClubBQIwD76ns3atjYGUjP0aAkZxEALw_wcB"
                     />
                  </div>
                  <div className="space-y-2">
                     <FeatureItem 
                       icon={<Icons.Ads />} 
                       title={t.videoAds} 
                       desc="Automated ad creation with AI." 
                       href="https://www.ocoya.com/?gad_source=1&gad_campaignid=21575880857&gbraid=0AAAAABU_HcT75g__DdAfLVpSDE9pGFEz0&gclid=Cj0KCQiAosrJBhD0ARIsAHebCNpICvOccllGVEb09GSfysvvEE-HIsYj67gBMlwhTvtOsWp_OQfW_tYaAnRuEALw_wcB"
                     />
                  </div>
                </div>
             </MegaMenuItem>

             <a href="#pricing" className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors hover:text-mercury">
                {t.pricing}
             </a>

             <MegaMenuItem title={t.resources}>
                <div className="super-prism rounded-2xl p-4 w-[280px] grid gap-2 mt-4">
                  <ResourceLink title="Help Center" />
                  <ResourceLink title="Blog" />
                  <ResourceLink title="Community" />
                </div>
             </MegaMenuItem>
             
             <MegaMenuItem title={t.company}>
                <div className="super-prism rounded-2xl p-4 w-[280px] grid gap-2 mt-4">
                  <ResourceLink title="About us" />
                  <ResourceLink title="Contact" />
                </div>
             </MegaMenuItem>

             <div className="h-4 w-px bg-white/10 mx-1"></div>
             <LanguageSwitcher currentLang={currentLang} setLang={setLang} />
          </nav>

          <div className="hidden lg:flex items-center gap-6">
             <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
               {t.login}
             </a>
             <a href="#" className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white text-black hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
               {t.getStarted}
             </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
               {mobileMenuOpen ? <XIcon /> : <Menu />}
            </button>
          </div>
      </div>
    </div>
  );
};

const HeroSection = ({ activePlatform, setActivePlatform, currentLang }: { activePlatform: Platform, setActivePlatform: (p: Platform) => void, currentLang: LanguageCode }) => {
  const theme = PLATFORM_THEMES[activePlatform];
  const t = TRANSLATIONS[currentLang].hero;

  return (
    <div className="flex flex-col items-center justify-center text-center mb-24 relative">
       {/* Prismatic Glow Behind */}
       <div 
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 animate-nebula-pulse pointer-events-none mix-blend-screen"
         style={{ backgroundColor: theme.accent }}
       ></div>

       <div className="relative z-10">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md shadow-lg">
             <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse box-shadow-[0_0_10px_#4ade80]"></div>
             <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-white">{t.systemOp}</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-8 leading-[0.9] text-white mix-blend-normal drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <span className="text-mercury">{t.title1}</span><br />
            <span 
              className="text-transparent bg-clip-text drop-shadow-sm"
              style={{ backgroundImage: `linear-gradient(to bottom, #ffffff 0%, ${theme.accent} 100%)` }}
            >
              {t.title2}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light tracking-wide mb-12">
            {t.subtitle}
          </p>

          <div className="inline-flex p-2 bg-black/80 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl relative z-20 overflow-hidden super-prism">
            {[Platform.TikTok, Platform.Instagram, Platform.Telegram].map((platform) => {
              const isActive = activePlatform === platform;
              return (
                <button
                  key={platform}
                  onClick={() => setActivePlatform(platform)}
                  className={`
                    px-8 py-3 rounded-full font-display font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-3 relative overflow-hidden group
                    ${isActive ? 'text-white' : 'text-slate-500 hover:text-white'}
                  `}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-white/10 rounded-full border border-white/10 shadow-inner"></div>
                  )}
                  <img 
                    src={LOGOS[platform]} 
                    className={`w-4 h-4 transition-all duration-300 ${isActive ? 'brightness-125 scale-110 drop-shadow-md' : 'grayscale opacity-50'}`} 
                    alt="logo" 
                  />
                  <span className="relative z-10">{platform}</span>
                </button>
              );
            })}
          </div>
       </div>
    </div>
  );
};

const PricingSection = ({ 
  activePlatform, 
  onSelectService,
  currentLang
}: { 
  activePlatform: Platform, 
  onSelectService: (s: ServicePackage) => void,
  currentLang: LanguageCode
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const theme = PLATFORM_THEMES[activePlatform];
  const t = TRANSLATIONS[currentLang].pricing;
  
  // Reset category when platform changes
  useEffect(() => setSelectedCategory('All'), [activePlatform]);

  const platformServices = SERVICES.filter(s => s.platform === activePlatform);
  const categories = ['All', ...new Set(platformServices.map(s => s.type))];
  const filteredServices = selectedCategory === 'All' 
    ? platformServices 
    : platformServices.filter(s => s.type === selectedCategory);

  const formatNumber = (num: number) => {
    if (num >= 1000) return (num / 1000) + 'K';
    return num;
  };

  return (
    <div id="pricing" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 mb-32">
      <div className="lg:col-span-3 mb-8 flex flex-wrap justify-center gap-3">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`
              px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-300
              ${selectedCategory === cat 
                ? `bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]` 
                : `bg-black/40 text-slate-400 border-white/5 hover:border-white/20 hover:text-white`
              }
            `}
          >
            {cat === 'All' ? t.all : cat}
          </button>
        ))}
      </div>

      {filteredServices.map((service) => (
        <div 
          key={service.id}
          className={`
            group relative super-prism rounded-3xl p-8 transition-all duration-500
            hover:-translate-y-2
            ${theme.borderGlow}
          `}
        >
          <div 
             className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
             style={{ background: `linear-gradient(to bottom left, ${theme.accent}10, transparent)` }}
          ></div>

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all shadow-lg relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <img 
                  src={LOGOS[service.platform]} 
                  className={`w-7 h-7 transition-all duration-500 ${theme.textGlow} drop-shadow-lg relative z-10`} 
                  alt="icon" 
                />
              </div>
              {service.price === 0 && (
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-md ${theme.badge} shadow-sm`}>
                  <Sparkles size={10} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{t.freeTrial}</span>
                </div>
              )}
            </div>

            <div className="mb-10">
               <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2 group-hover:text-white transition-colors">
                 <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                 {service.platform}
               </h3>
               <div className="text-5xl font-display font-bold text-white tracking-tighter mb-2 group-hover:scale-105 transition-transform origin-left text-mercury">
                 {formatNumber(service.amount)}
               </div>
               <div className={`text-sm font-medium text-slate-400 ${theme.textGlow} transition-colors flex items-center gap-2`}>
                 {service.type}
                 <Star size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" />
               </div>
               {service.deliveryTime && (
                 <div className="text-[10px] text-slate-500 mt-2 font-mono flex items-center gap-2">
                   <Clock size={12} className="text-slate-600" />
                   <span className="text-slate-400 font-bold tracking-wider">{service.deliveryTime}</span>
                 </div>
               )}
            </div>

            <div className="mt-auto">
               <div className="flex items-baseline justify-between mb-8 pb-6 border-b border-white/5">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">{t.totalCost}</div>
                  <div className="text-3xl font-display font-bold text-white text-mercury">
                    {service.price === 0 ? 'Free' : `$${service.price}`}
                  </div>
               </div>

               <div 
                 onClick={() => onSelectService(service)}
                 className="group/btn relative w-full cursor-pointer"
               >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03a9f4] to-[#f441a5] rounded blur-[15px] opacity-20 transition-all duration-500 group-hover/btn:opacity-60 group-hover/btn:blur-[20px]"></div>
                  <div className="relative p-[1px] bg-gradient-to-r from-[#03a9f4] to-[#f441a5] rounded">
                     <button className="w-full bg-[#050505] text-white py-4 rounded-[3px] font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-[#0a0a0a] transition-colors relative overflow-hidden">
                        <span className="relative z-10">{t.initiate}</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform relative z-10" />
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const PerformanceSection = ({ t }: { t: TranslationDictionary }) => (
  <section className="max-w-[1400px] mx-auto px-6 mb-32 relative z-10">
    <div className="flex flex-col items-center justify-center text-center mb-16">
      <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md shadow-lg">
        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
        <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-white">{t.performance.marketAnalysis}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 text-mercury">{t.performance.title}</h2>
      <p className="text-slate-400 max-w-3xl mx-auto font-light leading-relaxed text-sm md:text-base">
        {t.performance.subtitle}
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-6">
      {/* Feature Cards */}
      <div className="super-prism p-6 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 w-[250px] h-[350px]">
        <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-30 transition-opacity duration-500 text-blue-500">
          <Icons.Credibility />
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20 shadow-inner shrink-0">
            <Icons.Credibility />
          </div>
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-mercury transition-colors">{t.performance.credibilityTitle}</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            {t.performance.credibilityDesc}
          </p>
        </div>
      </div>

      <div className="super-prism p-6 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 w-[250px] h-[350px]">
        <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-pink-500">
          <Icons.Engagement />
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6 text-pink-400 border border-pink-500/20 shadow-inner shrink-0">
            <Icons.Engagement />
          </div>
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-mercury transition-colors">{t.performance.engagementTitle}</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            {t.performance.engagementDesc}
          </p>
        </div>
      </div>

      <div className="super-prism p-6 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 w-[250px] h-[350px]">
        <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-emerald-500">
          <Icons.Results />
        </div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/20 shadow-inner shrink-0">
            <Icons.Results />
          </div>
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-mercury transition-colors">{t.performance.resultsTitle}</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            {t.performance.resultsDesc}
          </p>
          <p className="text-slate-400 text-xs leading-relaxed mt-4">
            {t.performance.resultsNote}
          </p>
        </div>
      </div>

      <div className="super-prism p-6 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 w-[250px] h-[350px]">
        <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-emerald-500">
          <Icons.Results />
        </div>
        <div className="relative z-10 flex flex-col h-full">  
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/20 shadow-inner shrink-0">
            <span className="text-sm font-bold">100%</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-mercury transition-colors">
            {t.performance.subRateTitle}
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            {t.performance.subRateDesc}
          </p>
          <p className="text-slate-400 text-xs leading-relaxed mt-4">
            {t.performance.subRateNote}
          </p>
        </div>
      </div>

      {/* Image Cards - SUPERIOR GLASS OPTICS: Clear, Untinted, Verified */}
       <div className="super-prism bg-transparent rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-500 relative border border-white/10">
        <div className="relative aspect-[6/7] w-[250px] h-[350px]">
          <img
            src="https://i.pinimg.com/736x/25/f6/93/25f693ba7a5f3dc88b64288ae567f129.jpg"
            alt="Performance Visual"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2 mb-1">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white">{t.performance.verified}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="super-prism bg-transparent rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-500 relative border border-white/10">
        <div className="relative aspect-[6/7] w-[250px] h-[350px]">
          <img
            src="https://i.pinimg.com/736x/c8/b5/c4/c8b5c4550e5e1156f5f9d4df811a280a.jpg"
            alt="Performance Visual"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <div className="flex items-center gap-2 mb-1">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white">{t.performance.verified}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="super-prism bg-transparent rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-500 relative border border-white/10">
        <div className="relative aspect-[6/7] w-[250px] h-[350px]">
          <img
            src="https://i.pinimg.com/736x/95/71/64/957164c492aadd04797c91dd2bcc1c26.jpg"
            alt="Performance Visual"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <div className="flex items-center gap-2 mb-1">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white">{t.performance.verified}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="super-prism bg-transparent rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-500 relative border border-white/10">
        <div className="relative aspect-[6/7] w-[250px] h-[350px]">
          <img
            src="https://i.pinimg.com/736x/a7/7f/14/a77f147ce3c5977944aa519138cc3bf2.jpg"
            alt="Performance Visual"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <div className="flex items-center gap-2 mb-1">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white">{t.performance.verified}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="super-prism bg-transparent rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-500 relative border border-white/10">
        <div className="relative aspect-[6/7] w-[250px] h-[260px]">
          <img
            src="https://i.pinimg.com/736x/9b/80/ae/9b80ae52fc7d32930dc232930a8423d1.jpg"
            alt="Performance Visual"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <div className="flex items-center gap-2 mb-1">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white">{t.performance.verified}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="super-prism bg-transparent rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 relative border border-white/10">
        <div className="relative aspect-[2/3] w-[250px] h-[260px]">
           <img
            src="https://i.pinimg.com/736x/d8/a2/1e/d8a21e756173befdf886a0d15f6afac6.jpg"
            alt="Performance Visual"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
           <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <div className="flex items-center gap-2 mb-1">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white">{t.performance.verified}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="super-prism bg-transparent rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 relative border border-white/10">
        <div className="relative aspect-[6/7] w-[250px] h-[260px]">
          <img
            src="https://i.pinimg.com/736x/00/d8/ca/00d8cacfd7a0e4b2206c61f74829d79b.jpg"
            alt="Performance Visual"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <div className="flex items-center gap-2 mb-1">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white">{t.performance.verified}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="super-prism bg-transparent rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-500 relative border border-white/10">
        <div className="relative aspect-[6/7] w-[250px] h-[260px]">
          <img
            src="https://i.pinimg.com/736x/b4/b9/ac/b4b9acc4a59379ab05ff86beb2787774.jpg"
            alt="Performance Visual"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <div className="flex items-center gap-2 mb-1">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white">{t.performance.verified}</span>
            </div>
          </div>
        </div>
      </div>


     <div className="super-prism bg-transparent rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-500 relative border border-white/10">
        <div className="relative aspect-[6/7] w-[250px] h-[350px]">
          <img
            src="https://i.pinimg.com/736x/4e/12/c2/4e12c2c968502a854084fc7e035c2712.jpg"
            alt="Performance Visual"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <div className="flex items-center gap-2 mb-1">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white">{t.performance.verified}</span>
            </div>
          </div>
        </div>
      </div>


      <div className="super-prism bg-transparent rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-500 relative border border-white/10">
        <div className="relative aspect-[6/7] w-[250px] h-[350px]">
          <img
            src="https://i.pinimg.com/736x/ce/58/84/ce5884df6fe3dfdb89d7035c03550d1a.jpg"
            alt="Performance Visual"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <div className="flex items-center gap-2 mb-1">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white">{t.performance.verified}</span>
            </div>
          </div>
        </div>
      </div>


      <div className="super-prism bg-transparent rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-500 relative border border-white/10">
        <div className="relative aspect-[6/7] w-[250px] h-[350px]">
          <img
            src="https://i.pinimg.com/736x/19/2f/f8/192ff81b533326bc9ff15fcd76cafbe2.jpg"
            alt="Performance Visual"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <div className="flex items-center gap-2 mb-1">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white">{t.performance.verified}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const CommunitySection = ({ t }: { t: TranslationDictionary }) => (
  <section className="w-full overflow-hidden py-24 relative z-10 bg-black/50 backdrop-blur-sm border-y border-white/5 mb-32">
     <div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col items-center text-center">
        <h3 className="text-3xl font-display font-bold text-white tracking-tight mb-4 text-mercury">{t.community.title}</h3>
        <p className="text-slate-400 text-sm max-w-lg">{t.community.subtitle}</p>
     </div>
     
     <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
        
        <div className="flex w-max animate-scroll gap-6 px-6">
          {[...COMMUNITY_FACES, ...COMMUNITY_FACES].map((url, i) => (
            <div 
              key={i} 
              className={`
                relative w-[280px] h-[380px] shrink-0 rounded-2xl overflow-hidden group border border-white/10
                ${i % 2 === 1 ? 'mt-12' : ''}
                transition-all duration-500 super-prism bg-transparent
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
              <img 
                src={url} 
                className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105" 
                alt="Community Member" 
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-2 mb-1">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-white">{t.performance.verified}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
     </div>
  </section>
);

const NewsSection = () => (
  <section className="max-w-[1400px] mx-auto px-6 mb-32 relative z-10">
    <div className="flex flex-col items-center justify-center text-center mb-16">
      <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md shadow-lg">
        <Sparkles size={12} className="text-white" />
        <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-white">2,000+ posts daily</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 text-mercury">Keep your socials on-trend.</h2>
      <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base mb-8">
        Consistency is key to growing your brand. With an intuitive calendar, you'll never miss a chance to stay active and engaging - the organic way.
      </p>
      <a href="https://www.app.ocoya.com/smm/planner/calendar" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-blue-400 hover:text-white underline underline-offset-4 transition-colors">
        Try calendar
      </a>
    </div>

    <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-7 gap-6">
      <div className="super-prism rounded-2xl p-0 bg-transparent transition-all duration-500 hover:-translate-y-2 border border-slate-100/15 group w-[250px] h-[350px]">
        <div className="rounded-xl overflow-hidden border-0 border-white/1 aspect-video relative">
          <img alt="News Image" className="h-[350px] object-cover" src="https://i.pinimg.com/736x/64/51/25/645125d413cfdd57349dc464d58a7f97.jpg" />
        </div>
      </div>
      <div className="super-prism rounded-2xl p-0 bg-transparent transition-all duration-500 hover:-translate-y-2 border border-slate-100/15 group w-[250px] h-[350px]">
        <div className="rounded-xl overflow-hidden border-0 border-white/1 aspect-video relative">
          <img alt="News Image" className="h-[350px] object-cover" src="https://i.pinimg.com/736x/52/b8/d0/52b8d00032eaf127b0ccb909a1bec637.jpg" />
        </div>
      </div>
      <div className="super-prism rounded-2xl p-0 bg-transparent transition-all duration-500 hover:-translate-y-2 border border-slate-100/15 group w-[250px] h-[350px]">
        <div className="rounded-xl overflow-hidden border-0 border-white/1 aspect-video relative">
          <img alt="News Image" className="h-[350px] object-cover" src="https://i.pinimg.com/736x/49/05/10/490510a1627d36e7c974350c8708556e.jpg" />
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = ({ t }: { t: TranslationDictionary }) => (
  <section id="contact" className="max-w-[1400px] mx-auto px-6 relative z-10">
     <div className="flex flex-col items-center justify-center text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md shadow-lg">
           <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
           <span className="text-[10px] font-display font-bold uppercase tracking-[0.2em] text-white">{t.contact.badge}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 text-mercury">{t.contact.title}</h2>
        <p className="text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
           {t.contact.subtitle}
        </p>
     </div>

     <div className="max-w-2xl mx-auto relative">
        <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative super-prism rounded-3xl p-8 md:p-12 border border-white/10 bg-black/50 backdrop-blur-xl">
           <form className="space-y-6" id="contactForm" noValidate onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] uppercase font-bold text-slate-500 tracking-widest pl-1">{t.contact.name}</label>
                    <input 
                       type="text" 
                       id="name" 
                       name="name" 
                       required 
                       className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-700 focus:outline-none focus:border-indigo-500/50 focus:bg-white/5 transition-all text-sm shadow-inner"
                       placeholder={t.contact.placeholderName}
                    />
                 </div>
                 <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] uppercase font-bold text-slate-500 tracking-widest pl-1">{t.contact.email}</label>
                    <input 
                       type="email" 
                       id="email" 
                       name="email" 
                       required 
                       className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-700 focus:outline-none focus:border-indigo-500/50 focus:bg-white/5 transition-all text-sm shadow-inner"
                       placeholder={t.contact.placeholderEmail}
                    />
                 </div>
              </div>
              
              <div className="space-y-2">
                 <label htmlFor="subject" className="text-[10px] uppercase font-bold text-slate-500 tracking-widest pl-1">{t.contact.subject}</label>
                 <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required 
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-700 focus:outline-none focus:border-indigo-500/50 focus:bg-white/5 transition-all text-sm shadow-inner"
                    placeholder={t.contact.placeholderSubject}
                 />
              </div>

              <div className="space-y-2">
                 <label htmlFor="message" className="text-[10px] uppercase font-bold text-slate-500 tracking-widest pl-1">{t.contact.message}</label>
                 <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={4}
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-700 focus:outline-none focus:border-indigo-500/50 focus:bg-white/5 transition-all text-sm resize-none shadow-inner"
                    placeholder={t.contact.placeholderMessage}
                 ></textarea>
              </div>

              <div className="pt-2">
                 <div className="group/btn relative w-full cursor-pointer">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded blur-[15px] opacity-20 transition-all duration-500 group-hover/btn:opacity-60 group-hover/btn:blur-[20px]"></div>
                    <div className="relative p-[1px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded">
                       <button type="submit" className="w-full bg-[#050505] text-white py-4 rounded-[3px] font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-[#0a0a0a] transition-colors relative overflow-hidden">
                          <span className="relative z-10">{t.contact.submit}</span>
                          <Send size={14} className="relative z-10" />
                       </button>
                    </div>
                 </div>
              </div>
           </form>
        </div>
     </div>
  </section>
);

const Footer = ({ t }: { t: TranslationDictionary }) => (
  <footer className="relative z-10 border-t border-white/5 bg-[#030014] pt-24 pb-12">
     <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
     <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
           
           {/* Column 1: Socials */}
           <div className="flex flex-col items-center md:items-start gap-6">
              <div className="footer-social flex items-center gap-4">
                 <a href="https://www.tiktok.com/@tiktok" className="social-icon group" title="TikTok" target="_blank" rel="noopener noreferrer">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all shadow-sm">
                       <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                 </a>
                 <a href="https://www.instagram.com/tiktok" className="social-icon group" title="Instagram" target="_blank" rel="noopener noreferrer">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all shadow-sm">
                       <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                 </a>
                 <a href="https://www.linkedin.com/company/tiktok" className="social-icon group" title="Instagram" target="_blank" rel="noopener noreferrer">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all shadow-sm">
                       <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Instagram" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                 </a>
                 <a href="https://www.youtube.com/@tiktok" className="social-icon group" title="Instagram" target="_blank" rel="noopener noreferrer">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all shadow-sm">
                       <img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" alt="Instagram" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </div>
                 </a>
              </div>
              
              {/* App Store & Google Play Download Links */}
              <div className="flex flex-wrap gap-4 mt-2">
                <a
                  href="https://www.tiktok.com/download-link/af/id835599320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform opacity-80 hover:opacity-100"
                  aria-label="Download on the App Store"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    className="h-8 w-auto"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/download-link/af/com.zhiliaoapp.musically"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform opacity-80 hover:opacity-100"
                  aria-label="Get it on Google Play"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
           </div>

           {/* Column 2: Company */}
           <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2 text-mercury">{t.footer.company}</h4>
              <ul className="space-y-3 text-center md:text-left">
                <li><a href="https://www.tiktok.com/about?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">About TikTok</a></li>
                <li><a href="https://www.tiktok.com/browse?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">TikTok Browse</a></li>
                <li><a href="https://newsroom.tiktok.com/en-us?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Newsroom</a></li>
                <li><a href="https://www.tiktok.com/about/contact?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Contact</a></li>
                <li><a href="https://careers.tiktok.com/?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Careers</a></li>
                <li><a href="https://www.bytedance.com/?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">ByteDance</a></li>
              </ul>
           </div>

           {/* Column 3: Programs */}
           <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2 text-mercury">{t.footer.programs}</h4>
              <ul className="space-y-3 text-center md:text-left">
                <li><a href="https://www.tiktok.com/forgood?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">TikTok for Good</a></li>
                <li><a href="https://www.tiktok.com/embed?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">TikTok Embeds</a></li>
                <li><a href="https://effecthouse.tiktok.com/?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Effect House</a></li>
                <li><a href="https://developers.tiktok.com/?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">TikTok for Developers</a></li>
                <li><a href="https://www.tiktok.com/business/&attr_source=tt_official_site&attr_medium=tt_official_site_guidance?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Advertise on TikTok</a></li>
                <li><a href="https://www.tiktok.com/tiktok-rewards?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">TikTok Rewards</a></li>
              </ul>
           </div>

           {/* Column 4: Resources */}
           <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2 text-mercury">{t.footer.resources}</h4>
              <ul className="space-y-3 text-center md:text-left">
                <li><a href="https://support.tiktok.com/?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Help Center</a></li>
                <li><a href="https://www.tiktok.com/safety/en?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Safety Center</a></li>
                <li><a href="https://www.tiktok.com/creator-academy?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Creator Academy</a></li>
                <li><a href="https://www.tiktok.com/community-guidelines?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Community Guidelines</a></li>
                <li><a href="https://www.tiktok.com/transparency?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Transparency</a></li>
                <li><a href="https://www.tiktok.com/accessibility?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Accessibility</a></li>
              </ul>
           </div>

           {/* Column 5: Legal */}
           <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2 text-mercury">{t.footer.legal}</h4>
              <ul className="space-y-3 text-center md:text-left">
                <li><a href="https://www.tiktok.com/legal/cookie-policy?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Cookies Policy</a></li>
                <li><a href="https://www.tiktok.com/legal/privacy-policy-for-younger-users?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Privacy Policy for Younger Users</a></li>
                <li><a href="https://www.tiktok.com/legal/copyright-policy?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Intellectual Property Policy</a></li>
                <li><a href="https://www.tiktok.com/legal/law-enforcement?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Law Enforcement</a></li>
                <li><a href="https://www.tiktok.com/legal/privacy-policy?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Privacy Policy</a></li>
                <li><a href="https://www.tiktok.com/legal/terms-of-use?enter_method=bottom_navigation" className="text-[11px] font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-wider">Terms of Service</a></li>
              </ul>
           </div>
        </div>
     </div>
  </footer>
);

// --- Main App Component ---

const App = () => {
  const [activePlatform, setActivePlatform] = useState<Platform>(Platform.TikTok);
  const [selectedService, setSelectedService] = useState<ServicePackage | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState<LanguageCode>('en');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Auto-detect Language ---
  useEffect(() => {
    const detectLanguage = async () => {
      try {
        // Simple Country Code to Language Code Map
        const countryToLang: Record<string, LanguageCode> = {
          'FR': 'fr', 'BE': 'fr', 'DZ': 'ar', 'MA': 'ar', 'TN': 'ar',
          'DE': 'de', 'AT': 'de', 'CH': 'de',
          'BR': 'pt', 'PT': 'pt',
          'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es',
          'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'QA': 'ar'
        };

        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data && data.country_code && countryToLang[data.country_code]) {
          setCurrentLang(countryToLang[data.country_code]);
        }
      } catch (error) {
        console.warn('Geo-detection failed, falling back to English', error);
      }
    };

    detectLanguage();
  }, []);

  const theme = PLATFORM_THEMES[activePlatform];
  const t = TRANSLATIONS[currentLang]; // Current translation dictionary

  return (
    <div 
      className="min-h-screen font-sans relative text-slate-200 overflow-hidden bg-[#020202]"
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      
      {/* Dynamic Nebula Ambient Light */}
      <div 
        className="fixed inset-0 z-0 transition-all duration-1000 ease-in-out pointer-events-none"
        style={{ background: theme.nebula }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-black/20 to-transparent"></div>
      </div>

      <Navigation scrolled={scrolled} currentLang={currentLang} setLang={setCurrentLang} />

      <main className="relative z-10 pt-44 pb-32">
        <div className="max-w-[1400px] mx-auto px-6 relative">
          <HeroSection 
            activePlatform={activePlatform} 
            setActivePlatform={setActivePlatform} 
            currentLang={currentLang}
          />
          <PricingSection 
            activePlatform={activePlatform} 
            onSelectService={setSelectedService} 
            currentLang={currentLang}
          />
        </div>

        <PerformanceSection t={t} />
        <CommunitySection t={t} />
        <NewsSection />
        <ContactSection t={t} />
      </main>

      <Footer t={t} />
      <OrderModal 
        service={selectedService} 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)}
        t={t}
      />
    </div>
  );
};

export default App;