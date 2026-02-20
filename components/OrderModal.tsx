import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Loader2, Lock, Zap, CheckCircle2, QrCode, Copy, Check, ArrowLeft, Wallet } from 'lucide-react';
import { ServicePackage, Platform, TranslationDictionary } from '../types';
import { LOGOS } from '../constants';

// Crypto Configuration
const CRYPTO_OPTIONS = [
  { 
    id: 'BTC', 
    name: 'Bitcoin', 
    pair: 'BTC/USDT', 
    network: 'Bitcoin', 
    address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968260.png',
    color: 'text-orange-500',
    bg: 'bg-orange-500'
  },
  { 
    id: 'SOL', 
    name: 'Solana', 
    pair: 'SOL/USDT', 
    network: 'Solana', 
    address: 'D8rQy3a5h6g7f8s9d0a1s2d3f4g5h6j7k8l9',
    icon: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    color: 'text-purple-500',
    bg: 'bg-purple-500'
  },
  { 
    id: 'BNB', 
    name: 'BNB Chain', 
    pair: 'BNB/USDT', 
    network: 'BEP20', 
    address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    icon: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400'
  },
  { 
    id: 'USDT', 
    name: 'Tether', 
    pair: 'USDT/TR20', 
    network: 'TRC20', 
    address: 'TXj7rQy3a5h6g7f8s9d0a1s2d3f4g5h6j7k8l9',
    icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500'
  },
];

const THEMES = {
  [Platform.TikTok]: {
    accent: "text-cyan-400",
    bg: "bg-cyan-500",
    border: "border-cyan-500/20",
    gradient: "from-cyan-500/20 to-transparent",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.15)]"
  },
  [Platform.Instagram]: {
    accent: "text-pink-400",
    bg: "bg-pink-500",
    border: "border-pink-500/20",
    gradient: "from-pink-500/20 to-transparent",
    glow: "shadow-[0_0_30px_rgba(236,72,153,0.15)]"
  },
  [Platform.Telegram]: {
    accent: "text-blue-400",
    bg: "bg-blue-500",
    border: "border-blue-500/20",
    gradient: "from-blue-500/20 to-transparent",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]"
  },
};

interface OrderModalProps {
  service: ServicePackage | null;
  isOpen: boolean;
  onClose: () => void;
  t: TranslationDictionary;
}

type Step = 'details' | 'payment' | 'success';

const OrderModal: React.FC<OrderModalProps> = ({ service, isOpen, onClose, t }) => {
  const [step, setStep] = useState<Step>('details');
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState(CRYPTO_OPTIONS[0]);
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep('details');
      setInputValue('');
      setError('');
      setCopied(false);
      setIsProcessing(false);
    }
  }, [isOpen]);

  if (!isOpen || !service) return null;

  const handleEngageBoost = () => {
    if (!inputValue.trim()) {
      setError(t.modal.required);
      return;
    }
    if (inputValue.length < 3) {
      setError(t.modal.tooShort);
      return;
    }
    setError('');
    setStep('payment');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedCrypto.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSent = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
    }, 1500);
  };

  const getPlaceholder = (platform: Platform) => {
    return t.modal.placeholder;
  };

  const theme = THEMES[service.platform];

  // --- RENDER STEPS ---

  const renderDetailsStep = () => (
    <div className="space-y-6 animate-in slide-in-from-right duration-300">
      {/* Product Summary - Glass Card */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 flex items-center justify-between relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className={`text-[10px] font-bold uppercase tracking-widest ${theme.accent} mb-1 flex items-center gap-2`}>
                <span className={`w-1.5 h-1.5 rounded-full ${theme.bg}`}></span>
                {service.platform}
            </div>
            <div className="text-3xl font-display font-bold text-white mb-1 tracking-tight">
                {service.type}
            </div>
            <div className="text-xs text-slate-400 font-medium">
              Qty: {service.amount}
              {service.deliveryTime && <span className="ml-2 border-l border-slate-600 pl-2 text-slate-400">{service.deliveryTime}</span>}
            </div>
          </div>
          <div className="text-right relative z-10">
            <div className="text-3xl font-display font-bold text-white">{service.price === 0 ? 'FREE' : `$${service.price}`}</div>
          </div>
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
          {t.modal.target}
        </label>
        <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-white transition-colors">
              <Zap size={18} />
            </div>
            <input
              type="text"
              autoFocus
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                if(error) setError('');
              }}
              placeholder={getPlaceholder(service.platform)}
              className={`
                w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-4 pl-12 text-white placeholder:text-slate-500
                focus:outline-none focus:border-white/20 focus:bg-slate-800/80 transition-all font-mono text-sm shadow-inner
                ${error ? 'border-red-500/50 focus:border-red-500' : ''}
              `}
            />
        </div>
        {error && <p className="text-red-400 text-xs font-medium flex items-center gap-1.5 pl-1"><X size={12}/> {error}</p>}
      </div>

      {/* Button */}
      <div 
        onClick={handleEngageBoost}
        className="group/btn relative w-full mt-2 cursor-pointer"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03a9f4] to-[#f441a5] rounded blur-[12px] opacity-50 transition-all duration-400 group-hover/btn:blur-[18px] group-hover/btn:opacity-80"></div>
        <div className="relative p-[1px] bg-gradient-to-r from-[#03a9f4] to-[#f441a5] rounded">
            <button 
              className="w-full bg-slate-900 text-white py-4 rounded-[2px] shadow-lg border-none font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors"
            >
              {t.modal.engage} <ArrowRight size={18} />
            </button>
        </div>
      </div>
    </div>
  );

  const renderPaymentStep = () => (
    <div className="animate-in slide-in-from-right duration-300">
      <div className="flex items-center gap-2 mb-6 cursor-pointer text-slate-400 hover:text-white transition-colors w-fit" onClick={() => setStep('details')}>
        <ArrowLeft size={14} />
        <span className="text-[10px] font-bold uppercase tracking-widest">{t.modal.back}</span>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Wallet className="text-slate-400" size={20}/>
          {t.modal.selectPayment}
        </h3>
        
        {/* Currency Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {CRYPTO_OPTIONS.map((crypto) => {
            const isSelected = selectedCrypto.id === crypto.id;
            return (
              <div 
                key={crypto.id}
                onClick={() => setSelectedCrypto(crypto)}
                className={`
                  relative p-3 rounded-xl border cursor-pointer transition-all duration-300 flex items-center gap-3
                  ${isSelected 
                    ? 'bg-white/10 border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.05)]' 
                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                  }
                `}
              >
                <div className="w-8 h-8 rounded-full bg-white p-1 shrink-0">
                  <img src={crypto.icon} alt={crypto.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-400'}`}>{crypto.pair}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wide">{crypto.network}</div>
                </div>
                {isSelected && (
                  <div className="absolute top-2 right-2">
                    <div className={`w-2 h-2 rounded-full ${crypto.bg} shadow-[0_0_8px_currentColor]`}></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* QR and Address Card */}
        <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden">
           <div className={`absolute top-0 inset-x-0 h-1 ${selectedCrypto.bg} opacity-50`}></div>
           
           <div className="bg-white p-2 rounded-xl mb-6 shadow-xl relative group">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${selectedCrypto.address}`} 
                alt="QR Code" 
                className="w-32 h-32 object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg backdrop-blur-sm">
                 <QrCode className="text-white" size={24} />
              </div>
           </div>

           <div className="w-full space-y-2">
              <label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                {t.modal.sendOnly} {selectedCrypto.name} ({selectedCrypto.network})
              </label>
              <div 
                onClick={handleCopy}
                className="group relative bg-slate-900/50 border border-white/10 hover:bg-slate-900 hover:border-white/20 rounded-xl py-3 px-4 flex items-center justify-between cursor-pointer transition-all"
              >
                 <code className="text-xs text-slate-300 font-mono truncate mr-2 select-all">
                   {selectedCrypto.address}
                 </code>
                 <div className={`p-1.5 rounded-lg transition-colors ${copied ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-slate-400 group-hover:text-white'}`}>
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                 </div>
                 
                 {copied && (
                   <div className="absolute -top-8 right-0 bg-green-500 text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg animate-in fade-in slide-in-from-bottom-2">
                     {t.modal.copied}
                   </div>
                 )}
              </div>
           </div>
        </div>
      </div>

      <div 
        onClick={handleSent}
        className="group/btn relative w-full cursor-pointer"
      >
         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded blur-[10px] opacity-30 transition-all duration-400 group-hover/btn:blur-[15px] group-hover/btn:opacity-50"></div>
         <button 
           disabled={isProcessing}
           className="w-full bg-slate-900 text-white py-4 rounded-[2px] shadow-lg border border-emerald-500/30 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors disabled:opacity-50"
         >
            {isProcessing ? (
              <>
                 <Loader2 className="animate-spin" size={18} /> {t.modal.verifying}
              </>
            ) : (
              <>
                 <CheckCircle2 size={18} className="text-emerald-500" /> {t.modal.sentBtn}
              </>
            )}
         </button>
      </div>
    </div>
  );

  const renderSuccessStep = () => (
    <div className="flex flex-col items-center justify-center text-center py-8 animate-in zoom-in-95 duration-500">
       <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 relative">
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping"></div>
          <CheckCircle2 size={40} className="text-emerald-500 relative z-10" />
       </div>
       <h3 className="text-2xl font-display font-bold text-white mb-2">{t.modal.transferDetected}</h3>
       <p className="text-emerald-400 font-bold text-lg mb-6">{t.modal.sentSuccess}</p>
       
       <div className="bg-white/5 border border-white/5 rounded-xl p-4 mb-8 w-full max-w-xs">
          <p className="text-slate-300 text-sm">
             {t.modal.wait}
          </p>
       </div>

       <button 
         onClick={onClose}
         className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
       >
         {t.modal.close}
       </button>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-500"
        onClick={onClose}
      ></div>

      {/* Modal Container - Regular Dark Glass */}
      <div className={`relative w-full max-w-[480px] bg-slate-900/90 border border-white/10 rounded-3xl overflow-hidden animate-in zoom-in-95 duration-300 shadow-2xl backdrop-blur-2xl`}>
        
        {/* Ambient Light */}
        <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${theme.gradient} opacity-30 blur-[60px] pointer-events-none rounded-full`}></div>
        
        <div className="p-8 relative z-10">
          <div className="flex justify-between items-center mb-6">
             <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-inner`}>
                    <img src={LOGOS[service.platform]} className="w-5 h-5" alt="logo"/>
                </div>
                <div>
                  <h2 className="text-lg font-bold tracking-tight text-white leading-none mb-1">
                    {step === 'payment' ? t.modal.cryptoTitle : t.modal.configure}
                  </h2>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{t.modal.secure}</p>
                </div>
             </div>
             <button 
              onClick={onClose} 
              className="text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full border border-white/5"
            >
              <X size={18} />
            </button>
          </div>

          <div className="min-h-[300px]">
            {step === 'details' && renderDetailsStep()}
            {step === 'payment' && renderPaymentStep()}
            {step === 'success' && renderSuccessStep()}
          </div>

          {step !== 'success' && (
            <div className="mt-8 flex items-center justify-center gap-6 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Lock size={12} className="text-slate-500" /> {t.modal.encrypted}</span>
              <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
              <span className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-500" /> {t.modal.verified}</span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default OrderModal;